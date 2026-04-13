import React, { useState, useEffect, useRef } from 'react';

const BUTTON_STATES = {
  default: {
    '--figure-duration': '100',
    '--transform-figure': 'none',
    '--walking-duration': '100',
    '--transform-arm1': 'none',
    '--transform-wrist1': 'none',
    '--transform-arm2': 'none',
    '--transform-wrist2': 'none',
    '--transform-leg1': 'none',
    '--transform-calf1': 'none',
    '--transform-leg2': 'none',
    '--transform-calf2': 'none'
  },
  hover: {
    '--figure-duration': '100',
    '--transform-figure': 'translateX(1.5px)',
    '--walking-duration': '100',
    '--transform-arm1': 'rotate(-5deg)',
    '--transform-wrist1': 'rotate(-15deg)',
    '--transform-arm2': 'rotate(5deg)',
    '--transform-wrist2': 'rotate(6deg)',
    '--transform-leg1': 'rotate(-10deg)',
    '--transform-calf1': 'rotate(5deg)',
    '--transform-leg2': 'rotate(20deg)',
    '--transform-calf2': 'rotate(-20deg)'
  },
  walking1: {
    '--figure-duration': '300',
    '--transform-figure': 'translateX(11px)',
    '--walking-duration': '300',
    '--transform-arm1': 'translateX(-4px) translateY(-2px) rotate(120deg)',
    '--transform-wrist1': 'rotate(-5deg)',
    '--transform-arm2': 'translateX(4px) rotate(-110deg)',
    '--transform-wrist2': 'rotate(-5deg)',
    '--transform-leg1': 'translateX(-3px) rotate(80deg)',
    '--transform-calf1': 'rotate(-30deg)',
    '--transform-leg2': 'translateX(4px) rotate(-60deg)',
    '--transform-calf2': 'rotate(20deg)'
  },
  walking2: {
    '--figure-duration': '400',
    '--transform-figure': 'translateX(17px)',
    '--walking-duration': '300',
    '--transform-arm1': 'rotate(60deg)',
    '--transform-wrist1': 'rotate(-15deg)',
    '--transform-arm2': 'rotate(-45deg)',
    '--transform-wrist2': 'rotate(6deg)',
    '--transform-leg1': 'rotate(-5deg)',
    '--transform-calf1': 'rotate(10deg)',
    '--transform-leg2': 'rotate(10deg)',
    '--transform-calf2': 'rotate(-20deg)'
  },
  falling1: {
    '--figure-duration': '1600',
    '--walking-duration': '400',
    '--transform-arm1': 'rotate(-60deg)',
    '--transform-wrist1': 'none',
    '--transform-arm2': 'rotate(30deg)',
    '--transform-wrist2': 'rotate(120deg)',
    '--transform-leg1': 'rotate(-30deg)',
    '--transform-calf1': 'rotate(-20deg)',
    '--transform-leg2': 'rotate(20deg)'
  },
  falling2: {
    '--walking-duration': '300',
    '--transform-arm1': 'rotate(-100deg)',
    '--transform-arm2': 'rotate(-60deg)',
    '--transform-wrist2': 'rotate(60deg)',
    '--transform-leg1': 'rotate(80deg)',
    '--transform-calf1': 'rotate(20deg)',
    '--transform-leg2': 'rotate(-60deg)'
  },
  falling3: {
    '--walking-duration': '500',
    '--transform-arm1': 'rotate(-30deg)',
    '--transform-wrist1': 'rotate(40deg)',
    '--transform-arm2': 'rotate(50deg)',
    '--transform-wrist2': 'none',
    '--transform-leg1': 'rotate(-30deg)',
    '--transform-leg2': 'rotate(20deg)',
    '--transform-calf2': 'none'
  }
};

