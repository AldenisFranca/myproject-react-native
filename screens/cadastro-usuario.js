import React from "react";
import axios from "axios";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Input, Text, Button } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const CadastroUsuarioScreen = ({ navigation }) => {
  const [nome, setNome] = useState([]);
  const [cpf, setCpf] = useState([]);
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);

  function inserirUsuario() {
    axios
      .post("http://localhost:3000/usuario", {
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
      })
      .then(function (response) {
        alert ("Usuário Cadastrado com Sucesso")
        navigation.navigate('Login')(response)
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
        CPF
      </Text>
      <Input onChangeText={(text) => setCpf(text)} value={cpf} />

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
        Senha
      </Text>
      <Input onChangeText={(text) => setSenha(text)} value={senha} />

      <Button
        title="Salvar"
        onPress={() => inserirUsuario() }
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
        
      />
    </View>
  );
};

export default CadastroUsuarioScreen;
