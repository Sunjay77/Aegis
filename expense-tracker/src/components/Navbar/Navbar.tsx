
type Props = {
  total: number;
};

function Navbar({ total }: Props) {
  return (
    <nav className="mb-4 flex items-center justify-between rounded-lg bg-white px-5 py-2">
      <div>
        <h1 className="text-2xl text-gray-800">Aegis</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="rounded-lg bg-green-50 px-4 py-2 text-base font-bold text-green-600">
          Total Spending: Rs {total.toFixed(2)}
        </span>
      </div>
    </nav>
  );
}
export default Navbar;
