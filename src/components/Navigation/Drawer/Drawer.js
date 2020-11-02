import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './Drawer.module.css';
import BackDrop from '../../UI/BackDrop/BackDrop';

const links = [
  {
    id: 1, to: '/', label: 'Список', exact: true,
  },
  {
    id: 2, to: '/auth', label: 'Авторизация', exact: false,
  },
  {
    id: 3, to: '/quiz-creator', label: 'Создать  тест', exact: false,
  },
];

const Drawer = ({ isOpen, onClose }) => (
	<>
		<nav className={cn({ [classes.Drawer]: true, [classes.close]: !isOpen })}>
			<ul>
				{links.map((link) => (
					<li key={link.id}>
						<NavLink
							to={link.to}
							exact={link.exact}
							activeClassName={classes.active}
							onClick={() => onClose()}
						>
							{link.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
		{isOpen && <BackDrop onClick={() => onClose()} />}
	</>
);

export default Drawer;
