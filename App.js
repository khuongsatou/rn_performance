import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {ProgressiveImage} from './ProgressiveComponents';
const {width} = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
const App = () => {
  return (
    <View style={styles.container}>
      <FastImage
        style={{width: 200, height: 200}}
        source={{
          uri: 'https://unsplash.it/400/400?image=1',
          // headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
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
