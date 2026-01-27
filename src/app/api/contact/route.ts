import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";
import siteConfig from "@/lib/config";

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5),
  message: z.string().min(10),
  gdprConsent: z.boolean().refine((val) => val === true),
});

// Rate limiting simple (production: utiliser une vraie solution)
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string, limit: number = 5, windowMs: number = 3600000): boolean {
  const now = Date.now();
  const requests = requestLog.get(ip) || [];
  const recentRequests = requests.filter((time) => now - time < windowMs);

  if (recentRequests.length >= limit) {
    return true;
  }

  recentRequests.push(now);
  requestLog.set(ip, recentRequests);
  return false;
}

async function sendEmail(data: z.infer<typeof contactFormSchema>): Promise<void> {
  // Configurer le transporteur
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Email au client
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: data.email,
    subject: "Confirmation de votre demande - Plomberie Martin",
    html: `
      <h2>Merci ${data.name}!</h2>
      <p>Nous avons bien reçu votre demande.</p>
      <p><strong>Sujet:</strong> ${data.subject}</p>
      <p><strong>Message:</strong> ${data.message}</p>
      <p>Notre équipe vous recontactera sous 2 heures.</p>
      <p>Cordialement,<br/>Plomberie Martin</p>
    `,
  });

  // Email au business
  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: process.env.BUSINESS_EMAIL,
    subject: `Nouvelle demande de contact: ${data.subject}`,
    html: `
      <h2>Nouvelle demande de contact</h2>
      <p><strong>Nom:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Téléphone:</strong> ${data.phone}</p>
      <p><strong>Sujet:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br/>")}</p>
      <p><strong>RGPD:</strong> Consentement accepté</p>
    `,
  });
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de demandes. Veuillez réessayer plus tard." },
        { status: 429 }
      );
    }

    // Parse body
    const body = await request.json();

    // Valider
    const data = contactFormSchema.parse(body);

    // Vérifier les variables d'environnement
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASSWORD || !process.env.BUSINESS_EMAIL) {
      console.error("Variables d'environnement manquantes");
      return NextResponse.json(
        { error: "Configuration du serveur incomplète" },
        { status: 500 }
      );
    }

    // Envoyer email
    await sendEmail(data);

    return NextResponse.json(
      { success: true, message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors du traitement du formulaire:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Données invalides", details: error.flatten() },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Erreur serveur. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}
