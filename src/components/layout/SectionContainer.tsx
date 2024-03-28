// MUI
import { Container } from '@mui/joy';

type SectionContainerProps = {
  children: React.ReactNode;
};

const SectionContainer: React.FC<SectionContainerProps> = (props) => {
  return <Container>{props.children}</Container>;
};

export default SectionContainer;
