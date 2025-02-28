import React, { Component } from "react";
import Slider from "react-slick";

export default class ScndSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2.8,
      slidesToScroll: 1,
      focusOnSelect: true,
      arrows: false,

      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1.2,
            infinite: false,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 1,
            infinite: false,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="col-5 slider-box-container">
            <div className="slide-box">
              <div className="slide-icon">
                <svg
                  id="Points_Icon_1"
                  data-name="Points Icon 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.997"
                  height="29"
                  viewBox="0 0 28.997 29"
                >
                  <path
                    id="Path_2642"
                    data-name="Path 2642"
                    d="M22.2,9H19.7V28.5h3c.4,0,.167-11.667,0-17.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2643"
                    data-name="Path 2643"
                    d="M10.7,18h2.5V28.5H10.7Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2644"
                    data-name="Path 2644"
                    d="M6.2,23l1.5-.5h1v6h-2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2645"
                    data-name="Path 2645"
                    d="M17.7,13.5l-2.5.5V28l2.5.5c.167-3.833.5-11.6.5-12S17.866,14.333,17.7,13.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2646"
                    data-name="Path 2646"
                    d="M22.2,8.609H20.391a.906.906,0,0,0-.906.906V28.546a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V9.516a.906.906,0,0,0-.906-.906Zm0,19.484H20.391V9.516H22.2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2647"
                    data-name="Path 2647"
                    d="M17.672,13.141H15.859a.906.906,0,0,0-.906.906v14.5a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453v-14.5a.906.906,0,0,0-.906-.906Zm0,14.953H15.859V14.047h1.812Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2648"
                    data-name="Path 2648"
                    d="M13.141,17.672H11.328a.906.906,0,0,0-.906.906v9.969a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V18.578a.906.906,0,0,0-.906-.906Zm0,10.422H11.328V18.578h1.813Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2649"
                    data-name="Path 2649"
                    d="M8.61,22.2H6.8a.906.906,0,0,0-.906.906v5.438A.453.453,0,0,0,6.344,29H9.063a.453.453,0,0,0,.453-.453V23.109A.906.906,0,0,0,8.61,22.2Zm0,5.891H6.8V23.109H8.61Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2650"
                    data-name="Path 2650"
                    d="M4.581,19.517a.454.454,0,1,0,.347.838c2.68-1.112,9.006-4.393,11.554-11.328l.054.227a.458.458,0,1,0,.895-.195L16.99,7.147a.453.453,0,0,0-.748-.227L14.794,8.255a.453.453,0,1,0,.609.662l.247-.227C13.224,15.306,7.152,18.45,4.581,19.517Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2653"
                    data-name="Path 2653"
                    d="M24.516,24.287V21.81l.573.576a1.043,1.043,0,0,1-.124,1.451h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2654"
                    data-name="Path 2654"
                    d="M25.027,12.189l.086.393h2.455a1.03,1.03,0,0,1,.93,1.112h0v1.618a1.034,1.034,0,0,1-.932,1.111H25.111l-.086.392a10.742,10.742,0,0,1-.512,1.665V10.513A10.719,10.719,0,0,1,25.027,12.189ZM18.753,7.88q-.061.061-.117.126l-.271-1.174h0a1.859,1.859,0,0,0-3.071-.948h0l-1.45,1.334,0,0a1.844,1.844,0,0,0-.391.519,6.844,6.844,0,0,0-5.619,8.3c-.656.386-1.493.872-2.218,1.289-.426.245-.813.466-1.1.63l-.182.1a10.606,10.606,0,0,1-.355-1.252l-.086-.393H1.432A1.032,1.032,0,0,1,.5,15.306V13.7a1.033,1.033,0,0,1,.932-1.113H3.9l.086-.393a10.692,10.692,0,0,1,1.45-3.5l.218-.339-.285-.285L3.913,6.618A1.039,1.039,0,0,1,4.037,5.17L5.17,4.037h0l0,0a1.206,1.206,0,0,1,.844-.362h0a.843.843,0,0,1,.6.235L8.067,5.356l.285.285.339-.218a10.726,10.726,0,0,1,3.5-1.45l.393-.086V1.432A1.031,1.031,0,0,1,13.7.5H15.3a1.032,1.032,0,0,1,1.113.932V3.894l.393.086a10.725,10.725,0,0,1,3.5,1.45l.339.217.285-.285,1.449-1.449h0a.841.841,0,0,1,.6-.24h0a1.206,1.206,0,0,1,.847.362h0l0,0L24.968,5.17h0A1.037,1.037,0,0,1,25.1,6.616h0L23.833,7.878A2.312,2.312,0,0,0,22.2,7.2H20.388A2.313,2.313,0,0,0,18.753,7.88Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2655"
                    data-name="Path 2655"
                    d="M4.757,21.8h.01q.063,0,.125-.007a2.312,2.312,0,0,0-.413,1.319v1.172l-.449-.449h0A1.038,1.038,0,0,1,3.9,22.385h0l.605-.6A1.864,1.864,0,0,0,4.757,21.8Zm3.847-1H7.293q.876-.449,1.716-.966v1A2.307,2.307,0,0,0,8.6,20.8Zm-4.056.484-.02.132h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <h3>Stay in control of your designs</h3>
              <p>
                Talk to expert designers and your account manager in real-time
                with our Chat options (Video, Audio or Text)​. Access the
                project status in real-time to update your customer on delivery
                date and AHJ status.
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="col-5 slider-box-container">
            <div className="slide-box">
              <div className="slide-icon">
                <svg
                  id="Points_Icon_1"
                  data-name="Points Icon 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.997"
                  height="29"
                  viewBox="0 0 28.997 29"
                >
                  <path
                    id="Path_2642"
                    data-name="Path 2642"
                    d="M22.2,9H19.7V28.5h3c.4,0,.167-11.667,0-17.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2643"
                    data-name="Path 2643"
                    d="M10.7,18h2.5V28.5H10.7Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2644"
                    data-name="Path 2644"
                    d="M6.2,23l1.5-.5h1v6h-2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2645"
                    data-name="Path 2645"
                    d="M17.7,13.5l-2.5.5V28l2.5.5c.167-3.833.5-11.6.5-12S17.866,14.333,17.7,13.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2646"
                    data-name="Path 2646"
                    d="M22.2,8.609H20.391a.906.906,0,0,0-.906.906V28.546a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V9.516a.906.906,0,0,0-.906-.906Zm0,19.484H20.391V9.516H22.2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2647"
                    data-name="Path 2647"
                    d="M17.672,13.141H15.859a.906.906,0,0,0-.906.906v14.5a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453v-14.5a.906.906,0,0,0-.906-.906Zm0,14.953H15.859V14.047h1.812Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2648"
                    data-name="Path 2648"
                    d="M13.141,17.672H11.328a.906.906,0,0,0-.906.906v9.969a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V18.578a.906.906,0,0,0-.906-.906Zm0,10.422H11.328V18.578h1.813Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2649"
                    data-name="Path 2649"
                    d="M8.61,22.2H6.8a.906.906,0,0,0-.906.906v5.438A.453.453,0,0,0,6.344,29H9.063a.453.453,0,0,0,.453-.453V23.109A.906.906,0,0,0,8.61,22.2Zm0,5.891H6.8V23.109H8.61Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2650"
                    data-name="Path 2650"
                    d="M4.581,19.517a.454.454,0,1,0,.347.838c2.68-1.112,9.006-4.393,11.554-11.328l.054.227a.458.458,0,1,0,.895-.195L16.99,7.147a.453.453,0,0,0-.748-.227L14.794,8.255a.453.453,0,1,0,.609.662l.247-.227C13.224,15.306,7.152,18.45,4.581,19.517Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2653"
                    data-name="Path 2653"
                    d="M24.516,24.287V21.81l.573.576a1.043,1.043,0,0,1-.124,1.451h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2654"
                    data-name="Path 2654"
                    d="M25.027,12.189l.086.393h2.455a1.03,1.03,0,0,1,.93,1.112h0v1.618a1.034,1.034,0,0,1-.932,1.111H25.111l-.086.392a10.742,10.742,0,0,1-.512,1.665V10.513A10.719,10.719,0,0,1,25.027,12.189ZM18.753,7.88q-.061.061-.117.126l-.271-1.174h0a1.859,1.859,0,0,0-3.071-.948h0l-1.45,1.334,0,0a1.844,1.844,0,0,0-.391.519,6.844,6.844,0,0,0-5.619,8.3c-.656.386-1.493.872-2.218,1.289-.426.245-.813.466-1.1.63l-.182.1a10.606,10.606,0,0,1-.355-1.252l-.086-.393H1.432A1.032,1.032,0,0,1,.5,15.306V13.7a1.033,1.033,0,0,1,.932-1.113H3.9l.086-.393a10.692,10.692,0,0,1,1.45-3.5l.218-.339-.285-.285L3.913,6.618A1.039,1.039,0,0,1,4.037,5.17L5.17,4.037h0l0,0a1.206,1.206,0,0,1,.844-.362h0a.843.843,0,0,1,.6.235L8.067,5.356l.285.285.339-.218a10.726,10.726,0,0,1,3.5-1.45l.393-.086V1.432A1.031,1.031,0,0,1,13.7.5H15.3a1.032,1.032,0,0,1,1.113.932V3.894l.393.086a10.725,10.725,0,0,1,3.5,1.45l.339.217.285-.285,1.449-1.449h0a.841.841,0,0,1,.6-.24h0a1.206,1.206,0,0,1,.847.362h0l0,0L24.968,5.17h0A1.037,1.037,0,0,1,25.1,6.616h0L23.833,7.878A2.312,2.312,0,0,0,22.2,7.2H20.388A2.313,2.313,0,0,0,18.753,7.88Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2655"
                    data-name="Path 2655"
                    d="M4.757,21.8h.01q.063,0,.125-.007a2.312,2.312,0,0,0-.413,1.319v1.172l-.449-.449h0A1.038,1.038,0,0,1,3.9,22.385h0l.605-.6A1.864,1.864,0,0,0,4.757,21.8Zm3.847-1H7.293q.876-.449,1.716-.966v1A2.307,2.307,0,0,0,8.6,20.8Zm-4.056.484-.02.132h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <h3>Make your solar business more efficient</h3>
              <p>
                Order solar designs in 5 mins! Review your solar projects
                anytime with the app.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="col-5 slider-box-container">
            <div className="slide-box">
              <div className="slide-icon">
                <svg
                  id="Points_Icon_1"
                  data-name="Points Icon 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.997"
                  height="29"
                  viewBox="0 0 28.997 29"
                >
                  <path
                    id="Path_2642"
                    data-name="Path 2642"
                    d="M22.2,9H19.7V28.5h3c.4,0,.167-11.667,0-17.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2643"
                    data-name="Path 2643"
                    d="M10.7,18h2.5V28.5H10.7Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2644"
                    data-name="Path 2644"
                    d="M6.2,23l1.5-.5h1v6h-2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2645"
                    data-name="Path 2645"
                    d="M17.7,13.5l-2.5.5V28l2.5.5c.167-3.833.5-11.6.5-12S17.866,14.333,17.7,13.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2646"
                    data-name="Path 2646"
                    d="M22.2,8.609H20.391a.906.906,0,0,0-.906.906V28.546a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V9.516a.906.906,0,0,0-.906-.906Zm0,19.484H20.391V9.516H22.2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2647"
                    data-name="Path 2647"
                    d="M17.672,13.141H15.859a.906.906,0,0,0-.906.906v14.5a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453v-14.5a.906.906,0,0,0-.906-.906Zm0,14.953H15.859V14.047h1.812Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2648"
                    data-name="Path 2648"
                    d="M13.141,17.672H11.328a.906.906,0,0,0-.906.906v9.969a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V18.578a.906.906,0,0,0-.906-.906Zm0,10.422H11.328V18.578h1.813Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2649"
                    data-name="Path 2649"
                    d="M8.61,22.2H6.8a.906.906,0,0,0-.906.906v5.438A.453.453,0,0,0,6.344,29H9.063a.453.453,0,0,0,.453-.453V23.109A.906.906,0,0,0,8.61,22.2Zm0,5.891H6.8V23.109H8.61Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2650"
                    data-name="Path 2650"
                    d="M4.581,19.517a.454.454,0,1,0,.347.838c2.68-1.112,9.006-4.393,11.554-11.328l.054.227a.458.458,0,1,0,.895-.195L16.99,7.147a.453.453,0,0,0-.748-.227L14.794,8.255a.453.453,0,1,0,.609.662l.247-.227C13.224,15.306,7.152,18.45,4.581,19.517Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2653"
                    data-name="Path 2653"
                    d="M24.516,24.287V21.81l.573.576a1.043,1.043,0,0,1-.124,1.451h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2654"
                    data-name="Path 2654"
                    d="M25.027,12.189l.086.393h2.455a1.03,1.03,0,0,1,.93,1.112h0v1.618a1.034,1.034,0,0,1-.932,1.111H25.111l-.086.392a10.742,10.742,0,0,1-.512,1.665V10.513A10.719,10.719,0,0,1,25.027,12.189ZM18.753,7.88q-.061.061-.117.126l-.271-1.174h0a1.859,1.859,0,0,0-3.071-.948h0l-1.45,1.334,0,0a1.844,1.844,0,0,0-.391.519,6.844,6.844,0,0,0-5.619,8.3c-.656.386-1.493.872-2.218,1.289-.426.245-.813.466-1.1.63l-.182.1a10.606,10.606,0,0,1-.355-1.252l-.086-.393H1.432A1.032,1.032,0,0,1,.5,15.306V13.7a1.033,1.033,0,0,1,.932-1.113H3.9l.086-.393a10.692,10.692,0,0,1,1.45-3.5l.218-.339-.285-.285L3.913,6.618A1.039,1.039,0,0,1,4.037,5.17L5.17,4.037h0l0,0a1.206,1.206,0,0,1,.844-.362h0a.843.843,0,0,1,.6.235L8.067,5.356l.285.285.339-.218a10.726,10.726,0,0,1,3.5-1.45l.393-.086V1.432A1.031,1.031,0,0,1,13.7.5H15.3a1.032,1.032,0,0,1,1.113.932V3.894l.393.086a10.725,10.725,0,0,1,3.5,1.45l.339.217.285-.285,1.449-1.449h0a.841.841,0,0,1,.6-.24h0a1.206,1.206,0,0,1,.847.362h0l0,0L24.968,5.17h0A1.037,1.037,0,0,1,25.1,6.616h0L23.833,7.878A2.312,2.312,0,0,0,22.2,7.2H20.388A2.313,2.313,0,0,0,18.753,7.88Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2655"
                    data-name="Path 2655"
                    d="M4.757,21.8h.01q.063,0,.125-.007a2.312,2.312,0,0,0-.413,1.319v1.172l-.449-.449h0A1.038,1.038,0,0,1,3.9,22.385h0l.605-.6A1.864,1.864,0,0,0,4.757,21.8Zm3.847-1H7.293q.876-.449,1.716-.966v1A2.307,2.307,0,0,0,8.6,20.8Zm-4.056.484-.02.132h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <h3>Make your solar business more profitable</h3>
              <p>
                Our reliable, accurate, and great value designs for AHJ approval
                ensure you never waste time revising designs. That to at as low
                as $60
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="col-5 slider-box-container">
            <div className="slide-box">
              <div className="slide-icon">
                <svg
                  id="Points_Icon_1"
                  data-name="Points Icon 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.997"
                  height="29"
                  viewBox="0 0 28.997 29"
                >
                  <path
                    id="Path_2642"
                    data-name="Path 2642"
                    d="M22.2,9H19.7V28.5h3c.4,0,.167-11.667,0-17.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2643"
                    data-name="Path 2643"
                    d="M10.7,18h2.5V28.5H10.7Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2644"
                    data-name="Path 2644"
                    d="M6.2,23l1.5-.5h1v6h-2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2645"
                    data-name="Path 2645"
                    d="M17.7,13.5l-2.5.5V28l2.5.5c.167-3.833.5-11.6.5-12S17.866,14.333,17.7,13.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2646"
                    data-name="Path 2646"
                    d="M22.2,8.609H20.391a.906.906,0,0,0-.906.906V28.546a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V9.516a.906.906,0,0,0-.906-.906Zm0,19.484H20.391V9.516H22.2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2647"
                    data-name="Path 2647"
                    d="M17.672,13.141H15.859a.906.906,0,0,0-.906.906v14.5a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453v-14.5a.906.906,0,0,0-.906-.906Zm0,14.953H15.859V14.047h1.812Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2648"
                    data-name="Path 2648"
                    d="M13.141,17.672H11.328a.906.906,0,0,0-.906.906v9.969a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V18.578a.906.906,0,0,0-.906-.906Zm0,10.422H11.328V18.578h1.813Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2649"
                    data-name="Path 2649"
                    d="M8.61,22.2H6.8a.906.906,0,0,0-.906.906v5.438A.453.453,0,0,0,6.344,29H9.063a.453.453,0,0,0,.453-.453V23.109A.906.906,0,0,0,8.61,22.2Zm0,5.891H6.8V23.109H8.61Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2650"
                    data-name="Path 2650"
                    d="M4.581,19.517a.454.454,0,1,0,.347.838c2.68-1.112,9.006-4.393,11.554-11.328l.054.227a.458.458,0,1,0,.895-.195L16.99,7.147a.453.453,0,0,0-.748-.227L14.794,8.255a.453.453,0,1,0,.609.662l.247-.227C13.224,15.306,7.152,18.45,4.581,19.517Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2653"
                    data-name="Path 2653"
                    d="M24.516,24.287V21.81l.573.576a1.043,1.043,0,0,1-.124,1.451h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2654"
                    data-name="Path 2654"
                    d="M25.027,12.189l.086.393h2.455a1.03,1.03,0,0,1,.93,1.112h0v1.618a1.034,1.034,0,0,1-.932,1.111H25.111l-.086.392a10.742,10.742,0,0,1-.512,1.665V10.513A10.719,10.719,0,0,1,25.027,12.189ZM18.753,7.88q-.061.061-.117.126l-.271-1.174h0a1.859,1.859,0,0,0-3.071-.948h0l-1.45,1.334,0,0a1.844,1.844,0,0,0-.391.519,6.844,6.844,0,0,0-5.619,8.3c-.656.386-1.493.872-2.218,1.289-.426.245-.813.466-1.1.63l-.182.1a10.606,10.606,0,0,1-.355-1.252l-.086-.393H1.432A1.032,1.032,0,0,1,.5,15.306V13.7a1.033,1.033,0,0,1,.932-1.113H3.9l.086-.393a10.692,10.692,0,0,1,1.45-3.5l.218-.339-.285-.285L3.913,6.618A1.039,1.039,0,0,1,4.037,5.17L5.17,4.037h0l0,0a1.206,1.206,0,0,1,.844-.362h0a.843.843,0,0,1,.6.235L8.067,5.356l.285.285.339-.218a10.726,10.726,0,0,1,3.5-1.45l.393-.086V1.432A1.031,1.031,0,0,1,13.7.5H15.3a1.032,1.032,0,0,1,1.113.932V3.894l.393.086a10.725,10.725,0,0,1,3.5,1.45l.339.217.285-.285,1.449-1.449h0a.841.841,0,0,1,.6-.24h0a1.206,1.206,0,0,1,.847.362h0l0,0L24.968,5.17h0A1.037,1.037,0,0,1,25.1,6.616h0L23.833,7.878A2.312,2.312,0,0,0,22.2,7.2H20.388A2.313,2.313,0,0,0,18.753,7.88Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2655"
                    data-name="Path 2655"
                    d="M4.757,21.8h.01q.063,0,.125-.007a2.312,2.312,0,0,0-.413,1.319v1.172l-.449-.449h0A1.038,1.038,0,0,1,3.9,22.385h0l.605-.6A1.864,1.864,0,0,0,4.757,21.8Zm3.847-1H7.293q.876-.449,1.716-.966v1A2.307,2.307,0,0,0,8.6,20.8Zm-4.056.484-.02.132h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <h3>Serve your customers better</h3>
              <p>
                Our expert design team guarantees delivery in just a few hours!
                Our Express service delivers sales proposals in less than an
                hour and permit designs in 6 hours! Track real-time project
                progress anytime online or via the app.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="col-5 slider-box-container">
            <div className="slide-box">
              <div className="slide-icon">
                <svg
                  id="Points_Icon_1"
                  data-name="Points Icon 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28.997"
                  height="29"
                  viewBox="0 0 28.997 29"
                >
                  <path
                    id="Path_2642"
                    data-name="Path 2642"
                    d="M22.2,9H19.7V28.5h3c.4,0,.167-11.667,0-17.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2643"
                    data-name="Path 2643"
                    d="M10.7,18h2.5V28.5H10.7Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2644"
                    data-name="Path 2644"
                    d="M6.2,23l1.5-.5h1v6h-2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2645"
                    data-name="Path 2645"
                    d="M17.7,13.5l-2.5.5V28l2.5.5c.167-3.833.5-11.6.5-12S17.866,14.333,17.7,13.5Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2646"
                    data-name="Path 2646"
                    d="M22.2,8.609H20.391a.906.906,0,0,0-.906.906V28.546a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V9.516a.906.906,0,0,0-.906-.906Zm0,19.484H20.391V9.516H22.2Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2647"
                    data-name="Path 2647"
                    d="M17.672,13.141H15.859a.906.906,0,0,0-.906.906v14.5a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453v-14.5a.906.906,0,0,0-.906-.906Zm0,14.953H15.859V14.047h1.812Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2648"
                    data-name="Path 2648"
                    d="M13.141,17.672H11.328a.906.906,0,0,0-.906.906v9.969a.453.453,0,0,0,.453.453h2.719a.453.453,0,0,0,.453-.453V18.578a.906.906,0,0,0-.906-.906Zm0,10.422H11.328V18.578h1.813Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2649"
                    data-name="Path 2649"
                    d="M8.61,22.2H6.8a.906.906,0,0,0-.906.906v5.438A.453.453,0,0,0,6.344,29H9.063a.453.453,0,0,0,.453-.453V23.109A.906.906,0,0,0,8.61,22.2Zm0,5.891H6.8V23.109H8.61Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2650"
                    data-name="Path 2650"
                    d="M4.581,19.517a.454.454,0,1,0,.347.838c2.68-1.112,9.006-4.393,11.554-11.328l.054.227a.458.458,0,1,0,.895-.195L16.99,7.147a.453.453,0,0,0-.748-.227L14.794,8.255a.453.453,0,1,0,.609.662l.247-.227C13.224,15.306,7.152,18.45,4.581,19.517Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_2653"
                    data-name="Path 2653"
                    d="M24.516,24.287V21.81l.573.576a1.043,1.043,0,0,1-.124,1.451h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2654"
                    data-name="Path 2654"
                    d="M25.027,12.189l.086.393h2.455a1.03,1.03,0,0,1,.93,1.112h0v1.618a1.034,1.034,0,0,1-.932,1.111H25.111l-.086.392a10.742,10.742,0,0,1-.512,1.665V10.513A10.719,10.719,0,0,1,25.027,12.189ZM18.753,7.88q-.061.061-.117.126l-.271-1.174h0a1.859,1.859,0,0,0-3.071-.948h0l-1.45,1.334,0,0a1.844,1.844,0,0,0-.391.519,6.844,6.844,0,0,0-5.619,8.3c-.656.386-1.493.872-2.218,1.289-.426.245-.813.466-1.1.63l-.182.1a10.606,10.606,0,0,1-.355-1.252l-.086-.393H1.432A1.032,1.032,0,0,1,.5,15.306V13.7a1.033,1.033,0,0,1,.932-1.113H3.9l.086-.393a10.692,10.692,0,0,1,1.45-3.5l.218-.339-.285-.285L3.913,6.618A1.039,1.039,0,0,1,4.037,5.17L5.17,4.037h0l0,0a1.206,1.206,0,0,1,.844-.362h0a.843.843,0,0,1,.6.235L8.067,5.356l.285.285.339-.218a10.726,10.726,0,0,1,3.5-1.45l.393-.086V1.432A1.031,1.031,0,0,1,13.7.5H15.3a1.032,1.032,0,0,1,1.113.932V3.894l.393.086a10.725,10.725,0,0,1,3.5,1.45l.339.217.285-.285,1.449-1.449h0a.841.841,0,0,1,.6-.24h0a1.206,1.206,0,0,1,.847.362h0l0,0L24.968,5.17h0A1.037,1.037,0,0,1,25.1,6.616h0L23.833,7.878A2.312,2.312,0,0,0,22.2,7.2H20.388A2.313,2.313,0,0,0,18.753,7.88Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <path
                    id="Path_2655"
                    data-name="Path 2655"
                    d="M4.757,21.8h.01q.063,0,.125-.007a2.312,2.312,0,0,0-.413,1.319v1.172l-.449-.449h0A1.038,1.038,0,0,1,3.9,22.385h0l.605-.6A1.864,1.864,0,0,0,4.757,21.8Zm3.847-1H7.293q.876-.449,1.716-.966v1A2.307,2.307,0,0,0,8.6,20.8Zm-4.056.484-.02.132h0Z"
                    fill="#ffc74c"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                </svg>
              </div>
              <h3>WattMonk makes your customers happier</h3>
              <p>
                Whether you have a team of in-house designers or you are looking
                to expand by outsourcing designs, Wattmonk is your ideal solar
                partner. Starting your solar design journey is as simple as
                clicking the button below.
                <br />
                <br />
              </p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
