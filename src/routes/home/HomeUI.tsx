import React  from "react";
import { Link }  from 'react-router-dom';
import { Card, PrimaryButton, Title } from "../../components";


import "../routes.css";



export default function HomeUI () {
    return (
       <div className="center-card">
           <Card>
               <Title>
                  
                  Welcome to the Trivia Challenge
                  
                </Title> 
                
                <div>
                   <p>
                You will be presented with true or false questions.
                   </p>
                </div>
                <div>
                   <p>
                   Can you score 100% ?
                   </p>
                </div>
                <PrimaryButton variant="nah"><Link to="/quiz">Begin</Link></PrimaryButton>
           </Card>
       </div>
    );
}