const LogoutButton = ({onClick}) => {
  const [currentState, setCurrentState] = useState('default');
  const [isClicked, setIsClicked] = useState(false);
  const [isSlammed, setIsSlammed] = useState(false);
  const [isFalling, setIsFalling] = useState(false);

  const handleMouseEnter = () => {
    if (currentState === 'default') setCurrentState('hover');
  };

  const handleMouseLeave = () => {
    if (currentState === 'hover') setCurrentState('default');
  };

  const handleClick = () => {
    if (currentState === 'default' || currentState === 'hover') {
      setIsClicked(true);
      setCurrentState('walking1');

      setTimeout(() => {
        setIsSlammed(true);
        setCurrentState('walking2');

        setTimeout(() => {
          setIsFalling(true);
          setCurrentState('falling1');

          setTimeout(() => {
            setCurrentState('falling2');

            setTimeout(() => {
              setCurrentState('falling3');

              setTimeout(() => {
                // Reset everything
                if (onClick) onClick();
                setIsClicked(false);
                setIsSlammed(false);
                setIsFalling(false);
                setCurrentState('default');
              }, 500);
            }, parseInt(BUTTON_STATES.falling2['--walking-duration']));
          }, parseInt(BUTTON_STATES.falling1['--walking-duration']));
        }, parseInt(BUTTON_STATES.walking2['--figure-duration']));
      }, parseInt(BUTTON_STATES.walking1['--figure-duration']));
    }
  };

  const dynamicStyles = BUTTON_STATES[currentState];

  return (
    <div className="flex items-center justify-center shadow-lg rounded-full">
      <button
        className={`group relative block w-[130px] h-[40px] p-0 pl-5 text-left text-[14px] font-medium font-sans cursor-pointer outline-none perspective-[100px] transition-colors tap-highlight-transparent
          ${isFalling ? 'animate-[shake_200ms_linear]' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={dynamicStyles}
      >
        {/* Button Background */}
        <div 
          className={`absolute inset-0 z-[2] rounded-md transition-transform duration-75 ease-out
            ${isClicked ? 'scale-100' : 'active:scale-95'}`}
        />

        <span className="relative z-10 text-black font-medium hover:text-red-500 duration-300">LogOut</span>

        {/* Doorway SVG */}
        <svg className="absolute bottom-1 right-3 w-8 fill-white  z-[3]" viewBox="0 0 100 100">
          <path d="M93.4 86.3H58.6c-1.9 0-3.4-1.5-3.4-3.4V17.1c0-1.9 1.5-3.4 3.4-3.4h34.8c1.9 0 3.4 1.5 3.4 3.4v65.8c0 1.9-1.5 3.4-3.4 3.4z" />
          <path 
            className={`transition-opacity duration-300 ${isFalling ? 'animate-[flash_300ms_linear] opacity-40' : 'opacity-0'}`} 
            d="M40.5 43.7L26.6 31.4l-2.5 6.7zM41.9 50.4l-19.5-4-1.4 6.3zM40 57.4l-17.7 3.9 3.9 5.7z" 
          />
        </svg>

        {/* Figure SVG */}
        <svg 
          className={`absolute bottom-[5px] right-[28px] w-[30px] fill-black z-[4] transition-all 
            ${isFalling ? 'animate-[spin_1s_infinite_linear] opacity-0 pointer-events-none' : ''}`}
          style={{
            transform: dynamicStyles['--transform-figure'],
            transitionDuration: `${dynamicStyles['--figure-duration']}ms`,
            transitionTimingFunction: isFalling ? 'cubic-bezier(0.7, 0.1, 1, 1)' : 'cubic-bezier(0.2, 0.1, 0.8, 0.9)',
            bottom: isFalling ? '-1080px' : '5px'
          }}
          viewBox="0 0 100 100"
        >
          <circle cx="52.1" cy="32.4" r="6.4" />
          <path d="M50.7 62.8c-1.2 2.5-3.6 5-7.2 4-3.2-.9-4.9-3.5-4-7.8.7-3.4 3.1-13.8 4.1-15.8 1.7-3.4 1.6-4.6 7-3.7 4.3.7 4.6 2.5 4.3 5.4-.4 3.7-2.8 15.1-4.2 17.9z" />
          
          {/* Arms and Legs with dynamic transforms */}
          <g className="transition-transform duration-[var(--walking-duration)] ease-in-out origin-[52%_45%]" style={{ transform: dynamicStyles['--transform-arm1'] }}>
            <path d="M55.5 56.5l-6-9.5c-1-1.5-.6-3.5.9-4.4 1.5-1 3.7-1.1 4.6.4l6.1 10c1 1.5.3 3.5-1.1 4.4-1.5.9-3.5.5-4.5-.9z" />
            <path className="origin-[59%_55%]" style={{ transform: dynamicStyles['--transform-wrist1'] }} d="M69.4 59.9L58.1 58c-1.7-.3-2.9-1.9-2.6-3.7.3-1.7 1.9-2.9 3.7-2.6l11.4 1.9c1.7.3 2.9 1.9 2.6 3.7-.4 1.7-2 2.9-3.8 2.6z" />
          </g>
          <g className="transition-transform duration-[var(--walking-duration)] ease-in-out origin-[47%_43%]" style={{ transform: dynamicStyles['--transform-arm2'] }}>
            <path d="M34.2 43.6L45 40.3c1.7-.6 3.5.3 4 2 .6 1.7-.3 4-2 4.5l-10.8 2.8c-1.7.6-3.5-.3-4-2-.6-1.6.3-3.4 2-4z" />
            <path className="origin-[35%_47%]" style={{ transform: dynamicStyles['--transform-wrist2'] }} d="M27.1 56.2L32 45.7c.7-1.6 2.6-2.3 4.2-1.6 1.6.7 2.3 2.6 1.6 4.2L33 58.8c-.7 1.6-2.6 2.3-4.2 1.6-1.7-.7-2.4-2.6-1.7-4.2z" />
          </g>
          <g className="transition-transform duration-[var(--walking-duration)] ease-in-out origin-[47%_64.5%]" style={{ transform: dynamicStyles['--transform-leg1'] }}>
            <path d="M52.1 73.2s-7-5.7-7.9-6.5c-.9-.9-1.2-3.5-.1-4.9 1.1-1.4 3.8-1.9 5.2-.9l7.9 7c1.4 1.1 1.7 3.5.7 4.9-1.1 1.4-4.4 1.5-5.8.4z" />
            <path className="origin-[55.5%_71.5%]" style={{ transform: dynamicStyles['--transform-calf1'] }} d="M52.6 84.4l-1-12.8c-.1-1.9 1.5-3.6 3.5-3.7 2-.1 3.7 1.4 3.8 3.4l1 12.8c.1 1.9-1.5 3.6-3.5 3.7-2 0-3.7-1.5-3.8-3.4z" />
          </g>
          <g className="transition-transform duration-[var(--walking-duration)] ease-in-out origin-[43%_63%]" style={{ transform: dynamicStyles['--transform-leg2'] }}>
            <path d="M37.8 72.7s1.3-10.2 1.6-11.4 2.4-2.8 4.1-2.6c1.7.2 3.6 2.3 3.4 4l-1.8 11.1c-.2 1.7-1.7 3.3-3.4 3.1-1.8-.2-4.1-2.4-3.9-4.2z" />
            <path className="origin-[41.5%_73%]" style={{ transform: dynamicStyles['--transform-calf2'] }} d="M29.5 82.3l9.6-10.9c1.3-1.4 3.6-1.5 5.1-.1 1.5 1.4.4 4.9-.9 6.3l-8.5 9.6c-1.3 1.4-3.6 1.5-5.1.1-1.4-1.3-1.5-3.5-.2-5z" />
          </g>
        </svg>

        {/* Door SVG */}
        <svg 
          className={`absolute bottom-1 right-5 w-8 z-[5] origin-right preserve-3d transition-transform duration-200 ease-in-out
            ${isSlammed ? 'rotate-y-0 transition-delay-250 duration-100 ease-in' : ''}
            ${isClicked && !isSlammed ? 'rotate-y-[35deg]' : ''}
            ${currentState === 'hover' && !isClicked ? 'rotate-y-[20deg]' : ''}
            active:rotate-y-[28deg]`}
          viewBox="0 0 100 100"
        >
          <path className="fill-black stroke-black stroke-[4]" d="M93.4 86.3H58.6c-1.9 0-3.4-1.5-3.4-3.4V17.1c0-1.9 1.5-3.4 3.4-3.4h34.8c1.9 0 3.4 1.5 3.4 3.4v65.8c0 1.9-1.5 3.4-3.4 3.4z" />
          <circle cx="66" cy="50" r="3.7" className="fill-black" />
        </svg>
      </button>

      {/* Tailwind Custom Keyframes (Add to your global CSS or tailwind.config.js) */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg) scale(0.94); }
          to { transform: rotate(359deg) scale(0.94); }
        }
        @keyframes shake {
          0% { transform: rotate(-1deg); }
          50% { transform: rotate(2deg); }
          100% { transform: rotate(-1deg); }
        }
        @keyframes flash {
          0% { opacity: 0.4; }
          100% { opacity: 0; }
        }
        .rotate-y-0 { transform: rotateY(0deg); }
        .rotate-y-\[20deg\] { transform: rotateY(20deg); }
        .rotate-y-\[28deg\] { transform: rotateY(28deg); }
        .rotate-y-\[35deg\] { transform: rotateY(35deg); }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
};

export default LogoutButton;