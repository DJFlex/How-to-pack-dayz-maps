import React from 'react';
import { Link } from 'react-router-dom';
import { Step } from '../types';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

interface StepCardProps {
  step: Step;
  completed: boolean;
  onToggleComplete: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ 
  step, 
  completed, 
  onToggleComplete 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${
      completed ? 'border-l-4 border-green-500' : ''
    }`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-[var(--primary)]">
            {step.title}
          </h3>
          
          <button
            onClick={onToggleComplete}
            className="text-gray-400 hover:text-green-500 transition-colors"
            aria-label={completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {completed ? (
              <CheckCircle className="text-green-500" size={20} />
            ) : (
              <Circle size={20} />
            )}
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {step.description}
        </p>
        
        <Link
          to={`/step/${step.id}`}
          className="inline-flex items-center text-[var(--accent)] hover:text-[var(--primary)] transition-colors text-sm font-medium"
        >
          <span>View Details</span>
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default StepCard;
