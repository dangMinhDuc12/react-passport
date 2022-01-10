import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const LinkBootstrap = ({ label, to, activeOnlyWhenExact }) => {
  const match = useRouteMatch({
    path: to,
    exact: true
  });

  return (
    <li className={ `nav-item ${match ? 'active' : ''}` }>
      <Link className="nav-link" to={to}>{label}</Link>
    </li>
  );
};

LinkBootstrap.propTypes = {
  
};

export default LinkBootstrap;