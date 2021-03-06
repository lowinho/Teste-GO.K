import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

// style
import { styles } from './styles';

// types
type Props = RectButtonProps & {
  title: string;
}

export function WhiteButton({ title, ...rest } : Props){
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}