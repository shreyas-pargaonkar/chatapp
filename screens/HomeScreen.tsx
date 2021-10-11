import * as React from 'react';

import {Text,Image,View,StyleSheet,FlatList } from 'react-native';
import { color } from 'react-native-reanimated';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomData from '../dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (
  <View style={styles.page}>
     <FlatList 
      data={chatRoomData}
      renderItem={({ item}) => <ChatRoomItem chatRoom={item} /> }
      
     />
     
     
  </View>            //
  );
}
const styles = StyleSheet.create({
  page:{
    backgroundColor:'#202127',
    flex:1,
  }
});