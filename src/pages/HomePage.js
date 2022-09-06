import { Container, Row } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader'; //render Subheader Component in return statement

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home'/>
            <Row>
                <DisplayList />
            </Row>
        </Container>
    );
};

export default HomePage;