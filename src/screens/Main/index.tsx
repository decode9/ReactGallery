import React, { memo, FC } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { Root, View } from 'native-base';
import { StatusBar, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StateProps, Props } from './interface';
import Start from '../Start';
import { NavigationContainer } from '@react-navigation/native';
import List from '../List';

const Stack = createStackNavigator();

const Main: FC<Props> = memo(({ intermittence }) => {

  const { loader } = intermittence;

  return (
    <>
      <StatusBar barStyle={'default'} translucent={true} backgroundColor={'transparent'} />
      <Root>
        <NavigationContainer>
          <Stack.Navigator headerMode="none" initialRouteName="start">
            <Stack.Screen name="start" component={Start} />
            <Stack.Screen name="list" component={List} />
          </Stack.Navigator>
        </NavigationContainer>
        {
          loader ? (
            <View style={styles.loader}>
              <ActivityIndicator size='large' color={'white'} />
            </View>
          ) : null
        }
      </Root>
    </>
  );
});

const mapStateProps = ({ intermittence }: StateProps) => ({ intermittence });

export default connect(mapStateProps)(Main);
