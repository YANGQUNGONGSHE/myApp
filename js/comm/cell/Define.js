/**
 * Copyright (c) 2018-present, Ken Wang
 * All rights reserved.
 * [项目UI常量定义文件]
 * @flow
 */

import {Dimensions, Platform} from 'react-native'

/**
 * App颜色定义
 */
export const color = {
  primary: '#ff6e6b',//'#06c1ae',
  iconColor: '#6e8ba2',
  bg:'#efefef',
  text37: '#373737',
  text75: '#757575',
  text4B: '#4B4B4B',
  textA4: '#A4A4A4',
  text97: '#979797',
  textB8: '#b8b8b8',
  text1F: '#1f1f1f',
  text5C: '#5c5c5c',
  minor: '',
  border: '#e0e0e0',
  paper: '#f3f3f3',
  gray: '#979797',
  navColor: '#336ccc'
}

export const isiOS = () => {
  return Platform.OS === 'ios'
}

/**
 * 屏幕宽高定义
 * @type {{width, height}}
 */
export const screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

