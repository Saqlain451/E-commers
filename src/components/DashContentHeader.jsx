import {IoAddCircleSharp} from "react-icons/io5";
import "../styles/dashcontentheader.css"
import {useState} from "react";

const DashContentHeader = () => {
    const [isBtnActive, setIsBtnActive] = useState({
        Active : true,
        Draft : false,
        Assembly : false
    })

    const btnClickHandler = (e)=>{
        const btnName = e.target.innerText;
        setIsBtnActive({[btnName] : true});
    }

    return (
        <>
            <div className="dash-content-header">
                <div className="header-logo">
                    <div className="header-logo-img">
                        <img src="/assets/bag-icon.png" alt="bag" width={22} height={19}/>
                    </div>
                    <h1>Products</h1>
                </div>
                <div className="header-items">
                    <span className={isBtnActive.Active? "active" :""} onClick={btnClickHandler}>Active</span>
                    <span className={isBtnActive.Draft? "active" : ""} onClick={btnClickHandler}>Draft</span>
                    <span className={isBtnActive.Assembly? "active" : ""} onClick={btnClickHandler}>Assembly</span>
                </div>
                <div className="header-btns">
                    <p><span><IoAddCircleSharp/></span>Add Product</p>
                </div>
            </div>
        </>
    )

}

export default DashContentHeader;