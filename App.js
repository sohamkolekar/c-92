
import React from 'react';

import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import MyHeader from './components/MyHeader'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import MyCalendar from './components/MyTodo'



export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
      <View>
        <MyHeader/>
        <MyCalendar/>
      </View>
    </SafeAreaProvider>
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
