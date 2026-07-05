import React from 'react'
import "./CSS/About.css"
import bout from "../Components/Assets/bout us.jpg"
import mission from "../Components/Assets/ouur mission.jpg"
// import {useNavigate} from "react-router-dom"
// import { NavLink } from "react-router-dom";

const About = () => {
  // const navigate = useNavigate();
  return (
    <div>
      <section className='about_us'>
        <div className='about-heading'>
          <h1>About Us</h1>

        </div>
        <div className='about-container'>
          <div className='about-hero-content'>
            <h2> Welcome to Our website</h2>
            <p>Hangzhong Huichang Ruida Trading Co., Ltd. is a China-based trading company specializing in the sourcing, distribution, and export of a wide range of industrial, commercial, and consumer products. The company is committed to providing high-quality products, competitive pricing, and efficient supply chain solutions to customers in both domestic and international markets. By working closely with trusted manufacturers and logistics partners, Hangzhong Huichang Ruida Trading Co., Ltd. aims to deliver reliable products, timely shipments, and exceptional customer service while fostering long-term business relationships built on integrity, professionalism, and mutual growth. </p>
            {/* <NavLink to="Contact/"> <button className='about-cta-button'> Contact us</button> </NavLink> */}
            {/* <button className='about-cta-button'> Contact us</button> */}
          </div>
          <div className='about-hero-image'>
            <img src={bout} alt='' />
          </div>
        </div>

      </section>
       
      <section className='about_us'>
        <div className='about-heading'>
          <h1>Our Mission</h1>
        </div>
        <div className='about-containerxy'>
          <div className='about-hero-image'>
            <div className='about-hero-content'>
             <img src={mission} alt='' />
            </div>
          </div>
          <div className='about-hero-content'>
            <h2> Our Vision, Our Passion.</h2>
            <p>At Hangzhong Huichang Ruida Trading Co., Ltd., our mission is to connect global markets through reliable trading solutions, high-quality products, and exceptional customer service. We are committed to building lasting partnerships by delivering value, maintaining the highest standards of integrity, and ensuring efficiency at every stage of the supply chain.

By leveraging strong relationships with trusted manufacturers and logistics partners, we strive to provide competitive pricing, timely delivery, and innovative sourcing solutions that meet the evolving needs of businesses worldwide. Our goal is to empower our clients with dependable products and services that contribute to their long-term success while fostering sustainable growth and international trade.
            </p>
            <button className='about-cta-button'> Contact us</button>
          </div>
        </div>
      </section> 
    </div>
  )
}

export default About