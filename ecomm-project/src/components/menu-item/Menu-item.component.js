import React from 'react';
import './menu-item.style.css';
import { Outlet, useNavigate, } from 'react-router-dom';

function MenuItem({ title, imageUrl, size , linkUrl }) {
    let navigate = useNavigate();
    return (
        <>
            <div className={`${size} menu-item`}
                onClick={() => navigate("/HatsPage") `${linkUrl}`}>
                {console.log(navigate)}

                <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>

                <Outlet />
            </div>

        </>
    )
}
export default MenuItem;
// const MenuItem = ({ title, imageUrl, size }) => (

//     <div className={`${size} menu-item`}
//         onClick={() => navigate("/HatsPage")}>
//         {console.log(navigate)}

//         <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }} />
//         <div className="content">
//             <h1 className="title">{title.toUpperCase()}</h1>
//             <span className="subtitle">SHOP NOW</span>
//         </div>

//         <Outlet />
//     </div>
// );

// export default MenuItem;
