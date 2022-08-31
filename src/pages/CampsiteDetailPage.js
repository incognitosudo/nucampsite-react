import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";

//this is  a function component named CampsiteDetailPage with empty parameter list
const CampsiteDetailPage = () => {
    const {campsiteId} = useParams() //--> variable campsiteId has been destructure from a call to the useParams() function
    const campsite = selectCampsiteById(campsiteId);

    return ( //<-- return statement CampsiteDetailPage component
        //has rendered container component
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage