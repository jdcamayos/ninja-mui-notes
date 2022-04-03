import Head from 'next/head'
import { useState } from 'react'
// Styles
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'

const classes = {
	field: {
		marginTop: 2,
		marginBottom: 2,
		display: 'block',
	},
}

export default function Create() {
	const router = useRouter()
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [category, setCategory] = useState('todos')
	const [titleError, setTitleError] = useState(false)
	const [descriptionError, setDescriptionError] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
    if (!title.length) {
      setTitleError(true)
    } else {
      setTitleError(false)
    }
    if (!description.length) {
      setDescriptionError(true)
    } else {
      setDescriptionError(false)
    }
    if (title && description) {
      fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          category,
        }),
      }).then(_ => router.push('/'))
    }
	}
	return (
		<>
			<Head>
				<title>Create note - MUI Ninja</title>
				<meta
					name='description'
					content='Create a note in MUI Ninja Notes App'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Container>
				<Typography
					variant='h6'
					color='textSecondary'
					component='h2'
					gutterBottom
				>
					Create note
				</Typography>
				<form noValidate autoComplete='off' onSubmit={handleSubmit}>
					<TextField
						onChange={e => setTitle(e.target.value)}
						value={title}
						sx={classes.field}
						label='Note Title'
						variant='outlined'
						color='secondary'
						fullWidth
						required
						error={titleError}
					/>
					<TextField
						onChange={e => setDescription(e.target.value)}
						value={description}
						sx={classes.field}
						label='Description'
						variant='outlined'
						color='secondary'
						multiline
						rows={4}
						fullWidth
						required
						error={descriptionError}
					/>
					<FormControl sx={classes.field}>
						<FormLabel>Note Category</FormLabel>
						<RadioGroup
							value={category}
							onChange={e => setCategory(e.target.value)}
						>
							<FormControlLabel
								value='money'
								control={<Radio color='secondary' />}
								label='Money'
							/>
							<FormControlLabel
								value='todos'
								control={<Radio color='secondary' />}
								label='Todos'
							/>
							<FormControlLabel
								value='reminders'
								control={<Radio color='secondary' />}
								label='Reminders'
							/>
							<FormControlLabel
								value='work'
								control={<Radio color='secondary' />}
								label='Work'
							/>
						</RadioGroup>
					</FormControl>
					<Button
						type='submit'
						color='secondary'
						variant='contained'
						endIcon={<KeyboardArrowRightIcon />}
					>
						Submit
					</Button>
				</form>
			</Container>
		</>
	)
}
