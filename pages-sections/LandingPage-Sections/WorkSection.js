import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import BlurOnIcon from '@material-ui/icons/BlurOn';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PolicyIcon from '@material-ui/icons/Policy';
import ForumIcon from '@material-ui/icons/Forum';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Need Help? Would like to know more?</h2>
          <form name="contact" action="/?success=true" method="POST" data-netlify="true">
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type="hidden"
                  name="form-name"
                  value="contact"
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  type="hidden"
                  name="form-name"
                  value="contact"
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                type="hidden"
                name="form-name"
                value="contact"
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
                <Button type="submit" color="warning">Send Message</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
