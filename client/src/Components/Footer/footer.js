import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='main-footer-logo'>
                <h1>BugBuster</h1>
                <h6>email</h6>
                <h6>contact no</h6>
                <h6>fb,insta,google,Li,X</h6>
            </div>
            <div className='main-footer-content'>
                <div className='main-footer-content1'>
                    <h4 >company</h4>
                    <h5>Aboutus</h5>
                    <h5>Career</h5>
                    <h5>Order service</h5>
                    <h5>AskDoubt</h5>
                </div>
                <div className='main-footer-content2'>
                    <h4>Courses</h4>
                    <h5>Programming Languages</h5>
                    <h5>Data Structures & Algorithm</h5>
                    <h5>Web Technology</h5>
                    <h5>App Development</h5>
                    <h5>Artificial Intelligence</h5>
                    <h5>Machine Learning</h5>
                    <h5>Github</h5>
                    <h5>Deployement step by step Guide</h5>

                </div>


            </div>
        </div>
    )
}

export default Footer;