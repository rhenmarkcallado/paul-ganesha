import React, { memo, useState } from "react";
import Typist from "react-typist";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiClose } from "@mdi/js";

const links = [
  {
    label: "Our Story",
    link: "story"
  },
  // {
  //   label: "Proposal",
  //   link: "proposal"
  // },
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
  const [isOpen, openMenu] = useState(false);
  const isScrolling = Boolean(top < -100);
  const text = <span>Paul & Ganesha</span>;

  const handleOnClickMenu = () => openMenu(!isOpen);

  return (
    <nav className={isScrolling ? "with-background" : ""}>
      <div className={` ${isScrolling ? "scrolling" : "logo"} `}>
        <a href="#">
          {isScrolling ? (
            text
          ) : (
            <Typist className="type">
              {text}
              <Typist.Backspace count={17} delay={1000} startDelay={300} />
              <span>We are getting married!</span>
              <Typist.Backspace count={26} delay={1000} />
              <span> {text} </span>
            </Typist>
          )}
        </a>
      </div>
      <div className="navbar">
        <div className="menu">
          <button onClick={handleOnClickMenu} aria-label="Open">
            <Icon
              path={isOpen ? mdiClose : mdiMenu}
              size={2}
              horizontal
              vertical
              color="white"
            />
          </button>
        </div>
        <div className={`${isOpen ? "is-open" : ""}`}>
          <ul>
            {links.map(item => (
              <li key={item.label}>
                <a href={`#${item.link}`} rel="noopener">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
          color: white;
          background-color: #000;
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
          transition: all linear 3s cubic-bezier(0.34, 0.95, 0.38, 0.3);
        }

        nav > .logo a {
          color: #fff;
          text-decoration: none;
          font-size: 32px;
        }

        .Typist {
          width: 205px !important;
        }

        nav > .logo > a {
          position: absolute;
          padding-left: 62px;
          top: 160px;
          font-size: 48px;
          color: #ffffff;
          text-decoration-style: none;
          text-rendering: optimizeSpeed;
          text-shadow: -2px 2px 1px #ffa401;
        }

        .scrolling {
          align-items: center;
          display: flex;
        }

        nav > .scrolling > a {
          color: #ffffff;
          position: relative;
          font-size: 18px;
          text-shadow: none;
          top: 0;
          padding: 10px 0;
          text-decoration: none;
          border: 1px solid #fff;
        }

        nav > .navbar > div > ul {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }

        .menu {
          display: none;
        }

        .menu > button {
          background-color: transparent;
          border-radius: 5px;
          border: none;
          position: relative;
          z-index: 1;
        }

        nav > .navbar > div > ul > li a {
          margin-left: 30px;
          text-decoration: none;
          color: #fff;
        }

        @media only screen and (max-width: 780px) {
          .navbar {
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }

          .menu {
            display: block;
          }

          .navbar > div > ul {
            display: none !important;
          }

          .navbar > .is-open {
            display: flex !important;
            background: rgba(208, 141, 13, 0.9803921568627451);
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            overflow: hidden;
          }

          .navbar > .is-open > ul {
            display: flex !important;
            flex-direction: column !important;
            padding: 0;
            margin: 0;
            justify-content: flex-start !important;
            width: 100% !important;
            margin-top: 30%;
            text-align: center;
          }

          .navbar > .is-open > ul > li,
          a {
            margin-left: 0 !important;
            padding: 10px 0;
            width: 100%;
            display: block;
            font-size: 24px;
          }

          .scrolling > a {
            text-align: center;
          }

          nav > .logo > a {
            left: 0;
            padding: 0;
            text-align: center;
            right: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default memo(Nav);
