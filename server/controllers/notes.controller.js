import { mongoUp } from '../lib/mongo'
import Note from '../models/note.model'

mongoUp()

export const getNotes = async (req, res) => {
	try {
		// ToDo: get all notes
		const notes = await Note.find({})
		return res.status(200).json({
			message: 'Notes fetched successfully',
			data: notes,
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			message: 'Internal server error',
		})
	}
}

export const getNoteById = async (req, res) => {
	try {
		const { noteId } = req.query
		// ToDo: Get note by id
		const note = await Note.findById(noteId)
		return res.status(200).json({
			message: 'Note fetched successfully',
			data: note,
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			message: 'Internal server error',
		})
	}
}

export const createNote = async (req, res) => {
	try {
		const newNote = req.body
		// ToDo: Create a new note
		const note = await Note.create(newNote)
		return res.status(201).json({
			message: 'Note created successfully',
			data: note,
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			message: 'Internal server error',
		})
	}
}

export const updateNote = async (req, res) => {
	try {
		const { noteId } = req.query
		const updatedNote = req.body
		// ToDo: Update a note
		const note = await Note.findByIdAndUpdate(noteId, updatedNote, {
			new: true,
		})
		return res.status(200).json({
			message: 'Note updated successfully',
			data: note,
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			message: 'Internal server error',
		})
	}
}

export const deleteNote = async (req, res) => {
	try {
		const { noteId } = req.query
		// ToDo: Delete a note
		const note = await Note.findByIdAndDelete(noteId)
		return res.status(200).json({
			message: 'Note deleted successfully',
			data: note,
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({
			message: 'Internal server error',
		})
	}
}
