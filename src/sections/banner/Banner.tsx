// Layout
import SectionContainer from '@components/layout/SectionContainer';

// Theme
import { theme } from '@styles/theme';

const Banner = () => {
  return (
    <SectionContainer
      id='about-me'
      backgroundColor={theme.vars.palette.background.level1}
    >
      Banner
    </SectionContainer>
  );
};

export default Banner;
