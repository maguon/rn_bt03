/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Button, Center, Heading, HStack, Image, VStack} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as DeviceUtil from '../../utils/DeviceUtil';
import * as BlobCacheUtil from '../../utils/BlobCacheUtil';

const CleanCacheScreen = props => {
  const {navigation} = props;
  const [deviceName, setDeviceName] = useState('');
  const [uniqueId, setUniqueId] = useState('');
  const [deviceToken, setDeviceToken] = useState('');
  const [dirSize, setDirSize] = useState({});

  useEffect(() => {
    DeviceUtil.getDeviceName().then(s => setDeviceName(s));
    DeviceUtil.getUniqueId().then(s => setUniqueId(s));
    DeviceUtil.getIOSDeviceToken().then(s => setDeviceToken(s));
    BlobCacheUtil.getDirCacheInfo().then(s => setDirSize(s));
  }, []);
  const clearDirCache = async () => {
    await BlobCacheUtil.clearDirCache();
    const res = await BlobCacheUtil.getDirCacheInfo();
    console.log(res);
    setDirSize(res);
  };
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#eee'}}>
      <Center>
        <VStack w="100%" space={4} px="2" mt="2">
          <VStack space={2} justifyContent="center" alignItems="center">
            <Heading size="sm">Device Id: {DeviceUtil.getDeviceId()}</Heading>
            <Heading size="sm">Device Name: {deviceName}</Heading>
            <Heading size="sm">Device Token: {deviceToken}</Heading>
            <Heading size="sm">OS Version: {DeviceUtil.getOSVersion()}</Heading>
            <Heading size="sm">Device Brand: {DeviceUtil.getBrand()}</Heading>
            <Heading size="sm">Device Unqiue Id: {uniqueId}</Heading>
            <Heading size="sm">Directory file count: {dirSize.count}</Heading>
            <Heading size="sm">
              Directory cache size: {parseInt(dirSize.size / 1000, 10)}M
            </Heading>
          </VStack>
          <HStack>
            <Button
              size="full"
              variant="outline"
              py={3}
              onPress={clearDirCache}>
              清理
            </Button>
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
export default connect(mapStateToProps, mapDispatchProps)(CleanCacheScreen);
