/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform} from 'react-native';
import {connect} from 'react-redux';
import {
  Actionsheet,
  Avatar,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
  useDisclose,
} from 'native-base';
import {AirbnbRating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';

const StarCommentScreen = props => {
  const {navigation, route} = props;
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView mt={Platform.OS === 'ios' ? -12 : 0} style={{flex: 1}}>
        <VStack
          space={2}
          mt={1}
          justifyContent="center"
          alignItems="flex-start">
          <Heading size="sm" m={2}>
            {route.params.starName}
          </Heading>
          <Divider pt={1} bgColor="primary.600" />
        </VStack>
        <VStack m={2}>
          <Text>Your Comment:</Text>
          <HStack space={3} ml={-1} mb={2} justifyContent="space-between">
            <HStack alignItems="center">
              <AirbnbRating
                count={5}
                reviews={[]}
                isDisabled={true}
                showRating={false}
                defaultRating={5}
                size={16}
                selectedColor="#0e7490"
              />
              <Text color="#0e7490">10.0</Text>
            </HStack>
            <Button variant="solid" size="xs" onPress={onOpen}>
              重评
            </Button>
          </HStack>
          <Text>
            广东省委书记黄坤明:再造一个新广东。1月28日大年初七,兔年首个工作日,广东省委、省政府在广州召开全省高质量发展大会,为广东经济高质量发展描绘奋进蓝图
          </Text>
          <Text fontSize="xs" my={1}>
            2022-01-01 23:12:12
          </Text>
          <Divider />
        </VStack>
        <VStack>
          <HStack mt={2} mx={2}>
            <VStack>
              <Avatar
                bg="green.500"
                alignSelf="center"
                w={12}
                h={12}
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}>
                AJ
              </Avatar>
            </VStack>
            <VStack ml={2}>
              <Text bold>UserName</Text>
              <HStack space={3} ml={-1}>
                <AirbnbRating
                  count={5}
                  reviews={[]}
                  isDisabled={true}
                  showRating={false}
                  defaultRating={1}
                  size={16}
                  selectedColor="#0e7490"
                />
                <Text color="#0e7490">2.0</Text>
              </HStack>
              <Text mr={12} my={1} italic>
                黄坤明，男，汉族，1956年11月生，福建上杭人，1974年12月参加工作，1976年10月加入中国共产党，清华大学公共管理学院公共管理专业毕业
              </Text>
              <Text fontSize="xs">2022-01-01 23:12:12</Text>
            </VStack>
          </HStack>
          <Divider />
        </VStack>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <HStack alignItems="center" my={2}>
              <AirbnbRating
                showRating={false}
                size={24}
                selectedColor="#0e7490"
              />
            </HStack>
            <HStack w="100%">
              <Input
                size="md"
                w="100%"
                placeholder="comment"
                InputRightElement={
                  <Button size="xs" rounded="none" w="1/6" h="full" onPress={onClose}>
                    发表
                  </Button>
                }
              />
            </HStack>
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
export default connect(mapStateToProps, mapDispatchProps)(StarCommentScreen);
