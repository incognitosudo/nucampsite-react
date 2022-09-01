import { Container } from "reactstrap";
import CampsitesList from '../features/campsites/CampsitesList';

const CampsitesDirectoryPage = () => {
    //const [ campsiteId, setCampsiteId ] = useState(0);
    //const selectedCampsite = selectCampsiteById(campsiteId);
    
    return ( //render a Container in return statement of my CamspitesDirecotryPqge component
    //--inside 2nd column -- CampsiteDetail takes a single prop called campsite and is set to a javaScript varibable {selectedCampsite}
        <Container>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;