import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const symbol = `<II/>`;

export default function Home() {
  return (
    <>
      {/* header nav scene*/}
      <header>
        <nav>
          <div>{symbol}</div>
          <div>
            <ul>
              <li>About</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="theme">
            <img src="/Home/Desktop/theme_change.svg" />
            <img src="/Home/Desktop/download.svg" />
          </div>
        </nav>

        {/* header info scene */}
        <div className="info">
          <div>
            <div>
              <h1>Hi, I'm Ider</h1>
              <img />
              <p>
                I am a full stack developer bla bla bla bla bla bla bla bla bla{" "}
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla
                bla bla bla bla bla bla bla bla{" "}
              </p>
              <ul>
                <li>
                  <img src="/Home/Desktop/location.svg" />
                  Ulaanbaatar, Mongolia
                </li>
                <li>
                  <img src="/Home/Desktop/dot.svg" />
                  Available for new project
                </li>
              </ul>
            </div>
            <div className="icons">
              <img src="/Home/Desktop/github.svg" />
              <img src="/Home/Desktop/twitter.svg" />
              <img src="/Home/Desktop/figma.svg" />
            </div>
          </div>
          <div>
            <img src="/next.svg" className="profile-photo" />
          </div>
        </div>
      </header>
    </>
  );
}
