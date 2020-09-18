import * as React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'flex-start' },
  row: {
    margin: 5,
    padding: 5,
    flexDirection: 'row',
  },
  label: { width: 100, fontWeight: 'bold' },
  value: { flex: 1 },
});

export default class CarDetails extends React.Component {
  componentDidMount() {}
  render() {
    const id = this.props.navigation.getParam('id');
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{id}</Text>
        <Button title="Edit" onPress={this.handleEdit} />
        <Button title="Delete" onPress={this.handleDelete} />

        <View style={styles.row}>
          <Text style={styles.label}>Brand</Text>
          <Text style={styles.value}>some brand</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Model</Text>
          <Text style={styles.value}>some model</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Year</Text>
          <Text style={styles.value}>1234</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>License Plate</Text>
          <Text style={styles.value}>123456</Text>
        </View>
      </View>
    );
  }
}
