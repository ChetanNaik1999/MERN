import React from'react';
import logo5 from "../images/logo4.jpg";

const About=()=>{
    return (
      <>
      <div class="container emp-profile">
     <form action="" method="post">
         <div class="row">
             <div class="col-md-4">
                 <img src={logo5} alt=""/>
             </div>
             <div class="col-md-6">
                 <div class="profile-head">
                     <h5>Chetan Naik</h5>
                     <h6>Web Developer</h6>
                     <p class="profile-reading mt-3 mb-5">RANKINGS <span> 1/10</span></p>
                     <ul class="nav nav-tabs" role="tablist">
                        <li class="active"><a href="#home" id="home-tab" data-toggle="tab" role="tab">About</a></li>
                        <li class="active"><a href="#profile" id="profile-tab" data-toggle="tab" role="tab">Timeline</a></li>
                      </ul>
                 </div>
                 <div class="col-md-2">
                     <input type="text" name="" id="" className="profile" value="Profile Change" />
                 </div>
             </div>
         </div>

         <div class="row">
             <div class="col-md-4">
                 <div class="profile-work">
                     <p>Work Link</p>
                 </div>
            </div>
            <div class="col-md-8">
                <div class="tab-content">
                    <div class="tab-pane active" id="home">
                        <div class="row">
                            <div class="col-md-6">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     </form>
      </div>
      </>
    )
}

export default About;