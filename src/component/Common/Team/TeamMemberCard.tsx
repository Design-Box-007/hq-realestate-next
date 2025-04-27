'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IAgent } from '@/types';


interface TeamGridProps {
  members: IAgent[];
}

const TeamMemberCard: React.FC<{ member: IAgent }> = ({
  member
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,  // triggers when 20% of card is visible
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
      className="relative rounded overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ height: '499px' }}
    >
      {/* Member Image */}
      <div className="relative h-full w-full">
        <Image
          src={member.profile_image}
          alt={member.agent_name_}
          layout="fill"
          objectFit="cover"
          className="w-full h-full brightness-75"
        />
      </div>
      <div className=''>
        {/* Member Info - Slides up on hover */}
        <div
          className={`absolute left-0 bottom w-full bg-opacity-70 transition-all duration-300   `}
          style={{
            bottom: isHovered ? '75px' : '0',
            padding: '20px 24px'
          }}
        >
          <div className="flex flex-row items-center space-x-2">
            <h4 className="text-white text-lg font-medium">{member.agent_name_}</h4>
            <div className='inline-block'>
              <span className="text-gray-300 text-xs">Experience {member.experience}</span>
              <span className="text-gray-300 text-xs">/ {member.position}</span>
            </div>

          </div>
          <div className='border-b-1 border-white'></div>
        </div>

        {/* Contact links - Shown when hovered */}
        <div
          className="absolute -left-3 bottom-0 w-full px-6 py-4 transition-all duration-300 flex gap-2 "
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)'
          }}
        >
          {member.phone_number && (
            <a
              href={`tel:${member.phone_number}`}
              className="flex items-center justify-center rounded-full bg-[#171717] py-2 px-2 text-white   hover:border-[#EDBE8C] transition-all text-decoration-none"
            >
              <div className="rounded-full bg-[#EDBE8C] p-1.5 flex items-center justify-center">
                <FaPhone className="text-black text-[10px] transform rotate-155" />
              </div>

              <span className="mx-2 text-[10px]">Phone</span>
              <div className="rounded-full ml-2 border-1 border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                <FaArrowRight className="text-[#EDBE8C] text-[10px] " />
              </div>
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="flex items-center justify-center rounded-full bg-[#171717] py-2 px-2 text-white   hover:border-[#EDBE8C] transition-all text-decoration-none"
            >
              <div className="rounded-full flex items-center justify-center">
                <FaEnvelope className="text-[#EDBE8C]  text-[16px]" />
              </div>
              <span className="mx-2 text-[10px]">Mail</span>
              <div className="rounded-full ml-2 border-1 border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                <FaArrowRight className="text-[#EDBE8C] text-[10px]" />
              </div>
            </a>
          )}
          {member.whatsapp && (
            <a
              href={`https://wa.me/${member.whatsapp}`}
              className="flex items-center justify-center rounded-full bg-[#171717] py-2 px-2 text-white   hover:border-[#EDBE8C] transition-all text-decoration-none"
            >
              <div className="rounded-full bg-[#EDBE8C] p-0.5 flex items-center justify-center">
                <FaWhatsapp className="text-black text-[14px]" />
              </div>
              <span className="mx-2 text-[10px]">Whatsapp</span>
              <div className="rounded-full ml-2 border-1 border-[#EDBE8C] w-6 h-6 flex items-center justify-center">
                <FaArrowRight className="text-[#EDBE8C] text-[10px]" />
              </div>
            </a>
          )}
        </div>
      </div>


    </motion.div>
  );
};

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {members.map((member: IAgent, index: number) => (
          <div key={index}>
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;

// Example usage
// import TeamGrid from './TeamGrid';
//
// const teamMembers = [
//   {
//     name: "Pintér Beatrix",
//     position: "Co-Admin",
//     additionalInfo: "7",
//     imageSrc: "/images/pinter-beatrix.jpg",
//     member: {
//       phone: "+1234567890",
//       email: "pinter@example.com",
//       whatsapp: "1234567890"
//     }
//   },
//   {
//     name: "Balla Daniella",
//     position: "Deal Manager",
//     additionalInfo: "5",
//     imageSrc: "/images/balla-daniella.jpg",
//     member: {
//       phone: "+1234567890",
//       email: "balla@example.com",
//       whatsapp: "1234567890"
//     }
//   }
// ];
//
// function App() {
//   return <TeamGrid members={teamMembers} />;
// }