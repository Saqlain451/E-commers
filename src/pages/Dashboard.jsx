import "../styles/dashboard.css"
import DashNavbar from "../components/DashNavbar.jsx";
import DashLeftSideBar from "../components/DashLeftSideBar.jsx";
import DashContentHeader from "../components/DashContentHeader.jsx";
import DashContentHeader2 from "../components/DashContentHeader2.jsx";
import Card from "../components/Card.jsx";
import {products} from "../hooks/Data.jsx";
import DashRightSIdeBar from "../components/DashRightSIdeBar.jsx";

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <DashNavbar/>
                <div className="dashboard-content">
                    <aside>
                        <DashLeftSideBar/>
                    </aside>
                    <main>
                        <div className="main-content">
                            <DashContentHeader/>
                            <DashContentHeader2/>
                            <div className="main-content-products">
                                <div className="product-wrapper">
                                    {products.map((products) => {
                                        const {id} = products
                                        return (
                                            <Card {...products} key={id}/>
                                        )
                                    })}
                                </div>
                                <button className={"btn-load"}>Load More</button>
                            </div>
                        </div>
                    </main>
                    <aside>
                        <DashRightSIdeBar/>
                    </aside>
                </div>
            </div>
        </>
    )
}

export default Dashboard;