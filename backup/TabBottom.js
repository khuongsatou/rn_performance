import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  useWindowDimensions,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");

const data = [
  {
    name: "Trang chủ",
    icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Vector@3x_1605508965283.png",
      type: "png",
    },
    active_icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Vector (2)_1605508993575.png",
      type: "png",
    },
    order: 1,
    redirect_url: "home",
    color_code: "#FFFFFF",
    notification_ids: [],
  },
  {
    name: "Bài viết",
    icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Vector@2x_1605509015629.png",
      type: "png",
    },
    active_icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Vector (3)_1605509041922.png",
      type: "png",
    },
    order: 2,
    redirect_url: "post",
    color_code: "#FFFFFF",
    notification_ids: [],
  },
  {
    name: "Các bé",
    icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Vector_1605509085994.png",
      type: "png",
    },
    active_icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Vector (4)_1605509103834.png",
      type: "png",
    },
    order: 3,
    redirect_url: "children",
    color_code: "#FFFFFF",
    notification_ids: [],
  },
  {
    name: "Liên lạc",
    icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Group 2030_1605509136045.png",
      type: "png",
    },
    active_icon_url: {
      path:
        "https://kidbox.vn/media/2020/11/16/Group 2030 (1)_1605509154597.png",
      type: "png",
    },
    order: 4,
    redirect_url: "contacts",
    color_code: "#FFFFFF",
    notification_ids: [],
  },
  {
    name: "Tài khoản",
    icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Vector (1)_1605509230360.png",
      type: "png",
    },
    active_icon_url: {
      path: "https://kidbox.vn/media/2020/11/16/Vector (5)_1605509252004.png",
      type: "png",
    },
    order: 5,
    redirect_url: "account",
    color_code: "#FFFFFF",
    notification_ids: [],
  },
];

const renderTabBar = (item, index, idActive = [], onPress = () => {}) => {
  const active = idActive.includes(item.order);
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      key={index}
      style={{
        flexDirection: "column",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          height: 2,
          backgroundColor: active ? "#FC6B7B" : "#fff",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        }}
      />
      <Image
        source={
          active
            ? { uri: item.active_icon_url.path }
            : { uri: item.icon_url.path }
        }
        resizeMode="contain"
        style={[{ width: 20, height: 20, marginTop: 8 }]}
      />
      <Text
        style={[
          // Styles.vDescriptionSmallSan,
          {
            fontSize: 12,
            marginTop: 8,
            color: active ? "#FC6B7B" : "#77869E",
            fontWeight: active ? "600" : "400",
          },
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const renderComponntKey = (key) => {
  switch (key) {
    case "home":
      return home;
    case "post":
      return post;
    case "children":
      return children;
    case "contacts":
      return contacts;
  }
  return account;
};

const App = () => {
  const { width } = useWindowDimensions();
  // const [tab, setTab] = React.useState(data);
  const [idActive, setIdActive] = useState([1]);
  const onPress = (item) => {
    setIdActive([item.order]);
  };

  return (
    <View style={styles.container}>
      <View
        style={[{ position: "absolute", bottom: 0, left: 0, width: width }]}
      >
        <View
          style={{
            height: 82,
            // backgroundColor: "red",
            width: "100%",
            flexDirection: "row",
            // marginBottom: 20,
          }}
        >
          {data.map((item, index) =>
            renderTabBar(item, index, idActive, onPress)
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  // image: {
  //   width: width,
  //   height: width,
  // },
});

export default App;
