/**
 * Copyright (c) 2018-present, Ken Wang
 * All rights reserved.
 * [上下文分割组件]
 * @flow
 */
import React, {PureComponent} from 'react'
import {StyleSheet, View} from 'react-native'
import {color} from '../comm/cell/Define';

type Props ={
  height ?: Number
}

/**
 * 块与块间隔
 */
export default class SpacingComponent extends PureComponent<Props, {}> {
  render() {
    return (
      <View style={[styles.spacing,{height: this.props.height ? this.props.height : 14}]}/>
    )
  }
}

const styles = StyleSheet.create({
  spacing: {
    backgroundColor: color.bg,
  }
});
