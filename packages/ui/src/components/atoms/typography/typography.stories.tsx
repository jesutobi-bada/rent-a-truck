import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyInlineCode,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
} from './typography';

const meta = {
  title: 'Atoms/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const AllVariants: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-8">
      <section>
        <TypographyH1>Heading 1: Taxing Laughter</TypographyH1>
        <TypographyLead>
          The king, seeing how much happier his subjects were, realized the error of his ways.
        </TypographyLead>
      </section>

      <section>
        <TypographyH2>Heading 2: The People of the Kingdom</TypographyH2>
        <TypographyP>
          Most people stayed home and stopped telling jokes. This made the king very sad.
        </TypographyP>
      </section>

      <section>
        <TypographyH3>Heading 3: The Joke Tax</TypographyH3>
        <TypographyP>
          The king decided to tax all jokes told within the kingdom boundaries.
        </TypographyP>
      </section>

      <section>
        <TypographyH4>Heading 4: Jokes Stopped</TypographyH4>
        <TypographyP>Actually, people just stopped telling jokes in public spaces.</TypographyP>
      </section>

      <section>
        <TypographyH5>Heading 5: Local Councils</TypographyH5>
        <TypographyP>Small groups began to meet in secret to share their humor.</TypographyP>
      </section>

      <section>
        <TypographyH6>Heading 6: The End</TypographyH6>
        <TypographyP>Eventually the tax was repealed and everyone was happy again.</TypographyP>
      </section>

      <section>
        <TypographyBlockquote>
          &quotAfter all,&quot he said, &quoteveryone enjoys a good joke, so it&aposs only fair that
          they should pay for the privilege.&quot
        </TypographyBlockquote>
      </section>

      <section className="flex flex-col gap-2">
        <TypographyLarge>This is large text.</TypographyLarge>
        <TypographySmall>This is small text.</TypographySmall>
        <TypographyMuted>This is muted text for secondary information.</TypographyMuted>
        <p>
          You can also use <TypographyInlineCode>inline code</TypographyInlineCode> within
          paragraphs.
        </p>
      </section>
    </div>
  ),
};
