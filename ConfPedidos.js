import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


export default class ConfPedidos extends Component {
    constructor(props) {
        super(props);
        this.state = {

            datosServer: "",
            datosServer2: [],
            repartidor: "",
            corX: "",
            corY: "",

        };
    }

    /*funcion que trae los datos del servidor que en este caso consulta dos bases diferentes
    en una son los pedidos y en otra son los repartidores para que los muestre en el dropdown*/
    componentDidMount() {
        let _this = this;
        let a = () => {

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(xhttp.responseText);
                    var datos = JSON.parse(xhttp.responseText);
                    _this.setState({ datosServer: datos });
                    //sacamos las cordenadas para los mapas haciendo cortes en la respuesta json
                    //cortamos las cordemadas para utilizarlas en el mapa 
                    let recibe = xhttp.responseText;
                    let corte = recibe.split('"');
                    console.log(corte[15]);
                    //aqui empieza el corte 2 
                    let recibe2 = corte[15];
                    let corte2 = recibe2.split(",");
                    console.log(corte2[0]);
                    console.log(corte2[1]);
                    //guardamos las cordenadas en el state para poder utilizarlas y enviarlas a otra panatalla 
                    _this.setState({ corX: corte2[0] });
                    _this.setState({ corY: corte2[1] });


                }
            };
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/MostrarPedidosUnicos.php?nui=" + this.props.route.params.nui, true);
            xhttp.send();
        }


        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //console.log(xhttp.responseText);
                var datos2 = JSON.parse(xhttp.responseText);
                _this.setState({ datosServer2: datos2 });
            }
        };
        xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/dropdownRepartidores.php", true);
        xhttp.send();

        a();

    }






    render() {


            //funcion para despachar el pedido 
        const despachar = () => {
            let _this = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let recibe = xhttp.responseText;

                    if (recibe == 1) {
                        alert("Pedido Despachado ", _this.props.navigation.navigate("Acciones"));
                    }
                }
            };
            xhttp.open("GET", "https://tiendita-comerce.000webhostapp.com/Despachar.php?id=" + this.state.repartidor + "&carrito=" + this.props.route.params.nui, true);
            xhttp.send();
        }

        //renderizacion de la flatlist
        const celda = ({ item }) => {
            return (
                <View style={styles.celdas}>
                    <Text style={styles.texto}>idcarrito: {item.idCarrito}</Text>
                    {/* <Text style={styles.texto}>idcliente: {item.idCli}</Text> */}
                    <Text style={styles.texto}>nombre cliente: {item.nombreCli}</Text>
                    {/* <Text style={styles.texto}>id producto: {item.idPro}</Text> */}
                    <Text style={styles.texto}>nombre producto: {item.nombrePro}</Text>
                    <Text style={styles.texto}> Cantidad:{item.cantidad}</Text>
                    {/* <Text style={styles.texto}>status: {item.status}</Text> */}
                    <Text style={styles.texto}>direccion: {item.direccionCli}</Text>


                </View>
            )

        }

        return (
            <View style={styles.view}>
                <Text style={styles.textP}> Pedidos </Text>
                {/* <Text>{this.state.corX}</Text>
                <Text>{this.state.corY}</Text> */}


                {/* <Text>{this.props.route.params.nui}</Text> */}

                <FlatList
                    data={this.state.datosServer}
                    renderItem={celda}
                    keyExtractor={(item, index) => index.toString()}
                />

                {/* <TextInput style={styles.input} placeholder={"idRep:"} placeholderTextColor="#ffff" onChangeText={repartidor => this.setState({ repartidor })} /> */}




                <Text>Seleccione el repartidor </Text>
                {/* elegir el repartidor con el dropdown */}
                <Dropdown data={this.state.datosServer2} labelField="idRep"
                    containerStyle={{ backgroundColor: 'rgb(56,61,59)', }}

                    textStyle={styles.dropdownText}
                    selectedTextStyle={styles.label} value={this.state.datosServer2} style={styles.dropdown} onChange={item => {
                        // console.log(item.id)
                        this.setState({ repartidor: item.idRep });
                    }}> </Dropdown>

                    {/* boton para dirigirte al mapa , le enviamos las cordenadas muestre el destino del usuario */}
                <TouchableOpacity style={styles.appButtonContainer} onPress={() => this.props.navigation.navigate("Mapa", { cordenadaX: this.state.corX, cordenadaY: this.state.corY })}>

                    <Text style={styles.appButtonText}> VER Ubicacion</Text>
                </TouchableOpacity>
                    {/* boton para despachar el pedido */}
                <TouchableOpacity style={styles.appButtonContainer} onPress={despachar}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("./img/cocina.png")}
                    />
                    <Text style={styles.appButtonText}>Despachar Pedidos</Text>
                </TouchableOpacity>



            </View>
        );
    }
}



const styles = StyleSheet.create({

    textP: {
        fontSize: 30,
        textAlign: 'center',

    },

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
        marginBottom: 50,


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
    input: {

        borderWidth: 2,
        fontSize: 25,
        borderColor: '#ffff',
        marginTop: 20,
        marginRight: 30,
        marginLeft: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    appButtonContainer2: {
        elevation: 8,
        //backgroundColor: "#009688",
        backgroundColor: "#D0B627",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,

        width: 60,
        marginLeft: 320,



    },

    dropdown: {
        height: 50,
        backgroundColor: 'rgb(122,201,173)',
        marginTop: 20,
        marginRight: 30,
        marginLeft: 30,
        marginBottom: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,



    },
})