import Layout from '@theme/Layout';
import React from 'react';
import { BuyCredits } from '../modules/Dashboard/BuyCredits';
import { Debug } from '../modules/Dashboard/Debug';
import { Profile } from '../modules/Dashboard/Profile';
import { SignInButton } from '../modules/Dashboard/SignInButton';
import { SignedIn } from '../modules/Dashboard/SignedIn';
import { SignedOut } from '../modules/Dashboard/SignedOut';
import { TransactionHistory } from '../modules/Dashboard/TransactionHistory';
import { Providers } from '../modules/Providers';

function Dashboard() {
  return (
    <Providers>
      <Layout>
        <div className="flex">
          <aside className="w-[300px]">{/* Sidebar */}</aside>

          <main className="flex-1">
            <div className="container w-auto mr-[25%]">
              <nav className="h-16">{/* Breadcrumbs */}</nav>

              <div className="flex justify-between">
                <h1>API Dashboard</h1>

                <SignInButton />
              </div>

              <Debug />

              <SignedOut>
                <p>Please log in or sign up to continue</p>
              </SignedOut>

              <SignedIn>
                <Profile />

                <BuyCredits />

                <TransactionHistory />
              </SignedIn>
            </div>
          </main>
        </div>
      </Layout>
    </Providers>
  );
}

export default Dashboard;
