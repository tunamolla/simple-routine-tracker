import { Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { COLORS } from '../constants/constants';

interface CreateRoutineMenuProps {
    visible: boolean
    closeMenu: () => void
}

export default function CreateRoutineMenu({ visible, closeMenu }: CreateRoutineMenuProps )
{

    return(
      <Modal
        transparent={true}
        visible={ visible }
        animationType='fade'
        onRequestClose={closeMenu}
      >
        <TouchableWithoutFeedback onPress={closeMenu}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.modalBox}>
                  <Text>Add a new Routine</Text>
                  <View>
                    <Text>What is the new routine?</Text>
                    <TextInput
                      placeholder='Please enter here...'
                    ></TextInput>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
      </Modal>
    )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 10
  }
});