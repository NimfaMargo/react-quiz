import React, { useState } from 'react';
import classes from './Layout.module.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';

function Layout(props) {
  const [open, setOpen] = useState(false);

  const menuCloseHandle = () => setOpen(false);
  const toggleMenuHandler = () => setOpen(!open);

  return (
    <div className={classes.Layout}>
      <Drawer isOpen={open} onClose={menuCloseHandle} />
      <MenuToggle onToggle={toggleMenuHandler} isOpen={open} />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
