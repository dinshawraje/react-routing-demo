import React, { useState } from "react";

import { Col, Button, Form } from "react-bootstrap";
import Select from 'react-select';


export const EmpDetailsForm: React.FC = () => {
  const [ownerState, setOwnerState] = useState({
    fullname: '',
    email: '',
    project: [
      { label: "Smith and Nephew", value: 1 },
      { label: "Facebook", value: 2 },
      { label: "Netflix", value: 3 },
      { label: "Tesla", value: 4 },
      { label: "Amazon", value: 5 },
      { label: "Alphabet", value: 6 },
    ],
    domain: [
      { label: "UI", value: 1 },
      { label: "Backend", value: 2 },
      { label: "DB", value: 3 },
      { label: "Testing", value: 4 },
    ]
  });
  const handleOwnerChange = (e :any) => setOwnerState({
    ...ownerState,
    [e.target.name]: [e.target.value],
  });
  const blankSkill = { 
    technicalSkills: [
      { label: "Angular", value: 1 },
      { label: "Java", value: 2 },
      { label: "Github", value: 3 },
      { label: "Marklogic", value: 4 },
      { label: "Ruby", value: 5 },
      { label: "Python", value: 6 },
    ], 
    rating: [
      { label: "0", value: 1 },
      { label: "Basics", value: 2 },
      { label: "Intermediate", value: 3 },
      { label: "Extensive", value: 4 },
    ]
  };
  const [skillState, setSkillState] = useState([
    blankSkill,
  ]);
  const addSkill = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSkillState([...skillState, {...blankSkill}]);
  
  }
  // const handleSkillChange = (e: { target: { dataset: { idx: React.ReactText; }; className: React.ReactText; value: any; }; }) => {
  //   const updatedCats = [...skillState];
  //   updatedCats[e.target.dataset.idx][e.target.className] = e.target.value;
  //   setSkillState(updatedCats);
  // };
  
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} md="6" >
          <Form.Label htmlFor="fullname">Name</Form.Label>
          <Form.Control placeholder="FullName" name="fullname" id="fullname" value={ownerState.fullname} onChange={handleOwnerChange} />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" id="email" value={ownerState.email} onChange={handleOwnerChange}  />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="formGridDesignation">
          <Form.Label>Project</Form.Label>
          {/* <Form.Control as="select" options={ ownerState.project } /> */}
          <Select options={ ownerState.project } />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="formGridDomain">
          <Form.Label>Domain</Form.Label>
          <Select options={ ownerState.domain } />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} md="12">
          <Button variant="primary" type="submit" value="Add New Skill" onClick={addSkill}> 
            Add New Skill
          </Button>
          {
            skillState.map((val, idx) => {
              const skillId = `TechnicalSkills-${idx}`;
              const ratingId = `Rating-${idx}`;
              return (
                <Form.Row key={`Skill-${idx}`}>
                  <Form.Group as={Col} md="6">                
                    <Form.Label htmlFor={skillId} >{`Skill #${idx + 1}`}</Form.Label>
                    <Select options={ blankSkill.technicalSkills } name={skillId} data-idx={idx} id={skillId} 
                      className="technicalSkills" />
                    
                   
                  </Form.Group>
                  <Form.Group as={Col} md="6">  
                    <Form.Label htmlFor={ratingId} >Ratings</Form.Label>
                    <Select options={ blankSkill.rating } name={ratingId} data-idx={idx} id={ratingId}
                      className="rating" value={skillState[idx].rating} />
                    
                  </Form.Group>
                </Form.Row>
              );      
            })
          }
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Button variant="primary" type="submit"> Submit </Button>
        </Form.Group>
      </Form.Row>
    </Form>
  );
};
