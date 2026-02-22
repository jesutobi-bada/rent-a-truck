import { TypographyH2, TypographyP } from '../atoms/typography/typography';

export const AboutUsContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>Our Mission</TypographyH2>
        <TypographyP>
          At Rent-a-Truck, our mission is to revolutionize logistics in Nigeria by providing a
          seamless, on-demand marketplace that connects businesses and individuals with reliable
          commercial vehicle owners.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>Our Vision</TypographyH2>
        <TypographyP>
          We envision a future where moving goods is as easy as sending a message. By leveraging
          technology, we aim to eliminate the friction in haulage, moving, and specialized
          transport.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>Core Values</TypographyH2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Transparency:</strong> Real-time tracking and upfront pricing.
          </li>
          <li>
            <strong>Reliability:</strong> Vetted drivers and secure cargo handling.
          </li>
          <li>
            <strong>Innovation:</strong> Building the future of logistics tech.
          </li>
          <li>
            <strong>Efficiency:</strong> Optimizing routes and reducing deadhead miles.
          </li>
        </ul>
      </section>
    </div>
  );
};
