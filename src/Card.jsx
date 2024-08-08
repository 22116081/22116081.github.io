import profilepic from './assets/profile.jpg'

function Card(props){
     return (
<>
        <div className="card">
           
            <h1 className="cardtext">Illia Slanina </h1>
            <p className="cardmain"><h2>Front-End Developer</h2></p>
           
            <p className="cardSkills">
                
                <p className="cardp"><h1>Skills</h1></p>
            
   <ul>
   <li>ReactJS</li>
   <li>React Libraries</li>
   <li>React Hooks (e.g., useState, useEffect)</li>
   <li>Conditional Rendering</li>
   <li>Responsive UI/UX</li>
   <li>JavaScript</li>
   <li>NodeJS</li>
   <li>Python</li>
   <li>CSS</li>
   <li>HTML5</li>
    </ul>        

   

</p>
        </div>



        <div className="card">
    
   
            <p className="cardSkills">
                
                <p className="cardp1"><h1>Work Experience</h1></p>
            <p>Freelancer for 6 months on upWork and FaceBook</p>
 

   

</p>
        </div>

        <div className="card">
   
            <p className="cardSkills">
                
                <p className="cardp"><h1>Summary</h1></p>
               

            <p>I am a passionate and dedicated web developer with a strong foundation in front-end technologies and a growing expertise in modern development practices. 
                Over the past six months, I have worked as a freelancer with workUp, gaining hands-on experience with CSS, HTML, JavaScript, and WordPress.
                 My journey has been further enriched by completing a series of Coursera courses from esteemed institutions such as Rice University, Johns Hopkins University, IBM, and Meta. 
                 These courses have deepened my knowledge of front-end development, JavaScript, and ReactJS, equipping me with the skills to build dynamic and responsive user interfaces.</p>

</p>
        </div>


        </>
     );    

}

export default Card