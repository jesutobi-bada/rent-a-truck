import { TypographyH2, TypographyP } from '../atoms/typography/typography';

export const CareersContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>Join the Revolution</TypographyH2>
        <TypographyP>
          We are building the logistics operating system of Nigeria. If you&apos;re passionate about
          technology, operations, or customer experience, we want to hear from you.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>Why Rent-a-Truck?</TypographyH2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Impact:</strong> Solve real-world challenges in the logistics sector.
          </li>
          <li>
            <strong>Growth:</strong> Work with a world-class team in a fast-paced environment.
          </li>
          <li>
            <strong>Culture:</strong> We value ownership, speed, and customer obsession.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <TypographyH2>Open Roles</TypographyH2>
        <TypographyP>
          We&apos;re currently looking for talented individuals across engineering, operations, and
          sales. Check back soon for specific job listings or reach out to us directly.
        </TypographyP>
      </section>
    </div>
  );
};
