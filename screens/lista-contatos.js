import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import { Icon, Button, Header, ListItem } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  buttonContact: {
    flexDirection: "row",
    alignItems: "left",
    backgroundColor: "lightgray",
    height: 80,
    marginTop: 10,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },
  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 80,
  },
  buttonTextStyle: {
    textAlignVertical: "center",
    color: "black",
    fontSize: 20,
    marginVertical: 17.5,
    marginLeft: 10,
  },
});

const ListaContatosScreen = ({ navigation }) => {
  const [contact, setContact] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    consultarDados();
    function consultarDados() {
      axios
        .get("http://localhost:3000/contato")
        .then(function (response) {
          setContact(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [isFocused]);

  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <Header
        leftComponent={
          <Button
            onPress={() => navigation.goBack()}
            icon={<Icon name="arrow-left" size={30} color="#fff" />}
          />
        }
        centerComponent={{
          text: "Lista de Contatos",
          style: {
            color: "#fff",
            fontSize: 20,
            fontWeight: 700,
            marginTop: 12.5,
          },
        }}
        rightComponent={
          <Button
            onPress={() => navigation.navigate("CadastroContato")}
            icon={<Icon name="add" size={30} color="white" />}
          />
        }
      />

      {contact.map((l, i) => (
        <ListItem
          key={i}
          bottomDivider
          onPress={() =>
            navigation.navigate("AlteracaoContato", {
              id: l.id,
              nome: l.nome,
              telefone: l.telefone,
              email: l.email,
            })
          }
        >
          <Icon name="user" type="evilicon" size={75} color="#517fa4" />
          <ListItem.Content>
            <ListItem.Title>{l.nome}</ListItem.Title>
            <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
};

export default ListaContatosScreen;
