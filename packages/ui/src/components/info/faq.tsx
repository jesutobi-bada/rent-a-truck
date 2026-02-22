import {
  TypographyH2,
  TypographyP,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@rent-a-truck/ui';

const faqs = [
  {
    question: 'How do I book a truck?',
    answer:
      'Simply download the app, enter your pickup and delivery locations, select a vehicle type, and confirm your booking.',
  },
  {
    question: 'Are the drivers vetted?',
    answer:
      'Yes, all drivers undergo a rigorous background check and vehicle inspection before joining our platform.',
  },
  {
    question: 'What are the pricing plans?',
    answer:
      'We offer transparent, upfront pricing based on the distance, vehicle type, and complexity of the job.',
  },
];

export const FAQContent = () => {
  return (
    <div className="space-y-8 py-10">
      <section className="space-y-4">
        <TypographyH2>Frequently Asked Questions</TypographyH2>
        <TypographyP>
          Find quick answers to the most common questions about using Rent-a-Truck.
        </TypographyP>
      </section>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-bold">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <TypographyP>{faq.answer}</TypographyP>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
