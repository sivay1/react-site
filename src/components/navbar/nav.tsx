import React from "react";
import Bell from "../../assets/images/notification.svg"
import top_icon from '../../assets/images/top-icon.svg';
import { useState, useRef, useEffect } from "react";
type NavProps = {
  onConnectWallet?: () => void;
};


export const Nav: React.FC<NavProps> = ({ onConnectWallet }) => {
  const [open, setOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full h-[64px]  ">
      <div className="mx-auto max-w-[1440px] h-full px-6 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <span className = "flex items-center gap-4 px-2 py-4">
        <img src={top_icon} alt="icon" className="w-[43.98px] h-[43.04px] flex-shrink-0"/>
        <h4 className='text-white'>Head</h4>
      </span>
          
        </div>

        
        <div className="flex items-center gap-4">
          
          {/* Notification */}
          <button 
            onClick={() => setOpen(prev => !prev)}
            className="relative text-white/70 hover:text-white transition"
          >
            <img src={Bell} className="w-5 h-5" />
            {/* optional dot */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* 🔔 Notification dropdown */}
      {open && (
        <div
          ref={notifRef}
          className="absolute top-[64px] right-6 w-[360px] bg-[#15161D] border border-white/10 rounded-xl shadow-xl p-4 z-50"
        >
          <p className="text-white font-medium mb-3">
            Notifications
          </p>

          <div className="space-y-3">
            <NotificationItem
              title="The proposal you voted for is successfully approved."
              
            />
            <NotificationItem
              title="Notification two."
              
            />
            <NotificationItem
              title="Notification three."
              
            />
          </div>
        </div>
      )}

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

function NotificationItem({
  title,
  
}: {
  title: string;
   
}) {
  return (
    <div className="p-3 rounded-lg hover:bg-white/5 transition cursor-pointer">
      <p className="text-sm text-white">{title}</p>
      
    </div>
  );
}

export default Nav;
