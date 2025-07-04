import React from "react";

import "./Certificates.css";
import { certificatesImages } from "../../images";
import jsPDF from "jspdf";

const Certificates = () => {
  const downloadPDF = (title, image) => {
    const pdf = new jsPDF();
    pdf.setFontSize(14);
    pdf.text(title, 10, 10);
    pdf.addImage(image, "PNG", 10, 20, 150, 150);
    pdf.save(`${title}.pdf`);
  };

  const certificates = [
    {
      title: "freeCodeCamp JavaScript Course",
      img: certificatesImages.fCCJS,
    },
    {
      title: "Udemy JavaScript Course",
      img: certificatesImages.udemy,
    },
    {
      title: "freeCodeCamp Web Development Course",
      img: certificatesImages.fCCWEB,
    },
    {
      title: "Modern React and Redux",
      img: certificatesImages.modernReact,
    },
    {
      title: "Grade Certificate",
      img: certificatesImages.gradeCertificate,
    },
  ];

  return (
    <div>
      <h2 id="certificates">Certificates</h2>
      <div className="certificatesContainer">
        {certificates.map((certificate) => (
          <div key={certificate.title}>
            <h4>{certificate.title}</h4>
            <img
              onClick={() => downloadPDF(certificate.title, certificate.img)}
              className="certificates"
              src={certificate.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
