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

export default SubHeader;