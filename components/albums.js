import React, { useContext, useState } from 'react'
import { View, Text, Image, FlatList, TouchableWithoutFeedback, Animated } from 'react-native'
import { useFonts } from 'expo-font';

import { AppProvider } from '../App'

export default function Albums() {
    const [loaded] = useFonts({
        Pacifico: require('../assets/fonts/pacifico.ttf'),
    });
    
    const { height } = useContext(AppProvider)

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

    const _onScroll = function(event) {
        console.log(event.nativeEvent.contentOffset.y)
    }

    const [offsetY, setOffsetY] = useState(0)

    return <View style={{ flex: 1, flexDirection: 'row' }}>
        <FlatList
            scrollEnabled={true}
            scrollEventThrottle={1}
            persistentScrollbar={true}
            // onScroll={(e) => {
            //     console.log(">>>> scrolled to", e.nativeEvent.contentOffset.y, e);
            //     setOffsetY(e.nativeEvent.contentOffset.y)
            //     console.log(offsetY)
            // }}
            onScroll={(event) => console.log(event.nativeEvent.contentOffset)}
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
            keyExtractor={item => `${item.id}-${Math.random()}`}
            renderItem={({ item, index, separators }) => {
                return <TouchableWithoutFeedback
                    key={item.key}
                    onPress={() => _onPress(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                    <View style={{ width: 187, height: 'fit-content' }}>
                        <Image style={{ width: 'inherit', height: 256 }} source={item.thumbnail} />
                        <View style={{
                            position: 'absolute',
                            bottom: 0,
                            background: 'linear-gradient(90deg, rgba(52,46,153,1) 0%, rgba(44,87,184,1) 38%, rgba(39,120,199,1) 100%)',
                            width: '100%',
                            color: 'white',
                            padding: 10
                        }}>
                            <Text numberOfLines={1} style={[global.songName, { color: 'white', fontSize: 20, fontWeight: 'bold', fontFamily: 'Pacifico' }]}>{item.songName}</Text>
                            <Text numberOfLines={1} style={[global.songName, { color: 'white', fontSize: 20 }]}>{item.songAuthor}</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            }}
        />
    </View>
}