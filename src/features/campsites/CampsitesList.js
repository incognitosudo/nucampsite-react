//import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "../campsitesSlice";



const CampsitesList = () => {
    const campsites = selectAllCampsites();
    return (
        //curly braces inside allows us to use JavaScript inside JSX
        <Row className='ms-auto'>
            {campsites.map((campsite) => { //Put campsite.js array and invoke here
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};


export default CampsitesList;