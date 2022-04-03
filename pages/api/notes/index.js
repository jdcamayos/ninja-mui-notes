// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createNote, getNotes } from "../../../server/controllers/notes.controller"

export default function handler(req, res) {
	switch (req.method) {
		case 'GET':
			return getNotes(req, res)
		case 'POST':
			return createNote(req, res)
		default:
			return res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
