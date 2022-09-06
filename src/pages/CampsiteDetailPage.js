import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteById } from "../features/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import CommentsList from "../features/comments/CommentsList"; //in order to get our comments to show up in CampsiteDetailPage.js
import SubHeader from "../components/SubHeader"; //render Subheader Component in return statement

//this is  a function component named CampsiteDetailPage with empty parameter list
const CampsiteDetailPage = () => {
    const {campsiteId} = useParams(); //--> variable campsiteId has been destructure from a call to the useParams() function
    const campsite = selectCampsiteById(campsiteId);

    return ( //<-- return statement CampsiteDetailPage component
        //has rendered container component
        <Container>
            {/* Code renders SubHeader component with 2 props: current that contains campsite's name and detail set to Boolean value of true. Detail prop will cause BreadcrumpItem to be conditionally rendered in SubHeader component to be rendered */}
            <SubHeader current={campsite.name} detail={true} /> 
            <Row>
                <CampsiteDetail campsite={campsite} /> {/*CampsiteList is rendered so in order to change page edit CampsiteDetail.j*/}
                <CommentsList campsiteId={campsiteId} /> {/* empty array puts the other if statemnt that there are no comments for this campsite yet */}
            </Row> 
        </Container>
    )
}

export default CampsiteDetailPage