import React,{Component} from "react";
import {Text,View,StyleSheet,Alert,TouchableOpacity} from "react-native";
import WebView from 'react-native-webview';
import Icon from "react-native-vector-icons/Ionicons"

import * as constant from '../helper/constant';

export default class Vplayer extends Component {
  
render(){
  let {item} = this.props.route.params;
return(
<View style={styles.container}>
  <View style={{margin:10,flexDirection:'row',alignItems:'center'}}>
    <TouchableOpacity 
    onPress={()=>{
      this.props.navigation.goBack()
    }}
    >
    <Icon 
    name="md-arrow-back" size={25}
    />
    </TouchableOpacity>
  </View>
  <WebView 
  source={{uri: item.VideoUrl}}
        javaScriptEnabled={true}
        domStorageEnabled={true} 
  />
      {/* <Video source={{uri: `${constant.API_BASE_URL}/uploads/${item.VideoUrl}`}}   // Can be a URL or a localfile.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
       onBuffer={this.onBuffer}                // Callback when remote video is buffering
       onEnd={() => { Alert.alert('Finished!') }}                  // Callback when playback finishes
       onError={this.videoError}               // Callback when video cannot be loaded
       style={styles.backgroundVideo}
       controls={this.state.controls}
       volume={this.state.volume}
       
       /> */}
</View>
);
}
}
const styles = StyleSheet.create({
  container:{ flex: 1, justifyContent: "center"},
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});