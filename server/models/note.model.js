import { Schema, model, models} from 'mongoose'

const NoteSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

export default models.Note || model('Note', NoteSchema)
