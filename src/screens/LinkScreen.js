import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class LinkScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text >Links</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
