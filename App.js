import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <DrawerNavigator />
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
