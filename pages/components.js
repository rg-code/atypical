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
              You don{"'"}t know what you don't know.
              <br/>
              If you are from a sector not considered a {"'"}feeder{"'"} for an MBA (a la banking, finance, etc.) but would like to pursue an MBA, your journey starts here. We provide resources, network, and empower you to bridge the gap. I know the challenges of applying for an MBA with atypical/non-traditional backgrounds. Like you, I too am confident that an MBA is the most efficient path to reach long term career goals. 
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
// import React from "react";
// // nodejs library that concatenates classes
// import classNames from "classnames";
// // react components for routing our app without refresh
// import Link from "next/link";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// // @material-ui/icons
// // core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import Parallax from "components/Parallax/Parallax.js";
// // sections for this page
// import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
// import SectionNavbars from "pages-sections/Components-Sections/SectionNavbars.js";
// import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
// import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
// import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
// import SectionTypography from "pages-sections/Components-Sections/SectionTypography.js";
// import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
// import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
// import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
// import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
// import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
// import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
//
// import styles from "styles/jss/nextjs-material-kit/pages/components.js";
//
// const useStyles = makeStyles(styles);
//
// export default function Components(props) {
//   const classes = useStyles();
//   const { ...rest } = props;
//   return (
//     <div>
//       <Header
//         brand="aTYPICAL MBA"
//         rightLinks={<HeaderLinks />}
//         fixed
//         color="transparent"
//         changeColorOnScroll={{
//           height: 400,
//           color: "white",
//         }}
//         {...rest}
//       />
//       <Parallax image="/img/nextjs_header.jpg">
//         <div className={classes.container}>
//           <GridContainer>
//             <GridItem>
//               <div className={classes.brand}>
//                 <h1 className={classes.title}>NextJS Material Kit.</h1>
//                 <h3 className={classes.subtitle}>
//                   A Badass Material Kit based on Material-UI and NextJS.
//                 </h3>
//               </div>
//             </GridItem>
//           </GridContainer>
//         </div>
//       </Parallax>
//
//       <div className={classNames(classes.main, classes.mainRaised)}>
//         <SectionBasics />
//         <SectionNavbars />
//         <SectionTabs />
//         <SectionPills />
//         <SectionNotifications />
//         <SectionTypography />
//         <SectionJavascript />
//         <SectionCarousel />
//         <SectionCompletedExamples />
//         <SectionLogin />
//         <GridItem md={12} className={classes.textCenter}>
//           <Link href="/login">
//             <a className={classes.link}>
//               <Button color="primary" size="lg" simple>
//                 View Login Page
//               </Button>
//             </a>
//           </Link>
//         </GridItem>
//         <SectionExamples />
//         <SectionDownload />
//       </div>
//       <Footer />
//     </div>
//   );
// }
