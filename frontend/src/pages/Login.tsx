import { Header } from '@/components/Header';
import Login from '@/components/Login';
import { Navbar } from '@/components/Nav';
import { HeaderMegaMenu } from '@/components/NewNav';

export function LoginPage() {
  return (
    <>
      <HeaderMegaMenu />

      <Login />
    </>
  );
}
