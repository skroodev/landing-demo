import siteConfig from "@/lib/config";

export const metadata = {
  title: "Politique de confidentialité - Plomberie Martin",
};

export default function Privacy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>

        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Responsable du traitement</h2>
            <p>
              {siteConfig.footer.companyName}
              <br />
              {siteConfig.footer.address}
              <br />
              {siteConfig.footer.phone}
              <br />
              {siteConfig.footer.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Données collectées</h2>
            <p>
              Notre formulaire de contact collecte uniquement les informations strictement nécessaires:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nom complet</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Type de problème</li>
              <li>Message de contact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Utilisation des données</h2>
            <p>
              Vos données sont utilisées uniquement pour:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Traiter votre demande de contact</li>
              <li>Vous envoyer une confirmation par email</li>
              <li>Vous recontacter avec un devis ou des informations</li>
            </ul>
            <p className="mt-4">
              Aucune donnée n'est stockée en base de données au-delà de la durée de traitement de votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Conservation des données</h2>
            <p>
              Vos données sont supprimées automatiquement 30 jours après le traitement de votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Vos droits</h2>
            <p>
              Conformément au RGPD, vous avez le droit de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accéder à vos données</li>
              <li>Rectifier vos données inexactes</li>
              <li>Demander la suppression de vos données</li>
              <li>Vous opposer au traitement</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à {siteConfig.footer.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non autorisé.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t">
            <p className="text-sm text-gray-600">
              Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
