import siteConfig from "@/lib/config";

export const metadata = {
  title: "Mentions légales - Plomberie Martin",
};

export default function Legal() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Identification du prestataire</h2>
            <p>
              <strong>{siteConfig.footer.companyName}</strong>
              <br />
              Adresse: {siteConfig.footer.address}
              <br />
              Téléphone: {siteConfig.footer.phone}
              <br />
              Email: {siteConfig.footer.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Responsable du site</h2>
            <p>
              Le site web est édité par {siteConfig.footer.companyName}.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Droits d'auteur</h2>
            <p>
              {siteConfig.footer.copyright}
              <br />
              Tous les éléments de ce site (textes, images, logos) sont protégés par la loi sur les droits d'auteur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Limitation de responsabilité</h2>
            <p>
              Le site est fourni "tel quel". {siteConfig.footer.companyName} ne garantit pas l'exactitude, l'exhaustivité ou l'actualité des informations publiées.
            </p>
            <p className="mt-4">
              {siteConfig.footer.companyName} ne peut pas être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites externes. {siteConfig.footer.companyName} n'est pas responsable du contenu de ces sites externes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Conformité légale</h2>
            <p>
              {siteConfig.footer.companyName} est titulaire des certifications suivantes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {siteConfig.footer.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
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
