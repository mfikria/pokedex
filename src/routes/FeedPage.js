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

  static numFetchedLimit = 10;
  static numFetchedLimitFilter = 7;

  countAvailablePokemonByType = (filterOption) => {
    const pokemonData = this.props.pokedex.pokemon.edges;
    if(filterOption === 'All') {
      return pokemonData.length;
    }

    let counter = 0;

    pokemonData.forEach(item => {
      item.node.types.edges.forEach(type => {
        if(type.node.name === filterOption){
          counter++;
        }
      });
    });

    return counter;
  }

  fetchMoreOnFilter = async (filterOption) => {
    let counter = this.countAvailablePokemonByType(filterOption);
    while(counter < FeedPage.numFetchedLimit) {
      const fetched = await this.props.fetchMore();
      counter = this.countAvailablePokemonByType(filterOption);
    }
  }

  handleFilter = (e, { value }) => {
    this.setState({ filterOption: value });
    this.fetchMoreOnFilter(value);
  }

  handleFetchMore = async () => {
    do {

      // Prevent race condition with different query: http://dev.apollodata.com/react/api-queries.html#graphql-query-data-networkStatus
      if(this.props.loading && this.props.networkStatus !== 1) {
        break;
      }

      await this.props.fetchMore();

      // Fetch again when network is error
    } while(this.props.networkStatus === 8);
  }

  render() {
    const { loading, error, pokedex, fetchMore } = this.props;

    //debug
    console.dir(this.props);

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
      const errorHappened = this.props.networkStatus === 8 ? "Error happened from the server please reload" : null;
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
          <Segment
            basic
            loading={loading}
            padded='very'
          >
            {errorHappened}
          </Segment>
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
    data: { loading, error, pokedex, networkStatus, updateQuery, fetchMore }
  }) => ({
    loading,
    error,
    pokedex,
    networkStatus,
    updateQuery,
    fetchMore: () =>
    fetchMore({
      variables: {
        offset: pokedex.pokemon.edges.length ? pokedex.pokemon.edges.length : 10,
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
