import React, {memo, useEffect} from 'react';
import {View, Text, TouchableHighlight, ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {connect} from 'react-redux';
import {compose} from '@reduxjs/toolkit';
import isEmpty from 'lodash/isEmpty';
import {categoryRequest} from './actions';
import saga from './saga';
import {useInjectSaga} from '../../utils/injectSaga';
import {makeSelectError, makeSelectItems, makeSelectLoading} from './selectors';
import {createStructuredSelector} from 'reselect';
import Categories from './components/Categories';

const key = 'category';
function Category({navigation, sendCategoryRequest, loading, error, items}) {
  const {colors} = useTheme();
  useInjectSaga({key, saga});
  useEffect(() => {
    sendCategoryRequest();
  }, []);

  return (
    <View style={{flex: 1}}>
      {loading && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="red" />
        </View>
      )}
      {!isEmpty(items) ? (
        <Categories items={items} />
      ) : (
        !loading && (
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableHighlight onPress={sendCategoryRequest}>
              <Text style={{color: colors.primary, fontSize: 23}}>
                get Category
              </Text>
            </TouchableHighlight>
          </View>
        )
      )}
    </View>
  );
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  items: makeSelectItems(),
});

const mapDispatchToProps = (dispatch) => {
  return {
    sendCategoryRequest: () => dispatch(categoryRequest()),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(Category);
