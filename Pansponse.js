import React, {useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
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
const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [enableScrollOut, setEnableScrollOut] = React.useState(true);
  const [enableScrollIn, setEnableScrollIn] = React.useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // Chạm vào
      onPanResponderGrant: (evt, gestureState) => {
        console.log(
          '%cApp.js line:11 object',
          gestureState,
          pan.x._value,
          pan.y._value,
        );
        // pan.setOffset({
        //   x: pan.x._value,
        //   y: pan.y._value,
        // });
        if (enableScrollOut) {
          setEnableScrollOut(false);
          setEnableScrollIn(true);
        }
      },
      // Duy chuyển
      onPanResponderMove: (e, gestureState) => {
        console.log([e, gestureState]);
        // return Animated.event([null, {dx: pan.x, dy: pan.y}], {
        //   useNativeDriver: false,
        // })(e, gestureState);
        if (enableScrollOut) {
          setEnableScrollOut(false);
          setEnableScrollIn(true);
        }
      },

      // Buôn ra
      onPanResponderRelease: () => {
        // pan.flattenOffset();
      },

      // onPanResponderRelease: (e, gestureState) => {
      //   console.log(JSON.stringify(gestureState));
      // },
    }),
  ).current;

  const panResponder2 = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      // Chạm vào
      onPanResponderGrant: (evt, gestureState) => {
        console.log(
          '%cApp.js line:11 object',
          gestureState,
          pan.x._value,
          pan.y._value,
        );
        // pan.setOffset({
        //   x: pan.x._value,
        //   y: pan.y._value,
        // });
        if (enableScrollOut) {
          setEnableScrollOut(true);
          setEnableScrollIn(false);
        }
      },
      // Duy chuyển
      onPanResponderMove: (e, gestureState) => {
        console.log([e, gestureState]);
        // return Animated.event([null, {dx: pan.x, dy: pan.y}], {
        //   useNativeDriver: false,
        // })(e, gestureState);
        if (enableScrollOut) {
          setEnableScrollOut(true);
          setEnableScrollIn(false);
        }
      },

      // Buôn ra
      onPanResponderRelease: () => {
        // pan.flattenOffset();
      },

      // onPanResponderRelease: (e, gestureState) => {
      //   console.log(JSON.stringify(gestureState));
      // },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <Text style={styles.titleText}>Drag this box!</Text>

      <ScrollView
        // onResponderMove={() => {
        //   console.log('outer responding out');
        //   setEnableScrollOut(true);
        // }}
        scrollEnabled={enableScrollOut}
        contentInsetAdjustmentBehavior="automatic"
        style={[styles.scrollView, {zIndex: 100}]}>
        <Animated.View
          style={{
            transform: [{translateX: pan.x}, {translateY: pan.y}],
            zIndex: 100,
          }}
          // {...panResponder.panHandlers}
        >
          <View style={styles.box}>
            <Animated.ScrollView
              // onResponderMove={() => {
              //   console.log('outer responding in');
              //   setEnableScrollOut(false);
              // }}
              scrollEnabled={enableScrollIn}
              contentInsetAdjustmentBehavior="automatic"
              style={[
                styles.scrollView,
                {zIndex: -100, backgroundColor: 'red'},
              ]}>
              <Animated.View
                style={[{backgroundColor: 'green'}]}
                {...panResponder.panHandlers}>
                <TouchableOpacity onPress={() => {}}>
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
                      Edit <Text style={styles.highlight}>App.js</Text> to
                      change this screen and then come back to see your edits.
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
              </Animated.View>
            </Animated.ScrollView>
          </View>
        </Animated.View>
        <Animated.View
          {...panResponder2.panHandlers}
          style={[{backgroundColor: 'yellow'}]}>
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
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 250,
    width: 350,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default App;
