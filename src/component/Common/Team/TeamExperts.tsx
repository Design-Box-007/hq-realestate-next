'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Urbanist } from 'next/font/google';
import TeamGrid from './TeamMemberCard';
import { FaSearch } from 'react-icons/fa';

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

// Main component props interface
interface TeamExpertsProps {
  title: string;
  description?: string;
  showSearch?: boolean;
  teamMembers: TeamMemberProps[];
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
          linkedin: "https://linkedin.com/in/pinter"
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
          linkedin: "https://linkedin.com/in/pinter"
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
          linkedin: "https://linkedin.com/in/pinter"
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
  

  return (
    <section className=" text-white py-4 pb-5 ">
      <div className="container-fluid ">
        {/* Header with title indicator */}
        <div className="d-flex align-items-center mb-3">
          <span className="bg-warning rounded-circle d-inline-block me-2" style={{ width: '8px', height: '8px' }}></span>
          <span className="small text-white-50">Leadership / Team</span>
        </div>
        
        {/* Main title */}
        <div className="row mb-4">
          <div className="col-12">
            <h1 className={`display-5 fw-bold ${urbanist.className}`}>{title}</h1>
          </div>
        </div>
        
        {/* Description or Search */}
        <div className="row mb-4">
          <div className="col-12">
            {description && (
              <p className="text-white md:text-2xl mb-0">{description}</p>
            )}
            
            {showSearch && (
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control bg-white  text-gray-700ay- border-0 rounded-pill py-2 ps-3 pe-5"
                  placeholder="Search by name or position"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="position-absolute top-50 end-0 translate-middle-y pe-3">
                  <FaSearch className='text-black'/>
                </span>
              </div>
            )}
          </div>
        </div>
        
        <TeamGrid members={teamMembers} />
      </div>
    </section>
  );
};

export default TeamExperts;
// Usage example component
// const TeamMembersExample: React.FC = () => {
  // Example data
//   const teamData = [
//     {
//       name: "Pintér Beatrix",
//       image: "/team/team-member-1.jpg",
//       position: "Real Estate Advisor",
//       experience: 7,
//       role: "Co-Admin",
//       contactOptions: {
//         phone: true,
//         mail: true,
//         whatsapp: true
//       }
//     },
//     {
//       name: "Balla Daniella",
//       image: "/team/team-member-2.jpg",
//       position: "Senior Agent",
//       experience: 5,
//       role: "Sales Manager",
//       contactOptions: {
//         phone: false,
//         mail: true,
//         whatsapp: false
//       }
//     },
//     {
//       name: "Kelemen Krisztina",
//       image: "/team/team-member-3.jpg",
//       position: "Property Consultant",
//       experience: 3,
//       role: "Investments",
//       contactOptions: {
//         phone: true,
//         mail: false,
//         whatsapp: true
//       }
//     },
//     // Add more team members here as needed
//   ];

//   return (
    <>
      {/* Version with description */}
      {/* <TeamExperts
        title="Meet the Experts Behind Housing Quest"
        description="Our dedicated professionals bring deep market knowledge, personalized service, and a passion for helping you make the right real estate decisions in Dubai."
        teamMembers={teamData}
      /> */}
      
      {/* Version with search bar */}
      {/* <TeamExpertsTailwind
        title="Meet the Experts Behind Housing Quest"
        showSearch={true}
        teamMembers={[...teamData, ...teamData]} // Duplicate to show more cards
//       /> */}
//     </>
//   );
// };


// export default TeamMembersExample;