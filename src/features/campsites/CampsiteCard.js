import { Card, CardImg, CardImgOverlay, CardTitle }from 'reactstrap';
import { Link } from 'react-router-dom';

//add id to the list of properties that we are destructuring in CampsiteCard component from campsites prop
const {id, image, name} = campsite;

//function component named CampsiteCard with parameter props
const CampsiteCard = ({ campsite }) => {
    const { image, name } = campsite;
    return (
       <Link to={'${id}'} >
       { /*renders Card component*/}
        <Card>
            <CardImg 
                width='100%'
                src={image}
                alt={name}
            /> 
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
        </Link>
    );
}

export default CampsiteCard;


