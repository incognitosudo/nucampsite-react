import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsbyCampsiteId } from "./commentsSlice";

//CommentsList funciton component
const CommentsList = ({campsiteId}) => {  //destructure campsiteId
    //comments assigned to return value from calling selectCommentsByCampsiteId with campsiteId argument.
    const comments = selectCommentsbyCampsiteId(campsiteId); // we expect this selector function to return an array of comments objects, rather than single value.

    //this conditionally render JSX if the comments array has content and not have falsy value.
    if (comments && comments.length > 0 ) { 
        return (
            //Render Col component with props
            <Col md='5' className='m-1'>
                {/*Render a h4 compoenent with curly braces for writing JavaScript using map method*/}
                <h4>Comments</h4>
                {/*Map method has callback function with parameter of 'comment' with body that returns the 'Comment' component rendered self closing tag*/}
                {comments.map(( comment ) => {
                    return <Comment key={comments.id} comment={comment} />;
                })}
            </Col>
        );
    }
    //Renders if condition evaluated as false or falsy value
    return (
        <Col md='5' className='m-1' >
            There are no comments for this campsite yet.
        </Col>
    )
}

export default CommentsList;