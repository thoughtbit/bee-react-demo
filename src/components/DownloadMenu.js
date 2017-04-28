function List(props) {
  return (
    <ul className={'list list-' + props.importance}>
      {props.children}
    </ul>
  );
}

function DownloadMenu() {
  return (
    <List importance="high">
      <li>Download SBCL</li>
      <li>Download Racket</li>
      <li>Download Haskell</li>
    </List>
  );
}

export default DownloadMenu