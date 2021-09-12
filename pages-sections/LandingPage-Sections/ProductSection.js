import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Here{"'"}s how</h2>
          <h5 className={classes.description}>
            aTYPICAL MBA is a not-for-profit resource with the sole purpose of helping you - MBA aspirant with an atypical/non-traditional profile land your dream MBA admit. We will help you identify your resume twin, establish a network, and most  importantly, mapping your career vision.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Resume Twin"
              description="We identify and pair you with a current MBA student or alumni with a similar background, profile, and career aspirations as you - atypical MBA applicant."
              icon={Policy}
              iconColor="info" //find icon
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Network"
              description="Access to current MBA students and alumni within your field of interest. Or just connect and get to know people that overcame same intertia as you - atypical MBA applicant."
              icon={Chat}
              iconColor="success" //find icon
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Career Vision"
              description="Your MBA candidature is as good as your career vision aka how you and why you need an MBA. We help you refine your career vision - atypical MBA applicant."
              icon={VerifiedUser} //find icon
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
