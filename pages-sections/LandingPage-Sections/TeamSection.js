import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team:</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                <img
                  src="/img/faces/avatar.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Karishma Sewaramani, <small>MBBS, MD</small>
                <br/>
                <small className={classes.smallTitle}>Radiation Oncologist</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Radiation Oncologist enroute to an MBA. Budding entrepeneur
                trying to make oncology care more equitable. More details
                <a href="#pablo">here</a>
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  href=""
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-redit"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  href=""
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  href=""
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={4} className={classes.itemGrid}>
                <img
                  src="/img/faces/you.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                You??
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Please get in touch if you'd like to help out.
                </p>
              </CardBody>
              </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
