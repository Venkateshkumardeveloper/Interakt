import React from "react";
import styles from "./Whatsappapifeatures.module.css";
import { TiFlowChildren } from "react-icons/ti";
import { GiArrowCursor } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";

const Whatsappapifeatures = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.content}>
          <h1 style={{ textAlign: "center" }}>
            Interakt’s Power-packed WhatsApp Business API Features
          </h1>
          <h3 style={{ textAlign: "center" }}>
            Acquire, convert, re-engage & delight your customers on WhatsApp
            with Interakt
          </h3>
        </div>
        <div className={styles.contentbox} data-aos="fade-up">
          <div className={styles.contentdetails}>
            <div className={styles.contentitems}>
              <div className={styles.contenticons}>
                <TiFlowChildren className={styles.icon} />
              </div>
              <div>
                <h3>
                  Automated Workflows{" "}
                  <span
                    style={{
                      fontSize: "0.9rem",
                      padding: "0.5rem",
                      background: "green",
                      borderRadius: "5px",
                    }}
                  >
                    New
                  </span>
                </h3>
                <h5>
                  Create event-based workflows on WhatsApp to guide your
                  customers through various processes like appointment booking,
                  new registrations, etc.
                </h5>
              </div>
            </div>
            <div className={styles.contentitems1}>
              <div className={styles.contenticons}>
                <GiArrowCursor className={styles.icon} />
              </div>
              <div>
                <h3>Ads that Click to WhatsApp</h3>
                <h5>
                  Connect with your target audience where they are most active -
                  - across Facebook and Instagram
                </h5>
              </div>
            </div>
            <div className={styles.contentitems1}>
              <div className={styles.contenticons}>
                <BsPeopleFill className={styles.icon} />
              </div>
              <div>
                <h3>Shared Team Inbox</h3>
                <h5>
                  Experience real-time collaboration among teams with Interakt’s
                  Shared team Inbox, one number, multiple users.
                </h5>
              </div>
            </div>
            <div className={styles.contentitems1}>
              <div className={styles.contenticons}>
                <CiBullhorn className={styles.icon} />
              </div>
              <div>
                <h3>Bulk Campaigns & Broadcasts</h3>
                <h5>
                  Set up one-time or recurring campaigns and share personalized,
                  automated alerts to customers.
                </h5>
              </div>
            </div>
            <div className={styles.contentitems1}>
              <div className={styles.contenticons}>
                <ImStatsDots className={styles.icon} />
              </div>
              <div>
                <h3>Campaign Analytics</h3>
                <h5>
                  Track campaign performance and find out what worked for you &
                  what did not
                </h5>
              </div>
            </div>
            <div className={styles.contentitems1}>
              <div className={styles.contenticons}>
                <FaWhatsapp className={styles.icon} />
              </div>
              <div>
                <h3>WhatsApp Commerce</h3>
                <h5>
                  Create your storefront on WhatsApp today and enable a seamless
                  end-to-end shopping experience.
                </h5>
              </div>
            </div>
          </div>
          <div className={styles.contentimages}>
            <div className={styles.contentimage}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatsappapifeatures;
