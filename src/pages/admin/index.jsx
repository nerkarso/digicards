import db from '@/db';
import cards from '@/pages/admin/cards';
import Dashboard from '@/pages/admin/dashboard';
import Profile from '@/pages/admin/profile';
import Signin from '@/pages/admin/signin';
import users from '@/pages/admin/users';
import { blue } from '@material-ui/core/colors';
import { Person } from '@material-ui/icons';
import localStorageDataProvider from 'ra-data-local-storage';
// import simpleRestProvider from 'ra-data-simple-rest';
import React, { forwardRef } from 'react';
import { Admin as ReactAdmin, AppBar, Layout, MenuItemLink, Resource, UserMenu } from 'react-admin';
import { Route } from 'react-router-dom';

export default function Admin() {
  // const dataProvider = simpleRestProvider(import.meta.env.VITE_API_BASE_URL || '/api');
  const dataProvider = localStorageDataProvider({ defaultData: db });
  const theme = {
    palette: {
      primary: blue,
      secondary: blue,
    },
    typography: {
      fontFamily: 'inherit',
    },
    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: 'none',
          border: '1px solid #e5e7eb',
        },
      },
    },
  };
  const customRoutes = [<Route exact path="/profile" render={() => <Profile />} />];

  return (
    <ReactAdmin
      title=""
      theme={theme}
      layout={CustomLayout}
      dashboard={Dashboard}
      loginPage={Signin}
      dataProvider={dataProvider}
      customRoutes={customRoutes}
      disableTelemetry>
      <Resource name="cards" {...cards} />
      <Resource name="users" {...users} />
    </ReactAdmin>
  );
}

function CustomLayout(props) {
  return <Layout {...props} appBar={CustomAppBar} />;
}

function CustomAppBar(props) {
  return <AppBar {...props} userMenu={<CustomUserMenu />} />;
}

const ProfileMenu = forwardRef(({ onClick }, ref) => (
  <MenuItemLink ref={ref} to="/profile" primaryText="Profile" leftIcon={<Person />} onClick={onClick} />
));

function CustomUserMenu(props) {
  return (
    <UserMenu {...props}>
      <ProfileMenu />
    </UserMenu>
  );
}
