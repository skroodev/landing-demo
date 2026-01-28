"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import AnimatedContent from "@/components/AnimatedContent";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import siteConfig from "@/lib/config";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  subject: z.string().min(5, "Le sujet doit contenir au moins 5 caractères"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  gdprConsent: z.boolean().refine((val) => val === true, "Vous devez accepter la politique de confidentialité"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      gdprConsent: false,
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setIsLoading(true);
    setSubmitMessage(null);

    try {
      // Mode démo - afficher un message au lieu d'envoyer
      // À titre démonstratif, on montre juste un message de remerciement
      setSubmitMessage({ 
        type: "success", 
        text: `Merci ${values.name}! 🎉\n\n📝 Ce site est à titre démonstratif. Le formulaire est un exemple fonctionnel et n'envoie pas vraiment de message.` 
      });
      form.reset();
    } catch (error) {
      setSubmitMessage({ type: "error", text: siteConfig.contact.errorMessage });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={50} direction="vertical" duration={0.4}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{siteConfig.contact.headline}</h2>
          <p className="text-center text-gray-600 mb-8">{siteConfig.contact.subheadline}</p>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" duration={0.4} delay={0.1}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Colonne 1: Nom, Email, Téléphone */}
                <div className="space-y-6">
                  {/* Nom */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Votre nom complet</FormLabel>
                        <FormControl>
                          <Input placeholder="Jean Dupont" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Votre email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jean@example.com" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Téléphone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Numéro de téléphone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+33 6 12 34 56 78" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Colonne 2: Type de problème et Message */}
                <div className="space-y-6">
                  {/* Sujet */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type de problème</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Fuite d'eau, rénovation salle de bain" {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Décrivez votre situation</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Décrivez en détail (localisation, urgence, budget)"
                            {...field}
                            disabled={isLoading}
                            rows={5}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

            {/* RGPD Consent */}
            <FormField
              control={form.control}
              name="gdprConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} disabled={isLoading} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>{siteConfig.contact.gdprConsent.text}</FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Message */}
            {submitMessage && (
              <div
                className={`p-4 rounded-lg ${
                  submitMessage.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitMessage.text}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full transition-transform duration-200 hover:scale-105 disabled:hover:scale-100"
              style={{ backgroundColor: siteConfig.colors.primary }}
            >
              {isLoading ? "Envoi en cours..." : siteConfig.contact.submitButtonText}
            </Button>
            </form>
          </Form>
        </AnimatedContent>
      </div>
    </section>
  );
}
