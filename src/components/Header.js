import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
// Routing via React Router
import { Link, Route, Switch } from 'react-router-dom';

// Components
import DropdownFilter from 'src/components/DropdownFilter';

// Styles
import css from 'src/styles/header.scss';

const Header = () => (
  <Menu
    borderless
    fixed='top'
    className={css.fixedMenuStyle}
    >
      <Container text>
        <Link to='/'>
        <Menu.Item header>
          <Icon name='product hunt' size='large' />
          Pokedex
        </Menu.Item>
      </Link>
    </Container>
  </Menu>
);

export default Header;
