/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

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
      { Header: "first name", accessor: "fname", align: "left" },
      { Header: "last name", accessor: "lname", align: "left" },
      { Header: "email", accessor: "email", align: "center" },
      { Header: "number", accessor: "number", align: "center" },
      { Header: "subscribe", accessor: "subscribe", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        fname: <Author image={team2} name="John" email="" />,
        lname: <Job name="Michael" />,
        email: <Job description="john@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9109202830
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="yes" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team3} name="Alice" email="" />,
        lname: <Job name="Smith" />,
        email: <Job description="alice@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9123456789
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team4} name="Robert" email="" />,
        lname: <Job name="Johnson" />,
        email: <Job description="robert@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9345678901
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="yes" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team3} name="Emma" email="" />,
        lname: <Job name="Williams" />,
        email: <Job description="emma@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9456789012
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="yes" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team4} name="Olivia" email="" />,
        lname: <Job name="Brown" />,
        email: <Job description="olivia@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9567890123
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Liam" email="" />,
        lname: <Job name="Davis" />,
        email: <Job description="liam@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9678901234
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="yes" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team3} name="Sophia" email="" />,
        lname: <Job name="Martinez" />,
        email: <Job description="sophia@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9789012345
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="yes" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team4} name="James" email="" />,
        lname: <Job name="Garcia" />,
        email: <Job description="james@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9890123456
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team2} name="Isabella" email="" />,
        lname: <Job name="Wilson" />,
        email: <Job description="isabella@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9901234567
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="yes" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team3} name="Henry" email="" />,
        lname: <Job name="Lopez" />,
        email: <Job description="henry@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9012345678
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team3} name="Henry" email="" />,
        lname: <Job name="Lopez" />,
        email: <Job description="henry@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9012345678
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
      {
        fname: <Author image={team4} name="John" email="" />,
        lname: <Job name="wick" />,
        email: <Job description="henry@creative-tim.com" />,
        number: (
          <MDTypography component="p" href="#" variant="caption" color="text" fontWeight="medium">
            9012345678
          </MDTypography>
        ),
        subscribe: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="no" color="error" variant="gradient" size="sm" />
          </MDBox>
        ),
        action: (
          <Button variant="contained" color="light" fontWeight="medium">
            View User
          </Button>
        ),
      },
    ],
  };
}
