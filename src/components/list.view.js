import React, { Component, PropTypes } from "react";
import { ScrollView, FlatList } from "react-native";
import ListItem from "./list.item.js";

class ListView extends Component {
  //   static propTypes = {
  //     ...ScrollView.propTypes,
  //     data: PropTypes.array.isRequired,
  //     onClick: PropTypes.func,
  //   };

  constructor(props) {
    super(props);
    // let dataSource = new RNListView.DataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2,
    // });
    // this.state = {
    //   dataSource: dataSource.cloneWithRows(this.props.data),
    // };
  }

  render() {
    console.log(
      "%clist.view.js line:23 object",
      "color: #007acc;",
      this.props.data
    );
    return (
      <FlatList
        style={this.props.style}
        contentStyle={{ flex: 1, backgroundColor: "gray" }}
        data={this.props.data}
        renderItem={({ item, index }) => {
          return (
            <ListItem
              index={index}
              title={item.title}
              subtitle={item.subtitle}
              onClick={() => this.props.onClick(item)}
            />
          );
        }}
        renderSeparator={this.renderSeparator}
        keyExtractor={(item, index) => item.title}
      />
    );
  }
}

export default ListView;
