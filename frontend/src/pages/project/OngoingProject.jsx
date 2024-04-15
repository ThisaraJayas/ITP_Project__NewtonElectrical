import React from 'react';
import Header from '../../components/Header';
import './2.css';
import image from './project.jpg';
import Footer from '../../components/Footer';

export default function OngoingProject() {
  return (
    <div>
      <Header />
      <div className='pt-24 pb-40'>
        <div className='projectDisplay ml-9 mr-9 flex justify-between'>
          <div className='imageContainer'>
            <img src={image} className='projectImage' alt='Project' />
          </div>
          <div className='ongoingTitle ml-8'>
            <h1>OnGoing Project</h1>
            <div className='ongoingProjectName mt-8'>
              <h1>CEB Sub Station - Kalavana</h1>
            </div>
            <div className='ongoingProjectDesc mt-8'>
              <h1>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
