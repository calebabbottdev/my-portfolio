// Components
import ServicesHeader from '@sections/services/components/ServicesHeader';
import ServicesCard from '@sections/services/components/ServicesCard';

// Layout
import SectionContainer from '@components/layout/SectionContainer';

const Services = () => {
  return (
    <SectionContainer id='services'>
      <ServicesHeader />
      <ServicesCard />
    </SectionContainer>
  );
};

export default Services;
