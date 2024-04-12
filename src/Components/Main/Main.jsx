import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {

  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);




  return (
    <div className="main">
      <div className="nav">
        <p>Genai</p>
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFDasMhqPlkfg/profile-displayphoto-shrink_800_800/0/1706287468525?e=1718236800&v=beta&t=pIp9mKJaj_wmXBIi1oyihQrCcYfBp_LjU4e5W7A-4TI"
          alt=""
        />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Ali</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>suggest some best places to visit in paris</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Why guhati Called fashion capital of India</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>suggest some best places to visit in Mumbai</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Format this Html document</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src="https://media.licdn.com/dms/image/D4D03AQFDasMhqPlkfg/profile-displayphoto-shrink_800_800/0/1706287468525?e=1718236800&v=beta&t=pIp9mKJaj_wmXBIi1oyihQrCcYfBp_LjU4e5W7A-4TI" alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />

            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            This React app "GENAI"is a Project made by Aliakbar shk this app is a clone of Gemini
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
