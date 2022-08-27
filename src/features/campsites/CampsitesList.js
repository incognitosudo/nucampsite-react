import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { SelectAllCampsites } from "../campsitesSlice";


const CampsitesList = () => {
    return (
        //curly braces inside allows us to use JavaScript inside JSX
        <Row className='ms-auto'>
            {
                //Put campsite.js array and invoke here
                CAMPSITES.map((campsite) => {
                    return (
                        <Col className='m-4' md='5' key={campsite.id}>
                            <CampsiteCard campsite={campsite}/>
                        </Col>
                    )
                })
            }
        </Row>
    );
}

export default CampsitesList;