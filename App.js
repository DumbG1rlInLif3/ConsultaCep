import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState } from "react";
import { TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const bottomBuscar = () => {
  if (!cep) {
    alert("Digite um CEP!");
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      setLogradouro(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setUf(data.uf);
    });
};


  return (
    <View style={styles.container}>

      <View style={{flexDirection:'row'}}>
        <TextInput style={{
          borderColor: "#000", borderWidth: 2, borderRadius: 10, width: 200, fontSize: 18, marginTop: 50, marginEnd: 20
        }}
        value={cep}
        onChangeText={(number) => setCep(number)}
        placeholder="Cep"
        />

        <TouchableOpacity style={styles.bottomBuscar} onPress={bottomBuscar}>
          <Text style={styles.textoBottom}>
            BUSCAR
          </Text>
        </TouchableOpacity>
      </View>

        <TextInput style = {styles.caixaTexto}
        value={logradouro}
        onChangeText={(texto) => setLogradouro(texto)}
        placeholder="Logradouro"
        />

        <TextInput style = {styles.caixaTexto}
        value={bairro}
        onChangeText={(texto) => setBairro(texto)}
        placeholder="Bairro"
        />

        <TextInput style = {styles.caixaTexto}
        value={cidade}
        onChangeText={(texto) => setCidade(texto)}
        placeholder="Cidade"
        />

        <TextInput style = {styles.caixaTexto}
        value={uf}
        onChangeText={(texto) => setUf(texto)}
        placeholder="Uf"
        />

      <View
        style={{
          flexDirection: "row",
        }}
      >
        {/* Imagem da View via uri da web*/}
        <Image
          source={{
            uri: "https://www.unipar.br/media/original_images/unipar_ld_schema_logo.png",
          }}
          style={{
            width: 200,
            // Largura da imagem.
            height: 150,
            // Altura da imagem
            marginTop: 30,
            // Margem superior para afastar a imagem do topo da tela
          }}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          color: "#fff",
          flex: 1,
          backgroundColor: "#bd0b0b",
          padding: 10,
          borderRadius: 75,
          width: 500,
        }}
      >
        <Text
          style={{
            marginBottom: 50,
            fontWeight: "bold",
            fontSize: 30,
            color: "#fff",
          }}
        >
          CONSULTA CEP
        </Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBuscar: {
    backgroundColor: "#ce0000",
    width: 120,
    height: 60,
    marginTop: 30,
    marginEnd: 20,
    borderRadius: 10,
    textAlign: "center",
    padding: 18
  },
  textoBottom: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  },
  caixaTexto: {
    borderColor: "#0000",
    borderWidth: 2,
    padding: 15,
    fontSize: 18,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 20
  }
});
