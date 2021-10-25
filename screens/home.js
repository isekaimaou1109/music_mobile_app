import React, { useState, useContext } from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card } from 'react-native-elements'

import { styles } from '../styles/main'
import { global } from '../styles/global'

import avatar from '../assets/avatar.jpg'

import AlbumsScreen from '../components/albums'
import { AppProvider } from '../App'

const Tab = createMaterialTopTabNavigator();

function SongsScreen() {
    return <View>Song screen</View>
}

function ArtistsScreen() {
    return <h1>Artists screen</h1>
}

export default function Home() {
    const { height, currentScrollHeight } = useContext(AppProvider)

    return <View>
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                // position: 'fixed',
                // zIndex: 3000,
                // width: '100%'
            },
            tabBarActiveTintColor: '#888',
            tabBarLabelStyle: { fontSize: 15 },
            tabBarIndicatorStyle: {
                backgroundColor: 'red'
            }
        }}>
            <Tab.Screen name="Songs" component={SongsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
            <Tab.Screen name="Artists" component={ArtistsScreen} />
        </Tab.Navigator>
    </View>
}





{/* <View style={{ position: 'relative', padding: 10 }}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
            <View>
                <Image style={{ width: 80, height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 20 }} source={avatar} />
                <Text>Tanmoshi op</Text>
                <Text>Yakitory</Text>
            </View>

            <View>
                <Image style={{ width: 80, height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 20 }} source={avatar} />
                <Text>Tanmoshi op</Text>
                <Text>Yakitory</Text>
            </View>

            <View>
                <Image style={{ width: 80, height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 20 }} source={avatar} />
                <Text>Tanmoshi op</Text>
                <Text>Yakitory</Text>
            </View>

            <View>
                <Image style={{ width: 80, height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 20 }} source={avatar} />
                <Text>Tanmoshi op</Text>
                <Text>Yakitory</Text>
            </View>

            <View>
                <Image style={{ width: 80, height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 20 }} source={avatar} />
                <Text>Tanmoshi op</Text>
                <Text>Yakitory</Text>
            </View>

            <View>
                <Image style={{ width: 80, height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 5, borderBottomLeftRadius: 5, borderBottomRightRadius: 20 }} source={avatar} />
                <Text>Tanmoshi op</Text>
                <Text>Yakitory</Text>
            </View>
        </View>
    </View> */}