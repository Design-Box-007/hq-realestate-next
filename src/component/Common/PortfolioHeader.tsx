import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

interface PortfolioHeaderProps {
  title: string;
  showSearch?: boolean;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  iconSrc?: string;
}

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({
  title,
  showSearch = true,
  searchValue = '',
  onSearchChange,
  iconSrc,
}) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <div className="d-flex align-items-center gap-2">
        <h1 className="text-white fs-2 fw-bold mb-0">{title}</h1>
      </div>
      {iconSrc && (
        <Link href="/contact"> {/* Wrap icon in Link component */}
          <a>
            <Image
              src={iconSrc}
              alt="Property Icon"
              width={44}
              height={44}
              style={{ objectFit: 'contain' }}
            />
          </a>
        </Link>
      )}
      {showSearch && (
        <div className="position-relative">
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="form-control form-control-sm rounded-pill pe-5"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn position-absolute end-0 top-0 text-muted">
            <FaSearch />
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioHeader;
