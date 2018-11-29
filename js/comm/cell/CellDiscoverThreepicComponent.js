import React, {PureComponent} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import {color, screen} from './Define'
import SpacingComponent from '../../comm/SpacingComponent'

type Props = {
  article: Object,
  showBottomSpace?: Boolean,
  onPress?: Function,
}

export default class CellDiscoverThreepicComponent extends PureComponent<Props, {}> {
  static defaultProps = {
    showBottomSpace: true
  }
  render(){
    let {title, likesCount, commentsCount} = this.props.article
    return(
      <TouchableOpacity style = {styles.contanier} activeOpacity={0.7} onPress={this.props.onPress}>
        <Text
          numberOfLines={2}
          style = {styles.articleTitle}>
          {title}
        </Text>
        <View style = {styles.articleCover}>
          {this.props.urls.map(item =>
            <Image 
            key = {Math.random(1,100)}
            style = {styles.articleCoverItem}
            source={{uri:item}}
            />)}
        </View>
        <View style={styles.articleInfo}>
          <View style={styles.likeCountContainer}>
            <Image source={require('../../../resource/images/like.png')}/>
            <Text style={styles.likeCount}>{likesCount}</Text>
          </View>
          <View style={styles.commentCountContainer}>
            <Image source={require('../../../resource/images/comment.png')}/>
            <Text style={styles.commentCount}>{commentsCount}</Text>
          </View>
        </View>
        <View style={{marginBottom: 10}}/>
        {this.props.showBottomSpace ? <SpacingComponent height={2}/> : null}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: '#fff',
  },
    articleTitle: {
      color: color.text37,
      fontSize: 15,
      textAlign: 'left',
      lineHeight: 25,
      marginHorizontal: 10,
      marginTop:12,
    },
    articleCover: {
      flexDirection: 'row',
      marginHorizontal: 7,
      marginVertical:8,
      alignItems: 'center',
      justifyContent:'space-around',
    },
    articleCoverItem:{
      flex: 1,
      marginHorizontal:3,
      height: (screen.width - (18 * 2)) * 0.33,
    },
    articleInfo:{
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
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
      color: color.text37,
      fontSize: 11,
      paddingHorizontal: 5,
    },
    commentCount: {
      color: color.text37,
      fontSize: 11,
      paddingHorizontal: 5,
    }
});