import "../styles/dashboard.css"
import DashNavbar from "../components/DashNavbar.jsx";
import DashLeftSideBar from "../components/DashLeftSideBar.jsx";
import DashContentHeader from "../components/DashContentHeader.jsx";
import DashContentHeader2 from "../components/DashContentHeader2.jsx";

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
                        </div>
                    </main>
                    <aside>

                    </aside>
                </div>
            </div>
        </>
    )

}

export default Dashboard;