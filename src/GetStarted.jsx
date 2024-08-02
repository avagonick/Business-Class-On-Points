import './GetStarted.css'
import {useState, useEffect, useRef} from 'react'


export function GetStarted(){

    /*This allows for the two different flex boxes to always have the same size components so that they update together*/
    const TopRef = useRef(null)
    const BottomRef1 = useRef(null)
    const BottomRef2 = useRef(null)
    const [dimensions, setDimensions] = useState({width:0, height: 0});
    useEffect(()=>{
        function updateDimensions(){
            if (TopRef.current){
                const {offsetWidth, offsetHeight} = TopRef.current;
                setDimensions({width: offsetWidth, height:offsetHeight});
            }
        }
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    },[]);

    useEffect(() => {
        if (BottomRef1.current && BottomRef2.current && window.innerWidth > 700) {
            BottomRef1.current.style.width = `${dimensions.width}px`;
            BottomRef1.current.style.height = `${dimensions.height}px`;
            BottomRef2.current.style.width = `${dimensions.width}px`;
            BottomRef2.current.style.height = `${dimensions.height}px`;
        }
        if (BottomRef1.current && BottomRef2.current && window.innerWidth <=  700){
            BottomRef1.current.style.width = `${dimensions.width}px`;
            BottomRef2.current.style.width = `${dimensions.width}px`;
        }
        
    }, [dimensions]);
    
    return(
        <>
        <div id = "GetStarted">
            <h1 id = "StartedHeader">How To Get Started</h1>
            <div id ="MobileStarted">
            <div className = "StartedContainer" id = "Top">
                <div className = "Steps" ref = {TopRef}>
                    <h1 className = "Number">1</h1>
                    <div className = "Info">Please fill out 
                    <a href = "" id = "form" target= "_blank"> This Form </a> 
                     to provide information on the types of credit cards you haave.</div>
                </div>
                <div className = "Steps">
                    <h1 className = "Number">2</h1>
                    <div className = "Info">Please call me at ########## once you've completed the credit card analysis form so we can discuss your goals and outline our next steps.</div>
                </div>
                <div className = "Steps">
                    <h1 className = "Number">3</h1>
                    <div className = "Info">If you have the right credit cards and enough points, I will help you book your next trip. If not, I will recommend which card to get and show you how to accumulate enough points for your future travels.</div>
                </div>
            </div>  
            <div className = "StartedContainer" id = "Bottom">
                <div className = "Steps" ref = {BottomRef1}>
                    <h1 className = "Number">4</h1>
                    <div className = "Info">After we book your business class flight, you will pay me the fee for a coach seat on the same flight to compensate for my time and expertise.</div>
                </div>
                <div className = "Steps" ref = {BottomRef2}>
                    <h1 className = "Number">5</h1>
                    <div className = "Info">In six months, you’ll be enjoying the comfort of business class on your next trip.</div>
                </div>
            </div>
            </div>
        </div>
        </>
    );
}