import React from 'react';


import "./Certificates.css";
import { certificatesImages } from '../../images';
import jsPDF from 'jspdf';


const Certificates = () => {
  const downloadPDF = (title, image) => {
    const pdf = new jsPDF();
    pdf.setFontSize(14);
    pdf.text(title, 10, 10);
    pdf.addImage(image, 'PNG', 10, 20, 180, 100);
    pdf.save(`${title}.pdf`);
  };

  return (
    <div>
      <h2 id="certificates">Certificates</h2>
      <div className="certificatesContainer">
      
        <div>
  
          <h4>freeCodeCamp JavaScript Course</h4>
          <img 
            onClick={() => downloadPDF("freeCodeCamp JavaScript Course", certificatesImages.fCCJS)} 
            className="certificates" 
            src={certificatesImages.fCCJS} 
            alt="" 
       
          />
       
        </div>
        <div>
          <h4>Udemy JavaScript Course</h4>
          <img 
            onClick={() => downloadPDF("Udemy JavaScript Course", certificatesImages.udemy)} 
            className="certificates" 
            src={certificatesImages.udemy} 
            alt="" 
     
          />
    
        </div>
        <div>
          <h4>freeCodeCamp Web Development Course</h4>
          <img 
            onClick={() => downloadPDF("freeCodeCamp Web Development Course", certificatesImages.fCCWEB)} 
            className="certificates" 
            src={certificatesImages.fCCWEB} 
            alt="" 
       
          />

        </div>

        <div>
  
  <h4>Modern React and Redux</h4>
  <img 
    onClick={() => downloadPDF("Modern React and Redux", certificatesImages.modernReact)} 
    className="certificates" 
    src={certificatesImages.modernReact} 
    alt="" 

  />

</div>

<div>
  
  <h4>Grade Certificate</h4>
  <img 
    onClick={() => downloadPDF("Grade Certificate", certificatesImages.gradeCertificate)} 
    className="certificates" 
    src={certificatesImages.gradeCertificate} 
    alt="" 

  />

</div>
      </div>
    </div>
  );
}

export default Certificates;
