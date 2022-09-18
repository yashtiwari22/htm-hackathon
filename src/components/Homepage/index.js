import React, { useState, useEffect } from "react";
import "./style.css";
import video from "./video/pexels-mikhail-nilov-6981411.mp4";
import flower from "../Images/Flower.png";
import {Link} from "react-scroll"
function Index() {
  const [countrydata, setCountryData] = useState([]);
  const [confirmed, setConfirmed] = useState([]);
  const [rescues, setRescues] = useState([]);
  const [volunteer, setVolunteer] = useState([]);

  const country_name_element = document.querySelector(".country .name");
  const total_cases_element = document.querySelector(".total-cases .value");
  const new_cases_element = document.querySelector(".total-cases .new-value");
  const rescuses_element = document.querySelector(".rescuses .value");
  const new_rescuses_element = document.querySelector(".rescuses .new-value");
  const volunteers_element = document.querySelector(".volunteers .value");
  const new_volunteers_element = document.querySelector(
    ".volunteers .new-value"
  );

  const ctx = document.getElementById("axes_line_chart");

  // APP VARIABLES
  let app_data = [],
    cases_list = [],
    rescuses_list = [],
    volunteers_list = [],
    volunteers = [],
    formatedDates = [];

  // GET USERS COUNTRY CODE
  const fetchcountryData = () => {
    fetch(
      "https://api.ipgeolocation.io/ipgeo?apiKey=14c7928d2aef416287e034ee91cd360d"
    )
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  };

  useEffect(() => {
    fetchcountryData();
  }, []);

  useEffect(() => {
    console.log(countrydata);
    let country_code = countrydata?.country_code2;
    let user_country;
    country_list.forEach((country) => {
      if (country?.code == country_code) {
        user_country = country?.name;
      }
    });
    console.log(user_country);
    fetchData(user_country);
  }, [countrydata]);
  let dates = [];

  function fetchData(country) {
    let user_country = country;
    //   country_name_element.innerHTML = "Loading...";
    cases_list = [];
    rescuses_list = [];
    volunteers_list = [];
    console.log(user_country);
    formatedDates = [];
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const api_fetch = async (country) => {
      await fetch(
        "https://api.covid19api.com/total/country/" +
          country +
          "/status/confirmed",
        requestOptions
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            console.log(data)
        //   setConfirmed(data);
        data?.forEach((entry) => {
            dates.push(entry.Date);
            cases_list.push(entry.Cases);
          });
        });

      await fetch(
        "https://api.covid19api.com/total/country/" +
          country +
          "/status/recovered",
        requestOptions
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
        //   setRescues(data);
        data?.forEach((entry) => {
            rescuses_list.push(entry.Cases);
          });
        });

      await fetch(
        "https://api.covid19api.com/total/country/" +
          country +
          "/status/deaths",
        requestOptions
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setVolunteer(data);
          data?.forEach((entry) => {
            volunteers_list.push(entry.Cases);
          });
        });

      updateUI(country);
    };

    api_fetch(country);
    
    console.log(cases_list);
    
   
  }

  function updateUI(country) {
    updateStats(country);
    // axesLinearChart();
  }

  function updateStats(user_country) {
    const total_cases = cases_list[cases_list.length - 1];
    const new_confirmed_cases = total_cases - cases_list[cases_list.length - 2];

    const total_rescuses = rescuses_list[rescuses_list.length - 1];
    const new_rescuses_cases =
      total_rescuses - rescuses_list[rescuses_list.length - 2];

    const total_volunteers = volunteers_list[volunteers_list.length - 1];
    const new_volunteers_cases =
      total_volunteers - volunteers_list[volunteers_list.length - 2];

    country_name_element.innerHTML = user_country;
    total_cases_element.innerHTML = total_cases;
    new_cases_element.innerHTML = `+${new_confirmed_cases}`;
    rescuses_element.innerHTML = total_rescuses;
    new_rescuses_element.innerHTML = `+${new_rescuses_cases}`;
    volunteers_element.innerHTML = total_volunteers;
    new_volunteers_element.innerHTML = `+${new_volunteers_cases}`;

    dates.forEach((date) => {
      formatedDates.push(formatDate(date));
    });
  }

//   let my_chart;
//   function axesLinearChart() {
//     if (my_chart) {
//       my_chart.destroy();
//     }

