import ResourceTitle from '@/components/ResourceTitle';
import { useMediaQuery } from '@material-ui/core';
import { CreditCard } from '@material-ui/icons';
import React from 'react';
import {
  Create,
  Datagrid,
  DateField,
  DateTimeInput,
  Edit,
  List,
  SimpleForm,
  SimpleList,
  TextField,
  TextInput,
} from 'react-admin';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const cards = {
  list: CardList,
  create: CardCreate,
  edit: CardEdit,
  icon: CreditCard,
};

export default cards;

function CardList(props) {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const filters = [<TextInput label="Search" source="q" alwaysOn />];

  return (
    <List filters={filters} exporter={false} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.title}
          tertiaryText={(record) => new Date(record.createdAt).toLocaleDateString()}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="title" />
          <DateField source="createdAt" />
          <DateField source="updatedAt" />
        </Datagrid>
      )}
    </List>
  );
}

function CardCreate(props) {
  const history = useHistory();

  return (
    <Create
      onSuccess={() => {
        alert('Card has been created');
        setTimeout(() => {
          history.push('/cards');
        }, 1000);
      }}
      {...props}>
      <SimpleForm>
        <TextInput source="id" defaultValue={uuidv4()} disabled fullWidth />
        <TextInput source="title" fullWidth />
        <DateTimeInput source="createdAt" fullWidth />
        <DateTimeInput source="updatedAt" fullWidth />
      </SimpleForm>
    </Create>
  );
}

function CardEdit(props) {
  return (
    <Edit title={<CardTitle />} {...props}>
      <SimpleForm>
        <TextInput source="title" fullWidth />
        <DateField source="createdAt" fullWidth />
        <DateField source="updatedAt" fullWidth />
      </SimpleForm>
    </Edit>
  );
}

function CardTitle({ record }) {
  return <ResourceTitle resource="Cards">{record.title}</ResourceTitle>;
}
