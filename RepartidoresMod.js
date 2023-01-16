import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button,TouchableOpacity,Image } from 'react-native';

export default class RepartidoresMod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreGlobal: "",
            idGlobal: "",
            imagenGlobal: "",
        };
    }

    componentDidMount() {
        let _this = this;

        _this.setState({ nombreGlobal: this.props.route.params.nombre })
        _this.setState({ idGlobal: this.props.route.params.id })
        _this.setState({ imagenGlobal: this.props.route.params.imagen })
    }


    render() {

        const eliminar = () => {
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    let recibe = xhttp.responseText;

                    if (recibe == 1) {
                        alert("Eliminado ", _this.props.navigation.navigate("Acciones"));
                    }
                }
            };
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/DeleteRepartidores.php?id=" + this.state.idGlobal, true);
            xhttp.send();
        }

        const cambiar = () => {
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    let recibe = xhttp.responseText;

                    if (recibe == 1) {
                        alert("Realizado ", _this.props.navigation.navigate("Acciones"));
                    }
                }
            };
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/CambiarRepartidores.php?nombre=" + this.state.nombreGlobal + "&imagen=" + this.state.imagenGlobal + "&id=" + this.state.idGlobal, true);
            xhttp.send();
        }

        return (
            <View style={styles.container}>

                <Text> Nombre</Text>

                <TextInput value={this.state.nombreGlobal} style={styles.input} placeholder={"Nombre:"} placeholderTextColor="#ffff" onChangeText={nombreGlobal => this.setState({ nombreGlobal })} />



                <Text> Imagen</Text>

                <TextInput value={this.state.imagenGlobal} style={styles.input} placeholder={"Imagen:"} placeholderTextColor="#ffff" onChangeText={imagenGlobal => this.setState({ imagenGlobal })} />

                <TouchableOpacity style={styles.appButtonContainer} onPress={cambiar}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/cambio.png")}
                    />
                    <Text style={styles.appButtonText}>Cambiar datos</Text>
                </TouchableOpacity>

                {/* <Button title='cambiar' onPress={cambiar} /> */}

                <TouchableOpacity style={styles.appButtonContainer} onPress={eliminar}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/delete.png")}
                    />
                    <Text style={styles.appButtonText}>Eliminar</Text>
                </TouchableOpacity>

                {/* <Button title='Eliminar' onPress={eliminar} /> */}






                {/* <Text>{this.state.imagenGlobal}</Text>
        <Text> {this.props.route.params.nombre} </Text>
        <Text> {this.props.route.params.id} </Text>
        <Text> {this.props.route.params.imagen} </Text> */}

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
