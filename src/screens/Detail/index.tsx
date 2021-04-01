/* Vista de detalles */
/* DETALLE DE IMAGEN SELECCIONADA */
import React, { memo, FC } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { Button, View } from 'native-base';
import { Image, Linking, PixelRatio, StatusBar, Text } from 'react-native';
import { Props, StateProps } from './interface';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HOST_URL } from '../../utils/path';

const Detail: FC<Props> = memo(({ navigation, image }) => {

  const { single } = image;

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'#131c21'} />
      <View style={styles.main}>
        <Image style={{ width: 350, height: 350 }} source={{ uri: `${HOST_URL}/id/${single.id}/${PixelRatio.getPixelSizeForLayoutSize(350)}/${PixelRatio.getPixelSizeForLayoutSize(350)}` }} />
        <View style={styles.textView}>
          <Text style={styles.text}>ID: {single.id}</Text>
          <Text style={styles.text}>Autor: {single.author}</Text>
          <Text style={styles.text}>Sitio Web</Text>
          <Text style={styles.link} onPress={() => Linking.openURL(single.url)}>{single.url}</Text>
        </View>
        <Button style={styles.button} onPress={() => navigation.navigate('list')}>
          <Text style={styles.buttonText}>Volver</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
});

const mapStateProps = ({ image }: StateProps) => ({ image });

export default connect(mapStateProps)(Detail);

