import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

// Components
import InfiniteList from 'src/components/InfiniteList';
import DropdownFilter from 'src/components/DropdownFilter';

// Style
import { Dimmer, Loader, Segment, Button } from 'semantic-ui-react';

// Query
import pokemonFeedQuery from 'src/graphql/queries/pokemon_feed.gql';

class FeedPage extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      filterOption: 'All'
    }
  }



  render() {
    const { loading, error, pokedex, fetchMore } = this.props;

    //debug
    // console.dir(this.props);

    let content;

    if(loading && !pokedex) {
      content = (
        <Loader active inline='centered'>Loading</Loader>
      );
    }

    if(error) {
      content = (
        <Segment inverted color='red' secondary>
          Error happened! Please check your console for further information.
        </Segment>
      );
    }

    if(pokedex){
      content = (
        <div>
          <DropdownFilter
            onChange={this.handleFilter.bind(this)}
          />
          <InfiniteList
            data={pokedex.pokemon.edges}
            onBottomVisible={this.handleFetchMore}
            filterOption={this.state.filterOption}
          />
          <Loader
            active={loading}
            inline='centered'>
            Loading
          </Loader>
        </div>
      )
    }
    return (
      <div>
        {content}
      </div>
    );

  }
}

// Apollo Client Configuration
const withData = graphql(pokemonFeedQuery, {
  options: ({ match }) => ({
    variables: {
      offset: 0,
      limit: FeedPage.numFetchedLimit
    },
    fetchPolicy: 'cache-and-network',
  }),
  props: ({
    data: { loading, error, pokedex, updateQuery, fetchMore }
  }) => ({
    loading,
    error,
    pokedex,
    updateQuery,
    fetchMore: () =>
    fetchMore({
      variables: {
        offset: pokedex.pokemon.edges.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }

        const newPokedex = {
          pokemon: {
            edges: [...prev.pokedex.pokemon.edges, ...fetchMoreResult.pokedex.pokemon.edges],
            __typename: 'PokemonConnection'
          },
          __typename: 'Pokedex'
        };

        return Object.assign({}, prev, {
          pokedex: newPokedex,
        });
      },
    }),
  })
});

export default withData(FeedPage);
