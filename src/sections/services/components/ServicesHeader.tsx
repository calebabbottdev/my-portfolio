// MUI
import { Box, Typography } from '@mui/joy';

const ServicesHeader = () => {
  return (
    <Box>
      <Typography level='title-lg' color='primary'>
        My services
      </Typography>
      <Typography level='h3' sx={{ mb: 3 }}>
        Here's what I can do for you
      </Typography>
    </Box>
  );
};

export default ServicesHeader;
