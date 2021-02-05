/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Video from 'react-native-video';
import {ModalPortal} from 'react-native-modals';
import {Modal, ModalContent} from 'react-native-modals';
// import Orientation from 'react-native-orientation-locker';
import Orientation from 'react-native-orientation';

const App: () => React$Node = () => {
  const videoPlayer = useRef();
  const {width, height} = useWindowDimensions();
  const [visible, setVisible] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [currentOrientation, setCurrentOrientation] = useState('');

  useEffect(() => {
    // Getting initial Orientation
    const initial = Orientation.getInitialOrientation();
    setCurrentOrientation('Current Device Orientation: ' + initial);

    // Listner for orientation change LANDSCAPE / PORTRAIT
    Orientation.addOrientationListener(orientationChange);

    return () => {
      // Remember to remove listener
      Orientation.removeOrientationListener(orientationChange);
    };
  }, []);

  const orientationChange = (orientation) => {
    setCurrentOrientation('Current Device Orientation: ' + orientation);
  };

  const getCurrentOrientation = () => {
    Orientation.getOrientation((err, orientation) => {
      alert('Orientation: ' + orientation);
    });
  };

  // const handleOrientation = (orientation) => {
  //   orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
  //     ? (setFullScreen(true), StatusBar.setHidden(true))
  //     : (setFullScreen(false), StatusBar.setHidden(false));
  // };

  // useEffect(() => {
  //   // This would be inside componentDidMount()
  //   Orientation.addOrientationListener(handleOrientation);

  //   return () => {
  //     // This would be inside componentWillUnmount()
  //     Orientation.removeOrientationListener(handleOrientation);
  //   };
  // }, []);

  // useEffect(() => {
  //   Orientation.getOrientation((err, orientation) => {
  //     console.log(`Current Device Orientation: ${orientation}`);
  //     // Orientation.lockToPortrait();
  //   });

  //   // Remember to remove listener
  //   return () => {
  //     Orientation.removeOrientationListener(_orientationDidChange);
  //   };
  // }, []);

  // const _orientationDidChange = () => {
  //   const initial = Orientation.getInitialOrientation();
  //   if (initial === 'PORTRAIT') {
  //     console.log('%cApp.js line:73 "object"', 'color: #007acc;', 'object');
  //     // do something
  //   } else {
  //     console.log('%cApp.js line:76 object', 'color: #007acc;', 'object');
  //     // do something else
  //   }
  // };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Modal
          visible={visible}
          onTouchOutside={() => {
            setVisible(false);
          }}>
          <ModalContent
            style={{
              backgroundColor: 'yellow',
              width: width,
              height: height,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Video
              // source={{
              //   uri: 'http://techslides.com/demos/sample-videos/small.mp4',
              // }}
              source={{
                uri:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
              }}
              // paused={settingVideo.paused}
              // onEnd={() => onChangeConfig('end', settingVideo.end)}
              ref={(ref) => (videoPlayer.current = ref)}
              // resizeMode={fullScreen ? 'cover' : 'stretch'}
              resizeMode={'cover'}
              volume={1.0}
              style={[
                {
                  zIndex: 1000,
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').width * (9 / 16),
                  backgroundColor: 'black',
                  // width: width,
                  // height: height,
                },
                fullScreen
                  ? {
                      width: width,
                      height: height - 100,
                    }
                  : null,
              ]}
              controls={Platform.OS === 'android' ? true : true}
              // fullscreen // Bên android full screen không dùng được
            />
            <TouchableOpacity
              onPress={() => {
                setFullScreen(!fullScreen);
              }}>
              <Text>Full Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Orientation.lockToLandscape()}>
              <Text style={styles.buttonTextStyle}>
                Locks the View to Landscape Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Orientation.lockToPortrait()}>
              <Text style={styles.buttonTextStyle}>
                Locks the View to Portrait Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
              }}>
              <Text>Đóng Modal</Text>
            </TouchableOpacity>
          </ModalContent>
        </Modal>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <TouchableOpacity
            onPress={() => {
              setFullScreen(!fullScreen);
            }}>
            <Text>Full Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Orientation.lockToLandscape()}>
            <Text style={styles.buttonTextStyle}>
              Locks the View to Landscape Mode
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => Orientation.lockToPortrait()}>
            <Text style={styles.buttonTextStyle}>
              Locks the View to Portrait Mode
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setVisible(!visible);
            }}>
            <Text>Mở Modal</Text>
          </TouchableOpacity>
          {/* <Video
            // fullscreen={true}
            // fullscreenAutorotate
            // fullscreenOrientation={'all'}
            // source={{
            //   uri: 'http://techslides.com/demos/sample-videos/small.mp4',
            // }}
            source={{
              uri:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            // paused={settingVideo.paused}
            // onEnd={() => onChangeConfig('end', settingVideo.end)}
            ref={(ref) => (videoPlayer.current = ref)}
            // resizeMode={fullScreen ? 'cover' : 'stretch'}
            resizeMode={'cover'}
            volume={1.0}
            style={[
              {
                zIndex: 1000,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').width * (9 / 16),
                backgroundColor: 'black',
                // width: width,
                // height: height,
              },
              fullScreen
                ? {
                    width: width,
                    height: height,
                  }
                : null,
            ]}
            controls={Platform.OS === 'android' ? false : true}
            // fullscreen // Bên android full screen không dùng được
          /> */}
          <TouchableOpacity
            onPress={() => {
              setFullScreen(!fullScreen);
            }}>
            <Text>Full Screen</Text>
          </TouchableOpacity>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
        <ModalPortal />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    height: 500,
    width: 500,
  },
});

export default App;
