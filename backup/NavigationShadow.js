import React from "react";
import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import AppList from "./src";
import LinearGradient from "react-native-linear-gradient";
const App = () => {
  return (
    <View style={[{ flex: 1 }]}>
      <View style={[{ height: StatusBar.currentHeight }]}></View>
      <StatusBar translucent backgroundColor={"rgba(0,0,0,0)"} />
      <SafeAreaView style={[{ backgroundColor: "#fff" }]}>
        <Text>Title</Text>
      </SafeAreaView>
      {Platform.OS === "android" && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 2 }}
          colors={["rgba(0,0,0,0.08)", "transparent"]}
          style={{
            height: 4,
          }}
        />
      )}
      <View style={[{ flex: 1, backgroundColor: "gray" }]}>
        <AppList />
      </View>
    </View>
  );
};

export default App;
