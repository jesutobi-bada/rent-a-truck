import { TypographyH2, TypographyP } from '../atoms/typography/typography';

export const HelpCenterContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>How can we help?</TypographyH2>
        <TypographyP>
          Welcome to the Rent-a-Truck Help Center. We&apos;re here to ensure your moving and
          logistics experience is as smooth as possible.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>Support Resources</TypographyH2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Booking Guide:</strong> Step-by-step instructions on how to rent your first
            truck.
          </li>
          <li>
            <strong>Driver Handbook:</strong> Everything you need to know about driving with us.
          </li>
          <li>
            <strong>Payments & Invoicing:</strong> Understanding our pricing and payment cycles.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <TypographyH2>Contact Us</TypographyH2>
        <TypographyP>
          Can&apos;t find what you&apos;re looking for? Our support team is available 24/7 to assist
          you with any questions or issues.
        </TypographyP>
      </section>
    </div>
  );
};
