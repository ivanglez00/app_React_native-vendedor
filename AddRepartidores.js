import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default class AddRepartidores extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: "",
            foto:"",
    };
  }


  render() {

    const guardar = () => {
      let _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               console.log(xhttp.responseText);  
               let recibe = xhttp.responseText;

               if(recibe == 1){
                alert("Ingresaro correctamente ", _this.props.navigation.navigate("Acciones"));
               }
            }
        };
        xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/AddRepartidores.php?nombre=" + this.state.nombre + "&imagen=" + this.state.foto, true);
        xhttp.send();
    }

    return (
      <View style={styles.container}>
        <Text> AddRepartidores </Text>

        <TextInput style={styles.input} placeholder={"Nombre:"} placeholderTextColor="#ffff" onChangeText={nombre => this.setState({ nombre })} />

        <TextInput style={styles.input} placeholder={"Foto:"} placeholderTextColor="#ffff" onChangeText={foto => this.setState({ foto })} />

        <Button title='Guardar' onPress={guardar}/>

       
      </View>
    );
  }
}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'rgb(56,61,59)',
    },
    input: {

        borderWidth: 2,
        fontSize: 25,
        borderColor: '#ffff',
        marginTop: 20,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
  
  })