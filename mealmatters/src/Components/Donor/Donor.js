import React from "react";
import Profilenav from "./Profilenav";
import './donorstyle.css';
import userpic from '../images/userpic.png';

function Donor() {
    return (
        <>
        <Profilenav/>
        <div className="container profile-card">
            <div className="row">
                <div className="col-3">
                    <img src={userpic} alt="User profile picture"></img>
                </div>
                <div className="col-6">
                    <h3 className="heading-name">Zaatar Arabic Restaurant</h3>
                    <p>zaatararabic@gmail.com <br/>Contact: +919865434678</p>

                    <ul className="nav" role="tablist">
                        <li class="nav-item">
                            <a className="nav-link active" aria-current="page" href="#yourdonation" aria-controls="yourdonation" aria-selected="true" data-toggle="tab" role="tab">Your Donations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#donatenowform" data-toggle="tab" role="tab" aria-controls="donatenowform" aria-selected="false">Add Donation</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-3 profile-work">
                    <p className="profile-details">North Indian, Mandi, Kebab, Arabian, Chinese, Fast Food, Desserts, Beverages
<br/>Panampilly Nagar, Kochi<br/>Monday to Saturday<br/>Opens at 10am</p>
                </div>

                <div className="col-6 donation-info">
                <div className="tab-content yourdonations-tab" id="mytab">
                   <div className="tab-pane fade show active" id="yourdonation" aria-labelledby="yourdnations-tab">
                    <h5>No donations yet</h5>
                   </div>
                   <div className="tab-pane fade show" id="donatenowform" aria-labelledby="donatenowform-tab">
                    <h5>form</h5>
                   </div>
                </div>
            </div>
            </div>
            
           

        </div>
        </>
    )
}

export default Donor;