import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
//import { selectRandomCampsite } from "../features/campsitesSlice";
import { useState } from "react";
import { selectCampsiteById } from "../features/campsitesSlice";

const CampsitesDirectoryPage = () => {
    const [ campsiteId, setCampsiteId ] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);

    return ( //render a Container in return statement of my CamspitesDirecotryPqge component
    //--inside 2nd column -- CampsiteDetail takes a single prop called campsite and is set to a javaScript varibable {selectedCampsite}
        <Container>

            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList setCampsiteId={setCampsiteId}/>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;