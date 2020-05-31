
import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import * as constant from '../helper/constant';
import HTML from 'react-native-render-html';
import MemberSuppliers from './MemberSuppliers';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ModelHouseDetails extends Component {
  render() {
    const state = this.state;
    let {item} = this.props.route.params;
    return (
      <View style={styles.container}>
      <Icon 
        onPress={()=>{
          this.props.navigation.goBack();
        }}
        name="md-arrow-back" size={30} color={'white'} style={{backgroundColor:'#009387', padding:10}}
      />
        <Text style={styles.headerTitle}>{item.ModalName}</Text>
        <Text style={{fontSize:14,padding:5,textAlign:'center',color:'#F08080'}}>Estimated Cost - {item.ApproxValue}</Text>
        <View style={{padding: 10}}>
          <Image
            style={styles.ModalImage}
            source={{
              uri: `${constant.API_BASE_URL}/uploads/${item.ModalImage}`,
            }}
          />
        </View>
        <ScrollView>
          <Text style={styles.HeadStyle}>Model Outline</Text>
          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 50,
              alignItems: 'center',
            }}>
            <Text style={{paddingRight: 100, fontSize: 20}}>-</Text>
            <Text style={{paddingRight: 60, fontSize: 20}}>Door</Text>
            <Text style={{fontSize: 20}}>Window</Text>
          </View>
          <View style={{paddingLeft: 40}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingTop: 10, fontSize: 17}}>Front</Text>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingLeft: 90,
                  fontSize: 17,
                }}>
                {' '}
                {item.DoorFront}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingLeft: 90,
                  fontSize: 17,
                }}>
                {' '}
                {item.WindowFront}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingTop: 10, fontSize: 17}}>Back</Text>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingLeft: 90,
                  fontSize: 17,
                }}>
                {' '}
                {item.DoorBack}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingLeft: 90,
                  fontSize: 17,
                }}>
                {' '}
                {item.WindowBack}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingTop: 10, fontSize: 17}}>Left</Text>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingLeft: 97,
                  fontSize: 17,
                }}>
                {' '}
                {item.DoorLeft}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingLeft: 92,
                  fontSize: 17,
                }}>
                {' '}
                {item.WindowLeft}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{paddingTop: 10, fontSize: 17}}>Right</Text>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingLeft: 85,
                  fontSize: 17,
                }}>
                {' '}
                {item.DoorRight}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingLeft: 90,
                  fontSize: 17,
                }}>
                {' '}
                {item.WindowRight}
              </Text>
            </View>
          </View>
          <ScrollView>
            <Text style={styles.HeadStyle}>Model Description</Text>
            <HTML html={item.ModalDesc}  style={{margin:10,textAlign:'justify'}} />
          </ScrollView>
          <View>
            <MemberSuppliers />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#F8F8FF',
  },
  texts: {
    fontSize: 12,
  },
  ModalImage: {
    height: 200, 
    width: '100%', 
    borderRadius: 8,
    backgroundColor: '#F8F8FF'
  },
  HeadStyle: {
    textAlign: 'center',
    color:'#fff',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#009387',
  },
  ModalDesc: {
    textAlign: 'justify',
    margin:10,
  },
});
