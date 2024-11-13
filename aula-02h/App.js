import { View, Text, SectionList, StyleSheet } from 'react-native'

export default function App() {
  const DATA = [
    {
      title: "Frutas",
      data: ["Laranja", "Maça", "Abacate"]
    },
    {
      title: "Legumes",
      data: ["Abobora", "Cenoura", "Rabanete"]
    },
    {
      title: "Carnes",
      data: ["Frago", "Porco", "Peixe"]
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>{item}</Text>
      </View>
    );
  };

  const renderSelectionHeader = ({ section: { title } }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SectionList
        style={styles.section}
        sections={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSelectionHeader}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  section: {
    flex: 1,
    paddingTop: 24,
  },
  sectionHeader: {
    backgrounColor: "#fefefe",
    padding: 8,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
});