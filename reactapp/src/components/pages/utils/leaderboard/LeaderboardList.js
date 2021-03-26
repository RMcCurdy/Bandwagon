import React, { useEffect, useContext } from 'react';
import AppContext from '../../../../context/AppContext';

import LeaderboardItem from './LeaderboardItem';
import axios from 'axios';

const LeaderboardList = () => {
    //global
    const { lboard, setLboard } = useContext(AppContext);

    let localLeaderboardData = [];
    let localLeaderboardData2 = [];
    localLeaderboardData2 = [
        {
            id: 1,
            username: 'Luigi111',
            pointsEarned: '100',
            profilePic: 'Suns',
        },
        {
            id: 2,
            username: 'Yoshi222',
            pointsEarned: '200',
            profilePic: 'Lakers',
        },
        {
            id: 3,
            username: 'Kirby333',
            pointsEarned: '300',
            profilePic: 'Celtics',
        },
    ];

    // const setLocalLeaderboardData = (data) => {};

    // https://jasonwatmore.com/post/2020/07/17/react-axios-http-get-request-examples

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/Leaderboard')
            .then((resp) => setLboard(resp.data));
    }, [setLboard]);

    // .then((resp) => setLboard(resp.data));

    // const getLeaderboardData = () => {
    //     return axios
    //         .get('http://localhost:5000/api/Leaderboard')
    //         .then((resp) => {
    //             console.log('leaderboard response is: ', resp.data);
    //             if (lb.length === 0) {
    //                 console.log('setting setLboard state');
    //                 setLboard(resp.data);
    //             }
    //             console.log('lboard is: ', lboard);
    //         });
    // };

    // const createLeaderboardItems = () => {
    //     return leaderboardData.map((leaderboardData) => (
    //         <LeaderboardItem
    //             key={leaderboardData.id}
    //             username={leaderboardData.username}
    //             pointsEarned={leaderboardData.pointsEarned}
    //             favouriteTeam={leaderboardData.profilePic}
    //         />
    //     ));
    // };

    return (
        <div style={{ border: '2px solid red' }}>
            {/* <span className='leaderboard-header'>
                <h1>Leaderboard</h1>
            </span>
            <div className='leaderboard-header-container'>
                <div className='leaderboard-header-items'>Username</div>
                <div className='leaderboard-header-items'>Points Earned</div>
                <div className='leaderboard-header-items'>Favourite Team</div>
            </div> */}

            <div>
                {localLeaderboardData2.map((row) => {
                    return (
                        <LeaderboardItem
                            key={row.id}
                            username={row.username}
                            pointsEarned={row.pointsEarned}
                            favouriteTeam={row.profilePic}
                        />
                    );
                })}
            </div>
            <hr />
            <div>
                {/* {lboard[0] ? lboard[0].username : 'loading...'}
                {lboard[0] ? lboard[0].totalPointsEarned : 'loading...'}
                {lboard[0] ? lboard[0].profilePic : 'loading...'}

                <div>
                    {lboard[0] ? JSON.stringify(lboard[0]) : 'loading...'}
                </div> */}

                <div>
                    {lboard[0] ? (
                        lboard.map((row) => {
                            return (
                                <LeaderboardItem
                                    key={row.id}
                                    username={row.username}
                                    pointsEarned={row.totalPointsEarned}
                                    favouriteTeam={row.profilePic}
                                />
                            );
                        })
                    ) : (
                        <p>loading...</p>
                    )}
                </div>
                <hr />
            </div>
        </div>
    );
};

export default LeaderboardList;
