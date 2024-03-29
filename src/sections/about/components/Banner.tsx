// MUI
import { Box, Link, Typography } from '@mui/joy';

const Banner = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <Typography level='title-lg' sx={{ pb: 1 }}>
        Hello, I'm
      </Typography>
      <Typography level='h1' color='primary'>
        Caleb Abbott
      </Typography>
      <Typography level='body-md' sx={{ letterSpacing: 1 }}>
        Web Developer and Automation Engineer
      </Typography>
      <Typography level='body-md' color='neutral' sx={{ pt: 2 }}>
        I specialize in transforming concepts into digital realities through the
        power of code. As a web developer and automation engineer, I craft
        seamless web experiences and efficient automation solutions tailored to
        your needs.
      </Typography>
      <Link
        variant='soft'
        underline='none'
        href='#contact-me'
        level='body-md'
        textColor='white'
        sx={{ mt: 3, px: 2, py: 0.5, borderRadius: 'md', bgcolor: '#007c69' }}
      >
        Let's talk
      </Link>
    </Box>
  );
};

export default Banner;
