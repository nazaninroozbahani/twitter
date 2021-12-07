import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({

	root: {
		backgroundColor : 'e6e6e6',
		height : '100vh',
		flex : 1,
		overflowY : 'auto'
	},
	header : {
		backgroundColor : 'white',
		padding : 18,
		display : 'flex'
	},
	headerTitle : {
		fontSize : '1.2rem',
		fontWeight : 600,
		marginRight : '0.5rem'
	},
	divider : {
		backgroundColor : '#7EBAFF',
		filter : 'opacity(0.2)'
	}

	
}));

export default useStyle;