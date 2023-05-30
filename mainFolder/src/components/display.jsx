import React, { useState, useEffect } from "react";
import "../styles/display.css";
import ProgressSteps from "./page2";
import ExpendingCard from "./page1";
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
import SearchIcon from "./page3";

const Display = () => {
  const [copyJSX, setCopyJSX] = useState(false);
  const [copyCSS, setCopyCSS] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [d2, d1] = window.$object;
  const { jsxD2, cssD2 } = d2;
  const { jsxD1, cssD1 } = d1;
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
                        {copyJSX ? (
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
                              setCopyJSX(true);
                              setTimeout(() => {
                                setCopyJSX(false);
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
                          wrapLongLines={false}
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
                        {copyCSS ? (
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
                              setCopyCSS(true);
                              setTimeout(() => {
                                setCopyCSS(false);
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
            <div className="allWrap">
              <div className="displayTwo">
                <div className="displayName">
                  <h1>Extended Card</h1>
                </div>
                <div className="displayComponent">
                  <ExpendingCard />
                </div>
                <div
                  className="btnShow"
                  onClick={() => {
                    setShow2(!show2);
                  }}
                >
                  Show Code
                </div>
              </div>
              {show2 ? (
                <div className="displayCode">
                  <div className="editorWrap">
                    <div className="editorJSX">
                      <div className="editorTitle">
                        <div className="editorName">
                          <h6>JSX</h6>
                        </div>
                        {copyJSX ? (
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
                              navigator.clipboard.writeText(jsxD1);
                              setCopyJSX(true);
                              setTimeout(() => {
                                setCopyJSX(false);
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
                          wrapLongLines={false}
                          customStyle={{
                            height: "300px",
                          }}
                        >
                          {jsxD1}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                    <div className="editorCSS">
                      <div className="editorTitle">
                        <div className="editorName">
                          <h6>CSS</h6>
                        </div>
                        {copyCSS ? (
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
                              navigator.clipboard.writeText(cssD2);
                              setCopyCSS(true);
                              setTimeout(() => {
                                setCopyCSS(false);
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
                          {cssD1}
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
