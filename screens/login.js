import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button, Icon } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
        ]}
      >
        <Icon name="user" type="evilicon" size={150} color="#517fa4" />
        <Text
          style={{
            fontWeight: 500,
            fontSize: 20,
            textAlign: "left",
            marginTop: 20,
            marginHorizontal: 9,
          }}
        >
          Email
        </Text>
        <Input
        // containerStyle={{
        //     marginVertical: 15,
        //   }}
        />

        <Text
          style={{
            fontWeight: 500,
            fontSize: 20,
            textAlign: "left",
            marginTop: 30,
            marginHorizontal: 9,
          }}
        >
          Senha
        </Text>

        <Input
        //   containerStyle={{
        //     marginVertical: 15,
        //   }}
        />
        <Button
          title="Login"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "blue",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            marginTop: 40,
            marginHorizontal: 75,
            height: 50,
            marginVertical: 15,
          }}
          onPress={() => navigation.navigate("ListaContatos")}
        />
        <Button
          title="Cadastre-se"
          loading={false}
          loadingProps={{ size: "small", color: "white" }}
          buttonStyle={{
            backgroundColor: "red",
            borderRadius: 5,
          }}
          titleStyle={{ fontWeight: "bold", fontSize: 23 }}
          containerStyle={{
            marginHorizontal: 75,
            height: 50,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate("CadastroUsuario")}
        />
      </View>
    </View>
  );
}

export default LoginScreen;
