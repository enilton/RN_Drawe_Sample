import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class SettingsScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text >Settings</Text>
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
