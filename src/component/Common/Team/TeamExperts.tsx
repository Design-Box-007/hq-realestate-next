'use client';

import React, { useState } from 'react';
// import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import TeamGrid from './TeamMemberCard';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';


const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

// Team member card props interface
interface TeamMemberProps {
  name: string;
  image: string;
  position: string;
  experience: number;
  role: string;
  contactOptions?: {
    phone?: boolean;
    mail?: boolean;
    whatsapp?: boolean;
  };
}

// Updated interface for actual team member data structure
// interface TeamMemberData {
//   name: string;
//   position: string;
//   additionalInfo: string;
//   imageSrc: string;
//   contactLinks: {
//     phone?: string;
//     email?: string;
//     whatsapp?: string;
//     linkedin?: string;
//   };
// }

// Main component props interface
interface TeamExpertsProps {
  title: string;
  description?: string;
  showSearch?: boolean;
  teamMembers?: TeamMemberProps[]; // Making this optional since we're using internal data
}

const TeamExperts: React.FC<TeamExpertsProps> = ({
  title,
  description,
  showSearch = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const teamMembers = [
    {
      name: "Pintér Beatrix",
      position: "Experience 7",
      additionalInfo: "Co-Admin",
      imageSrc: "/team/team1.jpg",
      contactLinks: {
        phone: "+1234567890",
        email: "pinter@example.com",
        whatsapp: "1234567890",
        
      }
    },
    {
      name: "Balla Daniella",
      position: "Experience 9",
      additionalInfo: "Developer",
      imageSrc: "/team/team2.jpg",
      contactLinks: {
        phone: "+1234567891",
        email: "balla@example.com",
        whatsapp: "1234567891"
      }
    },
    {
      name: "Kelemen",
      position: "Experience 5",
      additionalInfo: "Team Lead",
      imageSrc: "/team/team3.jpg",
      contactLinks: {
        phone: "+1234567892",
        email: "kelemen@example.com",
        whatsapp: "1234567890",
       
      }
    },
    {
      name: "Pintér Beatrix",
      position: "Experience 7",
      additionalInfo: "Co-Admin",
      imageSrc: "/team/team1.jpg",
      contactLinks: {
        phone: "+1234567890",
        email: "pinter@example.com",
        whatsapp: "1234567890",
        
      }
    },
    {
      name: "Balla Daniella",
      position: "Experience 9",
      additionalInfo: "Developer",
      imageSrc: "/team/team2.jpg",
      contactLinks: {
        phone: "+1234567891",
        email: "balla@example.com",
        whatsapp: "1234567891"
      }
    },
    {
      name: "Kelemen",
      position: "Experience 5",
      additionalInfo: "Team Lead",
      imageSrc: "/team/team3.jpg",
      contactLinks: {
        phone: "+1234567892",
        email: "kelemen@example.com",
        whatsapp: "1234567890",
        
      }
    },
    {
      name: "Pintér Beatrix",
      position: "Experience 7",
      additionalInfo: "Co-Admin",
      imageSrc: "/team/team1.jpg",
      contactLinks: {
        phone: "+1234567890",
        email: "pinter@example.com",
        whatsapp: "1234567890",
       
      }
    },
    {
      name: "Balla Daniella",
      position: "Experience 9",
      additionalInfo: "Developer",
      imageSrc: "/team/team2.jpg",
      contactLinks: {
        phone: "+1234567891",
        email: "balla@example.com",
        whatsapp: "1234567891"
      }
    },
    {
      name: "Kelemen",
      position: "Experience 5",
      additionalInfo: "Team Lead",
      imageSrc: "/team/team3.jpg",
      contactLinks: {
        phone: "+1234567892",
        email: "kelemen@example.com",
        linkedin: "https://linkedin.com/in/kelemen"
      }
    }
  ];

  // Filter team members based on search query
  const filteredMembers = searchQuery.trim() === ''
    ? teamMembers
    : teamMembers.filter(member => {
      const searchLower = searchQuery.toLowerCase();
      return (
        member.name.toLowerCase().includes(searchLower) ||
        member.position.toLowerCase().includes(searchLower) ||
        member.additionalInfo.toLowerCase().includes(searchLower)
      );
    });

  return (
    <section className="text-white pb-3">
    <div className="container-fluid">
      {/* Header */}
      <motion.div 
        className="d-flex align-items-center mb-3"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="bg-warning rounded-circle d-inline-block me-2" style={{ width: '8px', height: '8px' }}></span>
        <span className="small text-white-50">Leadership / Team</span>
      </motion.div>

      {/* Title */}
      <motion.div 
        className="row mb-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="col-12">
          <h1 className={`display-5 fw-bold ${urbanist.className}`}>{title}</h1>
        </div>
      </motion.div>

      {/* Description / Search */}
      <motion.div 
        className="row mb-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="col-12">
          {description && (
            <p className="text-white md:text-2xl mb-0">{description}</p>
          )}

          {showSearch && (
            <div className="position-relative mt-3">
              <input
                type="text"
                className="form-control bg-white text-gray-700 border-0 rounded-pill py-2 ps-3 pe-5"
                placeholder="Search by name or position"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="position-absolute top-50 end-0 translate-middle-y pe-3">
                <FaSearch className='text-black' />
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Team Members */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <TeamGrid members={filteredMembers} />
      </motion.div>

      {/* No results found */}
      {filteredMembers.length === 0 && (
        <motion.div
          className="text-center py-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-white-50">{`No team members found matching "${searchQuery}"`}</p>
        </motion.div>
      )}
    </div>
  </section>
  );
};

export default TeamExperts;