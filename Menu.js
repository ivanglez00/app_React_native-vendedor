// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ACCIONES from "./Acciones";
import ADDPRODUCTOS from "./AddProductos";
import INVENTARIO from "./Inventario";
import INVENTARIOMOD from "./InventarioMod";
import REPARTIDORES  from "./Repartidores";
import ADDREPARTIDORES from "./AddRepartidores";
import REPARTIDORESMOD from "./RepartidoresMod";
import PEDIDOS from "./Pedidos";
import CONFPEDIDOS from "./ConfPedidos";
import MAPA from "./Mapa";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* aqui se declaran todas las pantallas que creamos para que funcione la funcion navigate  */}
        <Stack.Screen name="Acciones" component={ACCIONES} options={{headerShown:false}} />
        <Stack.Screen name="AddProductos" component={ADDPRODUCTOS} options={{headerShown:false}} />
        <Stack.Screen name="Inventario" component={INVENTARIO} options={{headerShown:false}} />
        <Stack.Screen name="InventarioMod" component={INVENTARIOMOD} options={{headerShown:false}} />
        <Stack.Screen name="Repartidores" component={REPARTIDORES} options={{headerShown:false}} />
        <Stack.Screen name="AddRepartidores" component={ADDREPARTIDORES} options={{headerShown:false}} />
        <Stack.Screen name="RepartidoresMod" component={REPARTIDORESMOD} options={{headerShown:false}} />
        <Stack.Screen name="Pedidos" component={PEDIDOS} options={{headerShown:false}} />
        <Stack.Screen name="ConfPedidos" component={CONFPEDIDOS} options={{headerShown:false}} />
        <Stack.Screen name="Mapa" component={MAPA} options={{headerShown:false}} />
      
        
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default App;

