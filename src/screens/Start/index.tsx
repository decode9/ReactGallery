/* Vista de presentacion */
/* VISTA DE PRESENTACION INICIAL */
import React, { memo, FC, useEffect, useState } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, View } from 'native-base';
import { Image, StatusBar, Text } from 'react-native';
import { Props, StateProps } from './interface';
import { getImages } from '../../store/actions'

const Start: FC<Props> = memo(({ action, image, navigation }) => {

  const Gorilla = require('../../../assets/images/GORILLA.png')

  const [enter, setEnter] = useState(false)

  useEffect(() => {
    if (image.data.length && enter) {
      navigation.navigate('list')
      setEnter(false)
    }
    return () => { }
  }, [image.data, enter])

  const nextPage = () => {
    if (!image.data.length) action.getImages({ page: 1, data: image.data })
    setEnter(true)
  }

  return (
    <>
      <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
      <View style={styles.main}>
        <View>
          <Image style={styles.image} source={Gorilla} />
          <Text style={styles.title}>React Gallery</Text>
        </View>
        <View style={styles.inputBox}>
          <Button style={styles.button} onPress={nextPage}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Button>
        </View>
      </View>
    </>
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

export default connect(mapStateProps, mapDispatchToProps)(Start);

