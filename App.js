import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

const [cep, setCep] = useState()
const [logradouro, setLogradouro] = useState()
const [bairro, setBairro] = useState()
const [cidade, setCidade] = useState()
const [uf, setUf] = useState()

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <TextInput style={{
          borderColor: "00000", borderWidth: 2, borderRadius: 10, width: 200, fontSize: 18, marginTop: 50, marginEnd: 20
        }}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        placeholder="Cep"
        />

        <TouchableOpacity style={styles.bottomBuscar}>
          <Text style={styles.textoBottom}>
            BUSCAR
          </Text>
        </TouchableOpacity>
      </View>

        <TextInput style = {styles.caixaTexto}
        value={logradouro}
        onChangeText={(texto) => setCep(texto)}
        placeholder="Logradouro"
        />

        <TextInput style = {styles.caixaTexto}
        value={bairro}
        onChangeText={(texto) => setCep(texto)}
        placeholder="Bairro"
        />

        <TextInput style = {styles.caixaTexto}
        value={cidade}
        onChangeText={(texto) => setCep(texto)}
        placeholder="Cidade"
        />

        <TextInput style = {styles.caixaTexto}
        value={uf}
        onChangeText={(texto) => setCep(texto)}
        placeholder="Uf"
        />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
