let datas = [{
		id: 1,
		name: 'Anderson',
		email: 'anderson@crudreact.com'
	},
	{
		id: 2,
		name: 'Lucy',
		email: 'lucy@crudreact.com'
	},
	{
		id: 3,
		name: 'Anne',
		email: 'anne@crudreact.com'
	},
	{
		id: 4,
		name: 'Ava',
		email: 'ava@crudreact.com'
	},
	{
		id: 5,
		name: 'John',
		email: 'john@crudreact.com'
	},
	{
		id: 6,
		name: 'Mary',
		email: 'mary@crudreact.com'
	},
	{
		id: 7,
		name: 'Tiffany',
		email: 'tiffany@crudreact.com'
	},
	{
		id: 8,
		name: 'Paul',
		email: 'paul@crudreact.com'
	},
	{
		id: 9,
		name: 'Charles',
		email: 'charles@crudreact.com'
	}
]

class Controller {

	static get people() {
		return datas
	}

	getById(person) {
		return new Promise((resolve, reject) => {
			Controller.people.forEach((p) => {
				try {
					if (p.id == person.id)
						resolve(p)
				} catch (error) {
					resolve(null)
				}
			})
			resolve(null)
		})
	}

	getByName(person) {
		return new Promise((resolve, reject) => {
			try {
				resolve(Controller.people.filter((p) => p.name.startsWith(person.name)))
			} catch (error) {
				resolve(null)
			}
		})
	}

	getByEmail(person) {
		return new Promise((resolve, reject) => {
			Controller.people.forEach((p) => {
				try {
					if (p.email == person.email)
						resolve(p)
				} catch (error) {
					resolve(null)
				}
			})
			resolve(null)
		})
	}

	create(person) {
		return new Promise((resolve, reject) => {
			try {
				person.id = Controller.people[Controller.people.length - 1].id + 1
				Controller.people.push(person)
				resolve(true)
			} catch (error) {
				resolve(false)
			}
		})
	}

	update(person) {
		return new Promise((resolve, reject) => {
			try {
				Controller.people.map((p, i) => {
					if (p.id == person.id) {
						p.name = person.name
						p.email = person.email
					}
				})
				resolve(true)
			} catch (error) {
				resolve(false)
			}
		})
	}

	delete(person) {
		return new Promise((resolve, reject) => {
			try {
				Controller.people.map((p, i) => {
					(p.id == person.id) ? Controller.people.splice(i, 1): Controller.people.splice(-1, -1)
				})
				resolve(true)
			} catch (error) {
				resolve(false)
			}
		})
	}
}

export default Controller