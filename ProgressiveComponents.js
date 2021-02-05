import React from 'react';
import {Image, StyleSheet, View, Animated} from 'react-native';

export const ProgressiveImage = ({
  source,
  style,
  resizeMode,
  thumbnailSource,
}) => {
  //khởi tao Animated cho thumnail và image large
  const thumbnailAnimated = new Animated.Value(0);
  const imageAnimated = new Animated.Value(0);

  //Khi tải hình nhỏ, ta sẽ đặt hình nhỏ thành 1
  //Khi tải hình ảnh đầy đủ, sẽ đặt imageAnimated thành 1
  //2 function phía dưới sẽ được gọi trong onLoad()
  const handleThumbnailLoad = () => {
    Animated.timing(thumbnailAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  const onImageLoad = () => {
    Animated.timing(imageAnimated, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={thumbnailSource}
        style={[style, {opacity: thumbnailAnimated}]}
        resizeMode={resizeMode}
        onLoad={handleThumbnailLoad}
        blurRadius={1}
      />
      <Animated.Image
        source={source}
        style={[styles.imageOverlay, {opacity: imageAnimated}, style]}
        resizeMode={resizeMode}
        onLoad={onImageLoad}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});
