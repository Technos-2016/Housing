import React, { Component } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet,View, Text, ActivityIndicator } from 'react-native';
import * as constant from "../helper/constant";

const { width: screenWidth } = Dimensions.get('window')


export default class MyCarousel extends Component {

 constructor(props){
    super();
    this.state = {
      errors: [],
      isLoading: true,
      pictures: [],       
      }}
  componentDidMount() {
       return fetch(`${constant.API_BASE_URL}/api/sliderlist.php`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          pictures: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

    _renderItem ({item, index}, parallaxProps) {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: `${constant.API_BASE_URL}/uploads/${item.SliderImage}` }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
            </View>
        );
    }

    render () {
     return (
		<View >
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth}
                data={this.state.pictures}
                renderItem={this._renderItem.bind(this)}
                hasParallaxImages={true}
                layout={'default'}
                firstItem={0}
                loop={true}
                autoplay={true}
                autoplayDelay={100}
            />
		</View>
        );
    }
}

const styles = StyleSheet.create({
  item: {
    width: "100%",
    height: 250,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    position:'relative'
    
  },
  image: {
    resizeMode: 'center',
  },
})