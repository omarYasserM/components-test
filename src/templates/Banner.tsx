import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Check our Products"
      subtitle="Request a catalog or sample today."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <a>
            <Button>Contact Us</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
