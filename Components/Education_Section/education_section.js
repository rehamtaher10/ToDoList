import './education_section.css'
import { useState } from 'react';
import { courses } from './EducationData';
import EducationCards from './EducationCard';

// function Education() {
//     return (
//       <>
//         <div className='p-5'>
//           <h2 className='txt-shadow text-start fs-1 mb-4'>Portfolio</h2>

//           <div className="portfolios row justify-content-evenly">
//             <div className="col-sm-3 my-3">
//               <div className="portfolio-card card bg-secondary">
//                 <div className="card-body d-flex align-items-center justify-content-center">
//                   <h5 className="card-title text-uppercase text-light position-relative">Web Design</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-3 my-3">
//               <div className="portfolio-card card bg-dark">
//                 <div className="card-body d-flex align-items-center justify-content-center">
//                   <h5 className="card-title text-uppercase text-light position-relative">Mobile Design</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-3 my-3">
//               <div className="portfolio-card card bg-secondary">
//                 <div className="card-body d-flex align-items-center justify-content-center">
//                   <h5 className="card-title text-uppercase text-light position-relative">Logo Design</h5>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="portfolios row justify-content-evenly">
//             <div className="col-sm-3 my-3">
//               <div className="portfolio-card card bg-dark">
//                 <div className="card-body d-flex align-items-center justify-content-center">
//                   <h5 className="card-title text-uppercase text-light position-relative">Web Application</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-3 my-3">
//               <div className="portfolio-card card bg-secondary">
//                 <div className="card-body d-flex align-items-center justify-content-center">
//                   <h5 className="card-title text-uppercase text-light position-relative">Mobile Application</h5>
//                 </div>
//               </div>
//             </div>
//             <div className="col-sm-3 my-3">
//               <div className="portfolio-card card bg-dark">
//                 <div className="card-body d-flex align-items-center justify-content-center">
//                   <h5 className="card-title text-uppercase text-light position-relative">PWA Development</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }
//   export default Education  


function Education() {
  const [coursesList, setCoursesList] = useState(courses)
  return (
    <>
      <div className='p-5'>
        <h2 className='txt-shadow text-start fs-1 mb-4'>Portfolio</h2>
        <div className="row justify-content-evenly g-5 ">
          {coursesList.map((course, index) => {
            return(
              <div className="col-md-3 col-12 mx-5" key={course.id}>
                <EducationCards EducationData={course} handleBGColor={(index+1) % 2 == 0 ? "#918c83" : "#363636"} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Education