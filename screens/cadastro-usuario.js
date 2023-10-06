import React from "react";
import axios from "axios";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Input, Text, Button } from "react-native-elements";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const CadastroUsuarioScreen = ({ navigation }) => {
  // const [nome, setNome] = useState([]);
  // const [cpf, setCpf] = useState([]);
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyBCkPtVh27HUSjAz7HTAEB19pb5TCVQ118",
    authDomain: "aula-firebase-84fa2.firebaseapp.com",
    projectId: "aula-firebase-84fa2",
    storageBucket: "aula-firebase-84fa2.appspot.com",
    messagingSenderId: "765546876167",
    appId: "1:765546876167:web:10d45defe14cb2db7109a2",
    measurementId: "G-KQSBSDRPP0",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function loginGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigation.navigate('ListaContatos')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  function inserirUsuario() {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert ("Contato Cadastrado com Sucesso")
        navigation.navigate('Login')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  function inserirUsuario1() {
    axios
      .post("http://localhost:3000/usuario", {
        // nome: nome,
        // cpf: cpf,
        email: email,
        senha: senha,
      })
      .then(function (response) {
        alert("Usuário Cadastrado com Sucesso");
        navigation.navigate("Login")(response);
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
      {/* <Text
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
      <Input onChangeText={(text) => setCpf(text)} value={cpf} /> */}

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
        onPress={() => inserirUsuario()}
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

      <Button
        title="Cadastro Google"
        onPress={() => loginGoogle()}
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "blue",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 75,
          height: 50
        }}
      />
    </View>
  );
};

export default CadastroUsuarioScreen;
