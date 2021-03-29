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
    <div class="badges">
      
      <span class="badges-header">
        <h1>Badges</h1> 
      </span>

        <div class="badges-earned">
          <p class="badge-title"><b>Badges earned</b></p>
          <p class="badge-note">Click on one of your badges to set it as current!</p>
          <img className="cur-badge-check" src="../../../public/img/badges-test/green-check.png" style={{width:'2em', height:'2em'}} alt="loading" ></img>
          <div class="dropdown">
              <button class="dropbtn">Sorting Method</button>
              <div class="dropdown-content">
                <a>Date awarded (ascending)</a>
                <a>Date awarded (descending)</a>
                <a>option 3</a>
                <a>option 4</a>
              </div>
            </div>
          <table class="badge-table">
              <tbody>
                  <tr>
                      <td><img src="img/badge1.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img class="current-badge-selection" src="img/badge2.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="img/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="img/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="img/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="img/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                  </tr>
                  <tr>
                      <td><img src="img/badge7.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="img/badge8.png" style={{width:'4em', height:'4em'}} alt="loading" ></img></td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div class="all-badges-btn" id="all-badges-btn">
        <button class="all-badges-toggle"  id="all-badges-toggle" onclick="showTable()" type="button">View/Hide all badges</button>
        {showTable}
      </div>

        <div class="all-badges-table" id="hidden-table">
        <table class="badge-table" id="all-table" style={{display:'none'}}>
            <tbody>
              <tr><td><p class="all-badges-label">DIAMOND</p></td></tr>
              <tr>
                <td><img src="img/badge1.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="img/badge2.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="img/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="img/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="img/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                <td><img src="img/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
            </tr>
            <tr><td><p class="all-badges-label">GOLD</p></td></tr>
                <tr>
                    <td><img src="img/badge1.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge2.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                </tr>
                <tr><td><p class="all-badges-label">SILVER</p></td></tr>
                <tr>
                    <td><img src="img/badge7.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge8.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                </tr>
                <tr><td><p class="all-badges-label">BRONZE</p></td></tr>
                <tr>
                    <td><img src="img/badge7.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge8.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                    <td><img src="img/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                </tr>
            </tbody>
        </table>
      </div>
        

    </div>
  )
}

export default Badges