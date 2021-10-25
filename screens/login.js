import React, { useContext, useState } from 'react'
import { View, Image, TextInput, Text, Linking, Alert, Button, TouchableOpacity } from 'react-native'

import { styles } from '../styles/main'
import { global } from '../styles/global'
import avatar from '../assets/avatar.jpg'
import { getUser } from '../db'
import { AppProvider } from '../App'

export default function LoginScreen() {
    const dimensions = useContext(AppProvider)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
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

        <Text style={global.title}>Login</Text>
        <View>
            <TextInput 
                multiline={false} 
                placeholder="Username"
                maxLength={16}
                placeholderTextColor="#888" 
                autoCorrect={false}
                contextMenuHidden={true}
                style={[global.input, { width: dimensions.width > 600 ? 500: 300 }]}
                onChange={(event) => _onChangeUsername(event)}
            />
            <TextInput 
                multiline={false}
                placeholder="Password"
                contextMenuHidden={true}
                placeholderTextColor="#888" 
                autoCorrect={false}
                secureTextEntry={true}
                style={[global.input, { width: dimensions.width > 600 ? 500: 300 }]}
                onChange={(event) => _onChangePassword(event)}
            />
            <Text style={global.forgotPassword} onPress={() => Linking.openURL('http://google.com')}>Forgot your Password?</Text>

            <TouchableOpacity onPress={(event) => _onSubmit(event)} style={global.button}>
                <Text style={{ color: '#fff' }}>Login</Text>
            </TouchableOpacity>
        </View>

        <Text style={global.pre}>
            Don't have an account? {""}
            <Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://google.com')}>Sign Up</Text>
        </Text>
    </View>
}