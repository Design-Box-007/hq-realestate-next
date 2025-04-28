import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ErrorScreenProps {
  title?: string;
  onRetry?: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({
  title = "Something went wrong",
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full gap-4">
      {/* Error Icon */}
      <motion.div
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        <AlertTriangle size={48} className="text-red-500" />
      </motion.div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-red-400">{title}</h2>

      {/* Optional Retry Button */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all text-sm"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorScreen;
