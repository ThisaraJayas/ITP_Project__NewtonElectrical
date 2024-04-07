import React, { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


export default function UserPdf() {
    const pdfRef = useRef()

    const downloadPdf = () => {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            console.log('Canvas width:', canvas.width);
            console.log('Canvas height:', canvas.height);
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            console.log('PDF width:', pdfWidth);
            console.log('PDF height:', pdfHeight);
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            console.log('Ratio:', ratio);
            const scaledWidth = imgWidth * ratio;
            const scaledHeight = imgHeight * ratio;
            const imgX = (pdfWidth - scaledWidth) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, scaledWidth, scaledHeight);
            pdf.save('userdetails.pdf');
        });
    };
  return (
    <>
    <div ref={pdfRef}>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    <div>UserPdf</div>
    </div>
    <button className='button' onClick={downloadPdf}>Download</button>
    </>
  )
}
