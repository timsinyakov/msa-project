import { Header } from '@/components/Header';
import Login from '@/components/Login';
import { Navbar } from '@/components/Nav';
import { HeaderMegaMenu } from '@/components/NewNav';
import Register from '@/components/Register';

export function RegisterPage() {
  return (
    <>
      <HeaderMegaMenu />

      <Register />
    </>
  );
}
