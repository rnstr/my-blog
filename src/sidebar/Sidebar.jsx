import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImage" src="https://cf.shopee.co.id/file/fa6b26b7b080cae71228ef0acd0c72b7" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit minus nisi
                    onsequatur, nulla modi ab officia quia, officiis vero ratione voluptas nemo,
                    non earum vitae voluptatum? Ex fugiat nemo nihil?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Travel</li>
                    <li className="sidebarListItem">Style</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-facebook-f"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-linkedin-in"></i>
                </div>
            </div>
        </div>
    )
}
