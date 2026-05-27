import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateRoutineMenu from '../../components/CreateRoutineMenu';
import FloatingButton from "../../components/FloatingButton";
import RoutineCard from "../../components/RoutineCard";
import { COLORS } from "../../constants/constants.js";

interface DataType {
  id: string,
  title: string
}

const DATA = [
  {id: "1", title: "Play 3 chess games."},
  {id: "2", title: "Do your skincare."},
  {id: "3", title: "Read 10 pages"}
]

export default function Index() {

  const [isChecked, changeIsChecked] = useState(false);
  const [isMenuVisible, changeIsMenuVisible] = useState(false);

  const renderItem = ({item}: {item: DataType}) => {
    return(
      <RoutineCard
        title={ item.title }
      ></RoutineCard>
    );
  };

  const toggleCheckbox = (isChecked: boolean) => {
    console.log(isChecked);
    isChecked = !isChecked;
    console.log(isChecked);
  }

  return (
    <View style={ styles.body }>
      <SafeAreaView style={ styles.container }>
        <View style={ styles.topBodyContainer }>
          <View style={ styles.streakContainer }>
            <AntDesign name="fire" size={24} color={ COLORS.tertiary } />
            <Text style={ styles.streakText }>25</Text>
          </View>
        </View>
        <View style={ styles.middleBodyContainer }>
          <Text style={ styles.title }>Don't give up!</Text>
          <Text style={ styles.underTitle }>You haven't completed today yet!</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle= { styles.listContainer }
        >
        </FlatList>
        <FloatingButton
          onPress={() => {changeIsMenuVisible(true)}}
        ></FloatingButton>
        <CreateRoutineMenu
          visible={isMenuVisible}
          closeMenu={() => {changeIsMenuVisible(false)}}
        ></CreateRoutineMenu>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#F7F2EF",
    marginLeft: 5
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative'
  },
  title: {
    color: COLORS.primary,
    fontSize: 45,
    fontFamily: 'BoldItalic'
  },
  underTitle: {
    fontSize: 17,
    color: COLORS.secondary,
    fontFamily: 'Regular'
  },
  topBodyContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    margin: 10
  },
  streakContainer: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { width:0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 5
  },
  streakText: {
    fontSize: 15
  },
  middleBodyContainer: {
    margin: 5
  },
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
    justifyContent: 'space-around'
  },
  listContainer: {
    paddingHorizontal: 70,
    gap: 10,
    marginTop: 50
  }
});
