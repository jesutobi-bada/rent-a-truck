import { TypographyH2, TypographyP } from '../atoms/typography/typography';

export const PricingContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>Transparent Pricing</TypographyH2>
        <TypographyP>
          We believe in fair and transparent pricing. No hidden fees, no surprises. Our rates are
          calculated based on vehicle type, distance, and duration.
        </TypographyP>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            name: 'Lite',
            price: 'From ₦5,000',
            description: 'Perfect for small household items and local moves.',
            features: ['Mini Vans', '1-5km distance', 'Standard support'],
          },
          {
            name: 'Standard',
            price: 'From ₦15,000',
            description: 'Ideal for small offices and medium household moves.',
            features: ['Trucks (3-5 tons)', 'Up to 20km distance', 'Priority support'],
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Specialized solutions for large-scale logistics.',
            features: ['Trailers & Flatbeds', 'Interstate moves', 'Dedicated fleet manager'],
          },
        ].map((plan) => (
          <div
            key={plan.name}
            className="border-border transition-hover space-y-4 rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md"
          >
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <div className="text-primary text-3xl font-black">{plan.price}</div>
            <p className="text-muted-foreground text-sm">{plan.description}</p>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="bg-primary size-1.5 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="space-y-4">
        <TypographyH2>Dynamic Rating</TypographyH2>
        <TypographyP>
          For long-distance haulage and complex logistics, we provide real-time dynamic rating to
          ensure you get the best possible price based on current market demand and vehicle
          availability.
        </TypographyP>
      </section>
    </div>
  );
};
