import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button, TouchableOpacity } from 'react-native';

export default class Repartidores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datosServer: "",
        };
    }
    //funcion para mostrar todos los repartidores 
    componentDidMount() {
        let _this = this;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var datos = JSON.parse(xhttp.responseText);
                _this.setState({ datosServer: datos });
            }
        };
        xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/MostrarRepartidores.php", true);
        xhttp.send();
    }



    render() {
//agregar repartidores 
        const addRep = () => {
            this.props.navigation.navigate("AddRepartidores");
        }
        //modificar o eliminar  repartidores 
        const envDatos = (num, nom, ima) => {
            this.props.navigation.navigate("RepartidoresMod", { id: num, nombre: nom, imagen: ima });
        }

        //renderizacion de la flatlist
        const celda = ({ item }) => {
            return (
                <View style={styles.celdas}>
                    <TouchableOpacity onPress={() => envDatos(item.idRep, item.nombreRep, item.fotoRep)}>
                        <Text style={styles.texto}>Nombre: {item.nombreRep}</Text>

                        <Image
                            style={{ width: 100, height: 100, marginLeft: 115, }}
                            source={{ uri: item.fotoRep }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }




        return (
            <View style={styles.view}>



                <TouchableOpacity style={styles.appButtonContainer} onPress={addRep}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/add.png")}
                    />
                    <Text style={styles.appButtonText}>Agregar</Text>
                </TouchableOpacity>
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

    view: {
        backgroundColor: 'rgb(56,61,59)',
        flex: 1,
        flexDirection: 'column',
    },
    celdas: {
        margin: 20,
        borderWidth: 2,
        borderColor: 'rgb(122,201,173)',
        borderRadius: 10,
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