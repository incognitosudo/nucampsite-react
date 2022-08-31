import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

//function component named DisplayCard which takes {item} object as prop.
const DisplayCard = ({item}) => {
    //below destructures image, name, description props from item object.
    const {image, name, description} = item;
    return (
        <Card>
            {/* curly braces are JavaScript variables */}
            <CardImg src={image} alt={name} /> 
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
}

export default DisplayCard;
