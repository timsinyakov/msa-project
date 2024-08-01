import { AllStats } from '@/components/AllStats';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Nav';
import { HeaderMegaMenu } from '@/components/NewNav';

export function Stats() {
  return (
    <>
      <HeaderMegaMenu />
      <AllStats />
    </>
  );
}
