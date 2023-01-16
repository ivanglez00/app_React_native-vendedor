import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput,TouchableOpacity,Image } from 'react-native';

export default class InventarioMod extends Component {
    constructor(props) {
        super(props);
        this.state = {

            nombreGlobal: "",
            precioGlobal: "",
            descripcionGlobal: "",
            imagenGlobal: "",
        };
    }


    componentDidMount() {
        let _this = this;
        //recibe los datos de la pantalla anterior y los envia al state para mostrarlos en los inputs 
        _this.setState({ nombreGlobal: this.props.route.params.nombre })
        _this.setState({ precioGlobal: this.props.route.params.precio })
        _this.setState({ descripcionGlobal: this.props.route.params.descripcion })
        _this.setState({ imagenGlobal: this.props.route.params.imagen })
    }



    render() {
        // funcion para modificar los datos 
        const cambiar = () => {
            let _this = this;
            console.log("desde ambiar");

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
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/CambiarProductos.php?nombre=" + this.state.nombreGlobal + "&precio=" + this.state.precioGlobal + "&descripcion=" + this.state.descripcionGlobal + "&imagen=" + this.state.imagenGlobal + "&id=" + this.props.route.params.id, true);
            xhttp.send();



        }
         // funcion para eliminar el registro 
        const eliminar = () => {
            let _this = this;
            console.log("desde eliminar");

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Typical action to be performed when the document is ready:
                    console.log(xhttp.responseText);
                    let recibe = xhttp.responseText;

                    if (recibe == 1) {
                        alert("Eliminado ", _this.props.navigation.navigate("Acciones"));
                    }
                }
            };
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/EliminarProductos.php?id=" + this.props.route.params.id, true);
            xhttp.send();
        }



        return (
            <View style={styles.container}>
                <Text> Nombre</Text>
                {/* con el value se muestra los datos que estan en el state para asi modificarlos o eliminarlos   */}
                <TextInput value={this.state.nombreGlobal} style={styles.input} placeholder={"Nombre:"} placeholderTextColor="#ffff" onChangeText={nombreGlobal => this.setState({ nombreGlobal })} />

                <Text> precio</Text>

                <TextInput value={this.state.precioGlobal} style={styles.input} placeholder={"Precio:"} placeholderTextColor="#ffff" onChangeText={precioGlobal => this.setState({ precioGlobal })} />

                <Text> Descripcion</Text>

                <TextInput value={this.state.descripcionGlobal} style={styles.input} placeholder={"Descripcion:"} placeholderTextColor="#ffff" onChangeText={descripcionGlobal => this.setState({ descripcionGlobal })} />

                <Text> Imagen</Text>

                <TextInput value={this.state.imagenGlobal} style={styles.input} placeholder={"Imagen:"} placeholderTextColor="#ffff" onChangeText={imagenGlobal => this.setState({ imagenGlobal })} />










                {/* <Text> {this.state.descripcionGlobal} </Text>
                <Text> {this.props.route.params.nombre} </Text>
                <Text> {this.props.route.params.precio} </Text> */}

               

                <TouchableOpacity style={styles.appButtonContainer} onPress={cambiar}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/cambio.png")}
                    />
                    <Text style={styles.appButtonText}>Cambiar Datos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.appButtonContainer} onPress={eliminar}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/delete.png")}
                    />
                    <Text style={styles.appButtonText}>Eliminar Producto</Text>
                </TouchableOpacity>


               

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
