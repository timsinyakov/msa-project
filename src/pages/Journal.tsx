import { Header } from '@/components/Header';
import { Navbar } from '@/components/Nav';
import { JournalPage } from '@/components/JournalPage';
import AuthRoute from '@/components/AuthRoute';
import { MdJoinFull } from 'react-icons/md';

export function Journal() {
  return (
    <>
      <Header />
      <Navbar />
      <JournalPage />
    </>
  );
}
