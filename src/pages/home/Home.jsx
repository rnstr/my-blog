import './home.css'
import Header from "../../header/Header";
import Posts from "../../sidebar/Sidebar";
import Sidebar from "../../posts/Posts";

export default function Home() {
    return (
    <>
        <Header/>
        <div className="home"> 
            <Sidebar/>
            <Posts/>
        </div>
    </>
    )
}
