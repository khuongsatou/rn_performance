import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
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
      <View style={[{ flex: 1 }]}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: "#fff",
            marginBottom: Platform.OS === "android" ? 0 : 16,
            width: 100,
            height: 100,
            marginTop: 10,
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "center",

            //iOS stuff
            shadowOffset: { width: 0, height: 2 },
            shadowColor: "rgba(0,0,0,0.03)",
            shadowOpacity: 1,
            shadowRadius: 4,
          }}
          onPress={() => {}}
        >
          <Text>123</Text>
        </TouchableOpacity>
        {Platform.OS === "android" && (
          <View style={{ marginBottom: 12, width: 100, marginLeft: 10 }}>
            <LinearGradient
              colors={["rgba(0,0,0,0.5)", "transparent"]}
              style={{
                left: 0,
                right: 0,
                height: 4,
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default App;
