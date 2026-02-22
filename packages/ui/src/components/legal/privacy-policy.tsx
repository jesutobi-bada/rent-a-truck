import { TypographyH2, TypographyP } from '../atoms/typography/typography';

export const PrivacyPolicyContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>1. Introduction</TypographyH2>
        <TypographyP>
          Welcome to Rent-a-Truck. We are committed to protecting your personal information and your
          right to privacy. If you have any questions or concerns about our policy, or our practices
          with regards to your personal information, please contact us.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>2. Information We Collect</TypographyH2>
        <TypographyP>
          We collect personal information that you voluntarily provide to us when registering at the
          App, expressing an interest in obtaining information about us or our products and
          services, when participating in activities on the App or otherwise contacting us.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>3. How We Use Your Information</TypographyH2>
        <TypographyP>
          We use personal information collected via our App for a variety of business purposes
          described below. We process your personal information for these purposes in reliance on
          our legitimate business interests, in order to enter into or perform a contract with you,
          with your consent, and/or for compliance with our legal obligations.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>4. GDPR Compliance</TypographyH2>
        <TypographyP>
          For users in the European Union, we adhere to the Regulation (EU) 2016/679 of the European
          Parliament and of the Council of 27 April 2016 on the protection of natural persons with
          regard to the processing of personal data and on the free movement of such data (General
          Data Protection Regulation).
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>5. Data Handling</TypographyH2>
        <TypographyP>
          Your data is stored securely and only processed for the purposes of providing our
          logistics services. We do not sell your personal data to third parties.
        </TypographyP>
      </section>
    </div>
  );
};
