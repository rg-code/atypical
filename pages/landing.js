import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import BlurOnIcon from '@material-ui/icons/BlurOn';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PolicyIcon from '@material-ui/icons/Policy';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="aTYPICAL MBA"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}> a<u>TYPICAL</u> MBA.</h1>
              <h4>
              <Warning>
              You don{"'"}t know what you don't know.
              </Warning>
              </h4>
              <br/>
              I have first hand experience of being informed that my profile was atypical/non-traditional for an MBA and yet I am certain MBA is the shortest path to reach my career goals.
              <br/>
              If you are from a sector not typically considered {"'"}feeder{"'"} for an MBA (a la banking, finance, etc) and want to pursue an MBA your journey starts with us. We provide resources, network, and empower you to bridge the gap.
              </h4>
              <br />
              <Button
                color="warning"
                size="lg"
                href="https://docs.google.com/forms/d/1PNZptM2VCU8qd-POOMVP2SZdn_N3iPlhzG4Qskq-xYA/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope" />
                Get in touch
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
