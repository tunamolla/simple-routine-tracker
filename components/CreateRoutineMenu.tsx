import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
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
                  <Text style={styles.modalTitle}>Add a new Routine</Text>
                  <View style={styles.modalTitleUnderline}></View>
                  <View>
                    <Text style={{ fontFamily: 'Regular', color: COLORS.primary }}>What is the new routine?</Text>
                    <TextInput
                      placeholder='Please enter here...'
                      style={styles.routineInput}
                      placeholderTextColor={COLORS.secondary}
                    ></TextInput>
                  </View>
                  <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>Create</Text>
                  </TouchableOpacity>
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
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  },
  modalTitle: {
    fontFamily: 'Bold',
    fontSize: 20
  },
  modalTitleUnderline: {
    alignSelf: 'stretch',
    height: 5,
    backgroundColor: COLORS.primary,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5
  },
  createButton: {
    borderWidth: 2,
    borderColor: COLORS.tertiary,
    backgroundColor: COLORS.tertiary,
    padding: 5,
    borderRadius: 5
  },
  createButtonText: {
    fontFamily: 'Bold',
    color: COLORS.background
  },
  routineInput: {
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 10,
    fontFamily: 'Regular'
  }
});