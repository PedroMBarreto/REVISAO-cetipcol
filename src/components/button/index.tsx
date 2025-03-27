import {TouchableOpacity, TouchableOpacityProps, Text, } from 'react-native';

import {styles} from './styles';

type Props = TouchableOpacityProps & {
    title: string;
}

export function Button({title, onPress}: Props) {
    return (
        <TouchableOpacity 
        activeOpacity={0.7} 
        style={styles.button}
        onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}