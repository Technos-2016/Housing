/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, Alert, Text} from 'react-native';
import * as constant from '../helper/constant';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Aplayer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: true,
    paused: true,
    skin: 'embed',
    ignoreSilentSwitch: null,
    isBuffering: false,
  };

  componentDidMount() {}
  render() {
    let {item} = this.props.route.params;
    return (
      <View style={styles.container}>
      <Icon 
      onPress={()=>{
        this.props.navigation.goBack();
      }}
          name={'md-arrow-back'} color={'white'} size={30} style={{backgroundColor:'#009387', paddingLeft:10}}
        />
        <View style={{flex: 1, marginBottom: 20}}>
        

          <Video
            source={{uri: `${constant.API_BASE_URL}/uploads/${item.AudioPath}`}} // Can be a URL or a localfile.
            ref={(ref) => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onEnd={() => {
              Alert.alert('Playing Finished');
            }} // Callback when playback finishes
            onError={this.videoError} // Callback when video cannot be loaded
            style={styles.backgroundVideo}
            controls={this.state.controls}
            volume={this.state.volume}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
