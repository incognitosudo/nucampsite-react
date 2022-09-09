import { Container, Row } from 'reactstrap';
import DisplayList from '../features/display/DisplayList';
import SubHeader from '../components/SubHeader'; //render Subheader Component in return statement

const HomePage = () => {
    return (
        <Container>
            <SubHeader current='Home'/>       
            <DisplayList />
        </Container>
    );
};

export default HomePage;