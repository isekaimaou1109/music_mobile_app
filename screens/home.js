import React, { useState } from 'react'
import { View, Text, Image, FlatList, TouchableWithoutFeedback } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Card } from 'react-native-elements'

import { styles } from '../styles/main'
import { global } from '../styles/global'

import avatar from '../assets/avatar.jpg'

const Tab = createMaterialTopTabNavigator();

function SongsScreen() {
    const data = [
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        },
        {
            songName: 'koko de ikiteru',
            songAuthor: 'Mary x jon-YAKITORY',
            thumbnail: require('../assets/1.jpg')
        }
    ]

    const _onPress = function(item) {
        console.log(item)
    }

    return <FlatList
        contentContainerStyle={{ 
            backgroundColor: 'white'
        }}
        columnWrapperStyle={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20
        }}
        data={data}
        numColumns={2}
        renderItem={({ item, index, separators }) => {
            return <TouchableWithoutFeedback
                key={item.key}
                onPress={() => _onPress(item)}
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View>
                    <Image style={{ width: 144, height: 208 }} source={item.thumbnail} />
                    <Text style={global.songName, { fontSize: 18, fontWeight: 'bold' }}>{item.songName}</Text>
                    <Text style={global.songName, { fontSize: 12 }}>{item.songAuthor}</Text>
                </View>
            </TouchableWithoutFeedback>
        }}
    />
}

function AlbumsScreen() {
    return <h1>Albums screen</h1>
}

function ArtistsScreen() {
    return <h1>Artists screen</h1>
}

export default function Home() {
    return <View>
        <Tab.Navigator screenOptions={{
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