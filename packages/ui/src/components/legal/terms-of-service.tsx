import { TypographyH2, TypographyP } from '../atoms/typography/typography';

export const TermsOfServiceContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>1. Agreement to Terms</TypographyH2>
        <TypographyP>
          By using our Services, you agree to be bound by these Terms. If you do not agree to be
          bound by these Terms, do not use the Services.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>2. Changes to Terms or Services</TypographyH2>
        <TypographyP>
          We may modify the Terms at any time, in our sole discretion. If we do so, we will let you
          know either by posting the modified Terms on the Site or through other communications.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>3. Who May Use the Services</TypographyH2>
        <TypographyP>
          You may use the Services only if you are 18 years or older and capable of forming a
          binding contract with Rent-a-Truck and are not barred from using the Services under
          applicable law.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>4. Logistics and Transportation</TypographyH2>
        <TypographyP>
          Rent-a-Truck is a marketplace platform connecting shippers with carriers. We do not
          provide transportation services ourselves. The responsibility for the transportation lies
          with the carrier.
        </TypographyP>
      </section>
    </div>
  );
};
