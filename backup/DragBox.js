//How can I create a drag and drop action in React native?
// https://stackoverflow.com/questions/62572454/limiting-addeventlistener-to-componentdidmount-using-useeffect-hook
export default class Viewport extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDraggable: true,
      dropZoneValues: null,
      pan: new Animated.ValueXY(),
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropZone(gesture)) {
          this.setState({
            showDraggable: false,
          });
        } else {
          Animated.spring(this.state.pan, {toValue: {x: 0, y: 0}}).start();
        }
      },
    });
  }

  isDropZone(gesture) {
    var dz = this.state.dropZoneValues;
    return gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height;
  }

  setDropZoneValues(event) {
    this.setState({
      dropZoneValues: event.nativeEvent.layout,
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View
          onLayout={this.setDropZoneValues.bind(this)}
          style={styles.dropZone}>
          <Text style={styles.text}>Drop me here!</Text>
        </View>

        {this.renderDraggable()}
      </View>
    );
  }

  renderDraggable() {
    if (this.state.showDraggable) {
      return (
        <View style={styles.draggableContainer}>
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[this.state.pan.getLayout(), styles.circle]}>
            <Text style={styles.text}>Drag me!</Text>
          </Animated.View>
        </View>
      );
    }
  }
}
