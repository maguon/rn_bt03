/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Button, Center, Heading, HStack, Image, VStack} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';

const AboutUsScreen = props => {
  const {navigation} = props;
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#eee'}}>
      <Center>
        <VStack w="100%" space={4} px="2" mt="2">
          <VStack space={2} justifyContent="center" alignItems="center">
            <Heading size="lg">About Us</Heading>
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
export default connect(mapStateToProps, mapDispatchProps)(AboutUsScreen);
