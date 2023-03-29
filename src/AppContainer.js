import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconButton, NativeBaseProvider} from 'native-base';
import {
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  AboutUsScreen,
  ChangePasswordScreen,
  CleanCacheScreen,
  MainPanel,
  MovieDetailScreen,
  SearchScreen,
  SettingPanel,
  StarCommentScreen,
  StarDetailScreen,
  StarPanel,
  WelcomeScreen,
} from './screens';

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const WelcomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0891b2',
        headerShown: false,
      }}>
      <Tab.Screen
        name="MainPanel"
        component={MainPanel}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-film" color={color} size={size} />
          ),
          tabBarLabel: '主页',
        }}
      />
      <Tab.Screen
        name="StarPanel"
        component={StarPanel}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-star" color={color} size={size} />
          ),
          tabBarLabel: 'Star',
        }}
      />
      <Tab.Screen
        name="SettingsPanel"
        component={SettingPanel}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="ios-settings" color={color} size={size} />
          ),
          tabBarLabel: '设置',
        }}
      />
    </Tab.Navigator>
  );
};

const MainStackScreen = props => {
  return (
    <MainStack.Navigator initialRouteName="MainPanel">
      <MainStack.Screen
        name="Main"
        component={BottomTabScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="movieDetail"
        component={MovieDetailScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Movie',
          headerLeft: props => {
            return (
              <IconButton
                variant="ghost"
                onPress={navigation.goBack}
                icon={<Icon name="chevron-back-outline" size={30} />}
              />
            );
          },
        })}
      />
      <MainStack.Screen
        name="starDetail"
        component={StarDetailScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Star',
          headerLeft: props => {
            return (
              <IconButton
                variant="ghost"
                onPress={navigation.goBack}
                icon={<Icon name="chevron-back-outline" size={30} />}
              />
            );
          },
        })}
      />
      <MainStack.Screen
        name="starComment"
        component={StarCommentScreen}
        options={({navigation, route}) => ({
          headerTitle: 'StarComment',
          headerLeft: props => {
            return (
              <IconButton
                variant="ghost"
                onPress={navigation.goBack}
                icon={<Icon name="chevron-back-outline" size={30} />}
              />
            );
          },
        })}
      />
      <MainStack.Screen
        name="cleanCache"
        component={CleanCacheScreen}
        options={({navigation, route}) => ({
          headerTitleStyle: {
            color: '#3578e5',
          },
          headerTitle: '清理缓存',
          headerLeft: props => {
            return (
              <IconButton
                variant="ghost"
                onPress={navigation.goBack}
                icon={
                  <Icon name="chevron-back-outline" size={30} color="#3578e5" />
                }
              />
            );
          },
        })}
      />
      <MainStack.Screen
        name="aboutUs"
        component={AboutUsScreen}
        options={({navigation, route}) => ({
          headerTitleStyle: {
            color: '#3578e5',
          },
          headerTitle: '关于我们',
          headerLeft: props => {
            return (
              <IconButton
                variant="ghost"
                onPress={navigation.goBack}
                icon={
                  <Icon name="chevron-back-outline" size={30} color="#3578e5" />
                }
              />
            );
          },
        })}
      />
      <MainStack.Screen
        name="changePassword"
        component={ChangePasswordScreen}
        options={({navigation, route}) => ({
          headerTitleStyle: {
            color: '#3578e5',
          },
          headerTitle: '修改密码',
          headerLeft: props => {
            return (
              <IconButton
                variant="ghost"
                onPress={navigation.goBack}
                icon={
                  <Icon name="chevron-back-outline" size={30} color="#3578e5" />
                }
              />
            );
          },
        })}
      />
      <MainStack.Screen
        name="search"
        component={SearchScreen}
        options={({navigation, route}) => ({
          headerShown: false,
        })}
      />
    </MainStack.Navigator>
  );
};
const LoginStackScreen = () => {
  return (
    <LoginStack.Navigator initialRouteName="login">
      <LoginStack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <LoginStack.Screen
        name="resetPassword"
        component={ResetPasswordScreen}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};
const WelcomeStackScreen = () => {
  return (
    <WelcomeStack.Navigator initialRouteName="welcome">
      <WelcomeStack.Screen
        name="welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </WelcomeStack.Navigator>
  );
};
const RootStackScreen = props => {
  return (
    <RootStack.Navigator
      presentation="modal"
      initialRouteName={props.initialRouteName}>
      <RootStack.Screen
        name="welcomeStack"
        component={WelcomeStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="loginStack"
        component={LoginStackScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="mainStack"
        component={MainStackScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
const AppContainer = () => {
  useEffect(() => {
    console.log('App Container init: ', new Date().toLocaleString());
  });
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NativeBaseProvider>
          <RootStackScreen initialRouteName="loginStack" />
        </NativeBaseProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchProps = (dispatch, props) => ({
  login: value => {},
});
export default connect(mapStateToProps, mapDispatchProps)(AppContainer);
