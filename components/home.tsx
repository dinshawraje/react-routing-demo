import React from 'react';
import { Link } from "react-router-dom";
import { Media, ButtonToolbar } from "react-bootstrap";

export const Home: React.FC =() => {
    return (
        <Media>
            <img
                width={64}
                height={64}
                className="mr-3"
                src='https://media.glassdoor.com/sqll/466295/sopra-steria-squarelogo-1469602633371.png'
                alt="Generic placeholder"
            />
            <Media.Body>
                <h5>Employee Skill Matrix </h5>
                <p>
                This Skill matrix will help managers to keep track of team skills and work on skill building activities.
                </p>
                <ButtonToolbar>
                    <Link to = '/emp-detail-form' className= 'btn btn-primary'>Employee Detail Form</Link>
                </ButtonToolbar>
            </Media.Body>
        </Media>
    );
}