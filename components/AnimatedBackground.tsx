
import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-gradient-to-b from-[#050a1f] to-[#0a1628]">
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,153,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animation-moveGrid"></div>
      <div className="absolute top-[-200px] right-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#0066ff] to-[#00b4d8] opacity-30 filter blur-3xl animation-float"></div>
      <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0099ff] opacity-30 filter blur-3xl animation-float" style={{ animationDelay: '5s' }}></div>
    </div>
  );
};
