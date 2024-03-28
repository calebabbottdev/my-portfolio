// Layout
import Navbar from '@components/layout/Navbar';

// Sections
import Services from '@sections/services/Services';
import Banner from '@sections/banner/Banner';
import Projects from '@sections/projects/Projects';
import Contact from '@sections/contact/Contact';

type AppProps = {
  children?: React.ReactNode;
};
const App: React.FC<AppProps> = ({ children, ...props }) => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
