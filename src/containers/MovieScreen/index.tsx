import React, {memo, useEffect, useState} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useInjectSaga} from '../../utils/injectSaga';
import saga from './saga';
import isEmpty from 'lodash/isEmpty';
import {compose} from '@reduxjs/toolkit';
import {createStructuredSelector} from 'reselect';
import {
  makeSelectError,
  makeSelectItems,
  makeSelectLoading,
  makeSelectNext,
} from './selectors';
import {getMoreMoviesRequest, getMovieRequest} from './actions';
import {connect} from 'react-redux';
import Movies from './components/Movies';
const key = 'movie';
function Movie({
  navigation,
  route,
  getMovies,
  loading,
  error,
  items,
  next,
  getMoreMoves,
}) {
  const {colors} = useTheme();
  const {title, id} = route.params;
  const [theEnd, setTheEnd] = useState(0);
  useInjectSaga({key, saga});
  useEffect(() => {
    navigation.setOptions({title});
    getMovies(title);
  }, [title]);
  useEffect(() => {
    if (next != null && theEnd < 0) {
      getMoreMoves(next);
    }
  }, [theEnd]);
  return (
    <View style={{flex: 1}}>
      {loading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator color="red" size="large" />
        </View>
      )}
      {!isEmpty(items)
        ? !loading && (
            <Movies reachedTheEnd={(evt) => setTheEnd(evt)} items={items} />
          )
        : !loading && (
            <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{color: 'red', fontSize: 33}}> Empty </Text>
            </View>
          )}
    </View>
  );
}
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  items: makeSelectItems(),
  next: makeSelectNext(),
});
const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (tags) => dispatch(getMovieRequest(tags)),
    getMoreMoves: (next) => dispatch(getMoreMoviesRequest(next)),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, memo)(Movie);
