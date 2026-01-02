// import { HeroNotifications } from './HeroNotofications'
import icon from '../../assets/images/icon.svg';
export function Hero() {
  return (
    // Outer section (page spacing)
    <section className="w-full px-6 mt-2">
      
      
      {/* 🔥 THIS IS WHERE YOUR DIV GOES */}
      <div
        className="
          relative mx-auto max-w-7xl
          rounded-2xl
          bg-gradient-to-r from-orange-400 to-purple-500
          px-10 py-14
        "
      >
        {/* Inner layout */}
        <div className="flex items-center justify-between gap-10">
          
          {/* LEFT SIDE — TEXT */}
          <div className="max-w-md text-white ">
            <h1 className="text-4xl font-bold leading-tight">
              UniTrade
            </h1>
            <h1 className="text-4xl font-bold leading-tight">
              Governance
            </h1>

            <div className = "flex items-center gap-4 ">  {/*removed px-8 py-6*/}
              <img src={icon} alt="icon" className="w-[43.98px] h-[43.04px] flex-shrink-0 mt-4"/>
              <div className="leading-tight">
                <p className="mt-4 ">
                    UNITRADE tokens represent voting
                </p>
                <p>shares in UniTrade governance.</p>
              </div>
            </div>
            
          </div>

          {/* RIGHT SIDE — VISUALS */}
        </div>
      </div>
      
      {/* <HeroNotifications /> */}
    </section>
    
    
  );
}
