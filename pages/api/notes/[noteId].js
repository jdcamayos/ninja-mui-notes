// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
	deleteNote,
	getNoteById,
	updateNote,
} from '../../../server/controllers/notes.controller'

export default function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return getNoteById(req, res)
		case 'PUT':
			return updateNote(req, res)
		case 'DELETE':
			return deleteNote(req, res)
		default:
			return res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
