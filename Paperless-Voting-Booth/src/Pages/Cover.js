import React, { useState, useEffect } from 'react';
import '../Resources/coverPage.css';
import { Link } from 'react-router-dom';
import { FetchElectionDetails } from '../APIOperators/ElectionDetailsAPI';

const PVB_CoverUI = () => {
    const [electionDetails, setElectionDetails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await FetchElectionDetails();
            setElectionDetails(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="container">
                <h1>
                    {electionDetails.map(election => (
                        <React.Fragment key={election._id}>
                            {election.election_name_sinhala} | {election.election_name_english} | {election.election_name_tamil} - {election.election_year}
                        </React.Fragment>
                    ))}
                </h1>
            </div>
            <h1>
                <Link to='/verifyOTP' className="coverPage">
                    <p>
                        චන්ද ප්‍රකාශය ආරම්භ කරන්න<br />
                        Start Casting Vote<br />
                        வாக்களிக்கத் தொடங்குங்கள்<br />
                    </p>
                </Link>
            </h1>
        </div>
    );
}

export default PVB_CoverUI;
