import React from "react";
import {Text,View,StyleSheet,FlatList,SafeAreaView} from 'react-native';
import { useRoute,useNavigation} from "@react-navigation/core";
import Message from "../components/Message";
import ChatRoomData from "../dummy-data/Chats";
import Messageinput from "../components/messageInput/Messageinput";

export default function ChatRoomScreen(){
    const route= useRoute();
    const navigation = useNavigation();
   
    console.warn("displaying chat room ",route.params?.id)

    navigation.setOptions({title:'Elon Musk'})
    
 return (
    <SafeAreaView style={styles.page}>
        <FlatList
        data={ChatRoomData.messages}
        renderItem={({ item}) => <Message message={item} />}
        inverted
        />
        <Messageinput />
    </SafeAreaView> 
 )

};

const styles=StyleSheet.create({
    page:{
        backgroundColor:'#202127',
        flex:1,
    }
})