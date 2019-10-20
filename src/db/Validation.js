import Controller from './Controller'

// -- VALIDATION --
class Validation {

	constructor() {
		// Regexs:
		this.errors = []
		this.remail = /^(([^<>()\[\]\.,:\s@\"]+(\.[^<>()\[\]\.,:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,:\s@\"]+\.)+[^<>()[\]\.,:\s@\"]{2,})$/i
	}

	// public functions ------------
	arrayIsEmpty(array) {
		return (typeof array !== 'undefined' && array.length == 0)
	}

	validationPerson(person) {

		// Name
		if (checkIsEmpty.bind(this)(person.name)) {
			this.errors.push('Name is empty.')
		} else {
			if (checkMinMaxChar.bind(this)(person.name, 3, 45)) {
				this.errors.push('Invalid number of character for Name. Min: 3 | Max: 45')
			}
		}

		// E-mail
		if (checkIsEmpty.bind(this)(person.email)) {
			this.errors.push('E-mail is empty.')
		} else {
			person.email = person.email.toLowerCase()
			if (checkMinMaxChar.bind(this)(person.email, 7, 45)) {
				this.errors.push('Invalid number of character for E-mail. Min: 7 | Max: 45')
			} else {
				if (checkRegex.bind(this)(person.email, this.remail)) {
					this.errors.push('Invalid E-mail.')
				} else {
					if (checkEmailRegistered.bind(this)(person.email)) {
						console.log('registered!!!')
						this.errors.push('E-mail already registered.')
					}
				}
			}
		}

		return this.errors
	}
	// public functions ------------
}


// private functions -----------
const checkIsEmpty = (data) => {
	return (!data)
}

const checkMinMaxChar = (data, qmin, qmax) => {
	return (!((data.length >= qmin) && (data.length <= qmax)))
}

const checkRegex = (data, regex) => {
	return (!regex.test(String(data).toLowerCase()))
}

const checkEmailRegistered = (email) => {
	let status = false
	Controller.people.forEach((person) => {
		if (person.email == email) {
			status = true
		}
	})
	return status
}
// private functions -----------

export default Validation
// -- VALIDATION --