import React from 'react';
import { View } from 'react-native';

import axios from 'axios'; 
import Itens from './Itens';

export default class ListaItens extends React.Component {

	constructor(props){
		super(props)
			this.state = { listaItens: [] };
		
	}

	Componentwillmount(){
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
		.then(response => { this.setState({listaItens: response.data});})
		.catch(() => {console.log('Erro ao recuperar dados'); });

	}

  render() {
    return (
    	<View>
        	<Itens />
        	<Itens />
        	<Itens />
        </View>

    );
  }
}
