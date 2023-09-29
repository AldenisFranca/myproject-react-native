import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import { Input, Text, Button } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const AlteracaoContatoScreen = ({ route, navigation }) => {
  const [id, setID] = useState();
  const [nome, setNome] = useState();
  const [telefone, setTelefone] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    if (route.params) {
      const { id } = route.params;
      setID(id);
      const { nome } = route.params;
      setNome(nome);
      const { telefone } = route.params;
      setTelefone(telefone);
      const { email } = route.params;
      setEmail(email);
    }
  }, []);

  function alterarDados() {
    axios
      .put(
        "http://localhost:3000/contato/" + id,
        {
          nome: nome,
          telefone: telefone,
          email: email,
        }
      )
      .then(function (response) {
        alert ("Contato Alterado com Sucesso")
        navigation.navigate('ListaContatos')(response)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function excluirDados() {
    axios
      .delete("http://localhost:3000/contato/" + id)
      .then(function (response) {
        alert ("Contato Excluído com Sucesso")
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
        title="Alterar"
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
          marginTop: 40,
        }}
        onPress={() => alterarDados()}
        // onPress={() => navigation.navigate("ListaContatos")}
      />

      <Button
        title="Excluir"
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
          marginVertical: 20,
        }}
        onPress={() => excluirDados()}
        // onPress={() => navigation.navigate("ListaContatos")}
      />
    </View>
  );
};

export default AlteracaoContatoScreen;
