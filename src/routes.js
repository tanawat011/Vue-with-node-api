const userH = require('./handler/user')

module.exports = (app) => {
	/* RESFUL Api for users management */
	// create user
	app.post('/user',
			userH.create
	)

	// edit user, suspend, active
	app.put('/user/:userId',
			userH.put
	)

	// delete user
	app.delete('/user/:userId',
			userH.remove
	)

	// get user by id
	app.get('/user/:userId',
			userH.show
	)

	// get all user
	app.get('/users',
			userH.index
	)
}
