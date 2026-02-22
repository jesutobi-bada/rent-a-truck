import { TypographyH2, TypographyP } from '../atoms/typography/typography';

export const PressContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>Press Room</TypographyH2>
        <TypographyP>
          Stay up to date with the latest news, announcements, and media assets from Rent-a-Truck.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>In the News</TypographyH2>
        <TypographyP>
          Rent-a-Truck is making headlines for its innovative approach to logistics. For media
          inquiries, please contact our PR team.
        </TypographyP>
      </section>

      <section className="space-y-4">
        <TypographyH2>Media Kit</TypographyH2>
        <TypographyP>
          Download our official brand assets, including logos, high-resolution photos, and
          leadership team biographies.
        </TypographyP>
      </section>
    </div>
  );
};
