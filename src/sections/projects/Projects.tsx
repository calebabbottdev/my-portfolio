// Layout
import SectionContainer from '@components/layout/SectionContainer';

// Theme
import { theme } from '@styles/theme';

const Projects = () => {
  return (
    <SectionContainer
      id='projects'
      backgroundColor={theme.vars.palette.background.level3}
    >
      Projects
    </SectionContainer>
  );
};

export default Projects;
