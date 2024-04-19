import React from 'react'
import './assets/Homecontent.css'
import img1 from './assets/image/stack.png'
import img2 from './assets/image/img2.png'
import img3 from './assets/image/img3.png'
import img4 from './assets/image/img4.png'
import img5 from './assets/image/img5.png'
import web from './assets/image/web.png'
import ui from './assets/image/ui.png'
import enter from './assets/image/enter.png'
import cloud from './assets/image/cloud.png'
import crm from './assets/image/crm.png'
import ecom from './assets/image/ecom.png'
import what from './assets/image/what.png'
import MediaCard from './MediaCard'
import ExpertSlides from './ExpertSlides'
import { Button } from '@mui/material'

const HomeTextContent = () => {
  return (
    <div className='content'>
      <div className='row col-12 slider'>
        <h2>Expertise And Technical Skills</h2>
          <ExpertSlides />
      </div>
      <div class="container">
    <div class="row">
        <div class="col-md-6 ">
            <h1>STACKROOTS Rooting Your Business With Us</h1>
        </div>
        <div class="col-md-6">
            Stackroots is a dynamic and innovative technology solutions and software services company that delivers simple and prolific solutions to a plethora of problems and challenges faced by businesses. With a growing focus on AI, Metaverse, Blockchain, and IoT-based applications, we are constantly pushing the boundaries of technology to provide cutting-edge solutions to our clients. We are dedicated to creating customized and innovative products that help businesses thrive in the digital landscape. We will be your trusted partner in overcoming technological hurdles and achieving success.
        </div>
    </div>
</div>

      <div className='row col-12 content-2'>

        <div className="col-12 col-lg-9">
          <h1>Elevating Your Business with Customized Solutions</h1>
          <div>At StacKRoots, we understand that every company is unique and deserves the best solutions and products. That's why we offer customized blockchain-based web applications, mobile applications, ERP & CRM products, Metaverse environments, and full-stack software products. Our team is dedicated to reflecting your personal brand while scaling up and promoting an exceptional user experience with the new era of marketing. With our expertise and commitment to excellence, we will elevate your business to new heights.</div>
        </div>
      </div>
      <div className='row col-12 content-3'>
        <div className="col-lg-6">
          <h3>StackArch</h3>
          <div>
            StackArch is a fast and visual all-in-one project management ERP software designed specifically for architectural Firms. Whether you're managing a small-scale or a large architectural firm, it provides a comprehensive solution to streamline and optimize your project management processes. With its user-friendly web and mobile platforms, StackArch offers the flexibility to access and manage your projects from anywhere, at any time. By implementing StackArch, you can take your architectural firm to the next level.
          </div>
          <button type="button" className="readmore">Read More</button>
        </div>
        <div className="col-lg-6">
          <img src={img1} alt="StackArch" style={{ width: "100%" }} />
        </div>
      </div>
      <div className='row col-12 content-3'>
        <div className="col-lg-6">
          <img src={img2} alt="StackArch" style={{ width: "100%" }} />
        </div>
        <div className="col-lg-6">
          <h3>CertVerify - Your Trusted Certificate Verification Solution</h3>
          <div>
            We are the leading platform for seamless and reliable certificate verification. With our state-of-the-art blockchain-powered technology, we bring you an innovative solution to verify the authenticity of digital certificates with just one click. Say goodbye to cumbersome and time-consuming manual verification processes - with CertVerify, you can instantly validate the genuineness of any certificate issued through our system.    </div>
          <button type="button" className="readmore">Read More</button>
        </div>
      </div>
      <div className='row col-12 content-3'>
        <div className="col-lg-6">
          <h3>Stack-Ed. The Ultimate Solution for Learning Management System</h3>
          <div>
            Stack-Ed LMS provides a set of features that allow you to track learner progress and analyze performance data. With our intuitive analytics tools, you can gain valuable insights into how your learners are engaging with the course material.             </div>
          <button type="button" className="readmore">Read More</button>
        </div>
        <div className="col-lg-6">
          <img src={img3} alt="StackArch" style={{ width: "100%" }} />
        </div>
      </div>
      <div className='row col-12 content-3'>
        <div className="col-lg-6">
          <img src={img4} alt="StackArch" style={{ width: "100%" }} />
        </div>
        <div className="col-lg-6">
          <h3>Blockchain-Based Decentralized Marketplace</h3>
          <div>
            Blockchain-Based Decentralized Marketplace, where innovation meets trust and transparency. Our marketplace harnesses the power of blockchain technology to facilitate seamless crypto payments and intermediary-free exchanges of goods. With the ability for buyers to view the origins and history of goods stored on the blockchain, trust between sellers and buyers is enhanced, making transactions more transparent and secure.             </div>
          <button type="button" className="readmore">Read More</button>
        </div>
      </div>
      <div className='row col-12 content-3'>

        <div className="col-lg-6">
          <h2>Team STACKROOTS</h2>
          <div>
            We are highly skilled and experienced professionals dedicated to providing top-notch Blockchain & web development services. With a strong background in web development and a passion for creating innovative solutions, our team is committed to delivering exceptional results for our clients. We pride ourselves on our attention to detail, creativity, and ability to understand and meet our client’s unique business needs. With our expertise and commitment to excellence, we strive to exceed expectations and help businesses succeed in the competitive world.             </div>

        </div>
        <div className="col-lg-6">
          <img src={img5} alt="StackArch" style={{ width: "100%" }} />
        </div>
      </div>

      <div className='row col-12 content-4'>
        <h1>What We Have Here For You</h1>
        <div className="col-lg-12">
          <img src={what} alt="StackArch" style={{ width: "100%" }} />
        </div>
      </div>
      <div className='row col-12 content-4'>

        <div className="col-12 col-lg-9">
          <h2>Our Services</h2>
          <div>We understand that every client is unique, which is why we take the time to understand their needs and tailor our services & products accordingly. We create the best software applications and related products for our clients. We listen, research, and plan together with our clients to reach our goals, whether it be developing, software or a product. Explore our range of services & products and discover how we can help your business grow and succeed.</div>
        </div>
        <div className="row col-12 card-list" style={{ marginTop: "60px" }}>
          <div className="col-sm-12 col-md-6 col-lg-4 service-card">
            <MediaCard
              image={web}
              title={"Website Development Service"}
              text={"Each design what we create will suits all environment. Each client needs will be far different, so we are adaptive to design as your needs."}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 service-card">
            <MediaCard
              image={crm}
              title={"CRM Application"}
              text={"Each design what we create will suits all environment. Each client needs will be far different, so we are adaptive to design as your needs."}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 service-card">
            <MediaCard
              image={cloud}
              title={"Cloud Based Web Applications"}
              text={"Each design what we create will suits all environment. Each client needs will be far different, so we are adaptive to design as your needs."}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 service-card">
            <MediaCard
              image={ecom}
              title={"E-Commerce Application"}
              text={"Each design what we create will suits all environment. Each client needs will be far different, so we are adaptive to design as your needs."}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 service-card">
            <MediaCard
              image={ui}
              title={"UX/UI Design"}
              text={"Each design what we create will suits all environment. Each client needs will be far different, so we are adaptive to design as your needs."}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 service-card">
            <MediaCard
              image={enter}
              title={"Enterprise Applications"}
              text={"Each design what we create will suits all environment. Each client needs will be far different, so we are adaptive to design as your needs."}
            />
          </div>
          <Button type='button' variant="contained" style={{width:"auto" , borderRadius:"5px"}}>Read more</Button>
        </div>

      </div>
    </div>


  )
}

export default HomeTextContent
