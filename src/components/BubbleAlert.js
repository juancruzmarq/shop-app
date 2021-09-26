import { Component } from "react";


const styles ={
    bubbleAlert:{
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#FFF',
        padding: '2px 9px',
        fontSize: '0.9rem',
        width: '20px',
    }
}

class BubbleAlert extends Component{

    //Metodo que nos ayuda a obtener el numero de carrito de compras
    getNumber(n){
        if(!n){
            return '0'
        }
        return n>9 ? '9+' : n
    }

    render(){
        const {value} = this.props
        return(
            <span style={styles.bubbleAlert}>{this.getNumber(value)}</span>
        )
    }
}


export default BubbleAlert