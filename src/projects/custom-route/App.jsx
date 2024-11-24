import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [btn, setBtn] = useState("home");

  const btnContent = {
    home: <Home />,
    products: <Products />,
    news: <News />,
    about: <About />,
    contact: <Contact />,
  };
  return (
    <Layout setBtn={setBtn} contents={btnContent}>
      {btnContent[btn]}
    </Layout>
  );
};

function Home() {
  return <main>Home content goes here</main>;
}

function Products() {
  return <main>Products content goes here</main>;
}

function News() {
  return <main>News content goes here</main>;
}

function About() {
  return <main>About content goes here</main>;
}

function Contact() {
  return <main>Contact content goes here</main>;
}

function Layout({ children, contents, setBtn }) {
  return (
    <div className="layout">
      <header>Header</header>
      <ul>
        {Object.keys(contents).map((keyName) => {
          return (
            <li>
              <button onClick={() => setBtn(keyName)}>
                {keyName.toUpperCase()}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="middle">{children}</div>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
