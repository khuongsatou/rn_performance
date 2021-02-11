import React from 'react';
import {
  Platform,
  PixelRatio,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
// import {useWindowDimensions} from 'react-native';
export const screenWidth = Math.round(Dimensions.get('window').width);
export const screenHeight = Math.round(Dimensions.get('window').height);
// export const screenWidth = Math.round(Dimensions.get('window').width);
// export const screenHeight = Math.round(Dimensions.get('window').height);
// ui được thiết kế cho size màn hình là (414*896) IPHONE 11
// ui được thiết kế cho size android màn hình là (384*592) Nexus 4
// ui được thiết kế cho size android màn hình là (320*568) Nexus 4
// Check devices.
// PixelRatio.get() === 1 mdpi
// PixelRatio.get() === 1.5 hdpi
// PixelRatio.get() === 2 hdpi
// PixelRatio.get() === 3 xxhdpi
// PixelRatio.get() === 3.5 xxhdpi

export const cad = Platform.OS === 'android';

// export const checkScreen = () => {
//   const {width, height} = useWindowDimensions();
//   return {width, height};
// };

// export const screenWidth = Math.round(checkScreen().width);
// export const screenHeight = Math.round(checkScreen().height);

export const checkDevices = () => {
  // console.log(
  //   '%cResponsive.js line:17 screenWidth',
  //   'color: #007acc;',
  //   screenWidth,
  // );
  // console.log(
  //   '%cResponsive.js line:17 screenHeight',
  //   'color: #007acc;',
  //   screenHeight,
  // );
  // console.log(
  //   '%cResponsive.js line:19 PixelRatio',
  //   'color: #007acc;',
  //   PixelRatio.get(),
  // );
  // Hiển thị đẹp nhất android và ios tối thiểu
  // Nexus 4 and Iphone 5
  const objDevices = {
    standarWidth: cad ? 384 : 320, // android : ios
    standarHeight: cad ? 592 : 568,
  };

  if (screenWidth >= 300 && screenHeight >= 500) {
    // Iphone 11
    objDevices['standarWidth'] = cad ? 384 : screenWidth;
    objDevices['standarHeight'] = cad ? 592 : screenHeight;
    // Nexus S
  }
  // switch (PixelRatio.get()) {
  //   case 1:
  //   //   return;
  //   case 1.5:
  //     // 4.7 in dp w= 384 and h=640 nexus 4
  //     objDevices['standarWidth'] = cad ? 420 : 414;
  //     objDevices['standarHeight'] = cad ? 633 : 896;
  //     return objDevices;

  //   case 2:
  //     //Iphone 11: xhdpi 6.1 inch
  //     if (screenWidth >= 410 && screenHeight >= 890) {
  //       // Iphone 11
  //       objDevices['standarWidth'] = cad ? 384 : 414;
  //       objDevices['standarHeight'] = cad ? 592 : 896;
  //       // Nexus S
  //     } else if (screenWidth >= 380 && screenHeight >= 550) {
  //       console.log('%cResponsive.js line:54 "OK"', 'color: #007acc;', 'OK');
  //       objDevices['standarWidth'] = cad ? 384 : 414;
  //       objDevices['standarHeight'] = cad ? 592 : 896;
  //     }
  //     return objDevices;
  //   case 3:
  //     //Iphone 11 ProMax: xhdpi 6.1 inch
  //     //Iphone 12 : xxhdpi 5.3 inch
  //     if (screenWidth >= 390 && screenHeight >= 844) {
  //       objDevices['standarWidth'] = cad ? 384 : 390;
  //       objDevices['standarHeight'] = cad ? 592 : 844;
  //     } else if (screenWidth >= 414 && screenHeight >= 736) {
  //       objDevices['standarWidth'] = cad ? 384 : screenWidth;
  //       objDevices['standarHeight'] = cad ? 592 : screenHeight;
  //     }

  //     return objDevices;
  //   case 3.5:
  //     //Google Pixel XL xxhdpi
  //     console.log('%cResponsive.js line:68 here"', 'color: #007acc;', 'here');
  //     if (screenWidth >= 410 && screenHeight >= 680) {
  //       console.log('%cResponsive.js line:63 1', 'color: #007acc;', 1);
  //       objDevices['standarWidth'] = cad ? 410 : 414;
  //       objDevices['standarHeight'] = cad ? 680 : 896;
  //     }
  //     return objDevices;
  // }

  return objDevices;
};

const {standarWidth, standarHeight} = checkDevices();

// width
export const rsw = size => {
  return PixelRatio.roundToNearestPixel((size / standarWidth) * screenWidth);
};

// fontSize
export const rsf = size => {
  return rsw(size);
};

// height and lineHeight
export const rsh = size => {
  return PixelRatio.roundToNearestPixel((size / standarHeight) * screenHeight);
};

// borderRadius
export const rsb = size => {
  return rsh(size);
};

// padding 4 hướng
export const rsp = size => {
  return rsw(size);
};

// Image 4 hướng
export const rsi = size => {
  return rsw(size);
};
