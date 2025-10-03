import Header from "@/components/Header";
import LeetCodeTable from "@/components/LeetCodeTable";

export default function Home() {
  return (
    <main className="container mx-auto px-2 py-4 sm:px-4 sm:py-8">
      <Header />
      <div className="mt-6 sm:mt-8">
        <LeetCodeTable />
      </div>
    </main>
  );
}