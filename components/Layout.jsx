import { useRouter } from 'next/router'
// Tools
import { styled } from '@mui/material'
import { format } from 'date-fns'
// Styles
import AddCircleOutlined from '@mui/icons-material/AddCircleOutlined'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import SubjectOutlined from '@mui/icons-material/SubjectOutlined'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const drawerWidth = 240

const Page = styled('div')(({ theme }) => ({
	background: '#f9f9f9',
	width: '100%',
	padding: theme.spacing(3),
}))

const Title = styled(Typography)(({ theme }) => ({
	padding: theme.spacing(2),
}))

const ToolbarPage = styled('div')(({ theme }) => theme.mixins.toolbar)

const MyAvatar = styled(Avatar)(({ theme }) => ({
	marginLeft: theme.spacing(2),
}))

const classes = {
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		'.MuiDrawer-paper': {
			width: drawerWidth,
		},
	},
	active: {
		background: '#f4f4f4',
	},
	appbar: {
		width: `calc(100% - ${drawerWidth}px)`,
	},
	date: {
		flexGrow: 1,
	},
}

export default function Layout({ children }) {
	const router = useRouter()

	const menuItems = [
		{
			text: 'My Notes',
			icon: <SubjectOutlined color='secondary' />,
			path: '/',
		},
		{
			text: 'Create Notes',
			icon: <AddCircleOutlined color='secondary' />,
			path: '/create',
		},
	]

	return (
		<div style={classes.root}>
			{/* App bar */}
			<AppBar sx={classes.appbar} elevation={0}>
				<Toolbar>
					<Typography style={classes.date}>
						Today is the {format(new Date(), 'do MMMM Y')}{' '}
					</Typography>
					<Typography>Juan</Typography>
					<MyAvatar
						style={classes.avatar}
						src='https://lh3.googleusercontent.com/ogw/ADea4I5yYiSnvYhQNY_olgv98332Jxo170InaSYh4Lu3j70=s32-c-mo'
					/>
				</Toolbar>
			</AppBar>
			{/* Side drawer */}
			<Drawer sx={classes.drawer} variant='permanent' anchor='left'>
				<div>
					<Title variant='h5'>Ninja Notes</Title>
				</div>

				{/* List / Links */}
				<List>
					{menuItems.map(item => (
						<ListItem
							key={item.text}
							button
							onClick={() => router.push(item.path)}
							sx={router.asPath === item.path ? classes.active : null}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>

			{/* <div sx={classes.page}>{children}</div> */}
			<Page>
				<ToolbarPage />
				{children}
			</Page>
		</div>
	)
}
