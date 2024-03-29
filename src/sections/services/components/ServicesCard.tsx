// MUI
import { Card, CardContent, Grid, Typography } from '@mui/joy';
import CodeIcon from '@mui/icons-material/Code';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import BugReportIcon from '@mui/icons-material/BugReport';

const ServicesCard = () => {
  const services = [
    {
      title: 'Website Development',
      description:
        'Crafting responsive and user-friendly websites tailored to your needs.',
      icon: <CodeIcon color='primary' />,
    },
    {
      title: 'App Development',
      description:
        'Designing and building custom mobile applications for iOS and Android platforms.',
      icon: <MobileFriendlyIcon color='primary' />,
    },
    {
      title: 'Test Automation',
      description:
        'Automating testing processes to ensure the quality and reliability of your software products.',
      icon: <BugReportIcon color='primary' />,
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <Card key={index} variant='soft' sx={{ mb: 3, p: 3 }}>
          <CardContent>
            <Grid
              container
              direction='row'
              justifyContent='center'
              alignItems='center'
            >
              <Grid xs={2}>{service.icon}</Grid>
              <Grid xs={10} container>
                <Grid>
                  <Typography level='body-lg' fontWeight='lg'>
                    {service.title}
                  </Typography>
                </Grid>
                <Grid>
                  <Typography level='body-sm'>{service.description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ServicesCard;
