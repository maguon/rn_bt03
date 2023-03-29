/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useEffect} from 'react';
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
  VStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const RegisterScreen = props => {
  const {navigation} = props;
  const [username, setUsername] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const [password, setPassword] = useState('');

  const [validation, setValidation] = useState({});

  const [timeCount, setTimeCount] = useState(0);
  const [sendFlag, setSendFlag] = useState(false);
  const timeRef = useRef();

  useEffect(() => {
    if (timeCount < 0) {
      setSendFlag(false);
      clearInterval(timeRef.current);
      return;
    }
    console.log(timeCount);
    timeRef.current = setInterval(() => {
      setTimeCount(c => c - 1);
    }, 1000);
    return () => {
      clearInterval(timeRef.current);
    };
  }, [timeCount]);

  const sendSms = () => {
    const validateObj = {};

    if (!username) {
      validateObj.username = '请输入手机号或邮箱';
    }
    setValidation(validateObj);
    console.log(validateObj);
    if (Object.keys(validateObj).length === 0) {
      setSendFlag(true);
      setTimeCount(3);
    }
  };

  const validate = () => {
    const validateObj = {};

    if (!username) {
      validateObj.username = '请输入手机号或邮箱';
    }
    if (!smsCode || smsCode.length !== 6) {
      validateObj.smsCode = '请输入有效的验证码';
    }
    if (!password) {
      validateObj.password = '请输入密码';
    } else {
      if (password.length > 20 || password < 6) {
        validateObj.password = '有效的密码长度为6-20位';
      }
    }
    setValidation(validateObj);
    return Object.keys(validateObj).length;
  };

  const doRegister = () => {
    const errorCount = validate();
    console.log(errorCount);
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
          <Heading size="lg" fontWeight="600" color="coolGray.800" pb="8">
            欢迎注册 Rnbt01
          </Heading>
          <Center>
            <Image
              source={require('../../../assets/images/request.png')}
              resizeMode="contain"
              alt="Alternate Text"
              size="2xl"
            />
          </Center>
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
                InputRightElement={
                  <Button
                    disabled={sendFlag}
                    size="xl"
                    rounded="none"
                    mr={-1}
                    w="1/4"
                    h="full"
                    onPress={sendSms}>
                    {sendFlag ? timeCount.toString() : '发送'}
                  </Button>
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
              isInvalid={validation.smsCode && validation.smsCode !== ''}>
              <Input
                size="lg"
                InputLeftElement={
                  <Box ml={1.5}>
                    <Icon name="ios-mail" size={30} color="gray" />
                  </Box>
                }
                value={smsCode}
                onChangeText={val => {
                  setSmsCode(val);
                }}
                placeholder="验证码"
              />
              {validation.smsCode && validation.smsCode !== '' && (
                <FormControl.ErrorMessage
                  leftIcon={<Icon name="warning" size={15} color="orange" />}>
                  {validation.smsCode}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={validation.password && validation.password !== ''}>
              <Input
                size="lg"
                type="password"
                value={password}
                InputLeftElement={
                  <Box ml={1.5}>
                    <Icon name="lock-closed-sharp" size={30} color="gray" />
                  </Box>
                }
                onChangeText={val => {
                  setPassword(val);
                }}
                placeholder="密码"
              />
              {validation.password && validation.password !== '' && (
                <FormControl.ErrorMessage
                  leftIcon={<Icon name="warning" size={15} color="orange" />}>
                  {validation.password}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <Button mt="1" colorScheme="success" onPress={doRegister}>
              注册
            </Button>
            <HStack justifyContent="center">
              <Button
                py={'1'}
                variant="ghost"
                size={'full'}
                onPress={() => {
                  navigation.navigate('loginStack', {screen: 'login'});
                }}>
                返回登陆
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
export default connect(mapStateToProps, mapDispatchProps)(RegisterScreen);
