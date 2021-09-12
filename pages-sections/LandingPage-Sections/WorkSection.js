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
          export default function Contact() {
            const [success, setSuccess] = useState(false);

          useEffect(() => {
            if ( window.location.search.includes('success=true') ) {
              setSuccess(true);
            }
          }, []);

          return (
            <Container maxWidth="sm">
              <h2>CONTACT</h2>
              {success && (
                  <p style={{ color: "green" }}>Thanks for your message! </p>
                )}
              <Card>
                <form
                    name="contact"
                    method="POST"
                    action="/contact/?success=true"
                    data-netlify="true"
                    >
                <input type="hidden" name="form-name" value="contact" />
                  <TextField id="standard-basic" label="name" name="name" /> <br />
                  <TextField id="standard-basic" label="email" name="email" /> <br />
                  <TextField
                    multiline
                    id="standard-multiline-static"
                    label="message"
                    name="message"
                  />
                  <br />
                  <div>
                    <Button type="submit">Send</Button>
                  </div>
                </form>
              </Card>
            </Container>
          );
        }
          // <form
          //   name="contact"
          //   action="/?success=true"
          //   method="POST"
          //   data-netlify="true"
          //   >
          //   <GridContainer>
          //     <GridItem xs={12} sm={12} md={6}>
          //       <CustomInput
          //         type="hidden"
          //         name="form-name"
          //         value="contact"
          //         labelText="Your Name"
          //         id="name"
          //         formControlProps={{
          //           fullWidth: true,
          //         }}
          //       />
          //     </GridItem>
          //     <GridItem xs={12} sm={12} md={6}>
          //       <CustomInput
          //         type="hidden"
          //         name="form-name"
          //         value="contact"
          //         labelText="Your Email"
          //         id="email"
          //         formControlProps={{
          //           fullWidth: true,
          //         }}
          //       />
          //     </GridItem>
          //     <CustomInput
          //       type="hidden"
          //       name="form-name"
          //       value="contact"
          //       labelText="Your Message"
          //       id="message"
          //       formControlProps={{
          //         fullWidth: true,
          //         className: classes.textArea,
          //       }}
          //       inputProps={{
          //         multiline: true,
          //         rows: 5,
          //       }}
          //     />
          //     <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
          //       <Button type="submit" color="warning">Send Message</Button>
          //     </GridItem>
          //   </GridContainer>
          // </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
