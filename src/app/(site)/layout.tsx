import React from 'react';

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      {children}
    </div>
  );
};

export default SiteLayout;