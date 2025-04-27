'use client';

import React, { useState } from 'react';
import { Urbanist } from 'next/font/google';
import TeamGrid from './TeamMemberCard';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useGetAgents } from '@/hooks/useGetAgents'; // ✅ correct hook
import { IAgent } from '@/types';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

// Main component props interface
interface TeamExpertsProps {
  title: string;
  description?: string;
  showSearch?: boolean;
}

const TeamExperts: React.FC<TeamExpertsProps> = ({
  title,
  description,
  showSearch = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 🔥 Real API call
  const { agents, loading, error } = useGetAgents();

  // 🧹 Filter team members based on search query
  const filteredMembers = searchQuery.trim() === ''
    ? agents
    : agents.filter((member: IAgent) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        member.agent_name_.toLowerCase().includes(searchLower) ||
        member.position.toLowerCase().includes(searchLower)
      );
    });

  if (loading) {
    return (
      <div className="text-center py-5">
        <p>Loading team members...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <p>Failed to load team members. Please try again.</p>
      </div>
    );
  }

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
