import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ConsultationButtonProps {
  show?: boolean;
  link: string;
  iconSrc: string;
  titleLine1?: string;
  titleLine2?: string;
}

const ConsultationButton: React.FC<ConsultationButtonProps> = ({
  show = true,
  link,
  iconSrc,
  titleLine1 = 'Get Our',
  titleLine2 = 'Consultation',
}) => {
  if (!show) return null;

  return (
    <div className="col-auto mt-4 mt-md-0 bg-white rounded-4xl py-2 pl-2 pr-4">
      <Link href={link} className="text-decoration-none d-flex align-items-center">
        <div
          className="bg-gray-200 rounded-circle d-flex align-items-center justify-center overflow-hidden"
          style={{ width: '48px', height: '48px' }}
        >
          <Image
            src={iconSrc}
            alt="Consultation"
            width={48}
            height={48}
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="ms-2 text-sm font-medium">
          <span className="d-block text-gray-800">{titleLine1}</span>
          <span className="text-gray-800">{titleLine2}</span>
        </div>
      </Link>
    </div>
  );
};

export default ConsultationButton;
