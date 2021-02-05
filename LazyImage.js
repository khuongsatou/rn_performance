import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {ProgressiveImage} from './ProgressiveComponents';
const {width} = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        source={require('./rem.jpg')}
        style={styles.image}
        resizeMode="cover"
      />   */}
      {/* <ProgressiveImage
        source={require('./rem.jpg')}
        style={styles.image}
        resizeMode="cover"
      /> */}
      <ProgressiveImage
        thumbnailSource={require('./rem.jpg')}
        source={require('./rem.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width,
    height: width,
  },
});

export default App;
