import { GoalView } from '@/components/GoalView';
import { Header } from '@/components/Header';
import { Navbar } from '@/components/Nav';
import { Demo } from '@/components/Run';

export function ViewGoalPage() {
  return (
    <>
      <Header />

      <Navbar />

      <GoalView />
    </>
  );
}
