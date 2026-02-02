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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import siteConfig from "@/lib/config";
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, MessageSquare, FileText } from "lucide-react";

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
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${siteConfig.colors.background} 0%, #ffffff 50%, ${siteConfig.colors.background} 100%)`
        }}
      />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: siteConfig.colors.primary }}
      />
      <div 
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: siteConfig.colors.accent }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedContent distance={50} direction="vertical" duration={0.5}>
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: `${siteConfig.colors.primary}10`,
                color: siteConfig.colors.primary
              }}
            >
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{siteConfig.contact.headline}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{siteConfig.contact.subheadline}</p>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" duration={0.5} delay={0.1}>
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Colonne 1: Nom, Email, Téléphone */}
                  <div className="space-y-6">
                    {/* Nom */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-700 font-medium">Votre nom complet</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <Input 
                                placeholder="Jean Dupont" 
                                {...field} 
                                disabled={isLoading}
                                className="pl-12 h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                              />
                            </div>
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
                          <FormLabel className="text-gray-700 font-medium">Votre email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <Input 
                                type="email" 
                                placeholder="jean@example.com" 
                                {...field} 
                                disabled={isLoading}
                                className="pl-12 h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                              />
                            </div>
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
                          <FormLabel className="text-gray-700 font-medium">Numéro de téléphone</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <Input 
                                type="tel" 
                                placeholder="+33 6 12 34 56 78" 
                                {...field} 
                                disabled={isLoading}
                                className="pl-12 h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                              />
                            </div>
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
                          <FormLabel className="text-gray-700 font-medium">Type de problème</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                              <Input 
                                placeholder="Ex: Fuite d'eau, rénovation salle de bain" 
                                {...field} 
                                disabled={isLoading}
                                className="pl-12 h-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300"
                              />
                            </div>
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
                          <FormLabel className="text-gray-700 font-medium">Décrivez votre situation</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                              <Textarea
                                placeholder="Décrivez en détail (localisation, urgence, budget)"
                                {...field}
                                disabled={isLoading}
                                rows={5}
                                className="pl-12 pt-4 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 transition-all duration-300 resize-none"
                              />
                            </div>
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
                    <FormItem className="flex flex-row items-start space-x-4 space-y-0 p-4 rounded-xl bg-gray-50">
                      <FormControl>
                        <Checkbox 
                          checked={field.value} 
                          onCheckedChange={field.onChange} 
                          disabled={isLoading}
                          className="mt-0.5"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-gray-600 font-normal cursor-pointer">
                          {siteConfig.contact.gdprConsent.text}
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Submit Message */}
                {submitMessage && (
                  <div
                    className={`p-5 rounded-2xl flex items-start gap-4 ${
                      submitMessage.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    {submitMessage.type === "success" ? (
                      <CheckCircle className="w-6 h-6 shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-6 h-6 shrink-0 mt-0.5" />
                    )}
                    <p className="whitespace-pre-line">{submitMessage.text}</p>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-premium h-14 text-base font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100 flex items-center justify-center gap-3"
                  style={{ 
                    background: `linear-gradient(135deg, ${siteConfig.colors.primary} 0%, ${siteConfig.colors.primaryDark} 100%)`,
                    boxShadow: `0 8px 25px ${siteConfig.colors.primary}30`
                  }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {siteConfig.contact.submitButtonText}
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
