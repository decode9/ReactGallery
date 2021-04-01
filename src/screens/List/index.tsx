/* Vista de lista */
/* FLATLIST INFINITO, MANEJO DE IMAGENES Y FETCH EN CASO DE LLEGAR AL FINAL */
import React, { memo, FC } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'native-base';
import { FlatList, Image, PixelRatio, StatusBar, TouchableOpacity } from 'react-native';
import { Props, StateProps } from './interface';
import { getImages, setImage } from '../../store/actions'
import { SafeAreaView } from 'react-native-safe-area-context';
import { HOST_URL } from '../../utils/path';

const List: FC<Props> = memo(({ action, image, navigation }) => {

  const Item = ({ item }: any) => {
    const viewDetail = () => {
      action.setImage(item)
      navigation.navigate('detail');
    }
    return (
      <TouchableOpacity style={{ width: 200, height: 200 }} onPress={viewDetail}>
        <Image style={{ width: '100%', height: '100%' }} source={{ uri: `${HOST_URL}/id/${item.id}/${PixelRatio.getPixelSizeForLayoutSize(200)}/${PixelRatio.getPixelSizeForLayoutSize(200)}` }} />
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
    getImages,
    setImage
  };

  return {
    action: bindActionCreators(actions, dispatch),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(List);

