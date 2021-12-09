import React, { Fragment } from "react";
import "./mytable.scss";

import Table from "./Table";

const driversData = [
  {
    number: 1,
    name: "ACCELALPHA",
    team: "19",
    internships: "",
  },
  {
    number: 2,
    name: "ACCENTURE",
    team: "37",
    internships: "",
  },
  {
    number: 3,
    name: "AMDOCS",
    team: "24",
    internships: "",
  },
  {
    number: 4,
    name: "AMADEUS",
    team: "3",
    internships: "",
  },
  {
    number: 5,
    name: "AMAGI",
    team: "2",
    internships: "",
  },
  {
    number: 6,
    name: "AMAZON",
    team: "5",
    internships: "",
  },
  {
    number: 7,
    name: "AXELOR",
    team: "3",
    internships: "",
  },
  {
    number: 8,
    name: "BETSOL",
    team: "1",
    internships: "",
  },
  {
    number: 9,
    name: "BOEING",
    team: "8",
    internships: "",
  },
  {
    number: 10,
    name: "BRANE",
    team: "1",
    internships: "",
  },
  {
    number: 11,
    name: "BRILLIO",
    team: "3",
    internships: "",
  },
  {
    number: 12,
    name: "CAPGEMINI",
    team: "68",
    internships: "",
  },
  {
    number: 13,
    name: "CIMPRESS",
    team: "8",
    internships: "",
  },
  {
    number: 14,
    name: "CISCO",
    team: "2",
    internships: "",
  },
  {
    number: 15,
    name: "COGNIZANT",
    team: "136",
    internships: "",
  },
  {
    number: 16,
    name: "COMVIVA",
    team: "14",
    internships: "",
  },
  {
    number: 17,
    name: "CSG",
    team: "1",
    internships: "",
  },
  {
    number: 18,
    name: "DATACORP TRAFFIC",
    team: "3",
    internships: "",
  },
  {
    number: 20,
    name: "DELL TECHNOLOGIES",
    team: "5",
    internships: "",
  },
  {
    number: 21,
    name: "DELOITTE",
    team: "5",
    internships: "",
  },
  {
    number: 21,
    name: "ECO LABS",
    team: "8",
    internships: "",
  },
  {
    number: 22,
    name: "ELLUCIAN",
    team: "12",
    internships: "",
  },
  {
    number: 23,
    name: "EPICOR",
    team: "4",
    internships: "",
  },
  {
    number: 24,
    name: "FIDELITY",
    team: "18",
    internships: "14",
  },
  {
    number: 25,
    name: "GENPACT",
    team: "1",
    internships: "",
  },
  {
    number: 26,
    name: "HCL",
    team: "3",
    internships: "",
  },
  {
    number: 27,
    name: "IBM",
    team: "2",
    internships: "",
  },
  {
    number: 28,
    name: "INFOSYS",
    team: "23",
    internships: "",
  },
  {
    number: 29,
    name: "KANTAR AQ",
    team: "4",
    internships: "",
  },
  {
    number: 30,
    name: "L&T",
    team: "3",
    internships: "",
  },
  {
    number: 31,
    name: "MERCEDES BENZ",
    team: "6",
    internships: "",
  },
  {
    number: 32,
    name: "MICROCHIP",
    team: "5",
    internships: "",
  },
  {
    number: 33,
    name: "MICROFOCUS",
    team: "6",
    internships: "",
  },
  {
    number: 34,
    name: "MISTRAL",
    team: "8",
    internships: "",
  },
  {
    number: 35,
    name: "MUSIGMA",
    team: "31",
    internships: "",
  },
  {
    number: 36,
    name: "ONE DIRECT",
    team: "3",
    internships: "",
  },
  {
    number: 37,
    name: "OPTUM",
    team: "18",
    internships: "",
  },
  {
    number: 38,
    name: "ORACLE",
    team: "15",
    internships: "3",
  },
  {
    number: 39,
    name: "PERSISTENT",
    team: "42",
    internships: "",
  },
  {
    number: 40,
    name: "PROFINCH",
    team: "15",
    internships: "",
  },
  {
    number: 41,
    name: "PUBLICIS SAPIENT",
    team: "5",
    internships: "",
  },
  {
    number: 42,
    name: "PWC",
    team: "9",
    internships: "",
  },
  {
    number: 43,
    name: "QSPIDER",
    team: "16",
    internships: "",
  },
  {
    number: 44,
    name: "ROBERT BOSCH",
    team: "37",
    internships: "",
  },
  {
    number: 45,
    name: "ROBOSOFT",
    team: "13",
    internships: "",
  },
  {
    number: 46,
    name: "SAP",
    team: "8",
    internships: "",
  },
  {
    number: 47,
    name: "SAPIENTURY",
    team: "1",
    internships: "",
  },
  {
    number: 48,
    name: "TARGET",
    team: "3",
    internships: "",
  },
  {
    number: 49,
    name: "TCS",
    team: "45",
    internships: "",
  },
  {
    number: 50,
    name: "TEKSYSTEN",
    team: "2",
    internships: "",
  },
  {
    number: 51,
    name: "THE MATH COMPANY",
    team: "2",
    internships: "",
  },
  {
    number: 52,
    name: "TRUMINDS",
    team: "6",
    internships: "",
  },
  {
    number: 53,
    name: "SUPER 77",
    team: "",
    internships: "1",
  },
  {
    number: 54,
    name: "TARE ZAMEEN FOUNDATION ",
    team: "",
    internships: "1",
  },

  {
    number: 55,
    name: "WIPRO",
    team: "2",
    internships: "",
  },
  {
    number: 56,
    name: "WIZERGO",
    team: "2",
    internships: "",
  },

  {
    number: 57,
    name: "ZENSOR",
    team: "19",
    internships: "",
  },
];

const tracksData = [
  {
    name: "Spa-Francorchamps",
    country: "Belgium",
    length: 7.004,
    numberOfLaps: 44,
  },
  {
    name: "Circuit de Monaco",
    country: "Monaco",
    length: 3.337,
    numberOfLaps: 78,
  },
  {
    name: "Silverstone",
    country: "England",
    length: 5.891,
    numberOfLaps: 52,
  },
  {
    name: "Suzuka",
    country: "Japan",
    length: 5.807,
    numberOfLaps: 53,
  },
  {
    name: "Hockenheimring",
    country: "Germany",
    length: 4.574,
    numberOfLaps: 67,
  },
];

const MyTable = () => {
  return (
    <Fragment>
      {/* <Header title="Dynamic &amp; Responsive Table Component" /> */}
      <Table
        tableData={driversData}
        headingColumns={["S. NO", "COMPANY", "OFFERS", "INTERNSHIPS"]}
        title="PLACEMENTS 2022*"
      />
      {/* <Table
        tableData={tracksData}
        headingColumns={["Name", "Country", "Length(km)", "Number of laps"]}
        title="Top F1 tracks"
        breakOn="small"
      /> */}
    </Fragment>
  );
};

export default MyTable;
