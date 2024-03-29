import { useState } from 'react';

// MUI
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
} from '@mui/joy';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setOpen(inOpen);
    };

  const menuItems = [
    { label: 'About me', href: '#about-me' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact me', href: '#contact-me' },
  ];

  return (
    <>
      <Container maxWidth='md' sx={{ p: 1 }}>
        <Grid
          container
          direction='row'
          justifyContent='flex-end'
          alignItems='center'
          // spacing={3}
        >
          {menuItems.map((item, index) => (
            <Grid
              key={index}
              sx={{ display: { xs: 'none', sm: 'flex' }, ml: 3 }}
            >
              <Link href={item.href} sx={{ color: 'primary' }}>
                {item.label}
              </Link>
            </Grid>
          ))}
          <Grid
            sx={{
              display: { xs: 'flex', sm: 'none' },
            }}
          >
            <Button
              variant='plain'
              color='primary'
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
        <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <List sx={{ p: 1 }}>
            <Grid
              container
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
              spacing={3}
            >
              <Grid>
                <Button
                  variant='plain'
                  color='primary'
                  onClick={toggleDrawer(false)}
                >
                  <CloseIcon />
                </Button>
              </Grid>
            </Grid>
            {menuItems.map((item, index) => (
              <ListItem key={index}>
                <ListItemButton component={Link} href={item.href}>
                  {item.label}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
