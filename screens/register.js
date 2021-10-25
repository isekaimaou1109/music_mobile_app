import React, { useContext, useState } from 'react'
import { View, Image, TextInput, Text, Alert, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'

import { styles } from '../styles/main'
import { global } from '../styles/global'
import avatar from '../assets/avatar.jpg'
import { getUser } from '../db'
import { AppProvider } from '../App'

export default function LoginScreen() {
    const dimensions = useContext(AppProvider)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const regex = /[^<>\/$%]+/gm

    const _onChangeUsername = ({ target }) => setUsername(target.value)
    const _onChangePassword = ({ target }) => setPassword(target.value)

    const _onSubmit = ({ key }) => {
        if(username.length >= 12) {
            if(regex.test(username)) {
                Promise.resolve(getUser(username, password)).then(result => {
                    if(!result) {
                        Alert.alert('Wrong Login', 'username or password not match format')
                    } else {
                        console.log(result)
                    }
                }).catch(e => console.error(e))
            } else {
                Alert.alert('Wrong Login', 'username not match format')
            }
        } else {
            Alert.alert('Wrong Login', 'username length is not enough')
        }
    }

    return <View style={global.align}>
        <Image
            source={avatar}
            style={[styles.imageSize, { width: 128, height: 128 }]}
        />

        <Text style={global.title}>Register</Text>
        <View>
            <View style={{ display: 'grid', gridTemplateColumns: 'min-content min-content', gridColumnGap: 10 }}>
                <TextInput 
                    multiline={false} 
                    placeholder="Firstname"
                    maxLength={16}
                    placeholderTextColor="#888" 
                    autoCorrect={false}
                    contextMenuHidden={true}
                    style={[global.input, { width: 'fit-content' }]}
                    onChange={(event) => _onChangeUsername(event)}
                />
                <TextInput 
                    multiline={false} 
                    placeholder="Lastname"
                    maxLength={16}
                    placeholderTextColor="#888" 
                    autoCorrect={false}
                    contextMenuHidden={true}
                    style={[global.input, { width: 'fit-content' }]}
                    onChange={(event) => _onChangeUsername(event)}
                />
            </View>
            <TextInput 
                multiline={false}
                placeholder="Username"
                contextMenuHidden={true}
                placeholderTextColor="#888" 
                autoCorrect={false}
                secureTextEntry={true}
                style={[global.input, { width: '100%' }]}
                onChange={(event) => _onChangePassword(event)}
            />

            <TextInput 
                multiline={false}
                placeholder="Password"
                contextMenuHidden={true}
                placeholderTextColor="#888" 
                autoCorrect={false}
                secureTextEntry={true}
                style={[global.input, { width: '100%' }]}
                onChange={(event) => _onChangePassword(event)}
            />

            <TextInput 
                multiline={false}
                placeholder="Confirm Password"
                contextMenuHidden={true}
                placeholderTextColor="#888" 
                autoCorrect={false}
                secureTextEntry={true}
                style={[global.input, { width: '100%' }]}
                onChange={(event) => _onChangePassword(event)}
            />

            <CheckBox
                title='Click Here to Remove This Item'
                containerStyle={{ border: 'none', backgroundColor: 'transparent', marginHorizontal: 0, paddingHorizontal: 0, marginVertical: 0 }}
            />

            <TouchableOpacity onPress={(event) => _onSubmit(event)} style={global.button}>
                <Text style={{ color: '#fff' }}>Register</Text>
            </TouchableOpacity>
        </View>
    </View>
}