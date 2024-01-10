import { Dashboard } from '@/components';

export default function Admin() {
  return (
    <div className="w-full h-full flex-col items-center justify-center">
      <header className="flex flex-col p-[4rem] justify-center items-center gap-[1rem]">
        <h2 className="text-xl uppercase tracking-widest">Schedule</h2>
        <div className="w-full h-px bg-accent" />
      </header>

      <Dashboard />
    </div>
  );
}
