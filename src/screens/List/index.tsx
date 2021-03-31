import React, { memo, FC, useState } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, View } from 'native-base';
import { FlatList, Image, StatusBar, Text, TouchableOpacity } from 'react-native';
import { Props, StateProps } from './interface';
import { getImages } from '../../store/actions'
import { SafeAreaView } from 'react-native-safe-area-context';

const List: FC<Props> = memo(({ action, image }) => {

  const Item = ({ item }: any) => {
    console.log(item)
    return (
      <TouchableOpacity style={{ width: '50%', height: 180}}>
        <Image style={{ width: '100%', height: '100%' }} source={{ uri: item?.download_url }} />
      </TouchableOpacity>
    )
  }

  const { data, page } = image;

  const fetch = () => {
    action.getImages({ ...image, ...{ page: page + 1 } })
  }

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'#131c21'} />
      <View style={styles.main}>
        <FlatList style={{ width: '100%' }} numColumns={2} data={data} renderItem={Item} keyExtractor={Item => Item.id} onEndReachedThreshold={0.9} onEndReached={fetch} />
      </View>
    </SafeAreaView>
  );
});

const mapStateProps = ({ image }: StateProps) => ({ image });

const mapDispatchToProps = (dispatch: any) => {
  const actions = {
    getImages
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(List);

