import React from 'react';

interface IconProps {
  className?: string;
}

const PlusCircleIcon: React.FC<IconProps> = ({
  className = 'w-4 h-4 mr-2',
}) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default PlusCircleIcon;
