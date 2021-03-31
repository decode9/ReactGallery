import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import Props from './interface';

type ErrorState = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, ErrorState> {

  state: ErrorState = { hasError: false }

  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo)
  }

  render() {
    return this.state.hasError ?
      <View style={styles.container}>
        <Text>Something went wrong</Text>
      </View>
      :
      this.props.children
  }
}

export default ErrorBoundary;
