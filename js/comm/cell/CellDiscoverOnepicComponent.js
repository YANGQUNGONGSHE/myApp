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

export default class CellDiscoverOnepicComponent extends PureComponent<Props, {}> {
  static defaultProps = {
    showBottomSpace: true
  }
  render(){
    let {avatarUrl,title, likesCount, commentsCount} = this.props.article
      return(
        <TouchableOpacity style={styles.contanier} activeOpacity={0.7} onPress={this.props.onPress}>
         <Image 
          style = {styles.articleCover}
          source={{uri: avatarUrl}}
         />
         <Text 
           numberOfLines={2}
           style = {styles.articleTitle}>
           {title}
         </Text>
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
      backgroundColor: '#fff'
    },
    articleCover: {
      marginHorizontal: 10,
      marginVertical:10,
      height: (screen.width - (18 * 2)) * 0.56,
    },
    articleTitle: {
        color: color.text37,
        fontSize: 15,
        textAlign: 'left',
        lineHeight: 25,
        marginHorizontal: 10,
      },
      articleInfo: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop:6,
        alignItems: 'center'
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