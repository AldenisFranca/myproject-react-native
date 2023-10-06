import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useState } from "react";
import { Header, Icon, Button, Image } from "react-native-elements";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, list } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

const EnviarImagemScreen = ({ navigation }) => {
  const [imageUri, setImageUri] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [lista, setLista] = useState([]);

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

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      console.log(result.assets);
    }
  };

  const uploadImage = async () => {
    if (!imageUri) {
      Alert.alert("Selecione uma imagem antes de enviar.");
      return;
    }

    // Create a root reference
    const storage = getStorage();

    var imageName = Math.floor(Math.random() * 1000001);

    // Create a reference to 'mountains.jpg'
    const mountainsRef = ref(storage, imageName + ".jpg");

    const response = await fetch(imageUri);
    const blob = await response.blob();

    uploadBytes(mountainsRef, blob).then((snapshot) => {
      console.log(snapshot);
    });
  };

  async function LinkImage() {
    // Create a reference under which you want to list

    const storage = getStorage();
    const listRef = ref(storage);
    // Fetch the first page of 100.
    const firstPage = await list(listRef, { maxResults: 100 });
    let images = firstPage.items.map((item) => {
      return {
        link:
          "https://firebasestorage.googleapis.com/v0/b/" +
          item.bucket +
          "/o/" +
          item.fullPath +
          "?alt=media",
      };
    });
    setLista(images);
    console.log(images);
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",

        justifyContent: "center",
      }}
    >

      <Button title="Escolher Imagem" onPress={pickImage} />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: 200,
            height: 200,
            marginVertical: 20,
          }}
        />
      )}
      {uploading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button
          title="Enviar Imagem"
          onPress={uploadImage}
          disabled={!imageUri}
          containerStyle={{
            marginHorizontal: 75,
            height: 50,
            marginVertical: 20,
          }}
        />
      )}
      <Button title="Listar Imagens" onPress={LinkImage} />
      {lista
        ? lista.map((image, i) => (
            <Image
              key={i}
              source={{ uri: image.link }}
              style={{ width: 400, height: 200 }}
              PlaceholderContent={<ActivityIndicator size="large" />}
              containerStyle={{
                marginVertical: 5,
              }}
            />
          ))
        : false}
    </View>
  );
};

export default EnviarImagemScreen;
