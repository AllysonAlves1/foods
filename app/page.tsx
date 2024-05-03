import Header from "./_components/header";
import Search from "./_components/search";

export default function Home() {
  return (
    <div className="m-2  p-2">
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
    </div>
  );
}
