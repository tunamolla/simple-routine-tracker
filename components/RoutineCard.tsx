import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/constants.js';

interface RoutineCardProps {
    title: string
    deleteObj: () => void
}

export default function RoutineCard({ title, deleteObj }: RoutineCardProps)
{
    const [isChecked, toggleChecked] = useState(false);

    return(
      <TouchableOpacity 
        style={ styles.itemContainer }
        onLongPress={deleteObj}
        activeOpacity={1}
      >
        <Text style={{ textDecorationLine: isChecked ? 'line-through' : 'none' }}>{ title }</Text>
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: isChecked ? COLORS.secondary : 'transparent' } ]}
            onPress={ () => {toggleChecked(!isChecked)} }
        >
            <View style={{ padding: 10 }}>
            </View>
        </TouchableOpacity>
      </TouchableOpacity>
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