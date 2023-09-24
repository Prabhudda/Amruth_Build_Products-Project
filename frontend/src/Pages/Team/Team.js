// import React from 'react';
// import img1 from '..//..//assets/abhi.jpg';
// import img2 from '..//..//assets/vinay.jpg';
// import '../Team/Team.css';
// function Profile() {
//   const teamMembers = [
//     {
//       id: 1,
//       name: 'ABHILASH N B',
//       jobTitle: 'Chief executive officer',
//       bio: 'Abhilash has over 10 years of experience in managing construction projects',
//       imageUrl: `${img1}`,
//     },
//     {
//       id: 2,
//       name: 'Vinay Gowda',
//       jobTitle: 'Civil Engineer',
//       bio: 'Viany is an expert in manufacturing processes and has worked on several projects',
//       imageUrl: `${img2}`,
//     },
//   ];

//   return (
//     <div className='team-main-container container-fluid p-0 position-relative'>
//       <div className='position-relative serivesBgImg '>
//         <div className='service-img-overlay d-flex justify-content-center align-items-center'>
//           <h1 className='text-light text-center products-main-title'>
//             Our Dedicated Team
//           </h1>
//         </div>
//       </div>

//       <div className='container'>
//         <h2 className='team-main-text mt-5'>Meet the Experts</h2>
//         <div className='row my-md-5 my-5 px-md-0 px-3'>
//           {teamMembers.map((member) => (
//             <div
//               className='col-md-6 col-12 my-3'
//               data-aos='fade-up'
//               data-aos-duration='1000'
//               key={member.id}
//             >
//               <img
//                 className='img-fluid'
//                 src={member.imageUrl}
//                 loading='lazy'
//                 width={400}
//                 height={400}
//                 alt={`${member.name} - ${member.jobTitle}`}
//               />
//               <div className='col-md-8 col-12'>
//                 <h2 className='mt-3 text-dark mt-4'>{member.name}</h2>
//                 <p className='' style={{ whiteSpace: 'pre-wrap' }}>
//                   {member.jobTitle}
//                 </p>
//                 <p style={{ whiteSpace: 'pre-wrap' }}>{member.bio}</p>
//               </div>
//               <button className='btn btn-outline-primary'>Read More</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
