import React, { Component } from 'react'
import './App.css'
import valid from 'card-validator'


class App extends Component {
	state = {
		cardPicture: ''
	}
	
	componentDidMount() {
		var css = document.getElementById('dynamicCSS')
		css.style.display = 'none'
	}

	handleChange = e => {
		var numberValidation = valid.number(e.target.value)
		var css = document.querySelector('#dynamicCSS')
		var borders = document.querySelector('.borders')

		css.style.display = 'block'

		if (!numberValidation.isPotentiallyValid) {
			css.style.display = 'none'
		}
		
		if (!numberValidation.isValid) {
			borders.style.border = '3px solid red'
		}

		if (numberValidation.card == null) {
			css.style.display = 'none'
		}
			
		if (numberValidation.card) {
			 if (numberValidation.card.type === 'visa') {
				this.setState ({
					cardPicture: 'fa fa-cc-visa'
				})
			} else if (numberValidation.card.type === 'american-express') {
				this.setState ({
					cardPicture: 'fa fa-cc-amex'
				})
			} else if (numberValidation.card.type === 'diners-club') {
				this.setState ({
					cardPicture: 'fa fa-cc-diners-club'
				})
			} else if (numberValidation.card.type === 'discover') {
				this.setState ({
					cardPicture: 'fa fa-cc-discover'
				})
			} else if (numberValidation.card.type === 'jcb') {
				this.setState ({
					cardPicture: 'fa fa-cc-jcb'
				})
			} else if (numberValidation.card.type === 'mastercard') {
				this.setState ({
					cardPicture: 'fa fa-cc-mastercard'
				})
			}
		}
	}

	handleExpirationMonth = e => {
		var numberValidation = valid.expirationDate(e.target.value)
		var borders = document.querySelector('input')

		if (!numberValidation.isValid) {
			borders.style.border = '3px solid red'
		}
	}
	
  render() {
    return (
      <div className="container">
        <div className="title">Bank Card</div>
        <input className="cardNumber borders" onChange={this.handleChange} placeholder="Card number" type="number" />
        <div id="dynamicCSS">
	      	<div className="cardExpirationContainer">
	          <input className="cardExpiration borders" onChange={this.handleExpirationMonth} placeholder="mo" type="number"/>
	          <div className="slash">/</div>
	          <input className="cardExpiration borders" placeholder="yr" type="number"/>
	        </div>
	        <input className="name borders" placeholder="Name" type="text"/>
	        <i id="icon" className={this.state.cardPicture} />
	      </div>
      </div>
    )
  }
}

export default App
