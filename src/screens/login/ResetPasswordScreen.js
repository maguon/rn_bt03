/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef} from 'react';
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

const ResetPasswordScreen = props => {
  const {navigation} = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [smsCode, setSmsCode] = useState('');

  const [timeCount, setTimeCount] = useState(0);
  const [sendFlag, setSendFlag] = useState(false);
  const [validation, setValidation] = useState({});
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

  const doRestPassword = () => {
    const errorCount = validate();
    console.log(errorCount);
    if (errorCount === 0) {
      navigation.navigate('loginStack', {screen: 'login'});
      console.log('submit login', validation);
    }
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#eee'}}>
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" pb="1">
            忘记密码 ?
          </Heading>
          <Center>
            <Image
              source={require('../../../assets/images/profile.png')}
              resizeMode="center"
              alt="Alternate Text"
              size="2xl"
            />
          </Center>
          <VStack space={3} mt="1">
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
                    <Icon name="ios-phone-portrait" size={30} color="gray" />
                  </Box>
                }
                InputRightElement={
                  <Button
                    disabled={sendFlag}
                    size="xl"
                    rounded="none"
                    w="1/4"
                    mr={-1}
                    h="full"
                    onPress={sendSms}>
                    {sendFlag ? timeCount.toString() : '发送'}
                  </Button>
                }
                placeholder="注册手机号/邮箱"
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
                size="xl"
                value={smsCode}
                onChangeText={val => {
                  setSmsCode(val);
                }}
                InputLeftElement={
                  <Box ml={1.5}>
                    <Icon
                      name="ios-notifications-sharp"
                      size={30}
                      color="gray"
                    />
                  </Box>
                }
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
                size="xl"
                type="password"
                value={password}
                onChangeText={val => {
                  setPassword(val);
                }}
                InputLeftElement={
                  <Box ml={1.5}>
                    <Icon name="ios-key-sharp" size={30} color="gray" />
                  </Box>
                }
                placeholder="新密码"
              />
              {validation.password && validation.password !== '' && (
                <FormControl.ErrorMessage
                  leftIcon={<Icon name="warning" size={15} color="orange" />}>
                  {validation.password}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <Button mt="2" colorScheme="warning" onPress={doRestPassword}>
              重置密码
            </Button>
            <HStack justifyContent="center">
              <Button
                py={'2'}
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
export default connect(mapStateToProps, mapDispatchProps)(ResetPasswordScreen);
