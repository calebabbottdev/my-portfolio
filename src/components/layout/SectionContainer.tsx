// MUI
import { Box, Container } from '@mui/joy';

const SectionContainer = ({
  id,
  children,
  backgroundColor,
}: {
  id: string;
  children: React.ReactNode;
  backgroundColor: string;
}) => {
  return (
    <Box
      id={id}
      sx={{
        // minHeight: '100vh',
        bgcolor: backgroundColor ? backgroundColor : 'red',
      }}
    >
      <Container maxWidth='md'>{children}</Container>
    </Box>
  );
};

export default SectionContainer;
