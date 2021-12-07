import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(theme => ({

	root: {
		backgroundColor : 'e6e6e6',
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
	},
	newTweet : {
		backgroundColor : 'white',
		padding : 18,
		display : 'flex',
		flexDirection : 'column'
	},
	input : {
		marginRight : '1rem',
		flex : 1,
		border : 'none',
		"&:focus" : {
			outline : 'unset'
		}
	},
	newTweetBtn : {
		color : 'white',
		borderRadius : '1rem',
		fontFamily : 'shabnam',
		lineHeight : '1rem',
		height : '30px',
		width : '5rem'
	},
	newTweetImgBtn : {
		border : '0.5px solid #3337',
		marginLeft : "1rem",
		padding: "0.2rem",
		borderRadius : "50%"
	},
	tweet : {
		backgroundColor : 'white',
		marginTop : '7px',
		padding : 18,
		display : 'flex',
		flexDirection : 'column'
	},
	likeCount : {
		color : theme.palette.text.hint,
		fontSize : '0.75rem',
		marginLeft : '0.5rem'
	},
	tweeterName : {
		fontWeight : 600,
		padding : '1rem'
	},
	tweeterId : {
		color : theme.palette.text.hint,
		marginRight : '1rem',
		fontSize: '0.75rem'
	},
	tweetText : {
		padding : '1rem'
	},
	tweetImg : {
		width : '10rem',
		height : '10rem',
		marginTop : '1rem',
		backgroundSize : 'contain',
		backgroundRepeat : 'no-repeat',
	}
	
}));

export default useStyle;