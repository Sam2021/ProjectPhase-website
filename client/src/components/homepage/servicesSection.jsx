import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurSerivce } from "../../components/ourService";
import { SectionTitle } from "../../components/sectionTitle";

import Service1Img from "../../assets/illustrations/web_development_.png";
import Service2Img from "../../assets/illustrations/mobile_phone.png";
import Service3Img from "../../assets/illustrations/react.png";
import Service4Img from "../../assets/illustrations/deeplearn.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Technology Used</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurSerivce
        title="Jester Dataset"
        description="The 20BN-JESTER dataset contains a large number of classified 
        video clips of people making pre-determined hand gestures in front of a laptop camera or webcam. 
        A large number of crowd workers contributed to the dataset's development.
        It enables the creation of robust machine learning models capable of recognizing human hand gestures."
        imgUrl={Service1Img}
      />
      <OurSerivce
        title="Convolutional Neural Network(CNN)"
        description="A convolutional neural network (CNN) is a form of artificial neural network 
        that is specifically designed to process pixel data and is used in image recognition and processing."
        imgUrl={Service2Img}
        isReversed
      />
      <OurSerivce
        title="React.Js"
        description="React is a free and open-source front-end JavaScript library for building user interfaces or UI components. 
        It is maintained by Facebook and a community of individual developers and companies. 
        React can be used as a base in the development of single-page or mobile applications"
        imgUrl={Service3Img}
      />
      <OurSerivce
        title="Deep Learining"
        description="A deep neural network (DNN), or deep net for short, 
        is a neural network with a certain degree of complexity, 
        typically at least two layers. Deep nets use advanced math modeling to process data in complex ways."
        imgUrl={Service4Img}
        isReversed
      />
    </ServicesContainer>
  );
}
