import ResourceTitle from '@/components/ResourceTitle';
import { Avatar, useMediaQuery } from '@material-ui/core';
import { PeopleAlt } from '@material-ui/icons';
import React from 'react';
import { Datagrid, DateField, Edit, EmailField, List, SimpleForm, SimpleList, TextField, TextInput } from 'react-admin';

const users = {
  list: UserList,
  edit: UserEdit,
  icon: PeopleAlt,
};

export default users;

function UserList(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const filters = [<TextInput label="Search" source="q" alwaysOn />];

  return (
    <List filters={filters} exporter={false} {...props}>
      {isSmall ? (
        <SimpleList
          leftAvatar={(record) => <Avatar src={record.image} />}
          primaryText={(record) => record.firstName}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.role}
        />
      ) : (
        <Datagrid rowClick="edit">
          <AvatarField />
          <TextField source="firstName" />
          <TextField source="lastName" />
          <EmailField source="email" />
          <TextField source="role" />
          <DateField source="createdAt" />
        </Datagrid>
      )}
    </List>
  );
}

function UserEdit(props) {
  return (
    <Edit title={<UserTitle />} {...props}>
      <SimpleForm>
        <TextInput source="firstName" fullWidth />
        <TextInput source="lastName" fullWidth />
        <TextInput source="image" fullWidth />
        <TextInput source="email" fullWidth />
        <TextInput source="password" fullWidth />
        <DateField source="createdAt" fullWidth />
      </SimpleForm>
    </Edit>
  );
}

function UserTitle({ record }) {
  return (
    <ResourceTitle resource="Cards">
      {record.firstName} {record.lastName}
    </ResourceTitle>
  );
}

function AvatarField({ record }) {
  return (
    <div className="w-8 h-8 overflow-hidden rounded-full">
      {record.image ? (
        <img src={record.image} className="object-cover" />
      ) : (
        <img src="https://dummyimage.com/32x32/0ea4e9/fff" className="object-cover" />
      )}
    </div>
  );
}
