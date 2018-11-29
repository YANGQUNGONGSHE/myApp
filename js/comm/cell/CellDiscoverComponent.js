/**
 * Copyright (c) 2018-present, Ken Wang
 * All rights reserved.
 * CreateTime: 2018-07-18-下午9:42
 * @flow
 */

import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import CellDiscoverNopicComponent from './CellDiscoverNopicComponent';
import CellDiscoverOnepicComponent from './CellDiscoverOnepicComponent';
import CellDiscoverTwopicComponent from './CellDiscoverTwopicComponent';
import CellDiscoverThreepicComponent from './CellDiscoverThreepicComponent';

type Props = {
  article: Object,
  showBottomSpace?: Boolean,
  onPress?: Function,
}

export default class CellDiscoverComponent extends PureComponent<Props, {}> {
  static defaultProps = {
    showBottomSpace: true
  }

  state = {
    imageTypes:[],
    imageUrls:[],
  }
  
  checkoutImage(item){
    return item.type === 1;
  }

  componentWillMount(){
    this.setState({
      imageTypes:this.props.article.paragraphs.filter(this.checkoutImage)
    });
    this.state.imageTypes.forEach(element => {
      this.state.imageUrls.push(element.url);
    });
    this.setState({
      imageUrls:this.state.imageUrls,
    });
  }
  render() {
    // let { avatarUrl, title, summary, createdAt, likesCount, commentsCount} = this.props.article
    let cellView = this.state.imageTypes.length <1?<CellDiscoverNopicComponent article = {this.props.article} showBottomSpace={this.props.showBottomSpace} onPress={this.props.onPress}/>:
    this.state.imageTypes.length ===1?<CellDiscoverOnepicComponent article = {this.props.article} showBottomSpace={this.props.showBottomSpace} onPress={this.props.onPress}/>:
    this.state.imageTypes.length ===2?<CellDiscoverTwopicComponent article = {this.props.article} showBottomSpace={this.props.showBottomSpace} onPress={this.props.onPress}/>:
    <CellDiscoverThreepicComponent article = {this.props.article} urls = {this.state.imageUrls.slice(0,3)} showBottomSpace={this.props.showBottomSpace} onPress={this.props.onPress}/>;
    return (
      <TouchableOpacity>
        {cellView}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: '#fff'
  },
  articleCover: {
    marginHorizontal: 18,
    marginTop: 15,
    marginBottom: 5,
    height: (screen.width - (18 * 2)) * 0.56,
  },
  articleTitle: {
    color: color.text37,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 25,
    marginHorizontal: 18,
  },
  articleContent: {
    color: color.text97,
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'left',
    marginHorizontal: 18,
    marginBottom: 5,
  },
  articleInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    alignItems: 'center'
  },
  publishTime: {
    color: color.textB8,
    fontSize: 11,
  },
  likeCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  commentCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    color: color.textB8,
    fontSize: 11,
    paddingHorizontal: 5,
  },
  commentCount: {
    color: color.textB8,
    fontSize: 11,
    paddingHorizontal: 5,
  }
})
