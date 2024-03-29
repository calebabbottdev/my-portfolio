// Components
import Banner from '@sections/about/components/Banner';
import Socials from '@sections/about/components/Socials';

// Layout
import SectionContainer from '@components/layout/SectionContainer';

const About = () => {
  return (
    <SectionContainer id='about-me'>
      <Banner />
      <Socials />
    </SectionContainer>
  );
};

export default About;
