/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  VStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = props => {
  const {navigation} = props;
  const [username, setUsername] = useState('13164503107');
  const [password, setPassword] = useState('');

  const [validation, setValidation] = useState({});

  const validate = () => {
    const validateObj = {};

    if (!username) {
      validateObj.username = '请输入手机号或邮箱';
    }
    if (!password) {
      validateObj.password = '请输入密码';
    }
    setValidation(validateObj);
    return Object.keys(validateObj).length;
  };

  const login = () => {
    const errorCount = validate();
    if (errorCount === 0) {
      navigation.navigate('mainStack', {screen: 'MainPanel'});
      navigation.reset({index: 0, routes: [{name: 'mainStack'}]});
      console.log('submit login', validation);
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#eee'}}>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Center>
            <Image
              source={require('../../../assets/images/logo.png')}
              alt="Alternate Text"
              width={200}
              height={200}
            />
          </Center>
          <Heading size="lg" fontWeight="600" color="coolGray.800" pt="8">
            欢迎登录 Rnbt01
          </Heading>
          <VStack space={3} mt="5">
            <FormControl
              isInvalid={validation.username && validation.username !== ''}>
              <Input
                size="lg"
                value={username}
                onChangeText={val => {
                  setUsername(val);
                }}
                InputLeftElement={
                  <Box ml={1.5}>
                    <Icon name="ios-person" size={30} color="gray" />
                  </Box>
                }
                placeholder="手机号/邮箱"
              />
              {validation.username && validation.username !== '' && (
                <FormControl.ErrorMessage
                  leftIcon={<Icon name="warning" size={15} color="orange" />}>
                  {validation.username}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={validation.password && validation.password !== ''}>
              <Input
                size="xl"
                type="password"
                value={password}
                onChangeText={val => {
                  setPassword(val);
                }}
                InputLeftElement={
                  <Box ml={1.5}>
                    <Icon name="lock-closed-sharp" size={30} color="gray" />
                  </Box>
                }
                placeholder="密码"
              />
              {validation.password && validation.password !== '' && (
                <FormControl.ErrorMessage
                  leftIcon={<Icon name="warning" size={15} color="orange" />}>
                  {validation.password}
                </FormControl.ErrorMessage>
              )}
              <Link
                _text={{
                  fontSize: 'xs',
                  fontWeight: '500',
                  color: 'indigo.500',
                }}
                alignSelf="flex-end"
                isUnderlined={false}
                onPress={() => {
                  navigation.navigate('loginStack', {screen: 'resetPassword'});
                }}
                mt="1">
                忘记密码?
              </Link>
            </FormControl>
            <Button mt="2" onPress={login}>
              登录
            </Button>
            <HStack mt="6" justifyContent="center">
              <Button
                py={'2'}
                variant="ghost"
                size={'full'}
                onPress={() => {
                  navigation.navigate('loginStack', {screen: 'register'});
                }}>
                注册
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchProps = (dispatch, props) => ({
  login: value => {},
});
export default connect(mapStateToProps, mapDispatchProps)(LoginScreen);
