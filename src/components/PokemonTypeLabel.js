import React from 'react';
import { Label } from 'semantic-ui-react';

export default (props) => {
  let colors = new Map();
  colors.set('Normal', 'grey');
  colors.set('Fire', 'red');
  colors.set('Water', 'blue');
  colors.set('Electric', 'yellow');
  colors.set('Grass', 'green');
  colors.set('Ice', 'teal');
  colors.set('Fighting', 'red');
  colors.set('Poison', 'purple');
  colors.set('Ground', 'brown');
  colors.set('Flying', 'violet');
  colors.set('Psychic', 'pink');
  colors.set('Bug', 'teal');
  colors.set('Rock', 'orange');
  colors.set('Ghost', 'grey');
  colors.set('Dragon', 'red');
  colors.set('Dark', 'black');
  colors.set('Steel', 'grey');
  colors.set('Fairy', 'pink');

  return <Label color={colors.get(props.label)} horizontal>{props.label}</Label>;
};
