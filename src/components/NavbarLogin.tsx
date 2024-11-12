import BrowserOnly from '@docusaurus/BrowserOnly';
import { SignInButton } from '@site/src/modules/Dashboard/SignInButton';

export function NavbarLogin() {
  if (location.pathname === '/dashboard') {
    return (
      <div className="px-4">
        <SignInButton />
      </div>
    );
  }

  return null;
}

export default function ClientNavbarLogin() {
  return <BrowserOnly>{() => <NavbarLogin />}</BrowserOnly>;
}