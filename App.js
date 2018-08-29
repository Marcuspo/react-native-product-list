import React from 'react';
import { Text, View , AppRegistry } from 'react-native';

import ListaItens from './src/components/ListaItens';

export default class App extends React.Component {
  render() {
    return (
      <ListaItens />

    );
  }
}

AppRegistry.registerComponent('Lista_de_produtos', () => App);