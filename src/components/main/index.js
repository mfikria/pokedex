// React
import React from 'react';

// Routing via React Router
import { Switch, Route } from 'react-router-dom';
import routes from 'src/routes/index';

// <Helmet> component for setting the page title/meta tags
import Helmet from 'react-helmet';

// Components
import Header from 'src/components/Header';

// Styles
import { Container } from 'semantic-ui-react';
import css from 'src/styles/main.scss';

export default () => (
  <div>
    <Helmet
      title="Pokedex"
      meta={[{
        name: 'description',
        content: 'Pokedex Application',
      }]} />
      <Header />
      <Container className={css.container}>
        <Switch>
          {routes.map(
            route => <Route key={`route-${route.name}`} {...route} />
          )}
        </Switch>
      </Container>
    </div>
  );
