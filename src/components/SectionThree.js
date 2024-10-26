import React from 'react';
import { ScheduleData } from '../Api/ScheduleApi';

function SectionThree() {
    // Group fixtures by month
    const groupedFixtures = ScheduleData.fixtures.reduce((acc, fixture) => {
        if (!acc[fixture.month]) {
            acc[fixture.month] = [];
        }
        acc[fixture.month].push(fixture);
        return acc;
    }, {});

    return (
        <div>
            <div className="section3Container">
                <h1>Team <span className='partHeader'>Schedule</span></h1>
                {
                    Object.keys(groupedFixtures).map(month => (
                        <div key={month} className='scheduleCard'>
                            <h5>{month} 2024</h5>
                            {
                                groupedFixtures[month].map((fixture, index) => (
                                    <div key={index} className="sect3SubHeader">
                                        <div> 
                                            <span>Sun {fixture.day} {fixture.month}</span> | {fixture.type}
                                        </div>
                                        <div className='matchSchedule'>
                                            <span className="home">{fixture.homeTeam}</span>
                                            <span className="matchTime">{fixture.time}</span>
                                            <b className="away">{fixture.awayTeam}</b>
                                        </div>
                                        <div className="matchVenue">{fixture.venue}</div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SectionThree;
