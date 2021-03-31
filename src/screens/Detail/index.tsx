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

  const { single } = image;

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'#131c21'} />
      <View style={styles.main}>
        
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

