import { JournalPage } from '@/components/JournalPage';
import AuthRoute from '@/components/AuthRoute';
import { MdJoinFull } from 'react-icons/md';
import { HeaderMegaMenu } from '@/components/NewNav';

export function Journal() {
  return (
    <>
      <HeaderMegaMenu />
      <JournalPage />
    </>
  );
}
