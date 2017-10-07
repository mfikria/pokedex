import React, { Component } from 'react';
import { Visibility } from 'semantic-ui-react';

// Components
import PokemonListItem from 'src/components/PokemonListItem';

// Style
import { List } from 'semantic-ui-react';

class InfiniteList extends Component {

  render() {
    let content = [];
    if(this.props.filterOption === 'All') {
      content = this.props.data.map(
        item => <PokemonListItem key={item.node.id} data={item.node}/>
      );
    } else {
      this.props.data.forEach(item => {
        let included = item.node.types.edges.some(
          type => type.node.name === this.props.filterOption
        );

        if(included) {
          content.push(<PokemonListItem key={item.node.id} data={item.node}/>);
        }
      });
    }

    return (
      <Visibility onBottomVisible={this.props.onBottomVisible} once={false}>
        <List selection divided relaxed size='medium'>
          {content}
        </List>
      </Visibility>
    );
  }

}

export default InfiniteList;
