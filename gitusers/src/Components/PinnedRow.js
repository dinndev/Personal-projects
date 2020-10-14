

import React from 'react';



function PinnedRow (props) {
    return(
    <div>
      <div className="pinned">
        <h2>Pinned</h2>
        <div className="pinned-repositories">
            <div>
               <h3 className="Repo-name">New repo</h3>
               <h4 className="Repo-description">Something</h4>
            </div>
        </div>
      </div>
     </div>
    )
}

export default PinnedRow;