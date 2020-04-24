import React, { Component } from "react";
import classes from "./Drawer.module.css";
import BackDrop from '../../UI/BackDrop/BackDrop';

const links = [1, 2, 3]
class Drawer extends Component {
    rendeLinks() {
        return links.map((link, index) => {
            return (
              <li key={index}>
                <a href="">Link {link}</a>
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
