import * as React from "react";
import { Media } from "react-bootstrap";

export const TestEmpForm: React.FC =() => {
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
            </Media.Body>
        </Media>
    );
}