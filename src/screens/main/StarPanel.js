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
  Pressable,
  ScrollView,
  Spacer,
  Switch,
  Text,
  VStack,
  useDisclose,
  useColorModeValue,
} from 'native-base';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Animated, Dimensions, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const StarPanel = props => {
  const {navigation} = props;

  const OtherMovieView = () => (
    <Box flex={1} my="4">
      Other Movie
    </Box>
  );

  const StarCommentView = () => (
    <Box flex={1} my="4">
      Star Comment
    </Box>
  );

  const initialLayout = {
    width: Dimensions.get('window').width,
  };
  const renderScene = SceneMap({
    otherMovie: OtherMovieView,
    starComment: StarCommentView,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: 'otherMovie',
      title: '相关作品',
    },
    {
      key: 'starComment',
      title: '影人评价',
    },
  ]);

  const renderTabBar = () => {
    return (
      <Box flexDirection="row">
        <Box
          borderBottomWidth="3"
          borderColor={index === 0 ? 'cyan.500' : 'coolGray.200'}
          flex={1}
          alignItems="center"
          p="3"
          cursor="pointer">
          <Pressable
            onPress={() => {
              setIndex(0);
            }}>
            <Animated.Text
              style={{
                color: index === 0 ? '#000' : '#1f2937',
              }}>
              相关作品
            </Animated.Text>
          </Pressable>
        </Box>
        <Box
          borderBottomWidth="3"
          borderColor={index === 1 ? 'cyan.500' : 'coolGray.200'}
          flex={1}
          alignItems="center"
          p="3"
          cursor="pointer">
          <Pressable
            onPress={() => {
              setIndex(1);
            }}>
            <Animated.Text
              style={{
                color: index === 1 ? '#000' : '#1f2937',
              }}>
              影人评价
            </Animated.Text>
          </Pressable>
        </Box>
      </Box>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#eee'}}>
      {/* <ScrollView>
        <Center>
          <Box safeArea p="2" py="4" w="90%">
            <HStack space={2} justifyContent="space-between">
              <HStack>
                <Avatar size="lg" bg="green.500">
                  高
                </Avatar>
                <VStack pb={1} pl={3} justifyContent="flex-end">
                  <Heading size="sm">你的姓名</Heading>
                  <Text fontSize="sm">手机号</Text>
                </VStack>
              </HStack>
              <VStack justifyContent={'center'}>
                <Pressable onPress={() => console.log("I'm Pressed")}>
                  <Icon name="md-chevron-forward-sharp" size={20} />
                </Pressable>
              </VStack>
            </HStack>
          </Box>
        </Center>
      </ScrollView> */}
      <ScrollView flex={1}>
        <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
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
export default connect(mapStateToProps, mapDispatchProps)(StarPanel);
