import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../constants/constants';

export default function FloatingButton({  })
{

    const insets = useSafeAreaInsets();

    return(
        <TouchableOpacity style={[ styles.container, {bottom: 20 + insets.bottom, right: 20 + insets.right} ]}>
            <Text style={{ fontSize: 30, color: COLORS.white, fontFamily: 'Bold', marginBottom: 5 }}>+</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: COLORS.tertiary,
        width: 50,
        height: 50,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: { width:0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    } 
});