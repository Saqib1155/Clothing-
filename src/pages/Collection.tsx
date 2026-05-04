import { useParams, useSearchParams } from 'react-router-dom';
import Shop from './Shop';

// The Collection page leverages the Shop component with pre-filtered logic
export default function Collection() {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, this would fetch specific collection metadata
  // For this demo, we'll just render the Shop UI with a collection-specific header override
  
  return (
    <div className="pt-10">
       {/* 
         We could create a separate Collection component here 
         if we wanted a different layout, but for now let's reuse Shop 
       */}
       <Shop />
    </div>
  );
}
