import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
const {width,height} = Dimensions.get('window');

export default class Notifications extends React.Component{
    render(){
        return (
                <View style={styles.container}>
                <Text>Notifications</Text>
                </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


