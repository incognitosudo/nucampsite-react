import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeauturedCampsite } from "../campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionSlice";

//funciton component called DisplayList
const DisplayList = () => {
    //Declared const items variable equal to array contianing the return value of selectFeauturedCampsite() and selectFeaturedPromotion()
    const items = [selectFeauturedCampsite(), selectFeaturedPromotion()];

    return(
        <Row>
            {//map method takes callback funciton as its argument. Define this callback function in argument list as an arrow func with two params: item and idx
                items.map((item, idx) => {
                    return (
                        <Col md className='m-1' key={idx} >
                            <DisplayCard item={item} />
                        </Col>
                    );
                })
            }
        </Row>
    );
};

export default DisplayList