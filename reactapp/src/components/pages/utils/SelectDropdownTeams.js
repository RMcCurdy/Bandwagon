import React, { useEffect, useContext } from 'react';
import AppContext from '../../../context/AppContext';
import axios from 'axios';

const SelectDropdownTeams = () => {

  const { profilePic, setProfilePic, teams, setTeams } = useContext(AppContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/Teams').then((resp) => {
      setTeams(resp.data);
    });
}, [setTeams]);

  return (
    <div className="dropdown-container-sign-up">
          {teams[0] ?
          <select className="dropdown-box" name="dates" onChange={(e) => setProfilePic(e.target.value)}>
          <option key={0}>--Select Team--</option>
          {teams.map((row) => {
                if (profilePic === row.teamName) {
                  return (
                    <option key={row.id} style={{backgroundImage:`url(${row.teamName}.svg)`}} value={`${row.teamName}`} defaultValue>{row.teamName}</option>)
                } else {
                  return (
                    <option key={row.id} style={{backgroundImage:`url(${row.teamName}.svg)`}} value={`${row.teamName}`}>{row.teamName}</option>)
                }
              }
            )
          }
           </select> : (
          <p>loading...</p>
        )}
          
        </div>
  )
}


export default SelectDropdownTeams
