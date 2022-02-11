import { Paper } from '@mantine/core';
// import { useStore } from "../Store/StoreProvider";
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import Navbar from 'components/Navbar';
const Background = (props: any) => {
  return (
    <MantineProvider
      //   theme={{
      //     colorScheme: darkMode ? "dark" : "light",
      //   }}
      withGlobalStyles
      withNormalizeCSS
    >
      <NotificationsProvider>
        <Paper
          radius={0}
          style={{ minHeight: '90vh' }}
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme == 'light'
                ? theme.colors.gray[1]
                : theme.colors.dark[4],
          })}
        >
          <Navbar />
          {props.children}
        </Paper>
      </NotificationsProvider>
    </MantineProvider>
  );
};

export default Background;
