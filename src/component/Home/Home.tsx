import React from 'react'
import './Home.css'
import HeroSection from './HeroSection/HeroSection'

import { LuCircleArrowRight } from 'react-icons/lu'
import { GoDotFill } from 'react-icons/go'
// import Assistance from './Assistance/Assistance'
// import Testimonial from './Testimonial/Testimonial'
import Contact from './Contact/Contact'
import TopToBottomReveal from './TopToBottomReveal'
import LeftToRightReveal from './LeftToRightReveal'
import VisibleReveal from './VisibleReveal'
import CardStack from './Slider/Slider'
import { images } from '@/data/assets'
import AboutCard from '../Common/AboutCard'
import LocationSection from '../Common/MapSection'



const Home = () => {
  // const colors = ["#ff5733", "#33c4ff", "#28a745", "#ffc107", "#6f42c1"];

  return (
    <section className='home' id='home'>
      <HeroSection />
      <section id='about' className='about-section'>
        <div>
          <div>
            <div className='about-image-container' >
              <TopToBottomReveal>
                <img src={images.aboutImage} alt='About Image' className='about-image' width="100%" height="100%" />
                <div className='about-image-content'>
                  <div className='d-flex justify-content-between align-items-end'>
                    <h4 className='about-image-title'>Find Your Dream</h4>
                    <div className='about-image-card'>
                      <img src={images.profile1} alt='Profile Image' className='about-image-profile' width="45px" height="45px" />
                      Get Our <br /> Consultation
                    </div>
                  </div>
                </div>
              </TopToBottomReveal>
            </div>
          </div>
        </div>
        <div className='my-4'>
          <TopToBottomReveal>
            <div>
              <h2 className='about-title'>About <span style={{ color: "var(--primary-color)" }}>Housing Quest</span></h2>
              <p className='about-description'>
                {"With over 25 years of experience, Housing Quest has been at the forefront of Dubai's luxury real estate sector. We specialize in connecting discerning buyers with the city’s most iconic properties, offering unparalleled expertise in property management, buying, selling, and leasing high-end properties."}
              </p>
            </div>
          </TopToBottomReveal>

          {/* <LeftToRightReveal>
            <div>
              <div className='d-flex gap-3 align-items-center mt-4'>
                <div className='about-profile-images'>
                  <img src={images.Profile1} alt='Profile Image' className='about-profile-image' width="54px" height="54px" />
                  <img src={images.Profile2} alt='Profile Image' className='about-profile-image' width="54px" height="54px" />
                  <img src={images.Profile3} alt='Profile Image' className='about-profile-image' width="54px" height="54px" />
                  <img src={images.Profile4} alt='Profile Image' className='about-profile-image' width="54px" height="54px" />
                </div>
                <div className='about-profile-content'>
                  Meet Our <br /> Professional Team
                </div>
              </div>
            </div>
          </LeftToRightReveal> */}

<div className='row mt-5'>
      <div className='col-md-4'>
        <AboutCard title="25+" description="Years of<br />Experience" />
      </div>
      <div className='col-md-4'>
        <AboutCard title="84%" description="Customer<br />Satisfaction Rate" />
      </div>
      <div className='col-md-4'>
        <AboutCard title="324" description="Exquisite Properties<br />Ready for your" />
      </div>
    </div>
          <section id='service' className='about-container mt-5'>
            <div className='row' >
              <div className='col-md-6 mb-3' >
                <div className='d-flex flex-column h-100 justify-content-between '>
                  <TopToBottomReveal>
                    <h2 className='about-title-two'>Tailored Solutions<br />
                      for your Real Estate<br />
                      Needs
                    </h2>
                  </TopToBottomReveal>
                  <LeftToRightReveal>
                    <button className='about-button'>Explore More <span style={{ color: "var(--primary-color)" }}><LuCircleArrowRight size={24} /></span></button>
                  </LeftToRightReveal>
                </div>
              </div>
              <div className='col-md-6' >
                <div className='d-flex flex-column gap-3'>
                  <LeftToRightReveal>
                    <div className='about-card-two'>
                      <div className='d-flex align-items-center gap-3'>
                        <img src={images.RoundedImage1} alt='Property Buying' className='about-card-image' width="100px" height="100px" />
                        <h5 className='about-card-text'>Property Buying</h5>
                      </div>
                      <span style={{ color: "var(--primary-color)", margin: "0" }}><LuCircleArrowRight /></span>
                    </div>
                  </LeftToRightReveal>

                  <LeftToRightReveal>
                    <div className='about-card-two'>
                      <div className='d-flex align-items-center gap-3'>
                        <img src={images.RoundedImage2} alt='Property Buying' className='about-card-image' width="100px" height="100px" />
                        <h5 className='about-card-text'>Property Selling</h5>
                      </div>
                      <span style={{ color: "var(--primary-color)" }}><LuCircleArrowRight /></span>
                    </div>
                  </LeftToRightReveal>

                  <LeftToRightReveal>
                    <div className='about-card-two'>
                      <div className='d-flex align-items-center gap-3'>
                        <img src={images.RoundedImage3} alt='Property Buying' className='about-card-image' width="100px" height="100px" />
                        <h5 className='about-card-text'>Leasing Services</h5>
                      </div>
                      <span style={{ color: "var(--primary-color)" }}><LuCircleArrowRight /></span>
                    </div>
                  </LeftToRightReveal>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id='property' className='explore-section'>
        <VisibleReveal>
          <h2 className='explore-title'>Explore Our <span style={{ color: "var(--primary-color)" }}>Property</span> Portfolio</h2>
        </VisibleReveal>

        <CardStack
        // colors={colors}
        // cardWidth="90vw"
        // cardHeight="90vh"
        // cardOffset={12}
        // scaleFactor={0.08}
        />
        {/* <LeftToRightReveal> */}
        <h6 className='explore-subtitle'><span style={{ color: "var(--primary-color)" }}><GoDotFill size={24} /></span>Explore Our Advantages</h6>
        <h2 className='explore-title-two'>Why Dubai Stands Unrivalled?</h2>
        {/* </LeftToRightReveal> */}

        <div className='my-5'>
          <VisibleReveal>
            <div className='explore-image-container' >
              <img src={images.PropertyImage1} className='explore-image' alt='Strategic Location' width="100%" height="100%" />
              <div className='explore-image-content' >
                <div className='explore-image-card' >
                  <img src={images.locationIcon} alt='LocationIcon' width={20} height={20} />
                  <h5 className='explore-image-title'>Strategic Location</h5>
                  <p className='explore-image-description'>Positioned as a global business hub between Europe, Asia, and Africa, Dubai benefits from high demand for property from international investors and expatriates.</p>
                </div>
              </div>
            </div>
          </VisibleReveal>
          <VisibleReveal>

            <div className='explore-image-container' >
              <img src={images.PropertyImage2} className='explore-image' alt='Strategic Location' width="100%" height="100%" />
              <div className='explore-image-content' >
                <div className='explore-image-card' >
                  <img src={images.rentalIcon} alt='RentalIcon' width={20} height={20} />
                  <h5 className='explore-image-title'>High Rental Yields</h5>
                  <p className='explore-image-description'>
                    Dubai consistently offers one of the highest rental yields in the world, ranging between 5% to 9%, making it an attractive option for property investors.
                  </p>
                </div>
              </div>
            </div>
          </VisibleReveal>
          <VisibleReveal>

            <div className='explore-image-container' >
              <img src={images.PropertyImage3} className='explore-image' alt='Strategic Location' width="100%" height="100%" />
              <div className='explore-image-content' >
                <div className='explore-image-card' >
                  <img src={images.taxIcon} alt='TaxIcon' width={20} height={20} />
                  <h5 className='explore-image-title'>Tax-Free Income</h5>
                  <p className='explore-image-description'>
                    Dubai’s year-round offers zero property tax and no capital gains tax, allowing investors to maximize returns on real estate investments.
                  </p>
                </div>
              </div>
            </div>
          </VisibleReveal>

        </div>
      </section>

  
      <LocationSection
      title="Give Us a Visit"
      address="Suite 756 031 Ines Riverway, Khanmanchester"
      mapImageSrc={images.mapImage}
      imageGallery={[
        {
          id: "main",
          src: images.OfficeImage,
          alt: "Modern office interior"
        },
        {
          id: "thumb-1",
          src: "/office/office1.png",
          alt: "Office hallway with glass partitions"
        },
        {
          id: "thumb-2",
          src: "/office/office2.png",
          alt: "Contemporary living space"
        },
        {
          id: "thumb-3",
          src: "/office/office3.png",
          alt: "Contemporary living space"
        }

      ]}
    />
      <Contact />
    </section>
  )
}

export default Home