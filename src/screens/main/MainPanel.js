/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Input,
  Pressable,
  ScrollView,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {AirbnbRating} from 'react-native-ratings';
import {connect} from 'react-redux';

const MainPanel = props => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <VStack w="100%" justifyContent="center" alignItems="center">
        <VStack w="98%" pt={1} justifyContent="center">
          <HStack>
            <Pressable
              w="100%"
              onPress={() => {
                navigation.navigate('mainStack', {screen: 'search'});
              }}>
              <Input
                placeholder="搜索"
                variant="rounded"
                width="100%"
                py="1"
                px="2"
                isFocused={false}
                onTouchStart={() => {
                  navigation.navigate('mainStack', {screen: 'search'});
                }}
                InputLeftElement={
                  <Icon size={20} color="#a8a29e" name="ios-search" />
                }
              />
            </Pressable>
          </HStack>
        </VStack>
      </VStack>
      <HStack p={2}>
        <Text color="primary.600" fontWeight="900">
          最新上映
        </Text>
      </HStack>
      <ScrollView mb={10}>
        <Pressable
          onPress={() => {
            navigation.navigate('mainStack', {
              screen: 'movieDetail',
              params: {movieId: 86},
            });
          }}>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <HStack
                w="100%"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }>
                <HStack
                  w="100%"
                  borderBottomWidth="1"
                  borderColor="coolGray.300"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <Stack w={'1/3'}>
                    <AspectRatio h={180} ratio={3 / 4}>
                      <Image
                        source={{
                          uri: 'https://pics.dmm.co.jp/digital/video/ofje00376/ofje00376ps.jpg',
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                  <VStack
                    w="2/3"
                    h="180"
                    px={2}
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <VStack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </VStack>
                    <Stack
                      w="100%"
                      space={3}
                      direction="row"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      alignItems="flex-start">
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        borderColor="primary.600"
                        borderWidth={2}
                        px={3}
                        my={2}>
                        类型1
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.600"
                        borderWidth={2}>
                        类型2
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.500"
                        borderWidth={2}>
                        类型312313
                      </Box>
                    </Stack>
                    <HStack alignItems="flex-start" space={4}>
                      <HStack alignItems="center">
                        <Text color="coolGray.600" fontWeight="400">
                          2022-12-05
                        </Text>
                      </HStack>
                    </HStack>
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
            );
          }}
        </Pressable>
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <HStack
                w="100%"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }>
                <HStack
                  w="100%"
                  borderBottomWidth="1"
                  borderColor="coolGray.300"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <Stack w={'1/3'}>
                    <AspectRatio h={180} ratio={3 / 4}>
                      <Image
                        source={{
                          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                  <VStack
                    w="2/3"
                    h="180"
                    px={2}
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <VStack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </VStack>
                    <Stack
                      w="100%"
                      space={3}
                      direction="row"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      alignItems="flex-start">
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        borderColor="primary.600"
                        borderWidth={2}
                        px={3}
                        my={2}>
                        类型1
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.600"
                        borderWidth={2}>
                        类型2
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.500"
                        borderWidth={2}>
                        类型312313
                      </Box>
                    </Stack>
                    <HStack alignItems="flex-start" space={4}>
                      <HStack alignItems="center">
                        <Text color="coolGray.600" fontWeight="400">
                          2022-12-05
                        </Text>
                      </HStack>
                    </HStack>
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
            );
          }}
        </Pressable>
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <HStack
                w="100%"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }>
                <HStack
                  w="100%"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <Stack w={'1/3'}>
                    <AspectRatio h={180} ratio={3 / 4}>
                      <Image
                        source={{
                          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                  <VStack
                    w="2/3"
                    h="180"
                    px={2}
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <VStack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </VStack>
                    <Stack
                      w="100%"
                      space={3}
                      direction="row"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      alignItems="flex-start">
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        borderColor="primary.600"
                        borderWidth={2}
                        px={3}
                        my={2}>
                        类型1
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.600"
                        borderWidth={2}>
                        类型2
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.500"
                        borderWidth={2}>
                        类型312313
                      </Box>
                    </Stack>
                    <HStack alignItems="flex-start" space={4}>
                      <HStack alignItems="center">
                        <Text color="coolGray.600" fontWeight="400">
                          2022-12-05
                        </Text>
                      </HStack>
                    </HStack>
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
            );
          }}
        </Pressable>
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <HStack
                w="100%"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }>
                <HStack
                  w="100%"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <Stack w={'1/3'}>
                    <AspectRatio h={180} ratio={3 / 4}>
                      <Image
                        source={{
                          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                  <VStack
                    w="2/3"
                    h="180"
                    px={2}
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <VStack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </VStack>
                    <Stack
                      w="100%"
                      space={3}
                      direction="row"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      alignItems="flex-start">
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        borderColor="primary.600"
                        borderWidth={2}
                        px={3}
                        my={2}>
                        类型1
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.600"
                        borderWidth={2}>
                        类型2
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.500"
                        borderWidth={2}>
                        类型312313
                      </Box>
                    </Stack>
                    <HStack alignItems="flex-start" space={4}>
                      <HStack alignItems="center">
                        <Text color="coolGray.600" fontWeight="400">
                          2022-12-05
                        </Text>
                      </HStack>
                    </HStack>
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
            );
          }}
        </Pressable>
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <HStack
                w="100%"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }>
                <HStack
                  w="100%"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <Stack w={'1/3'}>
                    <AspectRatio h={180} ratio={3 / 4}>
                      <Image
                        source={{
                          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                  <VStack
                    w="2/3"
                    h="180"
                    px={2}
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <VStack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </VStack>
                    <Stack
                      w="100%"
                      space={3}
                      direction="row"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      alignItems="flex-start">
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        borderColor="primary.600"
                        borderWidth={2}
                        px={3}
                        my={2}>
                        类型1
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.600"
                        borderWidth={2}>
                        类型2
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.500"
                        borderWidth={2}>
                        类型312313
                      </Box>
                    </Stack>
                    <HStack alignItems="flex-start" space={4}>
                      <HStack alignItems="center">
                        <Text color="coolGray.600" fontWeight="400">
                          2022-12-05
                        </Text>
                      </HStack>
                    </HStack>
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
            );
          }}
        </Pressable>
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <HStack
                w="100%"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }>
                <HStack
                  w="100%"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <Stack w={'1/3'}>
                    <AspectRatio h={180} ratio={3 / 4}>
                      <Image
                        source={{
                          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                  <VStack
                    w="2/3"
                    h="180"
                    px={2}
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <VStack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </VStack>
                    <Stack
                      w="100%"
                      space={3}
                      direction="row"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      alignItems="flex-start">
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        borderColor="primary.600"
                        borderWidth={2}
                        px={3}
                        my={2}>
                        类型1
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.600"
                        borderWidth={2}>
                        类型2
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.500"
                        borderWidth={2}>
                        类型312313
                      </Box>
                    </Stack>
                    <HStack alignItems="flex-start" space={4}>
                      <HStack alignItems="center">
                        <Text color="coolGray.600" fontWeight="400">
                          2022-12-05
                        </Text>
                      </HStack>
                    </HStack>
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
            );
          }}
        </Pressable>
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <HStack
                w="100%"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }>
                <HStack
                  w="100%"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <Stack w={'1/3'}>
                    <AspectRatio h={180} ratio={3 / 4}>
                      <Image
                        source={{
                          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                  <VStack
                    w="2/3"
                    h="180"
                    px={2}
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <VStack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </VStack>
                    <Stack
                      w="100%"
                      space={3}
                      direction="row"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      alignItems="flex-start">
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        borderColor="primary.600"
                        borderWidth={2}
                        px={3}
                        my={2}>
                        类型1
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.600"
                        borderWidth={2}>
                        类型2
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.500"
                        borderWidth={2}>
                        类型312313
                      </Box>
                    </Stack>
                    <HStack alignItems="flex-start" space={4}>
                      <HStack alignItems="center">
                        <Text color="coolGray.600" fontWeight="400">
                          2022-12-05
                        </Text>
                      </HStack>
                    </HStack>
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
            );
          }}
        </Pressable>
        <Pressable>
          {({isHovered, isFocused, isPressed}) => {
            return (
              <HStack
                w="100%"
                style={{
                  transform: [
                    {
                      scale: isPressed ? 0.96 : 1,
                    },
                  ],
                }}
                bg={
                  isPressed
                    ? 'coolGray.200'
                    : isHovered
                    ? 'coolGray.200'
                    : 'coolGray.100'
                }>
                <HStack
                  w="100%"
                  borderWidth="1"
                  borderColor="coolGray.300"
                  justifyContent="flex-start"
                  alignItems="flex-start">
                  <Stack w={'1/3'}>
                    <AspectRatio h={180} ratio={3 / 4}>
                      <Image
                        source={{
                          uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                  <VStack
                    w="2/3"
                    h="180"
                    px={2}
                    justifyContent="space-around"
                    alignItems="flex-start">
                    <VStack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text fontSize="xs" fontWeight="500" ml="-0.5" mt="-1">
                        The Silicon Valley of India.
                      </Text>
                    </VStack>
                    <Stack
                      w="100%"
                      space={3}
                      direction="row"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      alignItems="flex-start">
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        borderColor="primary.600"
                        borderWidth={2}
                        px={3}
                        my={2}>
                        类型1
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.600"
                        borderWidth={2}>
                        类型2
                      </Box>
                      <Box
                        alignSelf="center"
                        justifyContent="center"
                        flexDirection="row"
                        borderRadius="full"
                        px={3}
                        space={1}
                        borderColor="primary.500"
                        borderWidth={2}>
                        类型312313
                      </Box>
                    </Stack>
                    <HStack alignItems="flex-start" space={4}>
                      <HStack alignItems="center">
                        <Text color="coolGray.600" fontWeight="400">
                          2022-12-05
                        </Text>
                      </HStack>
                    </HStack>
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
            );
          }}
        </Pressable>
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
export default connect(mapStateToProps, mapDispatchProps)(MainPanel);
