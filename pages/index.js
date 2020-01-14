import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Index = (props) => {
    const myname = useRef(null);
    const myimage = useRef(null);

    const effetDependencies = [myname,myimage];

    useEffect(() => {
        gsap.from(myname.current, 1, {x: -100});
        gsap.from(myimage.current, 1, {y: 300});
    }, effetDependencies);


    return(
        <div >
            <p ref={myname} style={{color: '#fff'}}>My name is {props.name}</p>
        </div>
    )
}


export default Index;