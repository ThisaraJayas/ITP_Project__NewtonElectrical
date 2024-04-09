import React from 'react';
import Header from '../../components/Header';
import './1.css';

export default function Project() {


  return (
    <>
      <Header />
      <div className='pt-22'>
        <div className='projectbody'>
          <section className="headerd">
            <div className="projectprofile">
              <div className="begining">
                <div className="text1">
                  <p className="title mt-16">
                    Project <br /> Management
                  </p>
                  <p className="paragraph">
                    <i>Newton Electricals leads the industry in Electrical Projects, offering professional installation services compliant with IEC, BS & SLS standards. We specialize in all types of electrical installation for various buildings, providing comprehensive solutions including point wiring, panel boards, light installation, cabling, ELV solutions, and cable management systems. Trust us for your electrical needs.</i>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="ongoing_projects">
            <h2 className="text2">Ongoing Projects</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Ongoing Project Card 1 */}
              <div className="projectcard">
                <img src="https://via.placeholder.com/300" alt="Placeholder Image" />
                <div className="projectcardcontent">
                  <h2>Beautiful Card</h2>
                  <p>This card has a gradient overlay on hover and a subtle shadow effect. The colors change on hover to provide a more engaging experience.</p>
                </div>
              </div>

              {/* Add more Ongoing Project Cards similarly */}

            </div>
          </section>

          <section className="completed_projects">
            <h2 className="text3">Completed Projects</h2>
            <div className="grid grid-cols-3 gap-4">
              {/* Completed Project Card 1 */}
              <div className="projectcard">
                <img src="https://via.placeholder.com/300" alt="Placeholder Image" />
                <div className="projectcardcontent">
                  <h2>Beautiful Card</h2>
                  <p>This card has a gradient overlay on hover and a subtle shadow effect. The colors change on hover to provide a more engaging experience.</p>
                </div>
              </div>

              <div className="projectcard">
                <img src="https://via.placeholder.com/300" alt="Placeholder Image" />
                <div className="projectcardcontent">
                  <h2>Beautiful Card</h2>
                  <p>This card has a gradient overlay on hover and a subtle shadow effect. The colors change on hover to provide a more engaging experience.</p>
                </div>
              </div>
              {/* Add more Completed Project Cards similarly */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
