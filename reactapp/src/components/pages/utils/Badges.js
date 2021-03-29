import React from 'react'

function Badges() {

  function showTable() {
    var x = document.getElementById("all-table");
    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }

  return (
    <div className="badges">
      
      <span className="badges-header">
        <h1>Badges</h1> 
      </span>

        <div className="badges-earned">
          <p className="badge-title"><b>Badges earned</b></p>
          <p className="badge-note">Click on one of your badges to set it as current!</p>
          <img classNameName="cur-badge-check" src="../../../img/badges-test/green-check.png" style={{width:'2em', height:'2em'}} alt="loading" ></img>
          <div className="dropdown">
              <button className="dropbtn">Sorting Method</button>
              <div className="dropdown-content">
                <a>Date awarded (ascending)</a>
                <a>Date awarded (descending)</a>
                <a>option 3</a>
                <a>option 4</a>
              </div>
            </div>
          <table className="badge-table">
              <tbody>
                  <tr>
                      <td><img src="../../../img/badges-test/badge1.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img className="current-badge-selection" src="img/badge2.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                  </tr>
                  <tr>
                      <td><img src="../../../img/badges-test/badge7.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge8.png" style={{width:'4em', height:'4em'}} alt="loading" ></img></td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div className="all-badges-btn" id="all-badges-btn">
        <button className="all-badges-toggle"  id="all-badges-toggle" onclick="showTable()" type="button">View/Hide all badges</button>
        {showTable}
      </div>

        <div className="all-badges-table" id="hidden-table">
        <table className="badge-table" id="all-table" style={{display:'none'}}>
            <tbody>
              <tr><td><p className="all-badges-label">DIAMOND</p></td></tr>
              <tr>
                <td><img src="../../../img/badges-test/badge1.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="../../../img/badges-test/badge2.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="../../../img/badges-test/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="../../../img/badges-test/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="../../../img/badges-test/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="../../../img/badges-test/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
            </tr>
            <tr><td><p className="all-badges-label">GOLD</p></td></tr>
                <tr>
                    <td><img src="../../../img/badges-test/badge1.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge2.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                </tr>
                <tr><td><p className="all-badges-label">SILVER</p></td></tr>
                <tr>
                    <td><img src="../../../img/badges-test/badge7.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge8.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                </tr>
                <tr><td><p className="all-badges-label">BRONZE</p></td></tr>
                <tr>
                    <td><img src="../../../img/badges-test/badge7.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge8.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="../../../img/badges-test/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                </tr>
            </tbody>
        </table>
      </div>
        

    </div>
  )
}

export default Badges