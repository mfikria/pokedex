import React from 'react';
import { Table, Header } from 'semantic-ui-react';

const TrainingTabPane = (props) => (
  <Table basic='very' celled collapsing>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>EV Yield</Header>
          </Table.Cell>
          <Table.Cell>
              {props.ev_yield ? props.ev_yield : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Catch rate</Header>
          </Table.Cell>
          <Table.Cell>
            {props.catch_rate ? props.catch_rate : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Base Happiness</Header>
          </Table.Cell>
          <Table.Cell>
              {props.happiness ? props.happiness : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Base EXP</Header>
          </Table.Cell>
          <Table.Cell>
              {props.exp ? props.exp : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Grow Rate</Header>
          </Table.Cell>
          <Table.Cell>
              {props.growth_rate ? props.growth_rate : '--'}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
);

export default TrainingTabPane;
