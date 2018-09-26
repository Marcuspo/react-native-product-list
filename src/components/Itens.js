import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export default class Itens extends React.Component {
  render() {
    return (
    	<View style={styles.item}>
    		
    		<View style={styles.foto}>
    		<Image style={{height: 100, width: 100}} source={{ uri: this.props.item.foto}} />
    		</View>

    		<View style={styles.detalhesItens}>

    		<Text style={styles.txtTitulo}> {this.props.item.titulo} </Text>
    		<Text style={styles.txtValor}> R$ {this.props.item.valor} </Text>
    		<Text style={styles.txtDetalhes}> Local: {this.props.item.local_anuncio} </Text>
    		<Text style={styles.txtDetalhes}> Data: {this.props.item.data_publicacao} </Text>
    			</View>

    	</View>	
    );
  }
}

const styles = StyleSheet.create({
	item:{
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: '#865',
		margin: 10,
		padding: 10,
		flexDirection: 'row'
	},
	foto:{
		width: 102,
		height: 102,
		justifyContent: 'center'
	},
	detalhesItens:{
		marginLeft: 20,
		flex: 1,
		justifyContent: 'center'
	},
	txtTitulo:{
		fontSize: 18,
		borderColor: 'black',
		color: 'green',
		marginBottom: 3,
		fontWeight: 'bold'
	},
	txtValor:{
		fontSize: 16,
		fontWeight: 'bold'
	}
	txtDetalhes:{
		fontSize: 16;
	}

})