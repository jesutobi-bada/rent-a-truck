import { TypographyH2, TypographyP } from '../atoms/typography/typography';

export const SafetyContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>Safety First</TypographyH2>
        <TypographyP>
          Your peace of mind is our top priority. We implement world-class safety standards to
          ensure that every trip is secure, transparent, and reliable.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>Vetted Drivers</TypographyH2>
        <TypographyP>
          Every driver on our platform undergoes a rigorous screening process, including identity
          verification, background checks, and vehicle inspections.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>Secure Cargo</TypographyH2>
        <TypographyP>
          We offer comprehensive cargo protection and real-time GPS tracking so you can monitor your
          shipment every step of the way.
        </TypographyP>
      </section>
    </div>
  );
};
