'use client'
import React from 'react'
import './HeroSection.css'

import { useState } from 'react';
import { IoClose } from 'react-icons/io5'
import { IoIosMenu } from 'react-icons/io'
import LeftToRightReveal from '../LeftToRightReveal'
import TopToBottomReveal from '../TopToBottomReveal'
import RightToLeftReveal from '../RightToLeftReveal'

import { images, pdf } from '@/data/assets'
import Link from 'next/link';
import Navbar from '@/component/Common/Navbar';

const HeroSection = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleScroll = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='hero-section'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='d-flex flex-column justify-content-between mb-4' style={{ height: "100vh" }}>

                    <Navbar showMenu={showMenu} setShowMenu={setShowMenu} handleScroll={handleScroll} />
                        <div>
                            <TopToBottomReveal>

                                <h1 className='hero-title'>Real Estate in <b style={{ color: "var(--primary-color)" }}>Dubai</b></h1>
                                <h4 className='hero-subtitle'>A New Standard of Finest Properties</h4>
                            </TopToBottomReveal>

                        </div>

                        <div className='d-flex justify-content-between align-items-center'>
                            <span style={{ cursor: "pointer" }} onClick={() => handleScroll('contact')}>
                                <LeftToRightReveal>
                                    <a className='text-decoration-none' href='https://wa.me/+971563600699' target='_blank' ><div className='hero-card'>
                                        <img src={images.whatsappIcon} alt='CallIcon' width="48px" height="48px" /> Get in Touch
                                    </div></a>
                                </LeftToRightReveal>
                            </span>
                            <div>
                                <LeftToRightReveal>

                                    <div className='hero-card'>
                                        <img src={images.exploreImage} alt='ExploreIcon' width="48px" height="48px" />
                                        <a href={pdf.housingQuestPitchPdf} target='_blank' className='hero-explore'>
                                            View Our<br />Portfolio
                                        </a>

                                    </div>
                                </LeftToRightReveal>
                            </div>


                        </div>

                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <RightToLeftReveal>

                            <div className='hero-image-container'>
                                <img src={images.HeroImage} className='hero-image' alt='hero-image' width="100%" height="100%" />
                                <div className='hero-image-overlay'>
                                    <div className='d-flex justify-content-end'>
                                        <img className='icon' src={images.homeIcon} alt='HomeIcon' />
                                    </div>
                                    {/* <div className='d-flex justify-content-end'>
                                        <div className='hero-download-card'>
                                            <img src={images.DownloadIcon} alt='DownloadIcon' width="22px" height="22px" />
                                            <p className='m-0'>Download <br />Catalog</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </RightToLeftReveal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection