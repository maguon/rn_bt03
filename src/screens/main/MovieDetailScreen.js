/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform} from 'react-native';
import {connect} from 'react-redux';
import {
  AspectRatio,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {AirbnbRating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native-safe-area-context';

const MovieDetailScreen = props => {
  const {navigation, route} = props;
  console.log(route.params);
  return (
    <SafeAreaView>
      <ScrollView mt={Platform.OS === 'ios' ? -12 : 0}>
        <HStack w="100%" mt={0}>
          <AspectRatio w="100%" ratio={3 / 2}>
            <Image
              resizeMode="cover"
              source={{
                uri: 'https://pics.dmm.co.jp/digital/video/ofje00376/ofje00376pl.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
        </HStack>
        <VStack my={2} space={1}>
          <Heading m={2} size="sm" color="primary.600">
            影片信息
          </Heading>
          <Divider mb={2} />
          <HStack>
            <Stack w={'1/3'} direction="row" justifyContent="flex-end">
              <Heading size="xs">Movie ID : </Heading>
            </Stack>
            <Stack w={'2/3'} direction="row">
              <Heading size={'xs'} color="gray.600">
                OFJE-376
              </Heading>
            </Stack>
          </HStack>
          <HStack>
            <Stack w={'1/3'} direction="row" justifyContent="flex-end">
              <Heading size={'xs'}>发行时间 : </Heading>
            </Stack>
            <Stack w={'2/3'} direction="row">
              <Heading size={'xs'} color="gray.600">
                2022-09-31
              </Heading>
            </Stack>
          </HStack>
          <HStack>
            <Stack w={'1/3'} direction="row" justifyContent="flex-end">
              <Heading size={'xs'}>电影时长 : </Heading>
            </Stack>
            <Stack w={'2/3'} direction="row">
              <Heading size={'xs'} color="gray.600">
                480 Min
              </Heading>
            </Stack>
          </HStack>
          <HStack>
            <Stack w={'1/3'} direction="row" justifyContent="flex-end">
              <Heading size={'xs'}>发行方 : </Heading>
            </Stack>
            <Stack w={'2/3'} direction="row">
              <Heading size={'xs'} color="gray.600">
                光线传媒
              </Heading>
            </Stack>
          </HStack>
          <HStack>
            <Stack w={'1/3'} direction="row" justifyContent="flex-end">
              <Heading size={'xs'}>电影类型 : </Heading>
            </Stack>
            <Stack w={'2/3'} direction="row">
              <Heading size={'xs'} color="gray.600">
                喜剧 动作 古装
              </Heading>
            </Stack>
          </HStack>
          <HStack>
            <Stack w={'1/3'} direction="row" justifyContent="flex-end">
              <Heading size={'xs'}>演员列表 : </Heading>
            </Stack>
            <Stack w={'2/3'} direction="row" alignItems="center">
              <Link
                mx={1}
                onPress={() => {
                  navigation.navigate('mainStack', {
                    screen: 'starDetail',
                    params: {starId: 86, starName: '李连杰'},
                  });
                }}>
                李连杰
              </Link>
              <Link
                mx={1}
                onPress={() => {
                  navigation.navigate('mainStack', {
                    screen: 'starDetail',
                    params: {starId: 87, starName: '关之琳'},
                  });
                }}>
                关之琳
              </Link>
            </Stack>
          </HStack>
          <HStack>
            <Stack w={'1/3'} direction="row" justifyContent="flex-end">
              <Heading size={'xs'}>电影评分 : </Heading>
            </Stack>
            <Stack w={'2/3'} direction="row">
              <AirbnbRating
                count={5}
                reviews={[]}
                isDisabled={true}
                showRating={false}
                defaultRating={(8.2 * 5) / 10}
                size={16}
                selectedColor="#0e7490"
              />
              <Text color="#0e7490" ml={2} fontSize="md">
                8.2
              </Text>
            </Stack>
          </HStack>
        </VStack>
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
export default connect(mapStateToProps, mapDispatchProps)(MovieDetailScreen);
