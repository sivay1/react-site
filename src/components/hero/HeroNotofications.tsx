export function HeroNotifications() {
  return (
    <div className="relative hidden lg:block w-[320px] h-[220px]">
      <div className="absolute top-0 right-0 rotate-3">
        <NotificationCard
          text="The proposal you voted for is successfully approved"
          time="42m ago"
        />
      </div>

      <div className="absolute top-16 right-10 -rotate-2">
        <NotificationCard
          text="Reborn0032 created new proposal, take a look"
          time="55m ago"
        />
      </div>
    </div>
  );
}

function NotificationCard({
  text,
  time,
}: {
  text: string;
  time: string;
}) {
  return (
    <div className="
      w-64 rounded-xl bg-slate-900
      p-4 text-sm text-white
      shadow-lg
    ">
      <p>{text}</p>
      <span className="mt-2 block text-xs text-white/60">
        {time}
      </span>
    </div>
  );
}
