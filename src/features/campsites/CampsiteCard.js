import { Card, CardImg, CardImgOverlay, CardTitle }from 'reactstrap';

//function component named CampsiteCard with parameter props
const CampsiteCard = ({ campsite }) => {
    const { image, name } = campsite;
    return (
        //renders Card component
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
    );
}

export default CampsiteCard;


