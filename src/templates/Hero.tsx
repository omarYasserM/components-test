import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color=' bg-[url("/assets/images/plasticBags.png")]  bg-cover bg-no-repeat  text-white relative overflow-hidden'>

    <Section yPadding="py-6 z-10">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Contact us</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32 z-10">
      <HeroOneButton
        title={
          <>
            {'Transforming the Future of Plastics: Discover Our Innovation and Expertise\n'}
          </>
        }
        description="Experience the Future of Plastics with Our Innovative Solutions. Trust Our Expertise to Meet Your Unique Needs."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Contact Us</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
