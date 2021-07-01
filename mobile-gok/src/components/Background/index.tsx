import React, { ReactNode } from 'react';
import { View } from 'react-native';

// style
import { styles } from './styles';

type Props = {
  children: ReactNode;
}

export function Background({ children }: Props) {
  return (
    <View style={styles.container}>
      {children}
      </View>
  )
}