//     my_chart = new Chart(ctx, {
//       type: "line",
//       data: {
//         datasets: [
//           {
//             label: "Cases",
//             data: cases_list,
//             fill: false,
//             borderColor: "#FFF",
//             backgroundColor: "#FFF",
//             borderWidth: 1,
//           },
//           {
//             label: "Rescuses",
//             data: rescuses_list,
//             fill: false,
//             borderColor: "#009688",
//             backgroundColor: "#009688",
//             borderWidth: 1,
//           },
//           {
//             label: "Volunteers",
//             data: volunteers_list,
//             fill: false,
//             borderColor: "#f44336",
//             backgroundColor: "#f44336",
//             borderWidth: 1,
//           },
//         ],
//         labels: formatedDates,
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//       },
//     });
//   }

  const monthsNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function formatDate(dateString) {
    let date = new Date(dateString);

    return `${date.getDate()} ${monthsNames[date.getMonth()]}`;
  }
  let country_list = [
    { name: "USA", code: "US" },
    { name: "Spain", code: "ES" },
    { name: "Italy", code: "IT" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" },
    { name: "UK", code: "GB" },
    { name: "Turkey", code: "TR" },
    { name: "Iran", code: "IR" },
    { name: "Russia", code: "RU" },
    { name: "Belgium", code: "BE" },
    { name: "Brazil", code: "BR" },
    { name: "Canada", code: "CA" },
    { name: "Netherlands", code: "NL" },
    { name: "Switzerland", code: "CH" },
    { name: "Portugal", code: "PT" },
    { name: "India", code: "IN" },
    { name: "Ireland", code: "IE" },
    { name: "Austria", code: "AT" },
    { name: "Peru", code: "PE" },
    { name: "Sweden", code: "SE" },
    { name: "Japan", code: "JP" },
    { name: "S. Korea", code: "KR" },
    { name: "Chile", code: "CL" },
    { name: "Saudi Arabia", code: "SA" },
    { name: "Poland", code: "PL" },
    { name: "Ecuador", code: "EC" },
    { name: "Romania", code: "RO" },
    { name: "Pakistan", code: "PK" },
    { name: "Mexico", code: "MX" },
    { name: "Denmark", code: "DK" },
    { name: "Norway", code: "NO" },
    { name: "UAE", code: "AE" },
    { name: "Czechia", code: "CZ" },
    { name: "Australia", code: "AU" },
    { name: "Singapore", code: "SG" },
    { name: "Indonesia", code: "ID" },
    { name: "Serbia", code: "RS" },
    { name: "Philippines", code: "PH" },
    { name: "Ukraine", code: "UA" },
    { name: "Qatar", code: "QA" },
    { name: "Malaysia", code: "MY" },
    { name: "Belarus", code: "BY" },
    { name: "Dominican Republic", code: "DO" },
    { name: "Panama", code: "PA" },
    { name: "Finland", code: "FI" },
    { name: "Colombia", code: "CO" },
    { name: "Luxembourg", code: "LU" },
    { name: "South Africa", code: "ZA" },
    { name: "Egypt", code: "EG" },
    { name: "Argentina", code: "AR" },
    { name: "Morocco", code: "MA" },
    { name: "Thailand", code: "TH" },
    { name: "Algeria", code: "DZ" },
    { name: "Moldova", code: "MD" },
    { name: "Bangladesh", code: "BD" },
    { name: "Greece", code: "GR" },
    { name: "Hungary", code: "HU" },
    { name: "Kuwait", code: "KW" },
    { name: "Bahrain", code: "BH" },
    { name: "Croatia", code: "HR" },
    { name: "Iceland", code: "IS" },
    { name: "Kazakhstan", code: "KZ" },
    { name: "Uzbekistan", code: "UZ" },
    { name: "Estonia", code: "EE" },
    { name: "Iraq", code: "IQ" },
    { name: "New Zealand", code: "NZ" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Slovenia", code: "SI" },
    { name: "Lithuania", code: "LT" },
    { name: "Armenia", code: "AM" },
    { name: "Bosnia and Herzegovina", code: "BA" },
    { name: "Oman", code: "OM" },
    { name: "North Macedonia", code: "MK" },
    { name: "Slovakia", code: "SK" },
    { name: "Cuba", code: "CU" },
    { name: "Hong Kong", code: "HK" },
    { name: "Cameroon", code: "CM" },
    { name: "Afghanistan", code: "AF" },
    { name: "Bulgaria", code: "BG" },
    { name: "Tunisia", code: "TN" },
    { name: "Ghana", code: "GH" },
    { name: "Ivory Coast", code: "CI" },
    { name: "Cyprus", code: "CY" },
    { name: "Djibouti", code: "DJ" },
    { name: "Latvia", code: "LV" },
    { name: "Andorra", code: "AD" },
    { name: "Lebanon", code: "LB" },
    { name: "Costa Rica", code: "CR" },
    { name: "Niger", code: "NE" },
    { name: "Burkina Faso", code: "BF" },
    { name: "Albania", code: "AL" },
    { name: "Kyrgyzstan", code: "KG" },
    { name: "Nigeria", code: "NG" },
    { name: "Bolivia", code: "BO" },
    { name: "Guinea", code: "GN" },
    { name: "Uruguay", code: "UY" },
    { name: "Honduras", code: "HN" },
    { name: "San Marino", code: "SM" },
    { name: "Palestine", code: "PS" },
    { name: "Malta", code: "MT" },
    { name: "Taiwan", code: "TW" },
    { name: "Jordan", code: "JO" },
    { name: "Réunion", code: "RE" },
    { name: "Georgia", code: "GE" },
    { name: "Senegal", code: "SN" },
    { name: "Mauritius", code: "MU" },
    { name: "DRC", code: "CD" },
    { name: "Montenegro", code: "ME" },
    { name: "Isle of Man", code: "IM" },
    { name: "Sri Lanka", code: "LK" },
    { name: "Mayotte", code: "YT" },
    { name: "Kenya", code: "KE" },
    { name: "Vietnam", code: "VN" },
    { name: "Guatemala", code: "GT" },
    { name: "Venezuela", code: "VE" },
    { name: "Mali", code: "ML" },
    { name: "Paraguay", code: "PY" },
    { name: "El Salvador", code: "SV" },
    { name: "Jamaica", code: "JM" },
    { name: "Tanzania", code: "TZ" },
    { name: "Martinique", code: "MQ" },
    { name: "Guadeloupe", code: "GP" },
    { name: "Rwanda", code: "RW" },
    { name: "Congo", code: "CG" },
    { name: "Brunei", code: "BN" },
    { name: "Somalia", code: "SO" },
    { name: "Gibraltar", code: "GI" },
    { name: "Cambodia", code: "KH" },
    { name: "Madagascar", code: "MG" },
    { name: "Trinidad and Tobago", code: "TT" },
    { name: "Gabon", code: "GA" },
    { name: "Myanmar", code: "MM" },
    { name: "Ethiopia", code: "ET" },
    { name: "Aruba", code: "AW" },
    { name: "French Guiana", code: "GF" },
    { name: "Monaco", code: "MC" },
    { name: "Bermuda", code: "BM" },
    { name: "Togo", code: "TG" },
    { name: "Liechtenstein", code: "LI" },
    { name: "Equatorial Guinea", code: "GQ" },
    { name: "Liberia", code: "LR" },
    { name: "Barbados", code: "BB" },
    { name: "Sudan", code: "SD" },
    { name: "Guyana", code: "GY" },
    { name: "Zambia", code: "ZM" },
    { name: "Cabo Verde", code: "CV" },
    { name: "Cayman Islands", code: "KY" },
    { name: "Bahamas", code: "BS" },
    { name: "French Polynesia", code: "PF" },
    { name: "Uganda", code: "UG" },
    { name: "Maldives", code: "MV" },
    { name: "Libya", code: "LY" },
    { name: "Guinea-Bissau", code: "GW" },
    { name: "Macao", code: "MO" },
    { name: "Haiti", code: "HT" },
    { name: "Syria", code: "SY" },
    { name: "Eritrea", code: "ER" },
    { name: "Mozambique", code: "MZ" },
    { name: "Saint Martin", code: "MF" },
    { name: "Benin", code: "BJ" },
    { name: "Chad", code: "TD" },
    { name: "Mongolia", code: "MN" },
    { name: "Nepal", code: "NP" },
    { name: "Sierra Leone", code: "SL" },
    { name: "Zimbabwe", code: "ZW" },
    { name: "Angola", code: "AO" },
    { name: "Antigua and Barbuda", code: "AG" },
    { name: "Eswatini", code: "SZ" },
    { name: "Botswana", code: "BW" },
    { name: "Timor-Leste", code: "TL" },
    { name: "Belize", code: "BZ" },
    { name: "New Caledonia", code: "NC" },
    { name: "Malawi", code: "MW" },
    { name: "Fiji", code: "FJ" },
    { name: "Dominica", code: "DM" },
    { name: "Namibia", code: "NA" },
    { name: "Saint Lucia", code: "LC" },
    { name: "Grenada", code: "GD" },
    { name: "Saint Kitts and Nevis", code: "KN" },
    { name: "CAR", code: "CF" },
    { name: "St. Vincent Grenadines", code: "VC" },
    { name: "Turks and Caicos", code: "TC" },
    { name: "Falkland Islands", code: "FK" },
    { name: "Greenland", code: "GL" },
    { name: "Montserrat", code: "MS" },
    { name: "Seychelles", code: "SC" },
    { name: "Suriname", code: "SR" },
    { name: "Nicaragua", code: "NI" },
    { name: "Gambia", code: "GM" },
    { name: "Vatican City", code: "VA" },
    { name: "Mauritania", code: "MR" },
    { name: "Papua New Guinea", code: "PG" },
    { name: "St. Barth", code: "BL" },
    { name: "Burundi", code: "BI" },
    { name: "Bhutan", code: "BT" },
    { name: "Caribbean Netherlands", code: "BQ" },
    { name: "British Virgin Islands", code: "VG" },
    { name: "Sao Tome and Principe", code: "ST" },
    { name: "South Sudan", code: "SD" },
    { name: "Anguilla", code: "AI" },
    { name: "Saint Pierre Miquelon", code: "PM" },
    { name: "Yemen", code: "YE" },
    { name: "China", code: "CN" },
  ];

  const search_country_element = document.querySelector(".search-country");
  const country_list_element = document.getElementsByClassName(".country-list");
  const chang_country_btn = document.querySelector(".change-country");
  const close_list_btn = document.querySelector(".close");
  const input = document.getElementById("search-input");





  function resetCountryList() {
    country_list.forEach((country) => {
      document.getElementById(country.name).classList.remove("hide");
    });
  }

  return (
    <div id="home">
      <header>
        <a href="#" className="logo">
          <i className="fas fa-seedling"></i>Hack Environment
        </a>
        <nav className="navbar">
          <ul>
            <li >
              <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="intentions" spy={true} smooth={true} offset={-100} duration={500}>Our Intention</Link>
            </li>
            <li>
              <Link to="issues" spy={true} smooth={true} offset={-100} duration={500}>Issues</Link>
            </li>
            <li>
              <Link to="blogs-part" spy={true} smooth={true} offset={-100} duration={500}>Blogs</Link>
            </li>
            <li className="button">
              <Link to="connect" spy={true} smooth={true} offset={-100} duration={500}>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="fas fa-bars"></div>
      </header>
      <section className="home">
        <video src={video} muted autoPlay loop></video>
        <div className="content active">
          <h1>TOGETHER WE CAN</h1>
          <h2>Heal The Earth</h2>
          <a href="#">
            <button className="btn">Contact Us</button>
          </a>
        </div>
      </section>
      <section className="about" id="intentions">
        <div className="row">
          <div className="image">
            <img src={flower} alt="" />
          </div>
          <div className="hearusHeading">
            <div className="hearusSubHeading">
              <div className="line" />
              <h3>Solution</h3>
            </div>
            <h1 className="heading">HEAR US OUT</h1>
            <p className="content">
              We’re here to build a culture that is both rich in community and
              wise in its approach to the environment. This culture is not drawn
              on geographical boundaries nor is it mediated through political
              lines, but instead is directed by the actions of our Ecological
              Servants; an aspiring group of men, and women driven by their
              concern for the planet.
            </p>
            <p className="content">
              This concern has led us to turn our convictions into action
              through a variety of programs, that range from animal advocacy to
              environmental justice and education, not to mention our litter
              clean-up campaigns across the globe. We care deeply about the
              earth and even more-so for her many inhabitants, especially you.
              It is our goal to live in harmony with the world around us, as we
              take steps to conserve our natural assets and to protect the
              environment. It is in these steps that we create the change that
              fuels the future. This change starts here in our community. The
              change begins here with you.
            </p>
          </div>
        </div>
        <div className="stats">
          <div className="latest-report">
            <div className="country">
              <div className="name">Loading...</div>
              <div className="change-country">change</div>
              {/* <div className="search-country hide">
                <div className="search-box">
                  <input
                    type="text"
                    id="search-input"
                    placeholder="Search Country..."
                    onChange={(e)=>{
                       setCountryName()
                    }}
                  />
                  <img className="close" src={close} alt="close" />
                </div>
                <div className="country-list"></div>
              </div> */}
            </div>
            <div className="total-cases">
              <div className="title">cases</div>
              <div className="value">0</div>
              <div className="new-value">+0</div>
            </div>
            <div className="rescuses">
              <div className="title">Rescuses</div>
              <div className="value">0</div>
              <div className="new-value">+0</div>
            </div>
            <div className="volunteers">
              <div className="title">Volunteers</div>
              <div className="value">0</div>
              <div className="new-value">+0</div>
            </div>
          </div>
          {/* <div className="chart">
            <canvas id="axes-line-chart"></canvas>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Index;
