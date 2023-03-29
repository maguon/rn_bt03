/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Actionsheet,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Spacer,
  Switch,
  Text,
  VStack,
  useDisclose,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';

const SettingPanel = props => {
  const {navigation} = props;
  const logout = () => {
    navigation.navigate('loginStack', {screen: 'login'});
    navigation.reset({index: 0, routes: [{name: 'loginStack'}]});
  };
  const {isOpen, onOpen, onClose} = useDisclose();
  const [showAction, setShowAction] = useState(false);
  const pickerAvatar = () => {
    console.log('pick avatar');
    ImagePicker.openPicker({
      cropping: true,
      width: 500,
      height: 500,
      mediaType: 'photo',
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#eee'}}>
      <ScrollView>
        <Center>
          <Box safeArea p="2" py="4" w="90%">
            <HStack space={2} justifyContent="space-between">
              <HStack justifyContent="center" alignItems="center">
                <Pressable onPress={pickerAvatar}>
                  <Avatar size="lg" bg="green.500">
                    高
                  </Avatar>
                </Pressable>
                <VStack pl={3} justifyContent="flex-end">
                  <Heading size="sm">你的姓名</Heading>
                  <Text fontSize="sm">18812341234</Text>
                </VStack>
              </HStack>
              <VStack justifyContent={'center'}>
                <Pressable onPress={() => console.log("I'm Pressed")}>
                  <Icon name="md-chevron-forward-sharp" size={20} />
                </Pressable>
              </VStack>
            </HStack>
          </Box>
          <Divider pb={5} />
          <Box py={3} px={3} w="100%">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Icon name="md-lock-closed" size={30} color="#f43f5e" />
              <VStack justifyContent="center">
                <Text color="#292524">修改密码</Text>
              </VStack>
              <Spacer />
              <VStack justifyContent="center">
                <Pressable
                  onPress={() => {
                    navigation.navigate('mainStack', {
                      screen: 'changePassword',
                    });
                  }}>
                  <Icon
                    name="md-chevron-forward-sharp"
                    color="#292524"
                    size={20}
                  />
                </Pressable>
              </VStack>
            </HStack>
          </Box>
          <Divider />
          <Box py={3} px={3} w="100%">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Icon name="md-notifications" size={30} color="#3b82f6" />
              <VStack justifyContent="center">
                <Text color="#292524">消息通知</Text>
              </VStack>
              <Spacer />
              <Switch size="sm" />
            </HStack>
          </Box>
          <Divider />
          <Box py={3} px={3} w="100%">
            <Pressable
              onPress={() => {
                navigation.navigate('mainStack', {screen: 'cleanCache'});
              }}>
              <HStack space={[2, 3]} justifyContent="space-between">
                <Icon name="md-trash-bin" size={30} color="#0f766e" />
                <HStack justifyContent="center" alignItems="center">
                  <Text color="#292524">清理缓存</Text>
                </HStack>
                <Spacer />
              </HStack>
            </Pressable>
          </Box>
          <Divider />
          <Box py={3} px={3} w="100%">
            <Pressable onPress={() => console.log('Enter about us')}>
              <HStack space={[2, 3]} justifyContent="space-between">
                <Icon name="md-sync-circle-sharp" size={30} color="#9a3412" />
                <HStack justifyContent="center" alignItems="center">
                  <Text color="#292524">检测更新</Text>
                  <Badge
                    colorScheme="danger"
                    rounded="full"
                    zIndex={1}
                    ml={1}
                    variant="solid"
                    alignSelf="center"
                    _text={{
                      fontSize: 12,
                    }}>
                    new
                  </Badge>
                </HStack>
                <Spacer />
                <Text fontSize="xs" color="coolGray.800" alignSelf="center">
                  0.0.1
                </Text>
              </HStack>
            </Pressable>
          </Box>
          <Divider />
          <Box py={3} px={3} w="100%">
            <HStack space={[2, 3]} justifyContent="space-between">
              <Icon name="ribbon-sharp" size={30} color="#10b981" />
              <VStack justifyContent="center">
                <Text color="#292524">关于我们</Text>
              </VStack>
              <Spacer />
              <VStack justifyContent="center">
                <Pressable
                  onPress={() => {
                    navigation.navigate('mainStack', {screen: 'aboutUs'});
                  }}>
                  <Icon
                    name="md-chevron-forward-sharp"
                    color="#292524"
                    size={20}
                  />
                </Pressable>
              </VStack>
            </HStack>
          </Box>
          <Divider />
          <Divider pt={8} />
          <HStack pt={6}>
            <Button
              size="full"
              colorScheme="secondary"
              py={2}
              variant="outline"
              onPress={onOpen}>
              退出登录
            </Button>
          </HStack>
        </Center>
        <Actionsheet hideDragIndicator isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text fontSize="16" color="gray.500">
                确定退出登录?
              </Text>
            </Box>
            <Actionsheet.Item
              onPress={() => {
                logout();
                onClose();
              }}
              startIcon={
                <Icon
                  name="ios-checkmark-circle-outline"
                  size={24}
                  color="#991b1b"
                />
              }>
              是
            </Actionsheet.Item>
            <Actionsheet.Item
              onPress={onClose}
              startIcon={
                <Icon
                  name="ios-close-circle-outline"
                  size={24}
                  color="#166534"
                />
              }>
              否
            </Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchProps = (dispatch, props) => ({
  login: value => {},
});
export default connect(mapStateToProps, mapDispatchProps)(SettingPanel);
