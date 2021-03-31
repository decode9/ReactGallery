import React, { memo, FC, useState } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, View } from 'native-base';
import { Image, StatusBar, Text } from 'react-native';
import { Props, StateProps } from './interface';
import { getImages } from '../../store/actions'

const Start: FC<Props> = memo(({ action, image, navigation }) => {

  const Gorilla = require('../../../assets/images/GORILLA.png')

  const nextPage = () => {
    if (!image.data.length) action.getImages({ page: 1, data: image.data })
    navigation.navigate('list');
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

