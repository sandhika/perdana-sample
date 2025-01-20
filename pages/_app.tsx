import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { theme } from '../theme';


import { MantineProvider,AppShell, Burger ,Image} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import NextImage from 'next/image';
import logo from '../public/bprnew.png';
import { NavbarSegmented } from '@/components/Navbar/NavbarSegmented';
import { Notifications } from '@mantine/notifications';

export default function App({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Head>
        <title>BANK PERDANA - SAMPLE</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      
      <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened,desktop: false },
      }}
      padding="md"
    >
      <AppShell.Header style={{backgroundColor:"#fccf42"}}>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div><Image component={NextImage} src={logo} alt="Logo Bank Perdana" h={60} w="auto" /></div>
      </AppShell.Header>

      <AppShell.Navbar p="md" >
        <NavbarSegmented />
      </AppShell.Navbar>

      <AppShell.Main> 
        <Component {...pageProps} />
      </AppShell.Main>
      </AppShell>

    </MantineProvider>
  );
}
