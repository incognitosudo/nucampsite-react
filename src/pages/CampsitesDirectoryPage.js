import { Container, Row } from "reactstrap";
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from "../components/SubHeader"; //render Subheader Component in return statement
//import { selectCampsiteById } from "../features/campsitesSlice";
//import { useParams } from "react-router-dom";
//import DisplayList from "../features/display/DisplayList";

const CampsitesDirectoryPage = () => {
    //const [ campsiteId, setCampsiteId ] = useState(0);
    //const selectedCampsite = selectCampsiteById(campsiteId);

    return ( //render a Container in return statement of my CamspitesDirecotryPqge component
    //--inside 2nd column -- CampsiteDetail takes a single prop called campsite and is set to a javaScript varibable {selectedCampsite}
        <Container>
            <SubHeader currrent='Directory'/>
            <CampsitesList />         
        </Container>
    );
};

export default CampsitesDirectoryPage;