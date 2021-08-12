import ResourceTitle from '@/components/ResourceTitle';
import { CreditCard } from '@material-ui/icons';
import React from 'react';
import { Datagrid, DateField, Edit, List, SimpleForm, TextField, TextInput } from 'react-admin';

const cards = {
  list: CardList,
  edit: CardEdit,
  icon: CreditCard,
};

export default cards;

function CardList(props) {
  const filters = [<TextInput label="Search" source="q" alwaysOn />];

  return (
    <List filters={filters} exporter={false} {...props}>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
      </Datagrid>
    </List>
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
