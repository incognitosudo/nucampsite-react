import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

//function component named DisplayCard which takes {item} object as prop.
const AnimatedDisplayCard = ({item}) => {
    //below destructures image, name, description props from item object.
    const {image, name, description} = item;
    const [toggle, setToggle] = useState(false);//destructure toggle and setToggle from call to useState(). Initialize value of toggle to false by passing that value to useState() as an argument
    const animatedStyle = useSpring({
        opacity: toggle ? 1: 0,
        transform: toggle ? 'scale(1,1)' : 'scale(1,0)',
        config: { duration: 500 }
    }); //call useSpring hook which return object argument to useSpring() that ocntains the properties 'opacity', 'transform', 'config'.
    useEffect(() => {
        setToggle(true);
    }, []);  //call useEffect() hook in the below manner, we tell React that whenever the AnimatedDisplayCard component is rendered or re-rendered and we want to call side effect by calling setToggle()
    return (
        //Card component is wrap in an 'animated.div' element, giving 'animated.div' element a prop of style={animatedStyle} that uses animatedStyle 
        <animated.div style={animatedStyle} > 
            <Card>
                {/* curly braces are JavaScript variables */}
                <CardImg src={image} alt={name} /> 
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card> 
        </animated.div>
    )
}

export default AnimatedDisplayCard;
//now to view animation added to this card we must updated DisplayList.js. import 'AnimatedDisplayCard' there. And comment out 'DisplayCard'.
