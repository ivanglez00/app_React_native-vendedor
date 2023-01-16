import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Inventario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosServer: "",
    };
  }

  componentDidMount() {
    let _this = this;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {

        // console.log(xhttp.responseText); 
        var datos = JSON.parse(xhttp.responseText);
        _this.setState({ datosServer: datos });
      }
    };
    xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/MostrarAllDatos.php", true);
    xhttp.send();

  }



  render() {
      //recibe los datos y los envia a la siguiente pantalla para que los muestre y los pueda modificar 
    const envDatos = (pk, nom, pre, desc, ima) => {
      this.props.navigation.navigate("InventarioMod", {id:pk,nombre:nom,precio:pre,descripcion:desc,imagen:ima})
    }

    //rederizacion de la flatlist 
    const celda = ({ item }) => {
      return (
        <View style={styles.celdas}>
          {/* le enviamos estos datos a la funcion (envDatos) */}
          <TouchableOpacity onPress={() => envDatos(item.idPro, item.nombrePro, item.precioPro, item.descripcionPro, item.foto)}>
            <Text style={styles.texto}>id: {item.idPro}</Text>
            <Text style={styles.texto}>Nombre: {item.nombrePro}</Text>
            <Text style={styles.texto}>precio: {item.precioPro}</Text>
            <Text style={styles.texto}>descripcion: {item.descripcionPro}</Text>
            <Image
              style={{ width: 100, height: 100, marginLeft: 115, }}
              source={{ uri: item.foto }}
            />
          </TouchableOpacity>
        </View>
      )
    }

    //return principal
    return (
      <View style={styles.container}>
        <Text> Inventario </Text>
        <FlatList
          data={this.state.datosServer}
          renderItem={celda}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );//return principal
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(56,61,59)',
  },
  celdas: {
    margin: 20,
    borderWidth: 2,
    borderColor: 'rgb(122,201,173)',
    borderRadius: 10,
  },
  texto: {
    color: 'rgb(193,199,188)',
    padding: 4,
    paddingRight: 3,

  },


})
