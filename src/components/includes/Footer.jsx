import React, { useState, useEffect } from "react";
import {
  tagocash_logo,
  linkedin,
  instagram,
  twitter,
  google_play_cta,
  app_store_cta,
  facebook,
} from "../../assets";
import Cookie from "../cookies/Cookie";
import { useCookies } from "react-cookie";

const Footer = () => {
  const [showButton, setButton] = useState(false);
  const [year, setYear] = useState(new Date().getFullYear());
  const [cookies, setCookie] = useCookies(["tagocash"]);

  useEffect(() => {
    if (cookies.tagocash !== undefined) {
      setButton(false);
    } else {
      setTimeout(() => {
        setButton(true);
      }, 5000);
    }
  }, []);

  return (
    <>
      <div className="container mt-5 footer_section">
        <div className="d-md-flex gap">
          <div className="mt-4 footer_block_center">
            <img
              className="footer_logo_size"
              src={tagocash_logo}
              width={"218px"}
              height={"43px"}
              alt=""
            />
            <h3 className="hero_subtitle footer_title mt-2">
              Everywhere you go, Tago!
            </h3>
            <p className="footer_subtext footer_subtext_width footer_text">
              TagoCash is the fulfillment of our dream to live, work, travel and
              seamlessly spend our money anywhere in the world. This implies
              being able to move money instantly, transparently, conveniently,
              for free.
            </p>
            <div className="d-md-flex gap-4 mt-5 link_mobile">
              <a href="">
                <img
                  src={linkedin}
                  alt="linkedin"
                  width={"24px"}
                  height={"24px"}
                />
              </a>

              <a href="">
                <img
                  src={instagram}
                  alt="instagram"
                  width={"24px"}
                  height={"24px"}
                />
              </a>

              <a href="">
                <img
                  src={twitter}
                  alt="twitter"
                  width={"24px"}
                  height={"24px"}
                />
              </a>

              <a href="">
                <img
                  src={facebook}
                  alt="facebook"
                  width={"24px"}
                  height={"24px"}
                />
              </a>
            </div>
          </div>

          <div className="footer_links_block text-center text-md-start">
            <div className="margin_top">
              <h3 className="fasst_feature_description fw-semibold">Company</h3>
              <div className="d-flex flex-column">
                <a href="/home" className="footer_page_link footer_subtext">
                  Home
                </a>
                <a
                  href=""
                  className="footer_page_link footer_subtext mt-1 pt-1"
                >
                  About Us
                </a>
                <a
                  href="/blogs"
                  className="footer_page_link footer_subtext mt-1 pt-1"
                >
                  Blog
                </a>
                <a
                  href=""
                  className="footer_page_link footer_subtext mt-1 pt-1"
                >
                  What makes TagoCash Different
                </a>
                <a
                  href=""
                  className="footer_page_link footer_subtext mt-1 py-1"
                >
                  Get more with TagoCash
                </a>
              </div>
            </div>

            <div className="margin_top">
              <h3 className="fasst_feature_description fw-semibold">Legal</h3>
              <div className="d-flex flex-column">
                <a
                  href="/contact"
                  className="footer_page_link footer_subtext mt-md-1"
                >
                  Contact Us
                </a>
                <a href="" className="footer_page_link footer_subtext mt-2">
                  Terms and Conditions
                </a>
                <a href="" className="footer_page_link footer_subtext mt-2">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="d-flex social_links flex-md-column gap-3 margin_top">
              <a className="text-decoration-none" href="">
                <img
                  src={google_play_cta}
                  width={"166px"}
                  height={"47px"}
                  alt=""
                />
              </a>

              <a className="text-decoration-none" href="">
                <img
                  src={app_store_cta}
                  width={"166px"}
                  height={"47px"}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        <div className="gap-4 mt-4 social_links">
          <a href="">
            <img src={linkedin} alt="linkedin" width={"24px"} height={"24px"} />
          </a>

          <a href="">
            <img
              src={instagram}
              alt="instagram"
              width={"24px"}
              height={"24px"}
            />
          </a>

          <a href="">
            <img src={twitter} alt="twitter" width={"24px"} height={"24px"} />
          </a>

          <a href="">
            <img src={facebook} alt="facebook" width={"24px"} height={"24px"} />
          </a>
        </div>

        <p className="footer_subtext footer_text_mobile">
          TagoCash is the fulfillment of our dream to live, work, travel and
          seamlessly spend our money anywhere in the world. This implies being
          able to move money instantly, transparently, conveniently, for free.
        </p>

        <div className="mt-md-5 mt-4">
          <p className="text-center footer_subtext trademark">
            TagoCash is ©{year} Trademark Registered by TagoBits, Inc.
          </p>
        </div>
      </div>
      {showButton && <Cookie setButton={setButton} showButton={showButton} />}
    </>
  );
};

export default Footer;
