import "../styles/dashboard.css"
import DashNavbar from "../components/DashNavbar.jsx";
import DashLeftSideBar from "../components/DashLeftSideBar.jsx";

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

                    </main>
                    <aside>

                    </aside>
                </div>
            </div>
        </>
    )

}

export default Dashboard;