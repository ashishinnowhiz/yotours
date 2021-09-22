import React, { Component } from "react";
import NetworkDetector from './HOC/NetworkDetector'
import { connect } from 'react-redux';
import { renderRoutes } from "react-router-config";
import ErrorBoundary from './HOC/ErrorBoundary'
import './assets/main.scss';
class App extends Component {
  render() {
    const { route } = this.props
    return (
      <ErrorBoundary>
        {renderRoutes(route.routes)}
      </ErrorBoundary>
    )
  }
}


const mapStateToProps = ({ auth }) => {
  return {
    isUserLogin: auth.isUserLogin
  }
}



export default {
  component: connect(mapStateToProps, null)((NetworkDetector(App)))
}