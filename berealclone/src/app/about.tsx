//react native components
import { Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
//expo components 
import { Image } from "expo-image";

export default function About() {
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://cdn.pixabay.com/photo/2026/02/17/14/46/xusenru-aral-sea-10129034_1280.jpg"}}
      style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:200,
    height:200
  }
});
