import { Card, CardImg, CardImgOverlay, CardTitle }from 'reactstrap';

//function component named CampsiteCard with parameter props
const CampsiteCard = (props) => {
    return (
        //renders Card component
        <Card>
            <CardImg 
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            /> 
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

export default CampsiteCard;