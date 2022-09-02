import { formatDate } from "../../utils/formatDate";


//after importing we need to make a function component. 
const Comment = ({ comment }) => {
    //destructures the properties of text: commentText, rating, author, and date from thte comment obejct by using the folowing syntax.
    const {text: commentText, rating author, date } = comment;
    return (
        <p>
            {/* render the commentText variable  */}
            {commentText}
            <br />
            {rating}/5 stars -- {author}, {formatDate(date)}
        </p>
    )
}

export default Comment;