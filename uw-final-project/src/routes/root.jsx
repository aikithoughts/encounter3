import { useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet, NavLink } from 'react-router-dom';

import CHIMERAS_BANE from '../data/chimeras-bane-players.json';

const NavItem = ({ to, children }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive ? 'active' : isPending ? 'pending' : ''
      }
    >
      {children}
    </NavLink>
  </li>
);

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Root = () => {
  const [dmScreenData, setDmScreenData] = useState({
    combatants: CHIMERAS_BANE,
    spell: {
      name: '',
      data: '',
    },
    monster: {
      name: '',
      data: '',
    },
  });

  return (
    <>
      <div id="sidebar">
        <h1>Dave's DM Screen</h1>
        <nav>
          <ul>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/encountertracker">Encounter tracker</NavItem>
            <NavItem to="/spellbook">Spell book</NavItem>
            <NavItem to="/monstermanual">Monster manual</NavItem>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet context={[dmScreenData, setDmScreenData]} />
      </div>
    </>
  );
};

export default Root;
