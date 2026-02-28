//react native components
import {Button, Text, View, StyleSheet, TextInput, ActivityIndicator } from "react-native";
//expo components 
import { Image } from "expo-image";
import { Link ,useRouter } from "expo-router"

export default function Index() {
    const router = useRouter(); // 2. Initialize the router
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTile}>welcome to native </Text>
      <TextInput placeholder="Email"/>
      <ActivityIndicator size={"large"}/>
      <Link href={"/about"}
      style={styles.link}
      >Go To About Screen</Link>
      <Button
          title="About Bage"
          onPress={() => router.push("/about")}
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
  helloWorldTile:{
    color:"black"
  },
  image:{
    width:200,
    height:200
  },
  link:{
    color:"red"
  }
});
