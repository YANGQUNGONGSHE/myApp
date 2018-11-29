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

export default class CellDiscoverTwopicComponent extends PureComponent<Props, {}> {
  static defaultProps = {
    showBottomSpace: true
  }
  render(){
    let {avatarUrl,title, likesCount, commentsCount} = this.props.article
      return(
          <TouchableOpacity style = {styles.contanier} activeOpacity={0.7} onPress={this.props.onPress}>
            <View style = {styles.articleContentContainer}>
              <Image 
                style = {styles.articleCover}
                source = {{uri:avatarUrl}}
              />
              <View style = {styles.articleInfo}>
                <Text
                  numberOfLines={2}
                  style = {styles.articleTitle}>
                  {title}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.likeCountContainer}>
                    <Image source={require('../../../resource/images/like.png')}/>
                    <Text style={styles.likeCount}>{likesCount}</Text>
                  </View>
                  <View style={styles.commentCountContainer}>
                    <Image source={require('../../../resource/images/comment.png')}/>
                    <Text style={styles.commentCount}>{commentsCount}</Text>
                  </View>
                </View>
              </View>
           </View>
           {this.props.showBottomSpace ? <SpacingComponent height={2}/> : null}
          </TouchableOpacity>
      );
  }
}
const styles = StyleSheet.create({
    contanier: {
      backgroundColor: '#fff',
    },
    articleContentContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 10,
    },
    articleCover: {
      flex: 1,
      height: (screen.width - (18 * 2)) * 0.28,
    },
    articleTitle: {
      color: color.text37,
      fontSize: 15,
      textAlign: 'left',
      lineHeight: 25,
    },
    articleInfo:{
        flex: 2,
        height:(screen.width - (18 * 2)) * 0.28,
        marginLeft: 13,
        justifyContent:'space-between'
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
})