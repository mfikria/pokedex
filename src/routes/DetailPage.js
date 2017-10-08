import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

// Helpers
import { imageUrl } from 'src/helpers/index';

// Components
import PokemonTypeLabel from 'src/components/PokemonTypeLabel';
import PokemonTab from 'src/components/PokemonTab/index';

// Style
import { List, Dimmer, Loader, Segment, Grid, Image, Card, Icon, Tab } from 'semantic-ui-react';

// Query
import pokemonDetailQuery from 'src/graphql/queries/pokemon_detail.gql';

class DetailPage extends React.PureComponent {

  render() {
    const { loading, error, pokemon } = this.props.data;

    // debug
    // console.dir(this.props.data);

    let content;

    if(loading) {
      content = <Loader active inline='centered'>Loading</Loader>;
    }

    if(error) {
      content = (
        <Segment inverted color='red' secondary>
          Error happened! Please check your console for further information.
        </Segment>
      );
    }

    if(pokemon){
      content = (
        <Card fluid>
          <Image src={imageUrl(pokemon.id)} size='medium' centered wrapped />
          <Card.Content>
            <Card.Header>{pokemon.name}</Card.Header>
            <Card.Description>{pokemon.descriptions.edges[0].node.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <PokemonTab pokemon={pokemon}/>
          </Card.Content>
        </Card>
      );
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

const withData = graphql(pokemonDetailQuery, {
  options: ({ match }) => ({
    variables: {id: match.params.id}
  })
});

export default withData(DetailPage);
