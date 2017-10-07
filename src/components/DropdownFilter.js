import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const filterOptions = [
  { key: 'All', value: 'All', text: 'All' },
  { key: 'Normal', value: 'Normal', text: 'Normal' },
  { key: 'Fire', value: 'Fire', text: 'Fire' },
  { key: 'Water', value: 'Water', text: 'Water' },
  { key: 'Electric', value: 'Electric', text: 'Electric' },
  { key: 'Grass', value: 'Grass', text: 'Grass' },
  { key: 'Ice', value: 'Ice', text: 'Ice' },
  { key: 'Fighting', value: 'Fighting', text: 'Fighting' },
  { key: 'Poison', value: 'Poison', text: 'Poison' },
  { key: 'Ground', value: 'Ground', text: 'Ground' },
  { key: 'Flying', value: 'Flying', text: 'Flying' },
  { key: 'Psychic', value: 'Psychic', text: 'Psychic' },
  { key: 'Bug', value: 'Bug', text: 'Bug' },
  { key: 'Rock', value: 'Rock', text: 'Rock' },
  { key: 'Ghost', value: 'Ghost', text: 'Ghost' },
  { key: 'Dragon', value: 'Dragon', text: 'Dragon' },
  { key: 'Dark', value: 'Dark', text: 'Dark' },
  { key: 'Steel', value: 'Steel', text: 'Steel' },
  { key: 'Fairy', value: 'Fairy', text: 'Fairy' }
];

const DropdownFilter = (props) => (
  <Dropdown
    name='filterOption'
    fluid
    placeholder='Filter by Type'
    selectOnNavigation={false}
    onChange={props.onChange}
    search
    selection
    options={filterOptions}
  />
)

export default DropdownFilter;
