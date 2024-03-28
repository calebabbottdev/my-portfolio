// Layout
import SectionContainer from '@components/layout/SectionContainer';

// Theme
import { theme } from '@styles/theme';

const Contact = () => {
  return (
    <SectionContainer
      id='contact-me'
      backgroundColor={theme.vars.palette.background.level1}
    >
      Contact
    </SectionContainer>
  );
};

export default Contact;
