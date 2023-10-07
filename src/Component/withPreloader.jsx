import React, { Component } from 'react';
import Preloader from './Preloader';

const withPreloader = (WrappedComponent) => {
  return class WithPreloader extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      const { isLoading } = this.state;

      if (isLoading) {
        return <Preloader isLoading={isLoading} />;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withPreloader;
