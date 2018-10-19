// @flow
import React, { Component } from 'react';
import Ktest from '../components/Ktest';
import { connect } from 'react-redux';

type Props = {};

/*
export default class KtestPage extends Component<Props> {
  props: Props;

  render() {
    return <Ktest />;
  }
} */

export default connect(
  //mapStateToProps,
  //mapDispatchToProps
)(Ktest);