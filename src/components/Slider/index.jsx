import React from 'react';
import ExcelPDF from '@/assets/ExcelPDF';
import SliderCard from '../SliderCard';
import ExcelPUB from '@/assets/ExcelPUB';
import ImageRTX from '@/assets/ImageRTX';
import ImageTXT from '@/assets/ImageTXT';
import Jpgpdf from '@/assets/jpgpdf';
import OCR from '@/assets/OCR';
import PDFDXF from '@/assets/PDFDXF';
import PDFEPUB from '@/assets/PDFEPUB';
import Pdfhtml from '@/assets/pdfhtml';
import PDFPages from '@/assets/PDFPages';
import PPTPDF from '@/assets/PPTPDF';
import Wordpdf from '@/assets/wordpdf';
import ReactSlider from "react-slick";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = () => {
  const slides = [
    {
      icon: <ExcelPDF />,
      title: "PDF to Excel",
      description: "Convert PDF to xls for free.",
    },
    {
      icon: <ExcelPUB />,
      title: "PUB to PDF",
      description: "Convert Publisher to PDF document.",
    },
    {
      icon: <ImageRTX />,
      title: "PDF to RTF",
      description: "Convert PDF to RTF online and free.",
    },
    {
      icon: <ImageTXT />,
      title: "PDF to TXT",
      description: "Convert your PDF to TXT, and extract text from your PDF.",
    },
    {
      icon: <Jpgpdf />,
      title: "PDF to JPG",
      description: "Convert PDF files to a set of optimized JPG, PNG, BMP, GIF",
    },
    {
      icon: <OCR />,
      title: "OCR",
      description: "Convert your scanned PDFs and images into editable",
    },
    {
      icon: <PDFDXF />,
      title: "PDF to DXF",
      description: "The best online tool to convert PDF to DXF online.",
    },
    {
      icon: <PDFEPUB />,
      title: "PDF to EPUB",
      description: "Convert PDF file to EPUB ebook.",
    },
    {
      icon: <Pdfhtml />,
      title: "PDF to HTML",
      description: "Convert your PDF documents to HTML web page.",
    },
    {
      icon: <PDFPages />,
      title: "PDF to Pages",
      description: "Convert PDF to Pages on Mac and Windows.",
    },
    {
      icon: <PPTPDF />,
      title: " PDF to PPT",
      description: "Convert PDF to Powerpoint online.",
    },
    {
      icon: <Wordpdf />,
      title: "PDF to Word",
      description: "Easily convert PDF to Word document.",
    }
  ]

  const sliderMap = React.Children.toArray(slides?.map((slide) => {
    return (
      <SplideSlide>
        <SliderCard
          icon={slide?.icon}
          title={slide?.title}
          description={slide?.description}
        />
      </SplideSlide>
    )
  }))


  return (
    <div className='flex flex-wrap justify-center gap-4 px-16 py-10 h-[350px] w-auto'>
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          gap: '1rem',
          type: 'loop',
          perPage: 3,
          speed: 1000,
          width: '100%',
          perMove: 1,
          pagination: false,
          cover: true,
          clones: 2,
          focus: 'center',
          trimSpace: false,
          padding: { left: "30%" },
          breakpoints: {
            1200: {
              padding: { right: 100 },
              width: '100%',
              perPage: 2,
              gap: "1rem",
            },
            1024: {
              width: '100%',
              perPage: 2,
            },
            992: {
              width: '100%',
              perPage: 1,
            },
            768: {
              width: '100%',
              perPage: 1,
            },
            480: {
              width: '100%',
              perPage: 1,
            },
          },
        }}
      >
        {sliderMap}
      </Splide>
    </div>
  )
}

export default Slider