import React from 'react';
import { Table, Header } from 'semantic-ui-react';

const BreedingTabPane = (props) => (
  <Table basic='very' celled collapsing>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Egg Groups</Header>
          </Table.Cell>
          <Table.Cell>
            {props.egg_groups.edges.map(
              item => <div key={item.node.name}>{item.node.name}</div>
            )}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Egg Cycles</Header>
          </Table.Cell>
          <Table.Cell>
              {props.egg_cycles ? props.egg_cycles : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Gender</Header>
          </Table.Cell>
          <Table.Cell>
              {props.male_female_ratio ? props.male_female_ratio : '--'}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
);

export default BreedingTabPane;
