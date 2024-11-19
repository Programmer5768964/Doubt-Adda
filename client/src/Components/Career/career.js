import React, { useRef,useState } from 'react'
import './career.css'
import animatedPic from './images/office_man.png'

const Career = () => {
    const apply = useRef(null);
    const [isHovered,setIsHovered]= useState(false);

    const buttonStle = {
        backgroundColor:isHovered?"#DAF3FB":"white",
        cursor:"pointer",
        boxShadow:isHovered?"1px 1px 2px 2px #09485D;":"none",
        width:"100px",height:"35px",borderRadius:"5px",border:"none",
        color:"#09485D",fontSize:"19px"
    }
    const colorProperty = {
        backgroundColor:"#09485D",color:"white",fontSize:"18px"
    }
    const textareaCSS = {height:"50px",border:"1px solid black",borderRadius:"5px",padding:"2px", backgroundColor:"#09485D",color:"white",fontSize:"18px"}
    const inputBoxCSS = {height:"35px",border:"1px solid black",borderRadius:"5px",padding:"2px", backgroundColor:"#09485D",color:"white",fontSize:"18px"}
    const labelCSS = {
        color:"white",
        marginBlock:"10px"
    }
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <div className='career-portal'>
            <div className='career-page-desc'>
                <div className='slogan'>
                    <div>
                        <h2>Work with us,Work with future</h2>
                        <p>Our community is for enhancing the people ine their field,it is of the people by the people and for the people.
                            Join BugBuster and start finding bugs to improve your understanding about the stuffs like software development.
                        </p>
                    </div>

                    <button className='signup-btn' onClick={() => scrollToSection(apply)} >Apply</button>
                </div>

                <div className='animated-pic'>
                    <img src={animatedPic} alt='animated pic' />
                </div>
            </div>
            <div className='application-desc'>
                <div className='video-desc'>
                    animation videos play-Box
                </div>
                <div className='text-desc'>
                    description of procedure of application and hiring
                </div>
            </div>
            <div className='application-form' ref={apply}>
                <h2 style={{padding:"15px",fontSize:"30px",color:"white",fontFamily:"Host Grotesk"}}>Apply here</h2>
                <div className='form'>
                    <div className='form-group-input'>
                        <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}}>
                            <label for='fname' style={labelCSS}>first Name</label>
                            <input type='text' style={colorProperty}  />
                        </div>
                        <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}}>
                            <label for='lname' style={labelCSS}>Last Name</label>
                            <input type='text'style={colorProperty}   />
                        </div>
                        <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}}>
                            <label for='email' style={labelCSS}>Email</label>
                            <input type='email' style={colorProperty} />
                        </div>
                        <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}}>
                            <label for='phone' style={labelCSS}>Phone</label>
                            <input type='number'  style={colorProperty}    />
                        </div>

                        <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}}>
                        <label for='Education' style={labelCSS}>Education</label>
                        <select type='text' style={colorProperty} >
                            <option>Matriculation(10th)</option>
                            <option>Intermediate(12th)</option>
                            <option selected>B.E/B.Tech</option>
                            <option>others</option>
                        </select>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}}   >
                        <label for='Role' style={labelCSS}>Role</label>
                        <select type='text' style={colorProperty} >
                            <option>Web Developer</option>
                            <option>App Developer</option>
                            <option selected>Software Developer</option>
                            <option>UI/UX Designer</option>
                            <option>Backend Engineer</option>
                            <option>Frontend Engineer</option>
                        </select>
                    </div>

                    </div>

                   
                    <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}} >
                        <label for='phone' style={labelCSS}>Project</label>
                        {/* <span>provide the project link relevant to the role selected</span> */}
                        <input type='text'  style={inputBoxCSS} />
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}} >
                        <label  style={labelCSS}>Explain flow of your project</label>
                        <textarea placeholder='' style={textareaCSS} />
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}} >
                        <label style={labelCSS}>mention error faced during development of project</label>
                        <textarea placeholder='' style={textareaCSS} />
                    </div>
                    <div style={{display:"flex",flexDirection:"column",marginBlock:"5px"}} >
                        <label style={labelCSS}>Describe your method of learning</label>
                        <textarea placeholder='' style={textareaCSS} />
                    </div>
                    <div style={{display:"flex",marginBlockStart:"15px",justifyContent:"center",padding:"5px"}}>
                    <button style={buttonStle} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>submit</button>
                    </div>
                    
                </div>

            </div>
           
        </div>
    )
}

export default Career