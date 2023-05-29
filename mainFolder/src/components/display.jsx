import React, { useState, useEffect } from "react";
import "../styles/display.css";
import ProgressSteps from "./page2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faC,
  faCheckCircle,
  faClipboard,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  darcula,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const Display = () => {
  const [copy, setCopy] = useState(false);
  const [show, setShow] = useState(false);
  const [d2] = window.$object;
  const { jsxD2, cssD2 } = d2;
  return (
    <div className="divHero">
      <div className="divHeader">
        <h1>EasyFeatures</h1>
      </div>
      <div className="divBody">
        <div className="container">
          <div className="displayWrap">
            <div className="allWrap">
              <div className="displayOne">
                <div className="displayName">
                  <h1>Progress Steps</h1>
                </div>
                <div className="displayComponent">
                  <ProgressSteps />
                </div>
                <div
                  className="btnShow"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Show Code
                </div>
              </div>
              {show ? (
                <div className="displayCode">
                  <div className="editorWrap">
                    <div className="editorJSX">
                      <div className="editorTitle">
                        <div className="editorName">
                          <h6>JSX</h6>
                        </div>
                        {copy ? (
                          <div className="iconCopy">
                            <FontAwesomeIcon
                              className="faClip"
                              icon={faCheckCircle}
                            />
                            <p>Copied</p>
                          </div>
                        ) : (
                          <div
                            className="iconCopy"
                            onClick={() => {
                              navigator.clipboard.writeText(jsxD2);
                              setCopy(true);
                              setTimeout(() => {
                                setCopy(false);
                              }, 1500);
                            }}
                          >
                            <FontAwesomeIcon
                              className="faClip"
                              icon={faClipboard}
                            />
                            <p>Copy code</p>
                          </div>
                        )}
                      </div>
                      <div className="editorCode">
                        <SyntaxHighlighter
                          language="javascript"
                          style={atomOneDark}
                          wrapLongLines={true}
                          customStyle={{
                            height: "300px",
                          }}
                        >
                          {jsxD2}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                    <div className="editorCSS">
                      <div className="editorTitle">
                        <div className="editorName">
                          <h6>CSS</h6>
                        </div>
                        {copy ? (
                          <div className="iconCopy">
                            <FontAwesomeIcon
                              className="faClip"
                              icon={faCheckCircle}
                            />
                            <p>Copied</p>
                          </div>
                        ) : (
                          <div
                            className="iconCopy"
                            onClick={() => {
                              navigator.clipboard.writeText(jsxD2);
                              setCopy(true);
                              setTimeout(() => {
                                setCopy(false);
                              }, 1500);
                            }}
                          >
                            <FontAwesomeIcon
                              className="faClip"
                              icon={faClipboard}
                            />
                            <p>Copy code</p>
                          </div>
                        )}
                      </div>
                      <div className="editorCode">
                        <SyntaxHighlighter
                          language="javascript"
                          style={atomOneDark}
                          wrapLongLines={true}
                          customStyle={{
                            height: "300px",
                          }}
                        >
                          {cssD2}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
