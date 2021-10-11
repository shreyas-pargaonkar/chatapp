import React, {useState} from 'react'
import { View, Text,StyleSheet,TextInput,Pressable,KeyboardAvoidingView } from 'react-native';
import { FontAwesome, Feather,SimpleLineIcons, Entypo, Ionicons } from '@expo/vector-icons';


const Messageinput = () => {
    const [message, setMessage]= useState('');



    const sendMessage = () => {
        //send message
        console.warn("sending:",message);
        
        setMessage('');
    }

    const onCameraClicked =() => {
        console.warn("on Camera clicked");
    }

const onPress=()=>{
    if(message){
        sendMessage();
    }
    else{
        onCameraClicked();
    }
}

    return (
        <View style={styles.root}>
           <View style={styles.inputcontainer}>
           <FontAwesome name="smile-o" size={24} color="#F4F3F3" style={styles.emojiicon} />
                <TextInput 
                     style={styles.input}
                     value={message}
                     onChangeText={setMessage}
                      placeholder="message..."

                />
               
                <SimpleLineIcons name="microphone" size={24} color="#F4F3F3" />
           </View>
           <Pressable onPress={onPress} style={styles.buttonContainer}>
          {message ?<Ionicons name="ios-send-outline" size={24} color="#F4F3F3" /> : <Feather name="camera" size={24} color="#F4F3F3" /> 
            }
           </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    root:{
       flexDirection:'row',
    },
    inputcontainer:{
        backgroundColor:"#3E3E41",
        flex:1,
        marginRight:5,
        borderRadius:25,
        alignItems:'center',
        borderWidth:1,
        flexDirection:'row',
        padding:10,

    },
    input:{
        flex:1,
        marginHorizontal:5,
        color:"#fafafa",
    },
    emojiicon:{
        marginHorizontal:4,
    },
    buttonContainer:{
        width:50,
        height:50,
        backgroundColor:"#232323",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.4,
        borderColor:"#F4F3F3",
        

    },
    buttontext:{
        color:"#fafafa",
        fontSize:35,


    }
    

});

export default Messageinput
