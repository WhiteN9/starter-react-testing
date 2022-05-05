// Content.js
function Content({ loggedIn, text, fontStyle }) {
//inline styles
//   const pStyle = {
//       color: "black",
//       fontSize: fontStyle,
//   }
  return loggedIn && <p style={{fontSize:fontStyle}}>{text}</p>;
}
// TODO: define loggedIn
export default Content;
