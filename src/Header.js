function Header({ loggedIn, handleLoggedInClick, handleFontSizeIncrease }) {
  return (
    <>
      <h1>Header to the page.</h1>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button onClick={handleFontSizeIncrease}>Increase Font size</button>
    </>
  );
}
// TODO: define loggedIn
export default Header;
