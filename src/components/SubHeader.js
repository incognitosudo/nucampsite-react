import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

//Function Component Subheader object destructuring two parameters named 'current' and 'detail' in parameter list.
const SubHeader = ({current, detail}) => {
    return (
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to='/'>
                            Home
                        </Link>
                    </BreadcrumbItem>
                    
                    {/*This is a && expression short-circuilt evaluation. detail is truthy and right operand is renders a BreadcrumbItem component with Link component. If detail value is falsy then operator's right operand will not be evaluated*/}
                    { detail && (
                        <BreadcrumbItem>
                            <Link to='/directory'>
                                Directory
                            </Link>
                        </BreadcrumbItem>
                    )}
                    <BreadcrumbItem active>
                        {current}
                    </BreadcrumbItem>
                </Breadcrumb>
                <h2>
                    {current}
                </h2>
                <hr /> {/* this is a horizontal rule element which creates a thin horizontal line*/}
            </Col>
        </Row>
    );

};

//Let us now update all the components in the (CampsiteDetailPage, CampsitesDirectoryPage, and HomePage) pages/ folder so that we can use the Subheader component
export default SubHeader;