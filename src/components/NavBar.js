import React, { useState } from 'react';
import { Router, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styled from 'styled-components';

import Home from './Home';
import About from './About';
import Stock from './Stock';
import Settings from './Settings';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0% 1% 0% 1%;
  background-color: rgba(0, 0, 0, 0.85);;
  color: white;
`;
const Buttons = styled(Button)`
  color: white;
`;

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
});

function NavBar() {
    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleNav = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleNav(side, false)}
          onKeyDown={toggleNav(side, false)}
        >
          <List>
            {['Home', 'About', 'Stock'].map((text, index) => (
              <ListItem button key={text} component={Link} to={`/${text}`}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Settings'].map((text, index) => (
              <ListItem button key={text} component={Link} to={`/${text}`}>
                  <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      );

    return (
      <>
        <div>
            <Header>
                <h3>QuickStocks</h3>
                <Buttons onClick={toggleNav('right', true)}>Menu</Buttons>
            </Header>
            <Drawer 
                anchor="right" 
                open={state.right} 
                onClose={toggleNav('right', false)}
            >
                {sideList('right')}
           </Drawer>

          <Route exact path='/' component={Home} />
          <Route exact path='/Home' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Stock' component={Stock} />
          <Route exact path='/Settings' component={Settings} />
        </div>
      </>
    );
};

export default NavBar;