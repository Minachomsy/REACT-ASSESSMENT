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
import peopleimg from "./image/hero-bg24.jpg"
import avtarimg1 from "./image/avtar-10.jpg"
import avtarimg2 from "./image/avtar-11.jpg"
import avtarimg3 from "./image/avtar-12.jpg"
import llogoimg from "./image/logo1.jpg"

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { LiaGhostSolid } from "react-icons/lia";
import { CgScreenMirror } from "react-icons/cg";
import { MdGradient } from "react-icons/md";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
import { GiAutomaticSas, GiBottomRight3dArrow } from "react-icons/gi"
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
             <section className="row"style={{paddingTop:100}}>
        <div className="col-6"style={{paddingLeft:200}}>
          <h1 style={{color:"darkblue",fontSize:42,marginBottom:18,fontFamily:"sans-serif",paddingTop:50}}>Set up your awesome<br/>
          business website quickly.</h1>
          <p style={{paddingRight:200,}}>  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className="col-6 progressbar"style={{display:"flex",flexDirection:"column",gap:50,paddingTop:100}}>
          <div className="progbar1">
            <div className="progress"style={{height:4,width:500,flex:1}}>
              <div className="progress-bar"style={{width:"90%"}}></div>
              <p style={{fontSize:12}}>WORKING HOURS</p>
            </div>
          </div>
          <div className="progbar1">
            <div className="progress"style={{height:4,width:500,flex:1}}>
              <div className="progress-bar"style={{width:"90%"}}></div>
              <div className="progress-label" style={{marginTop:10,color:"darkblue",}}>
              <div><p className="progress-label" style={{fontSize:12,marginTop:10,}}>AWESOME PROJECTS</p></div>
              </div>
            </div>
          </div>
          <div className="progbar1">
            <div className="progress"style={{height:4,width:500,flex:1}}>
              <div className="progress-bar"style={{width:"90%"}}>
              <div className="progress-label">
              <p style={{fontSize:12}}>cups of coffee</p></div>
              </div>
            </div>
          </div>
          <div className="progbar1">
            <div className="progress"style={{height:4,width:500,flex:1}}>
              <div className="progress-bar"style={{width:"90%"}}>
              <div className="progress-label">
              <p style={{fontSize:12}}>HAPPY CUSTOMERS</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row"style={{paddingTop:130}}>
        <div className="col-6"style={{margin:0,padding:0}}>
        <img src={peopleimg} alt="simple image"style={{width:"100%",height:"auto",objectFit:"cover"}}/>

        </div>
        <div className=" col-6 bg-primary"style={{padding:"20px",minHeight:"50vh",display:"flex",flexDirection:"column",}}>
          <h1 style={{color:"white",marginBottom:"10px",paddingRight:20,paddingLeft:45}}>We're small but impressive.</h1>
          <p style={{fontSize:40,marginBottom:"30",color:"white",fontWeight:10,paddingLeft:45}}>Experience the power of LeadGen.</p>
          <div className=" border-bottom"></div>
          <div className="d-flex"style={{flexWrap:"wrap",justifyContent:"center",marginBottom:"20px",paddingRight:190}}>
            <div style={{marginRight:"40px"}}><a href="#"style={{color:"white",textDecoration:"none",
            display:"block",borderBottom:"2px solid white",marginBottom:"10px"}}>COMPANY MISSION</a>
            <a href="#"style={{color:"white",textDecoration:"none",display:"block",marginRight:"20px"}}>WHAT WE DO</a></div>
            <a href="#"style={{color:"white",textDecoration:"none",marginRight:"20px"}}>WHY CHOOSE US</a>
            <a href="#"style={{color:"white",textDecoration:"none"}}>OUR PROMISE</a>

          </div>
          <p style={{lineHeight:"1.8",marginBottom:"20px",paddingLeft:"50px",marginRight:50,color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.</p>
            <p style={{paddingLeft:"50px",marginRight:50,color:"white"}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the standard dummy text. Lorem Ipsum is simply dummy text 
               of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <a href="#" style={{backgroundColor:"white",color:"#333",
               textDecoration:"none",marginTop:"-5px",width:150,fontSize:12,paddingLeft:50,
                border:"1px solid #ccc",padding:"5px 10px",marginRight:"-30px",
                borderRadius:"25px",}}>
                 READ MORE 
               </a>

        </div>

      </div>
      <div className="row"style={{paddingTop:100,paddingLeft:200,}}> 
        <div className="col-4">
          <img src={avtarimg1} alt="Avtar image"style={{width:150,height:150,borderRadius:"100%",border:"1px solid #ccc",marginBottom:"5px"}}/>
          <p style={{textAlign:"center",paddingRight:100,fontSize:12}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry
           It has survived not only five centuries but also the leap into electronic 
          typesetting remaining essentially unchanged </p>
          <h6 style={{fontSize:12,marginLeft:50}}>Jeremy Gerald-microsoftword</h6>
         </div>
         <div className="col-4">
          <img src={avtarimg2} alt="Avtar image"style={{width:150,height:150,borderRadius:"100%",border:"1px solid #ccc",marginBottom:"5px"}}/>
          <p style={{textAlign:"center",paddingRight:100,fontSize:12}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry
           It has survived not only five centuries but also the leap into electronic 
          typesetting remaining essentially unchanged </p>
          <h6 style={{fontSize:12,marginLeft:50}}>Melisa smith-Google</h6>
         </div>
         <div className="col-4">
          <img src={avtarimg3} alt="Avtar image"style={{width:150,height:150,borderRadius:"100%",border:"1px solid #ccc",marginBottom:"5px"}}/>
          <p style={{textAlign:"center",paddingRight:100,fontSize:12}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry
           It has survived not only five centuries but also the leap into electronic 
          typesetting remaining essentially unchanged </p>
          <h6 style={{fontSize:12,marginLeft:50}}>Paul Scrivens-FACEBOOK</h6>
         </div>
        </div>
        <div className="row"style={{backgroundColor:"#E8E8E8"}}>
          
          <div className="col md-6"style={{backgroundColor:"white",paddingLeft:200,paddingTop:50,marginTop:50,marginBottom:50,marginLeft:100}}>
            
            <h4 style={{marginBottom:"2rem"}}>
              Ready to Get started?

            </h4>
            <form action="/action_page.php">
    <div class="mb-3 mt-3">
      
      <input type="email" class="form-control" id="email" placeholder="*Your Name" name="email"/>
    </div>
    <div class="mb-3">
      
      <input type="password" class="form-control" id="pwd" placeholder="*Your Email" name="pswd"/>
    </div>
    <div class="mb-3">
      
      <input type="password" class="form-control" id="pwd" placeholder="Your Message" name="pswd"/>
    </div>
    <div class="form-check mb-3">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"/> Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-success"style={{borderRadius:"25px",}}>Send Message</button>
  </form>

</div>          
<div className="col-md-6">
  <h2 style={{marginTop:50,fontWeight:20,marginLeft:100}}>Looking For a Excellent<br/> Business Idea?</h2>
  <p style={{marginTop:10,marginLeft:100}}>Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. Lorem Ipsum has been the standard dummy text.</p>
  <button type="submit" class="btn btn-success"style={{borderRadius:"25px",marginLeft:100}}>Get Direction</button>
  <div className=" border-bottom"></div>
  <h6 style={{marginTop:20,marginLeft:100}}>Our Headquarters</h6>
  <p style={{marginLeft:100}}>301 The Greenhouse, Custard,<br/>
  Factory, London, E2 8DY.</p>
  <p style={{marginLeft:100}}>+44 (0) 123 456 7890</p>
  <p style={{marginLeft:100,borderBottom:10,marginBottom:10}}>no-reply@domain.com</p>

  </div>
  
   </div>
   <div className="row">
    <div className="col-6">
       <img src={llogoimg} alt="logo image"style={{marginLeft:100,marginTop:50}}/>
       <p style={{paddingLeft:100,fontSize:14,marginTop:50}}>We've been crafting beautiful websites, launching stunning brands and<br/> 
       making clients happy for years. With our prestigious craftsmanship.</p>
       <div className=" border-bottom"style={{lineHeight:50}}></div>
       <p style={{marginTop:20,paddingLeft:100,fontSize:14,paddingBottom:100}}>© 2016 LeadGen is Proudly Powered By ThemeZaa.</p>
      

    </div>
    <div className="col-2"style={{marginTop:70}}>
      <h6>Company</h6>
      <p style={{fontSize:14}}>About Us</p>
      <p style={{fontSize:14}}>Testimonials</p>
      <p style={{fontSize:14}}>FAQ's</p>
      <div className=" border-bottom"style={{lineHeight:50}}></div>
      

    </div>
    <div className="col-2"style={{marginTop:70}}>
      <h6>Useful Links</h6>
      <p style={{fontSize:14}}>Useful Links</p>
      <p style={{fontSize:14}}>Our process</p>
      <p style={{fontSize:14}}>People</p>
      <div className=" border-bottom"style={{lineHeight:50}}></div>
      

    </div>
    <div className="col-2"style={{marginTop:70}}>
      <h6>Follow Us</h6>
      <p style={{fontSize:14}}>Facebook</p>
      <p style={{fontSize:14}}>Twitter</p>
      <p style={{fontSize:14}}>Google Plus</p>
      <div className=" border-bottom"></div>
      <FaFacebookF style={{marginLeft: "10px",marginRight:10,marginTop:30,color:"darkblue"}}/>
             <FaTwitter style={{marginLeft: "20px",marginTop:30,color:"blue"}}/>
             <FaLinkedinIn style={{marginLeft: "20px",marginTop:30,color:"blue"}}/>
             <FaPinterest style={{marginLeft: "20px",marginTop:30,color:"red"}} />
             <FaGooglePlusG style={{marginLeft: "20px",color:"red",marginTop:30}} />
      

    </div>

   </div>
      
  </div>

      


                    
                


    
  );
}

export default App;
