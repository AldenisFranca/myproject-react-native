import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/login";
import CadastroUsuarioScreen from "./screens/cadastro-usuario";
import ListaContatosScreen from "./screens/lista-contatos";
import CadastroContatoScreen from "./screens/cadastro-contato";
import AlteracaoContatoScreen from "./screens/alteracao-contato";
import EnviarImagemScreen from "./screens/enviar-imagem";

const Stack = createNativeStackNavigator();

function App_movel({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{
            title: "Usuário",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
            },
          }}
          name="CadastroUsuario"
          component={CadastroUsuarioScreen}
        />

        <Stack.Screen
          options={{
            title: "Imagem",
            // headerShown: false,
            title: "Envio de Imagem",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
            },
          }}
          name="EnviarImagem"
          component={EnviarImagemScreen}
        />

        <Stack.Screen
          options={{
            headerShown: false,
            title: "Lista de Contatos",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
            },
          }}
          name="ListaContatos"
          component={ListaContatosScreen}
        />

        <Stack.Screen
          options={{
            title: "Contato",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
            },
          }}
          name="CadastroContato"
          component={CadastroContatoScreen}
        />

        <Stack.Screen
          options={{
            title: "Contato",
            headerStyle: {
              backgroundColor: "blue",
            },
            headerTintColor: "#ffffff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              textAlign: "center",
            },
          }}
          name="AlteracaoContato"
          component={AlteracaoContatoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App_movel;
