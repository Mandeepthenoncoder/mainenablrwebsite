import React from 'react';

interface ResponsiveBreakProps {
  breakOn?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'all' | 'none';
}

export const ResponsiveBreak: React.FC<ResponsiveBreakProps> = ({ 
  breakOn = 'sm' 
}) => {
  const classes = {
    all: '',
    none: 'hidden',
    sm: 'hidden sm:block',
    md: 'hidden md:block',
    lg: 'hidden lg:block',
    xl: 'hidden xl:block',
    '2xl': 'hidden 2xl:block'
  };

  return <br className={classes[breakOn]} />;
}; 