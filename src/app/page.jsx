import NavMenu from '@/components/navmenu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Switch } from '@/components/ui/switch';
import { ModeToggle } from '@/components/Toggle';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-7xl font-bold">Hello BTA</h1>
        <div className="flex  gap-6">
          <Button variant="default" size="default">
            Button
          </Button>
          <Button variant="secondary" size="default">
            Button
          </Button>
          <Button variant="outline" size="default">
            Button
          </Button>
          <Button variant="destructive" size="default">
            Button
          </Button>
          <Button variant="ghost" size="default">
            Button
          </Button>
        </div>

        <div className="">
          <NavMenu />
        </div>

        <Switch />

        <ModeToggle />
      </main>
    </div>
  );
}
