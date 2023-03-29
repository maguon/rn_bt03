/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Button, Center, Heading, HStack, Image, VStack} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen = props => {
  const {navigation} = props;
  const jumpVersion = () => {
    navigation.navigate('mainStack', {screen: 'MainPanel'});
    console.log(navigation);
  };
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#eee'}}>
      <Center>
        <VStack w="100%" space={4} px="2" mt="2">
          <HStack space={4} justifyContent="center" mb="4">
            <Image
              source={require('../../../assets/images/logo.png')}
              alt="Alternate Text"
              size="2xl"
            />
          </HStack>
          <VStack space={2} justifyContent="center" alignItems="center">
            <Heading size="lg">欢迎使用 Rnbt01</Heading>
            <Heading size="xs">发现新的版本</Heading>
          </VStack>
          <HStack space={3} justifyContent="space-around">
            <Button size="sm" variant="ghost" onPress={jumpVersion}>
              跳过
            </Button>
            <Button size="sm">升级</Button>
          </HStack>
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
export default connect(mapStateToProps, mapDispatchProps)(WelcomeScreen);
