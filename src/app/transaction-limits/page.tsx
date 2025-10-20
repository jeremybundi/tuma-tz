import React from 'react';
import Top from '../dashboard/components/NavBar'
import Content from './Content'; // Adjust the path if Home.tsx is in a different folder

const Page: React.FC = () => {
  return (
    <main >
      <Top/>
      <Content />
    </main>
  );
};

export default Page;
