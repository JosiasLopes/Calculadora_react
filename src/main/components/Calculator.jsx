import React,{useState,useContext} from 'react'
import './Calculator.css'
import Button from './Button.jsx'
import Display from './Display.jsx'
import Context from './Context.js'


export default(props)=>{


	


    const estadoInicial={
    	displayVal:'0',clearDisplay:false,operation:null,numero1:0,numero2:0,current:0
    }
	
	const [estado,setEstado] = useState(estadoInicial)
	

	function clearMemory(){
	
		setEstado(estadoInicial)
		console.log("limpou")

	}

	function setOperation(operation){
		
		
		if(estado.current==0){
			//
			//setEstado(estadoInicial)
			
			//setEstado({clearDisplay:true,operation:operation,current:1})
			setEstado(prevState => ({ ...prevState, clearDisplay:true,operation:operation,current:1}))
			
			
			//se a posicao do vetor for 1 e q operacao de entrada for = entao
			//a operacao atual vai ser a operacao que estava salva no estado
		}else{
			const eq = operation ==="="
			const operAtual = estado.operation
			const values = [estado.numero1,estado.numero2];
			var r=''
			switch(operAtual){

			case '/':
			r = parseFloat(values[0])/parseFloat(values[1])
			
			
			break
			case '*':
			r = parseFloat(values[0])*parseFloat(values[1])
			
			break
			case '+':
			r = parseFloat(values[0])+parseFloat(values[1])
			
			break
			case '-':
			r = parseFloat(values[0])-parseFloat(values[1])
			
			break

		}
		values[1]=0

			setEstado(prevState => ({ ...prevState, displayVal:r,
				operation: eq?null:operation,
				current:eq?0:1,
			   clearDisplay: !eq,numero1:r}))
			
		}
		
		
	}

	function addDigit(n){
		
		if(n==='.' && estado.displayVal.includes('.')){
			return
		}
		const clearDisplay = estado.displayVal==='0' ||
		 estado.clearDisplay

		 const valorAtual = clearDisplay ?'':estado.displayVal
		 const displayVal = valorAtual+n

		 //atualiza o estado que é enviado parao display
		 setEstado(prevState => ({ ...prevState, displayVal,clearDisplay:false}))
		// setEstado({displayVal,clearDisplay:false})

		 //se o valor de n for diferente de .
		 if(n!=='.'){



		 	const i = estado.current
		 	const novoValor = parseFloat(displayVal)
		 	var valores ='0'
		 	if(i==0){
		 		valores= novoValor
		 		setEstado(prevState => ({ ...prevState, numero1:valores,current:i}))
		 	}else{
		 		valores= novoValor
		 		setEstado(prevState => ({ ...prevState, numero2:valores,current:i}))
		 	}
		
		 }
	
	}

	function calcula(){
		var r ='';
		

		
	}

	

   //a props click recebe é uma função que recebe o valor passado no clique do botão no
   //componente button 
	return(
		 <Context.Provider value={{estado,setEstado}}>
		<div className="calculator">
		<Display value={estado.displayVal}/>
			<Button label="AC" triple click={()=>clearMemory()}/>
			<Button label="/" operation="/" click={setOperation}/>
			<Button label="7" click={addDigit} />
			<Button label="8" click={addDigit} />
			<Button label="9" click={addDigit} />
			<Button label="*" operation="*" click={setOperation}/>
			<Button label="4" click={addDigit} />
			<Button label="5" click={addDigit} />
			<Button label="6" click={addDigit} />
			<Button label="-" operation="-" click={setOperation}/>
			<Button label="1" click={addDigit} />
			<Button label="2" click={addDigit} />
			<Button label="3" click={addDigit} />
			<Button label="+" operation="+" click={setOperation}/>
			<Button label="0" double click={addDigit} />
			<Button label="." click={addDigit} />
			<Button label="=" click={setOperation}/>	
		</div>
		</Context.Provider>
		)
}