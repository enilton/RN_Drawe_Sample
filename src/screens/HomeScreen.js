import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MenuButton from '../components/MenuButton';

export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
       <MenuButton />
        <Text >Home</Text>
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
