import React, { useEffect, useRef, useState } from 'react';
import {Dimensions, PermissionsAndroid, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Header from '../../components/Header';
import Container from '../../components/Container';
import colors from '../../utilities/colors';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const MapScreen = (props) => {
  const [region,setRegion] = useState({
    latitude: Number(props?.route?.params?.lattitude),
    longitude: Number(props?.route?.params?.longitude),
    latitudeDelta: 0.01,
    longitudeDelta: 0.03,
  });
  
  useEffect(() => {console.log(props?.route?.params)},[])

  return (
    <Container>
    <Header text="Address" color={colors.white} showBack />

      <View style={{flex: 1}}>
        <MapView.Animated
          provider={PROVIDER_GOOGLE}
          zoomEnabled={true}
          pitchEnabled={true}
          toolbarEnabled={true}
          showsMyLocationButton={false}
          style={{flex:1}}
          region={region}>
        <Marker
          draggable={true}
          coordinate={{latitude:region?.latitude,longitude:region.longitude}}
          onDragEnd={(e) => this.onMarkerDragEnd(e.nativeEvent.coordinate)}>
            <FontAwesome5 name={'map-marker-alt'} size={33} color={'red'} />
          </Marker>
          </MapView.Animated>
      </View>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10,
        position: 'absolute',
        bottom:'5%',
        backgroundColor:'#fff',
        marginLeft:15,
        borderRadius:100,
        padding:8,
        width:'90%'
      }}>
        <MaterialCommunityIcons name={'map-marker-outline'} size={33} color={'#d25728'} style={{marginRight:10}} />
        <Text numberOfLines={3} style={{color:'#000',width:'77%'}}>{props?.route?.params?.address}</Text>
      </View>
      </Container>
  );
};

export default MapScreen;