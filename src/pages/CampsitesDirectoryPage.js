import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsitesSlice";

const CampsitesDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();
    
    const toggleCampsite = () => {
        selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite);
    };

    return ( //render a Container in return statement of my CamspitesDirecotryPqge component
    //--inside 2nd column -- CampsiteDetail takes a single prop called campsite and is set to a javaScript varibable {selectedCampsite}
        <Container>
            <Button onClick={() => toggleCampsite()}>
                Select Random Campsite
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    );
};

export default CampsitesDirectoryPage;