// MUI
import { Grid } from '@mui/joy';

const Navbar = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Grid>About me</Grid>
      <Grid>Services</Grid>
      <Grid>Projects</Grid>
      <Grid>Contact</Grid>
    </Grid>
  );
};

export default Navbar;
