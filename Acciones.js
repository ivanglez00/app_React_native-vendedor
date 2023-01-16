import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';

export default class Acciones extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {





    return (
      <View style={styles.view}>
       

        <Image
          style={{ width: 120, height: 120, marginLeft: 135,marginTop:80 }}
          source={require("./img/comida-china.png")}
        />

        {/* todos los touchables son los botones  que hacen las diferentes acciones*/}
        <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.props.navigation.navigate("AddProductos")}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./img/add.png")}
          />
          <Text style={styles.appButtonText}>Agregar Producto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.props.navigation.navigate("Inventario")}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./img/inventario.png")}
          />
          <Text style={styles.appButtonText}>ver Inventario</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.props.navigation.navigate("Repartidores")}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./img/repartidor.png")}
          />
          <Text style={styles.appButtonText}>Repartidores</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.props.navigation.navigate("Pedidos")}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("./img/informacion.png")}
          />
          <Text style={styles.appButtonText}>Pedidos</Text>
        </TouchableOpacity>




      </View>
    );
  }
}





const styles = StyleSheet.create({

  view: {
    backgroundColor: 'rgb(56,61,59)',
    flex: 1,
    flexDirection: 'column',
  },
  appButtonContainer: {
    elevation: 8,
    //backgroundColor: "#009688",
    backgroundColor: "#D0B627",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
    width: 300,
    marginLeft: 45,


  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

})