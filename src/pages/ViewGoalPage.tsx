import { GoalView } from '@/components/GoalView';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Nav';
import { HeaderMegaMenu } from '@/components/NewNav';
import { Demo } from '@/components/Run';

export function ViewGoalPage() {
  return (
    <>
      <HeaderMegaMenu />

      <GoalView />
    </>
  );
}
