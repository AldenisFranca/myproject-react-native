import React from "react";
import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Input, Text, Button, Icon } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

function LoginScreen({ navigation }) {
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

  function Login() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.navigate("ListaContatos");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

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
          onChangeText={(text) => setEmail(text)}
          value={email}
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
          onChangeText={(text) => setSenha(text)}
          value={senha}
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
          onPress={() => Login()}
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
