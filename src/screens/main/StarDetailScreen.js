/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  useWindowDimensions,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Fab,
  Heading,
  HStack,
  Image,
  Pressable,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AirbnbRating} from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Ionicons';
import {TabView, SceneMap} from 'react-native-tab-view';
const StarDetailScreen = props => {
  const {navigation, route} = props;
  const OtherMovieView = () => (
    <ScrollView style={{flex: 1}}>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
      <Heading>Other Movie</Heading>
    </ScrollView>
  );

  const StarCommentView = () => (
    <Box style={{flex: 1}} my="4">
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
    <SafeAreaView style={{flex: 1}}>
      <ScrollView mt={Platform.OS === 'ios' ? -12 : 0} style={{flex: 1}}>
        <HStack w="100%">
          <HStack
            w="100%"
            px={2}
            justifyContent="flex-start"
            alignItems="flex-start">
            <Stack w={'1/3'}>
              <AspectRatio h={150} ratio={3 / 4}>
                <Image
                  source={{
                    uri: 'https://img9.doubanio.com/view/celebrity/raw/public/p48974.jpg',
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Stack>
            <VStack
              w="2/3"
              h="150"
              px={2}
              justifyContent="space-around"
              alignItems="flex-start">
              <VStack space={2}>
                <Heading size="md" ml="-1">
                  {route.params.starName}
                </Heading>
                <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                  Jet Li
                </Text>
              </VStack>
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
                <Text color="#0e7490">8.2</Text>
              </HStack>
            </VStack>
          </HStack>
        </HStack>
        <VStack w="100%" p={2}>
          <Heading size="sm" color="primary.600" py={1}>
            影人介绍
          </Heading>
          <Divider bgColor="primary.600" />
          <Text>
            1963年的春天，在北京一个普通的工人家庭里，李连杰作为全家最小的孩子降生。他两岁时，父亲就去世了，母亲一个人挑起了抚养五个孩子和两位老人的生活重担。七岁时，因为体育老师的推荐，李连杰进入北京体校武术班，1974年的全国武术比赛，李连杰连夺少年组第一名、全国第一名；从1975年到1979年，李连杰连续五年获全国武术比赛的冠军，被北京市体委授予特等功，还被评为“勇攀高峰的突击手”，是七十年代武术界的常胜将军。也被称中华武术的第一高手。1979年，在第四届全运会上创造一人夺得5块金牌的奇迹后后逐渐淡出武术圈
          </Text>
        </VStack>
        <VStack w="100%" p={2}>
          <Heading size="sm" color="primary.600" py={1}>
            相关作品
          </Heading>
          <Divider bgColor="primary.600" />
          <Text style={{textAlign: 'center'}}>暂无</Text>
        </VStack>
        <Fab
          onPress={() => {
            navigation.navigate('mainStack', {
              screen: 'starComment',
              params: {starId: 86, starName: '李连杰'},
            });
          }}
          renderInPortal={false}
          bottom={-200}
          size="sm"
          icon={<Icon size={20} color="#ffffff" name="md-pencil" />}
        />
      </ScrollView>
      {/* <TabView
        navigationState={{
          index,
          routes,
        }}
        scrollEnabled
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{flex: 1}}
      /> */}
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchProps = (dispatch, props) => ({
  login: value => {},
});
export default connect(mapStateToProps, mapDispatchProps)(StarDetailScreen);
