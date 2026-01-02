import React from "react";
import Bell from "../../assets/images/notification.svg"
import top_icon from '../../assets/images/top-icon.svg';
type NavProps = {
  onConnectWallet?: () => void;
};

export const Nav: React.FC<NavProps> = ({ onConnectWallet }) => {
  return (
    <nav className="w-full h-[64px] bg-[#0E0F14] border-b border-white/10">
      <div className="mx-auto max-w-[1440px] h-full px-6 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <span className = "flex items-center gap-4 px-2 py-4">
        <img src={top_icon} alt="icon" className="w-[43.98px] h-[43.04px] flex-shrink-0"/>
        <h4 className='text-white'>UniTrade</h4>
      </span>
          
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4">
          
          {/* Notification */}
          <button className="relative text-white/70 hover:text-white transition">
            <img src={Bell} className="w-5 h-5" />
            {/* optional dot */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Connect Wallet */}
          <button
            onClick={onConnectWallet}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A1B23] text-white text-sm font-medium hover:bg-[#23242F] transition"
          >
            Connect wallet
          </button>

          {/* Profile / Shield */}
          <div className="w-9 h-9 rounded-full bg-[#1A1B23] flex items-center justify-center">
            <img
              src="/shield.svg"
              alt="profile"
              className="w-5 h-5"
            />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Nav;
