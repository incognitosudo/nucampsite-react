import { Card, CardImg, CardImgOverlay, CardTitle }from 'reactstrap';
import { Link } from 'react-router-dom';

//add id to the list of properties that we are destructuring in CampsiteCard component from campsites prop


//function component named CampsiteCard with parameter props
const CampsiteCard = ({ campsite }) => {
    const { id, image, name } = campsite;
    return (
        //this uses template literal syntax to turn the id variable into a string, ex '3' instead of 3
        <Link to={`${id}`} >
        { /*renders Card component*/}
            <Card>
                <CardImg width='100%' src={image} alt={name} /> 
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
}

export default CampsiteCard;


