import React from 'react';

const aStyle = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '2rem',
}



function App() {
  return (
    <>
      <ul>
        <li>
          <a style={aStyle} href="https://www.github.com/raphaelrighetti" title="Link to my GitHub profile page" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a style={aStyle} href="https://www.instagram.com/raphael_righetti" title="Link to my Instagram profile page" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </>
  );
}

export default App;
