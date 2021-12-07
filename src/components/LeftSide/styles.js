import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({

	root: {
		padding : '1.7rem 2rem',
		backgroundColor : 'white',
		height : '100vh',
		width : '25%',
		overflowY: 'auto',

	},
	profName: {
		flex : 1,
		marginLeft : '0.5rem'
	},
	profId : {
		flex : 1,
		marginLeft : '0.5rem',
		fontSize : '0.8rem',
		color : theme.palette.text.hint
	},
	userList : {
		backgroundColor : '#f5f8fa',
		borderRadius : '2rem',
		marginTop : '3rem !important',
		padding : '1rem',
		marginBottom : '5rem'
	},
	best : {
		padding : '0.5rem',
		fontSize : '1.25rem',
		fontWeight : 600
	},
	userItems : {
		padding : '0.5rem',
	},
	userName: {
		flex : 1,
		marginRight : '0.5rem'
	},
	userId : {
		flex: 1,
		marginRight: '0.5rem',
		fontSize: '0.8rem',
		color: theme.palette.text.hint
	},
	twitterImg : {
		width : 50,
		height : 50,
		borderRadius : '50%'
	}

}));

export default useStyle;