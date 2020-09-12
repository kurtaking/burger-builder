import React from "react";
import Aux from '../../hoc/Aux'
import classes from './Layout.css'

const layout = (props) => (
  <Aux>
    <div>
      <p>Toolbar, SideDrawer, Backdrop</p>
    </div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;