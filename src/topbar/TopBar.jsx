import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className='topLeft'>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-facebook-f"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-linkedin-in"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImage' src='https://cf.shopee.co.id/file/fa6b26b7b080cae71228ef0acd0c72b7'
                    alt=''
                />
                <i className="topSearchIcon fas fa-search"></i>

            </div>
        </div>
    )
}
