import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import ContactForm from './ContactForm';
import { Footer } from './Footer';
import Gallery from './Gallary';
import { Hero } from './Hero';
import Services from './Services';
import { VerticalFeatures } from './VerticalFeatures';
import Vision from './Vision';

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Vision/>
    <VerticalFeatures />
    <Services/>
    <Banner />
    <Gallery/>
    <ContactForm/>
    <Footer />
  </div>
);

export { Base };
