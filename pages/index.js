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
        <link
          href="https://fonts.googleapis.com/css?family=Love+Ya+Like+A+Sister|Pacifico&display=swap"
          rel="stylesheet"
        />
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
        <div className="events-details">
          <div className="wedding-ceremony">
            <span className="header">Wedding Ceremony</span>
            <table>
              <tr>
                <td>DATE: </td>
                <td>October 2, 2020</td>
              </tr>
              <tr>
                <td>TIME: </td>
                <td>01:00 PM</td>
              </tr>
              <tr>
                <td>LOCATION: </td>
                <td>
                  Lokal ng Laoag City
                  <br />
                  <a
                    href="https://www.google.com/maps/place/18%C2%B011'57.8%22N+120%C2%B035'09.8%22E/@18.1993446,120.5858307,129m/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d18.199382!4d120.586056?hl=en-US"
                    target="_blank"
                    rel="noopener"
                  >
                    see direction
                  </a>
                </td>
              </tr>
            </table>
          </div>
          <div>
            <span className="header">Reception</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(body) {
          font-family: "Love Ya Like A Sister" !important;
          -webkit-overflow-scrolling: touch;
        }

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
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .landing-container {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          width: 100%;
          height: inherit;
          padding: 50px;
          box-sizing: border-box;
        }

        .info {
          height: 300px;
          width: auto;
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
          font-size: 130px;
          padding: 10px 0;
          color: #ffffff;
          text-shadow: 4px 3px 3px #ff5722;
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
        }

        .details > .events-details {
          width: 100%;
          min-height: 400px;
          margin-top: 20px;
          border-radius: 2px;
          box-sizing: border-box;
          display: grid;
          grid-template-columns: 48% 48%;
          justify-content: space-between;
        }

        .header {
          display: block;
          font-size: 32px;
          color: #000;
          margin-bottom: 20px;
          background: #ffc002;
          padding: 10px;
          border: 1px solid #000;
          color: #000000;
          text-align: center;
        }

        .events-details > .wedding-ceremony > table {
          width: 100%;
          color: #fff;
          border-collapse: collapse;
          background-color: #ffc002;
        }

        .events-details > .wedding-ceremony > table > tr > td:nth-child(even) {
          font-size: 32px;
          text-shadow: 0px 3px 2px #582c0b;
        }

        .events-details
          > .wedding-ceremony
          > table
          > tr
          > td:nth-child(even)
          > a {
          font-size: 16px;
          text-decoration: underline;
          color: #000;
          text-shadow: none;
        }

        .events-details > table > tr,
        td {
          font-size: 18px;
          border: 1px solid #fff;
          padding: 20px;
          text-shadow: 1px 0px 1px #582c0b;
        }

        @media only screen and (max-width: 780px) {
          .info > .date {
            font-size: 68px;
          }

          .landing {
            background-attachment: scroll;
          }

          .details {
            background-attachment: scroll;
            background-position: right;
            padding: 10px;
          }

          .details > .events-details {
            grid-template-columns: 100%;
            padding: 0;
          }

          .wedding-ceremony {
            margin-bottom: 50px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
