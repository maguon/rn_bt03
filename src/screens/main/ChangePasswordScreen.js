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
  VStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const ChangePasswordScreen = props => {
  const {navigation} = props;
  const [validation, setValidation] = useState({});
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const validate = () => {
    const validateObj = {};

    if (!password) {
      validateObj.password = '请输入密码';
    } else {
      if (password.length > 20 || password.length < 6) {
        validateObj.password = '有效的密码长度为6-20位';
      }
    }
    if (!newPassword) {
      validateObj.newPassword = '请输入密码';
    } else {
      if (newPassword.length > 20 || newPassword.length < 6) {
        validateObj.newPassword = '有效的密码长度为6-20位';
      }
    }
    if (!confirmPassword) {
      validateObj.confirmPassword = '请输入密码';
    } else {
      if (confirmPassword.length > 20 || confirmPassword.length < 6) {
        validateObj.confirmPassword = '有效的密码长度为6-20位';
      }
      if (confirmPassword !== newPassword) {
        validateObj.confirmPassword = '两次输入的密码不一致';
      }
    }
    setValidation(validateObj);
    return Object.keys(validateObj).length;
  };
  const changePassword = () => {
    const errorCount = validate();
    if (errorCount === 0) {
      navigation.goBack();
    }
  };
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'flex-start', backgroundColor: '#eee'}}>
      <Center>
        <VStack w="98%" space={4} px="2" mt="2">
          <VStack space={4} justifyContent="flex-start" alignItems="center">
            <FormControl
              isInvalid={validation.password && validation.password !== ''}>
              <Input
                size="xl"
                type="password"
                variant="underlined"
                value={password}
                onChangeText={val => {
                  setPassword(val);
                }}
                InputLeftElement={
                  <Box mx={1.5}>
                    <Icon name="ios-key-sharp" size={30} color="gray" />
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
            </FormControl>
            <FormControl
              isInvalid={
                validation.newPassword && validation.newPassword !== ''
              }>
              <Input
                size="xl"
                type="password"
                variant="underlined"
                value={newPassword}
                onChangeText={val => {
                  setNewPassword(val);
                }}
                InputLeftElement={
                  <Box mx={1.5}>
                    <Icon
                      name="md-lock-closed-outline"
                      size={30}
                      color="gray"
                    />
                  </Box>
                }
                placeholder="新密码"
              />
              {validation.newPassword && validation.newPassword !== '' && (
                <FormControl.ErrorMessage
                  leftIcon={<Icon name="warning" size={15} color="orange" />}>
                  {validation.newPassword}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={
                validation.confirmPassword && validation.confirmPassword !== ''
              }>
              <Input
                size="xl"
                type="password"
                variant="underlined"
                value={confirmPassword}
                onChangeText={val => {
                  setConfirmPassword(val);
                }}
                InputLeftElement={
                  <Box mx={1.5}>
                    <Icon name="md-lock-closed" size={30} color="gray" />
                  </Box>
                }
                placeholder="确认新密码"
              />
              {validation.confirmPassword &&
                validation.confirmPassword !== '' && (
                  <FormControl.ErrorMessage
                    leftIcon={<Icon name="warning" size={15} color="orange" />}>
                    {validation.confirmPassword}
                  </FormControl.ErrorMessage>
                )}
            </FormControl>
            <HStack>
              <Button
                mt={8}
                size="full"
                colorScheme="success"
                onPress={changePassword}>
                确定
              </Button>
            </HStack>
          </VStack>
        </VStack>
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
export default connect(mapStateToProps, mapDispatchProps)(ChangePasswordScreen);
