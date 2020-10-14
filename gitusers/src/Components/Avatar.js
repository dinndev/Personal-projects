import React from 'react';



function Avatar (props) {
    return(
    <div>
       <div className="avatar">
           <img src="" alt=""/>
             <div className="info">
               <h2 className="name">Aladin</h2>
                 <h3>Pasig</h3>
               </div>
                 <div className="statusBar">
                    <div className="followers">
                        <p>followers</p>
                        <h2>20</h2>
                    </div>
                    <div className="followers">
                        <p>Repositories</p>
                        <h2>50</h2>
                    </div>
                    <div className="followers">
                        <p>following</p>
                        <h2>20</h2>
                    </div>
                 </div>
             </div>
     </div>
    )
}

export default Avatar