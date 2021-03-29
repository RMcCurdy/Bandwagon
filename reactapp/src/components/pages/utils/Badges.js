import React from 'react'

function Badges() {
  return (
    <div className="badges">
      
      <span className="badges-header">
        <h1>My Badges</h1> 
      </span>

        <div className="badges-earned">
          <table className="badge-table">
              <tbody>
                  <tr>
                      <td><img src="../../../img/badges-test/badge1.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge2.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge7.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge8.png" style={{width:'4em', height:'4em'}} alt="loading" ></img></td>
                  </tr>
              </tbody>
          </table>
      </div>

      <span className="badges-header">
        <h1>All Badges</h1> 
      </span>

      <div className="badges-not-earned">
          <table className="badge-table">
              <tbody>
                  <tr>
                      <td><img src="../../../img/badges-test/badge1.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge2.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge3.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge4.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge5.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge6.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge7.png" style={{width:'4em', height:'4em'}} alt="loading"></img></td>
                      <td><img src="../../../img/badges-test/badge8.png" style={{width:'4em', height:'4em'}} alt="loading" ></img></td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  )
}

export default Badges