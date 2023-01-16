import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';

export default class AddProductos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            precio: "",
            descripcion: "",
            foto: "",
        };
    }

    render() {
        let _this = this;

        //funcion que envia los datos al servidor para guaradrlos en la base de datos 
        const btnGuardar = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    console.log(xhttp.responseText);
                    let recibe = xhttp.responseText;

                    if (recibe == 1) {
                        alert("Agregado correctamente", _this.props.navigation.navigate("Acciones"));
                    }
                }
            };
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/InsertNuevosProductos.php?nombre=" + '"' + this.state.nombre + '"' + "&precio=" + '"' + this.state.precio + '"' + "&descripcion=" + '"' + this.state.descripcion + '"' + "&foto=" + '"' + this.state.foto + '"', true);
            xhttp.send();
        }



        return (
            <View style={styles.view}>



                <TextInput style={styles.input} placeholder={"Nombre:"} placeholderTextColor="#ffff" onChangeText={nombre => this.setState({ nombre })} />

                <TextInput style={styles.input} placeholder={"Precio:"} placeholderTextColor="#ffff" onChangeText={precio => this.setState({ precio })} />

                <TextInput style={styles.input} placeholder={"Descripcion:"} placeholderTextColor="#ffff" onChangeText={descripcion => this.setState({ descripcion })} />

                <TextInput style={styles.input} placeholder={"Foto:"} placeholderTextColor="#ffff" onChangeText={foto => this.setState({ foto })} />


                <Text>{this.state.nombre}</Text>
                <Text>{this.state.precio}</Text>
                <Text>{this.state.descripcion}</Text>
                <Text>{this.state.foto}</Text>

                {/* <Button title='Guardar' onPress={btnGuardar} color="orange" /> */}
                {/* boton para guardar los datos que estan en los texinput */}
                <TouchableOpacity style={styles.appButtonContainer} onPress={btnGuardar}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/add.png")}
                    />
                    <Text style={styles.appButtonText}>Guardar</Text>
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
    }


})