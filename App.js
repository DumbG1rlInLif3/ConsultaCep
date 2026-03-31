import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
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
});
