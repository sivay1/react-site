import icon from '../../assets/images/icon.svg';
export function GroupList(){
    return (
        <section className="group ">
            <div className="flex justify-center px-6 mt-20 ">
                <div className="w-full max-w-[1238px] h-[101px]   bg-[#21212A] text-[#fff] rounded-[18.97px]  shadow-sm">
                    <div className = "flex items-center gap-4 px-8 py-6" >
                        <img src={icon} alt="icon" className="w-[43.98px] h-[43.04px] flex-shrink-0"/>
                        <div className="leading-tight">
                            <p> Reduce the UNI proposal</p>
                            <p>submission threshold to 2.5M</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center px-6 mt-2 ">
                <div className="w-full max-w-[1238px] h-[101px]   bg-[#21212A] text-[#fff] rounded-[18.97px]  shadow-sm">
                    <div className = "flex items-center gap-4 px-8 py-6" >
                        <img src={icon} alt="icon" className="w-[43.98px] h-[43.04px] flex-shrink-0"/>
                        <p>UniTrade Grants Program v0.1</p>
                    </div>
                </div>
            </div>
        </section>
    );
}