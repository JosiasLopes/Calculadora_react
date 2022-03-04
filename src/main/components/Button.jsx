
import React from 'react'
import './Button.css'


export default (props)=>{
	
	//ao passar o operation na props é aplicado a class operation 
	//para formatar o botao
	return(
		<button 
		onClick={e=>props.click && props.click(e.target.innerHTML)}

		className={`button
			${props.operation ? 'operation':''}
			${props.double ? 'double':''}
			${props.triple ? 'triple':''}

		`}>
		{props.label}</button>
		)
	
}