import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.defaultProps = {
  path: '',
};

RouteWithLayout.propTypes = {
  component: PropTypes.node.isRequired,
  layout: PropTypes.node.isRequired,
  path: PropTypes.string,
};

export default RouteWithLayout;
