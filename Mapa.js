import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
export default class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cordX:"",
      cordY:"",
    };
  }

//recibe las cordenadas para utilizarlas 
  componentDidMount() {
    let _this = this;
    console.log("lol" + this.props.route.params.cordenadaX);
    console.log("lol" + this.props.route.params.cordenadaY);

    _this.setState({ cordX:  this.props.route.params.cordenadaX });
    _this.setState({ cordY:  this.props.route.params.cordenadaY });

  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textP}>hola</Text>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: parseFloat ((this.state.cordX)),
            longitude: parseFloat((this.state.cordY)),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >

          <Marker coordinate={
            {
            latitude:  parseFloat ((this.state.cordX)),
            longitude: parseFloat((this.state.cordY)),
            }
             
              
            } />
        </MapView>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 800,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textP: {
    color: '#101110',
  }
});