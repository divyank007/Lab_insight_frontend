import React from 'react'
import "./home.css"
import Heroimage from '../../assets/images/Data extraction-pana.svg';
const home = () => {
  return (
    // <section>
    //         <nav>
    //             { <div class="logo"> Rayen</div> }
    //             <div class="menu-icon">|||</div>
    //             <div class="menu-list js-menu-hide">
    //                 <ul class="link">
    //                     <li><a  >Home</a></li>
    //                     <li><a  >About Us</a></li>
    //                     <li><a  >Services</a></li>
    //                     <li><a  >Contact</a></li>
    //                 </ul>
    //                 <div class="sign">
    //                     <a href="/dashboard" class="login">Login</a>
    //                     <a   class="sign-up">Sign Up</a>
    //                 </div>
    //             </div>
    //         </nav>
    //         <main>
    //             <div class="text-area">
    //                 <p class="desc">Introducing new technology</p>
    //                 <h1 class="heading">Easy <span>Design</span> <br/><span>Easy</span> Website</h1>
    //                 <p class="tag-ling">User interface is very important these days.</p>
    //                 <div class="btns">
    //                     <button class="btn-sub">Subscribe</button>
    //                     <button class="btn-demo">Demo</button>
    //                 </div> 
    //             </div>
    //             <div class="image-area">
    //                 {/* <img src="OBJECTS.png" alt=""> */}
    //             </div>
    //         </main>
    //     </section>



    <section class="hero1">
        
        {/* <!-- navbar start --> */}
        <div class="navbar12">
            <div class="logo12">
                {/* <img src="img/logo.png" alt=""> */}
                
                {/* <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/my-computer--v2.png" alt="my-computer--v2"/> */}
                <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/workstation.png" alt="workstation"/>
                <span>LabInsight</span>
            
            </div>
            <ul class="link12">
                <li className='liuhi'><a class="active12"  >Home</a></li>
                {/* <li><a  >Blog</a></li> */}
                {/* <li><a  >Gallery</a></li> */}
                <li  className='liuhi'><a  >About</a></li>
                <li  className='liuhi'><a  >Sign In</a></li>
            </ul>
        </div>
        {/* <!-- navbar End --> */}

        {/* <!-- main start  --> */}
        <main className='abcde'>
        
            <div class="textArea12">
                <h1 className='head'>LAB<br/> <span>INSIGHT.</span></h1>
                <p className='para'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"A system designed to track and manage various parameters within laboratory environments through real-time monitoring and data analysis "</p>
                <div className='btnsec'>
                    <button class="btn12 btn12_dark">Sign In</button>
                    {/* <button class="btn btn_light">Contact Us</button> */}
                </div>
            </div>
{/* 
            <!-- textarea End  -->
            <!-- imageArea start  --> */}
            {/* <div class="imageArea"> */}
                <img className="heroimg12" src={Heroimage}/>
                {/*<img class="img img1" src="img/box ic.png" alt="">
                <img class="img img2" src="img/cercitBG.png" alt="">
                <img class="img img3" src="img/ctrl alt.png" alt="">
                 <img class="img img4" src="img/enter.png" alt="">
                <img class="img img5" src="img/file.png" alt="">
                <img class="img img6" src="img/geair1.png" alt="">
                <img class="img img7" src="img/geair1.png" alt="">
                <img class="img img8" src="img/geair1.png" alt="">
                <img class="img img9" src="img/ware1.png" alt="">
                <img class="img img10" src="img/file down.png" alt=""> */}
            {/* </div> */}
            {/* <!-- imageArea end  --> */}

        </main>
        {/* <!-- main End  -->


        <!-- footer start  --> */}
        <div class="footer">
            {/* <img src="img/cercit1.png" alt=""> */}
            <div class="social12"><a  >FOLLOW US</a> SOCIAL MEDIA</div>
        </div>
    </section>


  )
}

export default home