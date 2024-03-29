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
    <Box id={id}>
      <Container maxWidth='sm' sx={{ minHeight: '100vh' }}>
        {children}
      </Container>
    </Box>
  );
};

export default SectionContainer;
