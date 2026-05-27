import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/constants.js';

interface RoutineCardProps {
    title: string
}

export default function RoutineCard({ title }: RoutineCardProps)
{
    const [isChecked, toggleChecked] = useState(false);

    return(
      <View style={ styles.itemContainer }>
        <Text style={{ textDecorationLine: isChecked ? 'line-through' : 'none' }}>{ title }</Text>
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: isChecked ? COLORS.secondary : 'transparent' } ]}
            onPress={ () => {toggleChecked(!isChecked)} }
        >
            <View style={{ padding: 10 }}>
            </View>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width:0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  container: {
    borderWidth: 2,
    borderRadius: '50%',
    borderColor: COLORS.secondary
  }
});