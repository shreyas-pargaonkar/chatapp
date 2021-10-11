import * as React from 'react';
import {Text,Image,View,StyleSheet,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
export default function ChatRoomItem({ chatRoom }){
    const users =chatRoom.users[1];

    const navigation=useNavigation();

    const onPress=() =>{
       navigation.navigate('ChatRoom',{id:chatRoom.id});
    }
    return(
        <Pressable onPress={onPress} style={styles.container}>
     <Image source={{uri: users.imageUri}} style={styles.image}/>
  { chatRoom.newMessages?
    <View style={styles.dpbadge}><Text style={styles.dpbadgetext}>{chatRoom.newMessages}</Text></View>
    :null
  }
     <View style={styles.right}>
        <View style={styles.row}>
         <Text style={styles.name}>{users.name}</Text>  
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>{chatRoom.lastMessage.content} </Text>
     </View>
   </Pressable>
    );
}




const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      padding:15,
     
  
    },
    image:{
      height:57,
      width:57,
      borderRadius:30,
      marginRight:10,
    },
    dpbadge:{
      backgroundColor:"#FF3E71",
      width:20,
      height:20,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:50,
      top:8,
      borderWidth:0.5,
      borderColor:"#fafafa",
    },
    dpbadgetext:{
     color:"#fafafa",
     fontSize:12,
    },
    right:{
      flex:1,
      justifyContent:'center',
      
     },
    row:{
     flexDirection:'row',   
     justifyContent:'space-between'
    },
    
    name:{
     
     color:"#fafafa",
     fontSize:19,
     fontWeight:'bold',
     marginBottom:3,
    },
   text:{
     
     color:"#BDBDBD",
     fontSize:15,
   }
  });