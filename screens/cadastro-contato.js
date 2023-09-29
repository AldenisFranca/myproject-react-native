import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Input, Text, Button } from "react-native-elements";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const CadastroContatoScreen = ({ navigation }) => {
  const [nome, setNome] = useState([]);
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();

  function inserirDados() {
    axios
      .post("http://localhost:3000/contato", {
        nome: nome,
        telefone: telefone,
        email: email
      })
      .then(function (response) {
        alert ("Contato Cadastrado com Sucesso")
        navigation.navigate('ListaContatos')(response)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <Text
        style={{
          fontWeight: 500,
          fontSize: 20,
          textAlign: "left",
          marginHorizontal: 9,
          marginTop: 20,
        }}
      >
        Nome
      </Text>
      <Input onChangeText={(text) => setNome(text)} value={nome} />

      <Text
        style={{
          fontWeight: 500,
          fontSize: 20,
          textAlign: "left",
          marginTop: 20,
          marginHorizontal: 9,
        }}
      >
        E-mail
      </Text>
      <Input onChangeText={(text) => setEmail(text)} value={email} />
      <Text
        style={{
          fontWeight: 500,
          fontSize: 20,
          textAlign: "left",
          marginTop: 20,
          marginHorizontal: 9,
        }}
      >
        Telefone
      </Text>
      <Input onChangeText={(text) => setTelefone(text)} value={telefone} />

      <Button
        title="Salvar"
        onPress={() => inserirDados() }
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "blue",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 75,
          height: 50,
          marginVertical: 40,
        }}
        // onPress={() => navigation.navigate("ListaContatos")}
      />
    </View>
  );
};

export default CadastroContatoScreen;
