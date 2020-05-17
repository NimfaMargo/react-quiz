import React, { Component } from "react";
import classes from "./Drawer.module.css";
import { NavLink } from 'react-router-dom';
import BackDrop from '../../UI/BackDrop/BackDrop';

const links = [
    { to: '/', label: 'Список', exact: true },
    { to: '/auth', label: 'Авторизация', exact: false },
    { to: '/quiz-creator', label: 'Создать  тест', exact: false }
];

class Drawer extends Component {
    clickHandler = () => this.props.onClose();

    rendeLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            );
        })
    }

    render() {
        const cls = [classes.Drawer];

        if(!this.props.isOpen) {
            cls.push(classes.close)
        }
        
        return(
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.rendeLinks()}
                    </ul>
                </nav>
                {this.props.isOpen && <BackDrop onClick={this.props.onClose} />}
            </>
        );
    }
  
};

export default Drawer;
