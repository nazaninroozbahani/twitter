import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({
	
	root: {
		padding : '2rem 1rem',
		backgroundColor : 'white',
		height : '100vh',
		width : '18%',
		[theme.breakpoints.down("sm")] : {
			width : "100%"
		},
	},
	logoType : {
		fontSize : '1.5rem !important',
		fontWeight : '600 !important',
		marginRight: '1rem !important',
		color : theme.palette.primary.main
	},
	hashtagTitle : {
		fontSize : '1.25rem !important ',
		fontWeight : '600 !important',
		marginTop : '3rem !important',
		marginBottom : '1.5rem !important'
	},
	hashtag : {
		marginRight : '0.8rem !important',
		fontSize : '1rem !important',
		fontWeight : '400 !important'
	},
	hashtagParent : {
		marginBottom : '0.5rem !important',
		padding : '0.15rem !important',
		width : '100%'

	}
	
}));

export default useStyle;