import React, { useEffect } from "react";
import Head from "next/head";
import Header from "./shared/header";
import Footer from "./shared/Footer";
import PermitPackageItems from "../json-data/PermitPackageItems";
import PermitPackageImgs from "../json-data/PermitPackageImgs";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import gsap from "gsap/dist/gsap.js";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

function Product() {
  useEffect(() => {
    AOS.init();

    const gsapTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".grid-box",
        markers: false,
        start: "top 90%",
        end: "top 20%",
        scrub: 1,
      },
    });
    gsapTL.to(".grid-box", { x: "0", y: "0", opacity: "100", duration: 5 });

    const collapseItem = document.querySelectorAll(".collapsible__item");
    for (let i = 0; i < collapseItem.length; i++) {
      collapseItem[i].addEventListener("click", function () {
        collapseItem.forEach((collapseItem) => {
          collapseItem.classList.remove("visible");
        });
        this.classList.toggle("visible");
      });
    }
  }, []);
  return (
    <div className="permit-design services container-fluid px-0">
      <Head>
        ˀ<title>Solar Permit Package</title>
        <meta
          name="description"
          content="Generated by create next app shubham"
        />
        <link
          rel="preload"
          href="../../../public/fonts/GTWalsheimPro-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <Header />
      <section className="section--01">
        <div className="section-bg d-flex">
          <div className="col-12 col-lg-4"></div>
          <div className="col-12 col-lg-8"></div>
        </div>
        <div className="section-content-container container d-flex">
          <div
            data-aos="fade-right"
            data-aos-duration="800"
            ata-aos-delay="300"
            className="section-content-container__l col-12 col-lg-5"
          >
            <h1 className="element-heading big-h">PV Permit Design</h1>
            <p>
              Wattmonk delivers Permit designs in just 6hrs* of the design
              request.
            </p>
            <p className="b-toggle">
              Solar permit designs include detailed plans for individual
              projects. These solar permit designs can babe used for submission
              to the utility and AHJ for permit approval. And can also babe used
              to guide contractors during installations.
            </p>
            <p className="b-toggle">
              We deliver 98% acceptance across all AHJs with ease of getting PE
              stamps (Structural & Electrical)
            </p>

            <div className="service-cta bg-yellow p-shadow">
              <button>
                <a href="#">Commercial</a>
              </button>
              <button>
                <a href="#">Residential</a>
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            ata-aos-delay="300"
            className="section-content-container__r col-12 col-lg-7"
          >
            <img src="/permit-service.png" alt="" />
            <p className="s-toggle">
              Solar permit designs include detailed plans for individual
              projects. These solar permit designs can babe used for submission
              to the utility and AHJ for permit approval. And can also babe used
              to guide contractors during installations.
            </p>
            <p className="s-toggle">
              We deliver 98% acceptance across all AHJs with ease of getting PE
              stamps (Structural & Electrical)
            </p>
          </div>
        </div>
      </section>
      <section className="section--02 bg-grey">
        <div className="container">
          <div className="collapsible-container collapsible">
            <div className="collapsible__item ">
              <div className="parent-container">
                <div className="item-container">
                  <div className="item-container__content">
                    <h1 className="mx-auto">Commercial Designs</h1>
                    <p>
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s.
                    </p>
                    <button>
                      <a href="#" className="button">
                        Explore
                      </a>
                    </button>
                    <img
                      src="/../permit-designs/services-imgs/collapse-img-test.png"
                      alt="img"
                    />
                  </div>
                  <span className="item-button mx-auto"></span>
                </div>
              </div>
            </div>
            <div className="collapsible__item ">
              <div className="parent-container">
                <div className="item-container">
                  <div className="item-container__content">
                    <h1 className="mx-auto">Residential Projects</h1>
                    <p>
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s.
                    </p>
                    <button>
                      <a href="#" className="button">
                        Explore
                      </a>
                    </button>
                    <img
                      src="/../permit-designs/services-imgs/collapse-img-test.png"
                      alt="img"
                    />
                  </div>
                  <span className="item-button mx-auto"></span>
                </div>
              </div>
            </div>
            <div className="collapsible__item">
              <div className="parent-container">
                <div className="item-container">
                  <div className="item-container__content">
                    <h1 className="mx-auto">EV Chagers</h1>
                    <p>
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s.
                    </p>
                    <button>
                      <a href="#" className="button">
                        Explore
                      </a>
                    </button>
                    <img
                      src="/../permit-designs/services-imgs/collapse-img-test.png"
                      alt="img"
                    />
                  </div>
                  <span className="item-button mx-auto"></span>
                </div>
              </div>
            </div>
            <div className="collapsible__item visible">
              <div className="parent-container">
                <div className="item-container">
                  <div className="item-container__content">
                    <h1 className="mx-auto">Car Port</h1>
                    <p>
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industrys
                      standard dummy text ever since the 1500s.
                    </p>
                    <button>
                      <a href="#" className="button">
                        Explore
                      </a>
                    </button>
                    <img
                      src="/../permit-designs/services-imgs/collapse-img-test.png"
                      alt="img"
                    />
                  </div>
                  <span className="item-button mx-auto"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section--03 container">
        <div className="service-heading">
          <h1 className="center-heading heading">
            Key highlights of
            <br />
            Solar Permit Design
          </h1>
          <p className="center-heading">
            Permit plans are customized documents for customers as per local
            Authority Having Judrisdiction (AHJ)
          </p>
        </div>
        <div className="grid-content d-flex">
          <div className="grid-content__grid grid-01">
            <div className="grid-box">
              <img src="/../permit-designs/hlp-imgs/HLP 01.png" alt="" />
              <div className="grid-box__content">
                <h3>Code Compliance</h3>
                <p>
                  Electrical Codes: NEC 2008, NEC 2011, NEC 2014, NEC 2017, NEC
                  2020,etc
                  <br />
                  Fire Codes: IFC 2012, IFC 2015, IFC 2018, NFPA 1 2015, NFPA 1
                  2018, etc
                </p>
              </div>
            </div>
          </div>
          <div className="grid-content__grid grid-02">
            <div className="grid-box">
              <img src="/../permit-designs/hlp-imgs/HLP 02.png" alt="" />
              <div className="grid-box__content">
                <h3>Residential & Commercial</h3>
              </div>
            </div>
            <div className="sub-grid">
              <div className="grid-box">
                <img src="/../permit-designs/hlp-imgs/HLP 03.png" alt="" />
                <div className="grid-box__content">
                  <h3>Roof Racking</h3>
                  <p>
                    Full support for IronRidge, Quick Mount PV, Everest,
                    SunModo, SnapNRack, and Unirac pitched roof racking systems.
                  </p>
                </div>
              </div>
              <div className="grid-box">
                <img src="/../permit-designs/hlp-imgs/HLP 04.png" alt="" />
                <div className="grid-box__content">
                  <h3>PV Attachment Hardware</h3>
                  <p>
                    Support for IronRidge, Quick Mount PV, SnapNRack, SunModo,
                    RoofTech, S-5 and Unirac attachment hardware.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid-box">
              <img src="/../permit-designs/hlp-imgs/HLP 05.png" alt="" />
              <div className="grid-box__content">
                <h3>Output Formats</h3>
                <p>
                  Multiple PDF sizes(One-line diagram and three-line diagram are
                  also available as a DWG).
                </p>
              </div>
            </div>
          </div>
          <div className="grid-content__grid grid-03">
            <div className="grid-box">
              <img src="/../permit-designs/hlp-imgs/HLP 06.png" alt="" />
              <div className="grid-box__content">
                <h3>Roof Types</h3>
                <p>
                  Support for composite, tile, standing seam, and corrugated
                  roofs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Product;
