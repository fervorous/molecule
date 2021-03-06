import clientCookies from 'cookies-js';
import compose from 'lodash.flowright';
import { Query, Mutation, Subscription, graphql } from 'react-apollo';
import { Helmet } from 'react-helmet';
import { Link, Switch, Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider, connect } from 'react-redux';
import { push, replace, go, goBack, goForward } from 'connected-react-router';

import gqltag from './shared/gqltag';
import Document from './client/components/Document';
import Form from './client/components/Form';

module.exports = {
  clientCookies,
  compose,
  connect,
  historyActions: {
    push,
    replace,
    go,
    goBack,
    goForward,
  },
  // NOTE: I don't like this function living here.
  // If it happens again let's find it a new home.
  gql: gqltag,
  Query,
  Mutation,
  Subscription,
  Provider,
  Link,
  Redirect,
  Route,
  Switch,
  graphql,
  PropTypes,
  React,

  Document,
  Meta: Helmet,
  Form,
};
