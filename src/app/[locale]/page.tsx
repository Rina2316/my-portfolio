// src/app/[locale]/page.tsx
import HomeServer, { generateStaticParams } from './HomeServer';
import HomeClient from "./HomeClient.tsx";

const HomePage = async () => {
  return (
    <>
      <HomeServer />
      <HomeClient />
    </>
  );
};

export { generateStaticParams };
export default HomePage;
