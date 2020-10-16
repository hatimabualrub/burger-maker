import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    // sideDrawerClosedHandler = () => {
    //     this.setState({showSideDrawer: false})
    // }

    sideDrawerToggelHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}})
    }
    
    render() {
        return(
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated} 
                    drawerToggleClicked={this.sideDrawerToggelHandler}
                />
                <SideDrawer 
                    isAuth={this.props.isAuthenticated} 
                    open={this.state.showSideDrawer} 
                    clicked={this.sideDrawerToggelHandler} 
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};


export default connect(mapStateToProps)(Layout);