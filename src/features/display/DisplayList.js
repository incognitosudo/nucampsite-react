import { Col, Row } from "reactstrap";
//import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import AnimatedDisplayCard from "./AnimatedDisplayCard";
import { useSelector } from "react-redux";


const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state)
    ]);
    console.log('display items:', items);

    return(
        <Row>
            {//map method takes callback funciton as its argument. Define this callback function in argument list as an arrow func with two params: item and idx
                items.map((item, idx) => {
                    return (
                        item && (//uses logical && to short-circuit rendering 'Col' component and its contents if value of 'item' is undefined (or falsy). Recall we used this operator in a similar way last week in SubHeader component.
                            <Col md className='m-1' key={idx} >
                                <AnimatedDisplayCard item={item} />
                            </Col>
                        )
                    );
                })
            }
        </Row>
    );
};

export default DisplayList