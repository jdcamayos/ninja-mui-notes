import mongoose from 'mongoose'
import { config } from '../config'

const MONGO_URI = `mongodb+srv://${config.dbUsername}:${config.dbPassword}@${config.dbHost}/${config.dbDatabase}?retryWrites=true&w=majority`

export const mongoUp = async () => {
	try {
		const mongoConnection = await mongoose.connect(MONGO_URI)
		console.log('MongoDB connected successfully')
		console.log('Database: ', mongoConnection.connection.db.databaseName)
		console.log('Host: ', mongoConnection.connection.host)
	} catch (error) {
		console.log(error)
	}
}
