// Layout
import Navbar from '@components/layout/Navbar';

// MUI
import { Switch, useColorScheme } from '@mui/joy';

// Sections
import Services from '@sections/services/Services';
import Banner from '@sections/banner/Banner';
import Projects from '@sections/projects/Projects';
import Contact from '@sections/contact/Contact';
import { DarkMode, LightMode } from '@mui/icons-material';

const App = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Projects />
      <Contact />
      <Switch
        size='lg'
        onChange={() => {
          setMode(mode === 'dark' ? 'light' : 'dark');
        }}
        slotProps={{
          thumb:
            mode === 'light'
              ? { children: <LightMode /> }
              : { children: <DarkMode /> },
        }}
        sx={{
          '--Switch-thumbSize': '16px',
        }}
      />
    </>
  );
};

export default App;
