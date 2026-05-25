
type Props = {
  total: number;
};

function Navbar({ total }: Props) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>Aegis</h1>
      </div>
      <div className="nav-total">
        <span className="total-display">
          Total Spending: Rs {total.toFixed(2)}
        </span>
      </div>
    </nav>
  );
}
export default Navbar;
