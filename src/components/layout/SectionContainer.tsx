// MUI
import { Box, Container } from '@mui/joy';

const SectionContainer = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  return (
    <Box id={id} sx={{ minHeight: '100vh' }}>
      <Container maxWidth='md'>{children}</Container>
    </Box>
  );
};

export default SectionContainer;
