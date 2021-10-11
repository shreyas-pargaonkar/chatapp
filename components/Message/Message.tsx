import React from 'react'
import { View, Text,StyleSheet } from 'react-native';

const pink="#FF3E71"
const purple="#909BC6"

const myID ='u1';

const Message = ({message}) => {
    const isME =message.user.id==myID;
    return (
        <View style={[styles.container,isME ? styles.leftContainer:styles.meContainer]}>
            <Text style={styles.text}>{message.content}</Text>
        </View>
    )
}
const styles= StyleSheet.create({ 
    container:{ 
        backgroundColor:'#FF3E71',
        padding:10,
        margin:10,
        borderRadius:19,
        maxWidth:'75%',
        
      },
    text:{
        color:"#fafafa", 
    },
    leftContainer:{
        backgroundColor:pink ,
        marginLeft:10 ,
        marginRight:'auto' ,
    }, 
    meContainer: {
        backgroundColor:purple ,
        marginLeft: 'auto',
        marginRight:10 ,
    } ,
   
    
});

export default Message;
