/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Box,
  Heading,
  HStack,
  Input,
  Pressable,
  ScrollView,
  Stack,
  VStack,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {
  getLocalSearchWord,
  saveLocalSearchWord,
  delLocalSearchWord,
  clearLocalSearchWord,
} from '../../utils/SearchUtil';

const SearchScreen = props => {
  const {navigation} = props;
  const [searchWord, setSearchWord] = useState('');
  const [localSearchWord, setLocalSearchWord] = useState([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    getLocalSearchWord().then(res => setLocalSearchWord(res));
    console.log(localSearchWord);
  }, []);

  const doSearch = word => {
    if (word) {
      console.log(word);
      setSearchWord(word);
      saveLocalSearchWord(word);
    } else {
      console.log(searchWord);
      saveLocalSearchWord(searchWord);
    }
    setShowResult(true);
  };
  const clearSearch = () => {
    setSearchWord('');
    setShowResult(false);
  };

  const removeTag = tagName => {
    delLocalSearchWord(tagName).then(res => setLocalSearchWord(res));
  };
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView>
        <VStack w="100%" justifyContent="center" alignItems="center">
          <VStack w="98%" pt={1} justifyContent="center">
            <HStack>
              <HStack alignItems="center">
                <Pressable onPress={navigation.goBack}>
                  <Icon name="chevron-back-outline" size={20} color="#a8a29e" />
                </Pressable>
              </HStack>
              <HStack>
                <Input
                  placeholder="搜索"
                  variant="rounded"
                  w="96%"
                  py="1"
                  px="2"
                  value={searchWord}
                  onChangeText={t => setSearchWord(t)}
                  onSubmitEditing={() => {
                    doSearch();
                  }}
                  InputLeftElement={
                    <Icon size={20} color="#a8a29e" name="ios-search" />
                  }
                  InputRightElement={
                    <Pressable onPress={clearSearch}>
                      {searchWord !== '' && (
                        <Icon size={20} color="#a8a29e" name="ios-close" />
                      )}
                    </Pressable>
                  }
                />
              </HStack>
            </HStack>
          </VStack>
        </VStack>
        {!showResult && (
          <VStack>
            <HStack p={3} justifyContent="space-between">
              <Heading size="xs">历史记录</Heading>
              <Pressable onPress={clearLocalSearchWord}>
                <Icon size={15} name="ios-trash" />
              </Pressable>
            </HStack>
            <VStack justifyContent="flex-start" alignItems="flex-start">
              <Stack
                direction="row"
                flexWrap="wrap"
                px={2}
                space={2}
                justifyContent="flex-start"
                alignItems="flex-start">
                {localSearchWord.map((item, index) => (
                  <Pressable
                    key={'_search_tag' + index}
                    onPress={() => {
                      doSearch(item);
                    }}>
                    <Box
                      alignSelf="center"
                      justifyContent="center"
                      flexDirection="row"
                      borderRadius="full"
                      pl={4}
                      pr={2}
                      my={2}
                      space={1}
                      style={{borderWidth: 1, borderColor: '#a8a29e'}}>
                      {item}
                      <Pressable
                        onPress={() => {
                          removeTag(item);
                        }}>
                        <Icon
                          style={{marginLeft: 4}}
                          size={18}
                          name="ios-close"
                          color="#a8a29e"
                        />
                      </Pressable>
                    </Box>
                  </Pressable>
                ))}
              </Stack>
            </VStack>
          </VStack>
        )}
        {showResult && (
          <VStack>
            <HStack p={3} justifyContent="center">
              <Heading size="xs">查询结果</Heading>
            </HStack>
          </VStack>
        )}
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
export default connect(mapStateToProps, mapDispatchProps)(SearchScreen);
