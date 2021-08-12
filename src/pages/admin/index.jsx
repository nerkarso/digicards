import Dashboard from '@/pages/admin/dashboard';
import Signin from '@/pages/admin/signin';
import users from '@/pages/admin/users';
import { blue } from '@material-ui/core/colors';
import simpleRestProvider from 'ra-data-simple-rest';
import React from 'react';
import { Admin as ReactAdmin } from 'react-admin';

export default function Admin() {
  const dataProvider = simpleRestProvider(import.meta.env.VITE_API_BASE_URL || '/api');
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

  return (
    <ReactAdmin
      title=""
      theme={theme}
      dashboard={Dashboard}
      loginPage={Signin}
      dataProvider={dataProvider}
      disableTelemetry>
      <Resource name="users" {...users} />
    </ReactAdmin>
  );
}
