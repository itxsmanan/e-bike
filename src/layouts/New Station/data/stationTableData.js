/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Button } from "@mui/material";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        {/* <MDTypography variant="caption">{email}</MDTypography> */}
      </MDBox>
    </MDBox>
  );

  const Job = ({ name, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="button" fontWeight="medium">
        {name}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "station name", accessor: "fname", align: "left" },
      { Header: "station by type", accessor: "lname", align: "left" },
      { Header: "availability", accessor: "email", align: "center" },
      { Header: "charging costs", accessor: "number", align: "center" },
      { Header: "socket types", accessor: "subscribe", align: "center" },
      { Header: "compatible motor brands", accessor: "action", align: "center" },
      { Header: "feature", accessor: "features", align: "center" },
      { Header: "votes(yes/no)", accessor: "votes", align: "center" },
      { Header: "action", accessor: "approval", align: "center" },
    ],

    rows: [
      {
        fname: <Author image={team2} name="Station 1" email="" />,
        lname: <Job name="Type A" />,
        email: <Job description="Available" />,
        number: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            $0.25/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 1
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Tesla, BMW
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Fast Charging
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team3} name="Station 2" email="" />,
        lname: <Job name="Type B" />,
        email: <Job description="Not Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.30/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 2
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Nissan, Audi
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Wireless Charging
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team4} name="Station 3" email="" />,
        lname: <Job name="Type C" />,
        email: <Job description="Available" />,
        number: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            $0.20/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 3
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Ford, Chevrolet
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Solar Powered
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Station 4" email="" />,
        lname: <Job name="Type D" />,
        email: <Job description="Not Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.35/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 1
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Toyota, Honda
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            High Capacity
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Station 5" email="" />,
        lname: <Job name="Type E" />,
        email: <Job description="Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.28/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 2
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Hyundai, Kia
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Dual Charging
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Station 6" email="" />,
        lname: <Job name="Type F" />,
        email: <Job description="Not Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.40/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 3
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Mercedes, Porsche
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            Wind powered
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team3} name="Station 7" email="" />,
        lname: <Job name="Type G" />,
        email: <Job description="Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.22/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 3
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Mazda, Subaru
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Wind Powered
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Station 8" email="" />,
        lname: <Job name="Type H" />,
        email: <Job description="Not Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.38/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 1
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Volvo, Jaguar
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Battery Swapping
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team4} name="Station 9" email="" />,
        lname: <Job name="Type I" />,
        email: <Job description="Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.26/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 2
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            VW, Audi
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Smart Charging
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Station 10" email="" />,
        lname: <Job name="Type J" />,
        email: <Job description="Not Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.32/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 3
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Lexus, Infiniti
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Bi-Directional Charging
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Station 10" email="" />,
        lname: <Job name="Type J" />,
        email: <Job description="Not Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.32/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 3
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Lexus, Infiniti
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Bi-Directional Charging
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Station 10" email="" />,
        lname: <Job name="Type J" />,
        email: <Job description="Not Available" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            $0.32/kWh
          </MDTypography>
        ),
        subscribe: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            type 3
          </MDTypography>
        ),
        action: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Lexus, Infiniti
          </MDTypography>
        ),
        features: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            Bi-Directional Charging
          </MDTypography>
        ),
        votes: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            23/30
          </MDTypography>
        ),
        approval: (
          <Button variant="contained" color="light" fontWeight="medium">
            Approve
          </Button>
        ),
      },
    ],
  };
}
