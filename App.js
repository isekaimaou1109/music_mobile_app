import * as React from 'react';
import { 
  Pressable, 
  View, 
  StyleSheet, 
  Text, 
  SafeAreaView,
  Image,
  TouchableHighlight,
  Animated,
  Alert,
  Modal,
  Dimensions
} from 'react-native';
import {
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
  NavigationContainer
} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as Font from 'expo-font';

import { styles } from './styles/main'
import avatar from './assets/avatar.jpg'

import LoginScreen from './screens/login';
import RegisterScreen from './screens/register';
import HomeScreen from './screens/home';

export const AppProvider = React.createContext(null)

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  const { width, height } = Dimensions.get("window");
  
  const [fontLoaded, setFontLoaded] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({ width, height });
  
  // console.log(state)
  // console.log(navigation)
  // console.log(descriptors)

  async function loadFonts() {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Nunito: require('./assets/fonts/nunito.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      Pacifico: require('./assets/fonts/nunito.ttf')
    });
    setFontLoaded(true);
  }

  const _onLongPressButton = function() {
    setModalVisible(!modalVisible);
  }

  React.useEffect(() => {
    loadFonts()

    const subscription = Dimensions.addEventListener(
      "change",
      ({ window }) => {
        setDimensions({ width: window.width, height: window.height });
      }
    );
    return () => subscription?.remove();
  }, [width, height])

  return (
    <AppProvider.Provider value={{ width: dimensions.width, height: dimensions.height }}>
      <NavigationContent>
        <SafeAreaView style={styles.justifyMenuSpace}>
          {
            state.routes.map((route, index) => {
              return <>
                {/* menu 1 */}
                <TouchableHighlight key={`touchablehighlight-${index}`} activeOpacity={0.5} onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!event.defaultPrevented) {
                    console.log(TabActions)
                    navigation.dispatch({
                      ...TabActions.jumpTo(route.name),
                      target: state.key,
                    });
                  }
                }} onLongPress={_onLongPressButton} underlayColor="transparent">
                  <View style={styles.justifyImage}>
                    <Image
                      source={avatar}
                      style={styles.imageSize}
                    />
                    <Image
                      source={avatar}
                      style={[styles.imageSize, styles.secondImage]}
                    />
                  </View>
                </TouchableHighlight>
              </>
            })
          }
        </SafeAreaView>

        <SafeAreaView style={[{ flex: 1 }, contentStyle]}>
          {state.routes.map((route, i) => {
            return (
              <View
                key={route.key}
                style={[
                  // StyleSheet.absoluteFill,
                  { display: i === state.index ? 'flex' : 'none', flex: 1, height: '100%' },
                ]}
              >
                <View style={{ flex: 1 }}>
                  {descriptors[route.key].render()}
                </View>

                <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <View style={{ width: '100%',display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'Pacifico', fontSize: 24, fontWeight: 'bold' }}>Notice</Text>
                        <AntDesign name="closecircleo" size={24} color="black" />
                      </View>
                      <Text style={styles.modalText}>Wanna Continue? Click Yes to Continue</Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                      >
                        <Text style={styles.textStyle}>Yes</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
              </View>
            );
          })}
        </SafeAreaView>
      </NavigationContent>
    </AppProvider.Provider>
  );
}

export const createMyNavigator = createNavigatorFactory(TabNavigator);

const My = createMyNavigator();


function SettingsScreen() {
  return <Text>Settings screen</Text>
}

export default function App() {
  return (
    <NavigationContainer>
      <My.Navigator>
        <My.Screen key="Home" name="Home" component={HomeScreen} />
        <My.Screen key="Login" name="Login" component={LoginScreen} />
        <My.Screen key="Register" name="Register" component={RegisterScreen} />
        <My.Screen key="Settings" name="Settings" component={SettingsScreen} />
      </My.Navigator>
    </NavigationContainer>
  );
}
