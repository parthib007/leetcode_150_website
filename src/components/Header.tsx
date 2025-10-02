import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold text-white">LeetCode 150 Solutions</h1>
        <p className="text-lg text-gray-400">by parthib007</p>
      </div>
      <AuthButtons />
    </header>
  );
}
