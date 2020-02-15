import React, { memo } from "react";

const links = [
  {
    label: "Our Story",
    link: "story"
  },
  {
    label: "Proposal",
    link: "proposal"
  },
  {
    label: "Details",
    link: "details"
  },
  {
    label: "Invitations",
    link: "invitations"
  },
  {
    label: "Photos",
    link: "photos"
  }
];

const Nav = ({ top }) => {
  const isScrolling = Boolean(top < -100);
  return (
    <nav className={isScrolling ? "with-background" : ""}>
      <div className={` ${isScrolling ? "scrolling" : "logo"} `}>
        <a href="#">
          Paul & <br /> Ganesha
        </a>
      </div>
      <div className="navbar">
        <ul>
          {links.map(item => (
            <li key={item.label}>
              <a href={`#${item.link}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          color: white;
          background-color: #fff;
        }

        ul {
          list-style: none;
        }

        nav {
          display: grid;
          grid-template-columns: 40% 60%;
          padding: 20px;
          position: relative;
          z-index: 2;
          position: sticky;
          top: 0;
        }

        .with-background {
          z-index: 10;
          background-color: rgba(0, 0, 0, 0.75);
        }

        nav > .logo a {
          color: #fff;
          text-decoration: none;
          font-size: 32px;
        }

        nav > .logo > a {
          position: absolute;
          padding-left: 62px;
          top: 160px;
          font-size: 70px;
          color: #ffffff;
          text-decoration-style: none;
          text-rendering: optimizeSpeed;
          text-shadow: -2px 2px 1px #ffa401;
        }

        nav > .scrolling > a {
          color: #ffffff;
          position: relative;
          font-size: 18px;
          text-shadow: none;
          top: 0;
          padding-left: 0;
          text-decoration: none;
          border: 1px solid #fff;
        }

        nav > .navbar > ul {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }

        nav > .navbar > ul > li a {
          margin-left: 30px;
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </nav>
  );
};

export default memo(Nav);
