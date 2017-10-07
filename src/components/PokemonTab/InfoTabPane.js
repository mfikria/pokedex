import React from 'react';
import { Table, Header } from 'semantic-ui-react';

// Components
import PokemonTypeLabel from 'src/components/PokemonTypeLabel';

const InfoTabPane = (props) => (
  <Table basic='very' celled collapsing>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>National No</Header>
          </Table.Cell>
          <Table.Cell>
              {props.national_id ? props.national_id : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Type</Header>
          </Table.Cell>
          <Table.Cell>
              {props.types.edges.map(
                item => <PokemonTypeLabel key={item.node.name} label={item.node.name}/>
              )}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Species</Header>
          </Table.Cell>
          <Table.Cell>
              {props.species ? props.species : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Height</Header>
          </Table.Cell>
          <Table.Cell>
              {props.height ? props.height : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Weight</Header>
          </Table.Cell>
          <Table.Cell>
              {props.weight ? props.weight : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Abilities</Header>
          </Table.Cell>
          <Table.Cell>
            {props.abilities.edges.map(
              item => <div key={item.node.name}>{item.node.name}</div>
            )}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
);

export default InfoTabPane;
