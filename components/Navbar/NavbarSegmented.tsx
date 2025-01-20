import { useState } from 'react';
import {

  IconShoppingCart,
  IconSwitchHorizontal,
  IconUsers,
  IconLogout,
  IconSettingsDollar,
  IconReceipt2,

} from '@tabler/icons-react';
import {  Text } from '@mantine/core';
import classes from './NavbarSegmented.module.css';

const tabs = [
    { link: '', label: 'Customers', icon: IconUsers },
    { link: '', label: 'Accounts', icon: IconSettingsDollar },
    { link: '', label: 'Transactions', icon: IconShoppingCart },
    { link: '', label: 'Reports', icon: IconReceipt2 },
  ];

export function NavbarSegmented() {
  const [active, setActive] = useState('Billing');

  const links = tabs.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
          admin@bankperdana.dev
        </Text>

        {/* <SegmentedControl
          value={section}
          onChange={(value: any) => setSection(value)}
          transitionTimingFunction="ease"
          fullWidth
          data={[
            { label: 'Account', value: 'account' },
            { label: 'System', value: 'general' },
          ]}
        /> */}
      </div>

      <div className={classes.navbarMain}>{links}</div>

      <div className={classes.footer}>
        

        <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}