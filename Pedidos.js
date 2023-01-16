import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default class Pedidos extends Component {
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
        xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/MostrarPedidos.php", true);
        xhttp.send();
    }



    render() {

        const envDatos = (numUnico) => {
            //console.log(numUnico);
            this.props.navigation.navigate("ConfPedidos", {nui:numUnico})
        }

        //se renderiza la flatlist y se envia a otra pantalla enviandole el id del carrito
        const celda = ({ item }) => {
            return (
                <View style={styles.celdas}>
                    <TouchableOpacity onPress={()=> envDatos(item.idCarrito)}>
                        <Text style={styles.texto}>idcarrito: {item.idCarrito}</Text>
                        <Text style={styles.texto}>idcliente: {item.idCli}</Text>
                        <Text style={styles.texto}>nombre cliente: {item.nombreCli}</Text>
                        <Text style={styles.texto}>id producto: {item.idPro}</Text>
                        <Text style={styles.texto}>nombre producto: {item.nombrePro}</Text>
                        <Text style={styles.texto}>status: {item.status}</Text>

                    </TouchableOpacity>
                </View>

            )

        }


        return (
            <View style={styles.view}>
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