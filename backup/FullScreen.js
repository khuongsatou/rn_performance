import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  useWindowDimensions,
  StatusBar,
} from "react-native";
// const { width, height } = Dimensions.get("window");
import Video from "react-native-video";

import Orientation from "react-native-orientation";
const App = () => {
  const videoPlayer = useRef();
  const { width, height } = useWindowDimensions();

  const [fullScreen, setFullScreen] = useState(false);
  const [heightCurrent, setHeightCurrent] = useState(300);
  const [widthCurrent, setWidthCurrent] = useState(width);

  const [currentOrientation, setCurrentOrientation] = useState("");

  useEffect(() => {
    // Getting initial Orientation
    const initial = Orientation.getInitialOrientation();
    setCurrentOrientation("Current Device Orientation: " + initial);

    // Listner for orientation change LANDSCAPE / PORTRAIT
    Orientation.addOrientationListener(orientationChange);

    return () => {
      // Remember to remove listener
      Orientation.removeOrientationListener(orientationChange);
    };
  }, []);

  const orientationChange = (orientation) => {
    setCurrentOrientation("Current Device Orientation: " + orientation);
  };

  const getCurrentOrientation = () => {
    Orientation.getOrientation((err, orientation) => {
      alert("Orientation: " + orientation);
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"rgba(0, 0, 0, 0)"} translucent={true} />
      <View style={[fullScreen ? { transform: [{ rotate: "90deg" }] } : {}]}>
        <Video
          source={{
            uri:
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          ref={(ref) => (videoPlayer.current = ref)}
          resizeMode={"cover"}
          volume={1.0}
          style={[
            {
              zIndex: 1000,
              width: fullScreen ? height + StatusBar.currentHeight : width,
              height: fullScreen ? width + StatusBar.currentHeight : 300,
              backgroundColor: "black",
            },
          ]}
          controls={Platform.OS === "android" ? true : true}
        />
      </View>

      <TouchableOpacity
        style={[{ position: "absolute", bottom: 0, left: 0 }]}
        onPress={() => {
          console.log('%cApp.js line:78 "object"', "color: #007acc;", "object");
          setHeightCurrent(height);
          setFullScreen(!fullScreen);
        }}
      >
        <Text style={styles.buttonTextStyle}>
          Locks the View to Landscape Mode
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  // image: {
  //   width: width,
  //   height: width,
  // },
});

export default App;
