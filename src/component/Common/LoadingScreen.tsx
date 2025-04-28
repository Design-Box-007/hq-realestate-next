import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react'; // nice spinner icon

const LoadingScreen: React.FC<{ title?: string }> = ({ title = "LoadingScreen..." }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full gap-4">
            {/* Spinner Animation */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
                <Loader2 size={48} className="text-[#EDBE8C]" />
            </motion.div>

            {/* Title */}
            <h2 className="text-lg font-semibold text-[#EDBE8C]">{title}</h2>
        </div>
    );
};

export default LoadingScreen;
