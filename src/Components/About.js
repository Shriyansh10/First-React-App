// import React, {useState} from 'react'

export default function About(props) {

    // const [state, setState] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleMode = ()=>{
    //     if(state.backgroundColor === "black"){
    //         setState({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setState({
    //             color: "white",
    //             backgroundColor: "black"
    //         })
    //         setBtnText("Disable Dark Mode")
    //     }
    // }


    let mystyle = {
        color: props.mode === "dark" ? "white":"black",
        backgroundColor: props.mode === "dark" ? "rgb(36 74 104)":"white"
    }

    return (
    <div className='container my-3' style={{color: props.mode === "dark" ? "white":"black"}}>
        <h1 >About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" style={mystyle} data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" style={mystyle} data-bs-parent="#accordionExample">
                <div className="accordion-body" >
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" style={mystyle} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
