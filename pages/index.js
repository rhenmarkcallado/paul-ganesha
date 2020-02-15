import React, { useLayoutEffect, useState } from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => {
  const [scrollTopPx, setScrollTopPx] = useState(0);
  useLayoutEffect(() => {
    const handleScroll = e => {
      const body = e.target.body.getBoundingClientRect();
      if (body && scrollTopPx !== body.top) {
        setScrollTopPx(body.top);
      }
    };

    if (typeof window !== undefined && window) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home">
      <Head>
        <title>Paul&Ganesha</title>
      </Head>
      <Nav top={scrollTopPx} />

      <div className="landing">
        <div className="landing-container">
          <div className="info">
            <span>Save the Date</span>
            <span className="date">X.II.MMXX</span>
            <button>see details</button>
          </div>
        </div>
      </div>

      <div className="story">
        <span>Our story</span>
        <div className="description">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
      <div className="details">
        <span>Details</span>
      </div>

      <style jsx>{`
        .landing {
          background: url("https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
          background-size: cover;
          background-repeat: no-repeat;
          position: relative;
          height: 100vh;
          left: 0;
          right: 0;
          top: -90px;
          z-index: 1;

          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .landing-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
          height: inherit;
          padding: 50px;
          box-sizing: border-box;
        }

        .info {
          height: 300px;
          width: 300px;
          color: #000;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .info > span {
          color: #fff;
        }

        .info > .date {
          font-size: 64px;
          padding: 10px 0;
        }

        .info > button {
          border: none;
          background: orange;
          color: #000;
          padding: 10px 20px;
          border-radius: 3px;
          text-shadow: none;
        }

        .story {
          min-height: 100px;
          background-color: #ca9764;
          margin-top: -90px;
          padding: 50px;
          box-sizing: border-box;
          z-index: 3;
          position: relative;
        }

        .story > .description > span {
          line-height: 25px;
          margin-top: 30px;
          display: block;
        }

        .details {
          padding: 50px;
          color: #000;
          min-height: 400px;
          background: url("https://img5.goodfon.com/wallpaper/nbig/2/15/osen-listia-fon-colorful-background-autumn-leaves-osennie-26.jpg");
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .details > span {
          font-size: 26px;
          border-bottom: 7px solid #f0b304;
          border-radius: 7px;
        }
      `}</style>
    </div>
  );
};

export default Home;
