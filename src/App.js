import minaimg1 from "./image/logo1.jpg"
import minaimg from "./image/image1.jpg"
import minaimgg from "./image/content-14.jpg"
import clientimg1 from "./image/clients-1.jpg"
import clientimg2 from "./image/clients-2.jpg"
import clientimg3 from "./image/clients-3.jpg"
import clientimg4 from "./image/clients-4.jpg"
import symbolimg1 from "./image/one1.jpg"
import symbolimg2 from "./image/two2.jpg"
import symbolimg3 from "./image/three3.jpg"
import symbolimg4 from "./image/four4.jpg"
import symbolimg5 from "./image/five5.jpg"
import symbolimg6 from "./image/six6.jpg"
import teamimg1 from "./image/team-01.jpg"
import teamimg2 from "./image/team-02.jpg"
import teamimg3 from "./image/team-03.jpg"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { LiaGhostSolid } from "react-icons/lia";
import { CgScreenMirror } from "react-icons/cg";
import { MdGradient } from "react-icons/md";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
function App() {
  return (
    <div className="container-fluid">
      <nav className="row " style={{ backgroundColor: "#E8E8E8" }}>
        <div className="col-5"
        style={{height: "36px",
        fontSize: 12,
        alignItems: "center",display:"flex",
        justifyContent:"center"
        }}>
        GET SUPPORT: NO-REPLY@DOMAIN.COM
        </div>
        <div className="col-5" style={{textAlign: "end"}}>
        <FaFacebookF style={{marginRight: "16px"}} />
        <FaTwitter style={{marginRight: "16px"}} />
        <FaGooglePlusG style={{marginRight: "16px"}} />
        <FaLinkedinIn style={{marginRight: "16px"}}  />
        <FaPinterest style={{marginRight: "16px"}} />

        </div>

      </nav>
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
  <div class="container">
  <img src={minaimg1} alt="simple image"/>
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav justify-content-end " 
    id="collapsibleNavbar"
    style={{fontSize: 12,}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">OUR PROCESS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SERVICES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PEOPLE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">TESTIMONIALS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <div className="row py-5"
      style={{ backgroundImage: "url('/agency-slider-01.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 700}}
      >
        <div className="col-li mx-auto"> 
        <h1 style={{fontSize:80,fontWeight:900,marginTop:60,marginLeft:150,fontColor:"blue"}}>PLANNING FOR <br/>THE FUTURE</h1>
        <p style={{marginLeft:150}}>Lorem Ipsum is simply dummy text of printing and industry. <br/>Lorem Ipsum has been
        the industry's standard dummy text ever since.</p>
        <button style={{marginLeft:150}} className="btn btn-secondary ">Read More</button>
        </div>
      </div>
      <div>
        <div className="row text-center">
          <div className="col-md-4">
            <h5>Business Planning</h5>
            <h6>Strategy and Execution</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Extremely Analysis</h5>
            <h6>Financial Projections</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Excellent Opportunities</h5>
            <h6>International Business</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </p>
            </div>
            </div>
          </div>
          <section className="container-fluid my-5"style={{backgroundColor:"#E8E8E8"}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <button className="btn btn-success mb-3">Get Start Now</button>
          <h2 className="fw-bold">The world's most powerful<br/> website build now.</h2>
          <p className="text-muted">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br/> It has survived not only five centuries, but also the
            leap into electronic<br/> typesetting, remaining essentially unchanged.
          </p>
          <p className="text-muted">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the <br/>when an unknown printer took a galley of type scrambled it to
            make a type <br/> specimen book.
          </p>
          <button className="btn btn-dark">Read More</button>
        </div>
        
        <div className="col-md-6 text-center">
          <img
            src={minaimgg} alt="simple image"
            
            className="img-fluid rounded"
          />
        </div>
      </div>
      </section>
      <div className="   text-white">
      <div className="row">
        <div className="col-12 text-center bg-primary">
          <h2>Looking for a first-class business plan consultant?</h2>
          <button type="button" className="btn btn-primary">Register Today</button>
        </div>
      </div>

    
      </div>
      <div content container my-5>
        <div className="row text-center"style={{marginLeft:10,textAlign:"left",display:"flex",justifyContent:"left"}}>
          <div className="col-md-3">
            <h1 style={{fontWeight:LiaGhostSolid}}>01.</h1>
            <p style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="card-text border-bottom">
            Technological innovation<br/>
Lorem Ipsum is simply dummy text printing.
Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>

          </div>
          <div className="col-md-3">
            <h1 style={{fontWeight:LiaGhostSolid}}>02.</h1>
            
            <p>
            Creativity designs<br/>
Lorem Ipsum is simply dummy text printing.
Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy.


            </p>
          </div>
          <div className="col-md-3">
            <h1 style={{fontWeight:LiaGhostSolid}}>03.</h1>
            <p>
            Customer support<br/>
Lorem Ipsum is simply dummy text printing.
Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>
          <div className="col-md-3">
            <h1 style={{fontWeight:LiaGhostSolid}}>04.</h1>
            <p>
            Project management<br/>
Lorem Ipsum is simply dummy text printing.
Lorem Ipsum is simply dummy text of the printing & typesetting industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>
    </div>   
   </div> 
   <div className="row py-5 "
      style={{ backgroundImage: "url('/hero-bg4.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 700,
      }}
      >
         <div className="col-md-12 text-center">
            <a href="#"className="btn btn-success">CONTINUE READING~ </a>
          </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center ">
              <h1 style={{marginTop:60}}>Introduce your <br/>business or company</h1>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-md-8 text-center">
            
            <p style={{marginBottom:500,marginLeft:150}}>Since our foundation in 2005 our goal has been to use digital technology to create experiences.<br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            
          </div> 
        </div>
        </div> 
        <div className="row">
          <div className="col-md-3">
          <img src={clientimg1} alt="simple image"/>
          </div>
          <div className="col-md-3">
          <img src={clientimg2} alt="simple image"/>
          </div>
          <div className="col-md-3">
          <img src={clientimg3} alt="simple image"/>
          </div>
          <div className="col-md-3">
          <img src={clientimg4} alt="simple image"/>
          </div>
          </div>  
           <div className=" container-fluid bg-light py-5">
           <h2 className="text-center mb-5"> OUR SERVICES</h2>
           <p className="text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the <br/>industry's standard dummy text ever since the 1500s, when an unknown printer took 
             a galley of type <br/>and scrambled it to make a type specimen book.</p>
             <div className="row">
           <div className="col-md-4">
           <h5 > <img src={symbolimg1} alt="simple image"/>ONLINE EARNING</h5>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been he industry's standard dummy text ever since.</p>

           </div>
           <div className="col-md-4">
           <h5 > <img src={symbolimg2} alt="simple image"/>ADVERTISEMENT</h5>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been he industry's standard dummy text ever since.</p>

           </div>
           <div className="col-md-4">
           <h5 > <img src={symbolimg3} alt="simple image"/>UNIQUE SHORTCODE</h5>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been he industry's standard dummy text ever since.</p>

           </div>

           </div>
           <div className="row">
           <div className="col-md-4">
           <h5 > <img src={symbolimg4} alt="simple image"/>MARKET PLACE</h5>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been he industry's standard dummy text ever since.</p>

           </div>
           <div className="col-md-4">
           <h5 > <img src={symbolimg5} alt="simple image"/>SUPPORT</h5>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been he industry's standard dummy text ever since.</p>

           </div>
           <div className="col-md-4">
           <h5 > <img src={symbolimg6} alt="simple image"/>DESIGN</h5>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been he industry's standard dummy text ever since.</p>

           </div>

           </div>
           </div>
           <div className="container fluid  py-5 ">
           <h2 className="text-center mb-5"> MEET OUR PEOPLE</h2>
           <p className="text-center mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s, when an unknown printer took 
             a galley of type<br/> and scrambled it to make a type specimen book.</p>
             <div className="row">
             <div className="col-md-4">
             <img src={teamimg1} alt="simple image" className="img-fluid rounded"/>
             <h6 style={{textAlign:"center"}}>SARA SMITH</h6>
             <p style={{textAlign:"center",}}className="card-text border-bottom">FOUNDER AND CEO</p>
             <div style={{display:"inline-flex",textAlign:"center",paddingLeft:100}}>
             <FaFacebookF style={{marginLeft: "30px"}}/>
             <FaTwitter style={{marginLeft: "30px"}}/>
             <FaLinkedinIn style={{marginLeft: "30px"}}/>
             <FaPinterest style={{marginLeft: "30px"}} />
             </div>


              </div>
              <div className="col-md-4">
             <img src={teamimg2} alt="simple image" className="img-fluid rounded"/>
             <h6 style={{textAlign:"center"}}>SOMMER CHRISTIAN</h6>
             <p style={{textAlign:"center",}}className="card-text border-bottom">CREATIVE DIRECTOR</p>
             <div style={{display:"inline-flex",textAlign:"center",paddingLeft:100}}>
             <FaFacebookF style={{marginLeft: "30px"}}/>
             <FaTwitter style={{marginLeft: "30px"}}/>
             <FaLinkedinIn style={{marginLeft: "30px"}}/>
             <FaPinterest style={{marginLeft: "30px"}} />
             </div>

              </div>
              <div className="col-md-4">
             <img src={teamimg3} alt="simple image" className="img-fluid rounded"/>
             <h6 style={{textAlign:"center"}}>ANDREW LUPKIN</h6>
             <p style={{textAlign:"center",}}className="card-text border-bottom">DEVELOPER HEAD</p>
             <div style={{display:"inline-flex",textAlign:"center",paddingLeft:100}}>
             <FaFacebookF style={{marginLeft: "30px"}}/>
             <FaTwitter style={{marginLeft: "30px"}}/>
             <FaLinkedinIn style={{marginLeft: "30px"}}/>
             <FaPinterest style={{marginLeft: "30px"}} />
             </div>

              </div>
              </div>
             </div>
             <div className="row  py-5"style={{backgroundColor:"#E8E8E8"}}>
              <div className="col-md-3 "style={{paddingLeft:200}}>
                <h1>1500</h1>
                <p>Projects Completed</p>
              </div>
              <div className="col-md-3"style={{paddingLeft:100}}>
                <h1>1400</h1>
                <p> Happy Clients</p>
              </div>
              <div className="col-md-3">
                <h1>1250</h1>
                <p> Cups of Coffee</p>
              </div>
              <div className="col-md-3"style={{paddingRight:200}}>
                <h1>1600</h1>
                <p> Hours Worked</p>
              </div>
             </div>
             <div className="row">
              <div className="col-md-6">
                <h3 style={{color:"navyblue"}}>Set up your awesome<br/>
                business website quickly.</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                   It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.</p>
              
              </div>
              <div className="col-6"style={{marginRight:150,paddingRight:200}}>
              <div className="progress">
              <div className="progress-bar bg-primary"style={{width:"10%"}}></div>
             </div>
              </div>
              
               </div>
               
                

                    </div>

                    
                


    
  );
}

export default App;
