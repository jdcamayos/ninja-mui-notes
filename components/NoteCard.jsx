// Tools
import { styled } from '@mui/material'
import { green, red, blue, orange, pink } from '@mui/material/colors'
// Styles
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import DeleteOutlined from '@mui/icons-material/DeleteOutlined'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

const categoryColor = {
	reminders: {
		backgroundAvatar: blue[700],
		background: blue[100],
		border: `1px solid ${blue[300]}`,
	},
	work: {
		backgroundAvatar: red[700],
		background: red[100],
		border: `1px solid ${red[300]}`,
	},
	todos: {
		backgroundAvatar: green[700],
		background: green[100],
		border: `1px solid ${green[300]}`,
	},
	money: {
		backgroundAvatar: orange[700],
		background: orange[100],
		border: `1px solid ${orange[300]}`,
	},
	hobby: {
		backgroundAvatar: pink[700],
		background: pink[100],
		border: `1px solid ${pink[300]}`,
	},
}

const CardAvatar = styled(Avatar, {
	shouldForwardProp: prop => prop !== 'category',
})(({ category }) => ({
	background: categoryColor[category].backgroundAvatar,
}))

const MyCard = styled(Card, {
	shouldForwardProp: prop => prop !== 'category',
})(({ category }) => ({
	border: categoryColor[category].border,
	background: categoryColor[category].background,
}))

export default function NoteCard({ note, handleDelete }) {
	return (
		<MyCard elevation={3} category={note.category}>
			<CardHeader
				avatar={
					<CardAvatar category={note.category}>
						{note.category[0].toUpperCase()}
					</CardAvatar>
				}
				action={
					<IconButton onClick={() => handleDelete(note._id)}>
						<DeleteOutlined />
					</IconButton>
				}
				title={note.title}
				subheader={note.category}
			/>
			<CardContent>
				<Typography variant='body2' color='textSecondary'>
					{note.description}
				</Typography>
			</CardContent>
		</MyCard>
	)
}
