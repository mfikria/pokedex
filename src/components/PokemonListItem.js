import React from 'react';
import { Link } from 'react-router-dom';

// Components
import PokemonTypeLabel from 'src/components/PokemonTypeLabel';

// Styles
import { List, Image } from 'semantic-ui-react';
import { list_item } from 'src/styles/main.scss';

// Helpers
import { imageUrl } from 'src/helpers/index';

const PokemonListItem = (props) => {
  const labels = props.data.types.edges.map(
    item => <PokemonTypeLabel key={item.node.name} label={item.node.name}/>
  );

  return (
    <List.Item>
      <Link to={`/pokemon/${props.data.id}`} className={list_item}>
      <Image src={imageUrl(props.data.id)} size='tiny' ui={false}/>
      <List.Content>
        <List.Header as='h3'>{props.data.name}</List.Header>
        <List.Description as='span'>{labels}</List.Description>
      </List.Content>
    </Link>
  </List.Item>
);
}

export default PokemonListItem;
