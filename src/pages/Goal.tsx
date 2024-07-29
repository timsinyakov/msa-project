import { Header } from '@/components/Header';
import { Navbar } from '@/components/Nav';
import { HeaderMegaMenu } from '@/components/NewNav';
import { SetGoal } from '@/components/SetGoal';

export function Goal() {
  return (
    <>
      <HeaderMegaMenu />
      <SetGoal />
    </>
  );
}
