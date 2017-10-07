import React from 'react';
import { Table, Header } from 'semantic-ui-react';

const StatsTabPane = (props) => (
  <Table basic='very' celled collapsing>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>HP</Header>
          </Table.Cell>
          <Table.Cell>
              {props.hp ? props.hp : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Attack</Header>
          </Table.Cell>
          <Table.Cell>
              {props.attack ? props.attack : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Defense</Header>
          </Table.Cell>
          <Table.Cell>
              {props.defense ? props.defense : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>SP. Attack</Header>
          </Table.Cell>
          <Table.Cell>
              {props.sp_atk ? props.sp_atk : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>SP. Defense</Header>
          </Table.Cell>
          <Table.Cell>
              {props.sp_def ? props.sp_def : '--'}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h5'>Speed</Header>
          </Table.Cell>
          <Table.Cell>
            {props.speed ? props.speed : '--'}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
);

export default StatsTabPane;
