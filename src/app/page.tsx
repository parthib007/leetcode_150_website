import Header from "@/components/Header";
import LeetCodeTable from "@/components/LeetCodeTable";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <div className="mt-8">
        <LeetCodeTable />
      </div>
    </main>
  );
}