import Head from 'next/head'
import { useState, useEffect } from 'react'
// Styles
import Container from '@mui/material/Container'
import Masonry from '@mui/lab/Masonry'
import NoteCard from '../components/NoteCard'

export default function Home() {
	const [notes, setNotes] = useState([])

	useEffect(() => {
		fetch('/api/notes')
			.then(res => res.json())
			.then(data => setNotes(data.data))
			.catch(err => console.log(err))
	}, [])

	const handleDelete = async id => {
		await fetch(`/api/notes/${id}`, {
			method: 'DELETE',
		})
		const newNotes = notes.filter(note => note._id !== id)
		setNotes(newNotes)
	}

	return (
		<>
			<Head>
				<title>Notes - MUI Ninja</title>
				<meta name='description' content='All notes in MUI Ninja Notes App' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Container>
				{/* <Grid container spacing={3}> */}
				<Masonry columns={{ xs: 1, md: 2, lg: 3, xl: 4 }} spacing={2}>
					{notes.map(note => (
						<NoteCard key={note._id} note={note} handleDelete={handleDelete} />
					))}
				</Masonry>
				{/* </Grid> */}
			</Container>
		</>
	)
}
