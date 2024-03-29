// MUI
import { Box, Grid, Link, Typography } from '@mui/joy';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Socials = () => {
  return (
    <Box sx={{ pt: 8 }}>
      <Grid
        container
        direction='column'
        justifyContent='flex-end'
        alignItems='center'
        spacing={1}
      >
        <Grid>
          <Typography level='title-lg'>Check me out on</Typography>
        </Grid>
        <Grid container>
          <Grid>
            <Link
              href='https://github.com/calebabbottdev'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GitHubIcon sx={{ fontSize: 48 }} />
            </Link>
          </Grid>
          <Grid>
            <Link
              href='https://www.linkedin.com/in/caleb-abbott-961007193/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedInIcon sx={{ fontSize: 48 }} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Socials;
