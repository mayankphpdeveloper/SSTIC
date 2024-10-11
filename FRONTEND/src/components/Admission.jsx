import { useEffect } from "react";
const Admission = () => {
    useEffect(() => {
        const handleReload = () => {
          const { type } = window.performance.getEntriesByType('navigation')[0];
          if (type === 'reload') {
            console.log('Page reloaded');
          }else{
            console.log('Page Not reloaded');
          }
        };
    
        handleReload();
      }, []);
  return (
    <div>Admission</div>
  )
}

export default Admission