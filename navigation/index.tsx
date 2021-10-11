/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable,Text,View,Image, useWindowDimensions, } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/HomeScreen';

import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen}
       options={{headerTitle:props => <HomeHeader{...props}/> }} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} 
       options={{headerTitle:ChatRoomHeader,}}
      />   
      
   
     
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
  
     
    
    </Stack.Navigator>
  );
}



//home screen component



  const HomeHeader=(props) =>{

    const { width } = useWindowDimensions();

    return(
         <View style={{flexDirection:'row' ,
          justifyContent:'space-between',
          width:'97%',
          padding:2,
          alignItems:'center'}}>
              <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
              style={{width:30,height:30,borderRadius:30}} 
              />
              <Text style={{justifyContent:'center',alignContent:'center',fontWeight:'bold'}}>Chat</Text>
            
            <View>
              <Ionicons name="md-settings-outline" size={24} color="black" style={{marginHorizontal:3}} />
            </View>
         </View>
        
        
      
     
    )
  }

  const ChatRoomHeader=(props) =>{

    const { width } = useWindowDimensions();

    return(
         <View style={{flexDirection:'row' ,
          justifyContent:'space-between',
          width:'90%',
          marginRight:'auto',
          
          padding:2,
          alignItems:'center'}}>
              
              <Text style={{justifyContent:'center',alignContent:'center',fontWeight:'bold',flex:1,marginLeft:85}}>{props.children}</Text>
            
           
             <View>
              <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
              style={{width:30,height:30,borderRadius:30}} 
              />
            </View>
         </View>
        
        
      
     
    )
  }

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
