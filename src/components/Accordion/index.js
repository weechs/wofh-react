import React from "react";
import Accordion from "./accordion";
import { generalData } from "./generalData";
import { dataProtectionData } from "./dataProtectionData";
import { websiteTerms } from "./websiteTerms";
import "./accordion.css";

const AccordionSection = () => {
  return (
    <div>
      <div className="accordion">
        <h1>GENERAL</h1>
        Here are some frequently asked questions from our professionals.
      </div>
      <div className="accordion">
        {generalData.map(
          ({
            title,
            content,
            content2,
            content3,
            content4,
            content5,
            linkTitle,
            link
          }) => (
            <Accordion
              title={title}
              content={content}
              content2={content2}
              content3={content3}
              content4={content4}
              content5={content5}
              linkTitle={linkTitle}
              link={link}
            />
          )
        )}
      </div>
      <div className="accordion">
        <h1>DATA PROTECTION</h1>
        We are totally committed to protecting your privacy. Any information we
        collect about you is done so in accordance with the Data Protection Act
        (1998) and the General Data Protection Regulation (GDPR) 2018. We
        collect information about you for two reasons: firstly, to provide you
        with a service and secondly, to provide you with the best possible
        service. We will never collect sensitive information about you without
        your explicit consent. The information we hold will be accurate and up
        to date. You can check the information that we hold about you by
        emailing us at info@wheelofhealth.co.uk. If you find any inaccuracies we
        will delete or correct it promptly. The personal information which we
        hold will be held securely in accordance with our Internal Security
        Policy and the Web Trader Code. If we intend to transfer your
        information outside the EEA (European Economic Area) we will always
        obtain your consent first. We don’t share your information without your
        explicit consent. We may use technology to track the patterns of
        behaviour of visitors to our website. This can include using a “cookie”
        which would be stored on your browser. You can usually modify your
        browser to prevent this happening. The information collected in this way
        can be used to identify you unless you modify your browser settings. If
        you have any questions/comments about privacy, you should contact us.
      </div>
      <div className="accordion">
        {dataProtectionData.map(
          ({
            title,
            content,
            content2,
            content3,
            content4,
            content5,
            linkTitle,
            linkTitle2,
            link,
            link2
          }) => (
            <Accordion
              title={title}
              content={content}
              content2={content2}
              content3={content3}
              content4={content4}
              content5={content5}
              linkTitle={linkTitle}
              link={link}
              linkTitle2={linkTitle2}
              link2={link2}
            />
          )
        )}
      </div>
      <div className="accordion">
        <h1>WEBSITE TERMS</h1>
        We are totally committed to protecting your privacy. Any information we
        collect about you is done so in accordance with the Data Protection Act
        (1998) and the General Data Protection Regulation (2018) . We collect
        information about you for two reasons: firstly, to provide you with a
        service and secondly, to provide you with the best possible service. We
        will never collect sensitive information about you without your explicit
        consent. The information we hold will be accurate and up to date. You
        can check the information that we hold about you by emailing us.
        <br />
        <br />
        If you find any inaccuracies we will delete or correct it promptly. The
        personal information which we hold will be held securely in accordance
        with our Internal Security Policy and the Web Trader Code. If we intend
        to transfer your information outside the EEA (European Economic Area) we
        will always obtain your consent first. We don’t share your information
        without your explicit consent. We may use technology to track the
        patterns of behaviour of visitors to our website. This can include using
        a “cookie” which would be stored on your browser. You can usually modify
        your browser to prevent this happening. The information collected in
        this way can be used to identify you unless you modify your browser
        settings. If you have any questions/comments about privacy, you should
        contact us.
        <br />
        <br />
        <span style={{ fontWeight: "600" }}>
          We want you to feel secure when using the website and associated
          services. We are committed to respecting your privacy. Your data is
          kept under secure conditions. We take appropriate steps to maintain
          the security of your data on our service. The open nature of the
          internet means that data may flow over networks without security
          measures and may be accessed and used by people other than those for
          whom the data is intended. Our intention is that this should not
          happen and we take measures to ensure that it does not.
        </span>
      </div>
      <div className="accordion">
        {websiteTerms.map(
          ({
            title,
            content,
            content2,
            content3,
            content4,
            content5,
            linkTitle,
            linkTitle2,
            link,
            link2
          }) => (
            <Accordion
              title={title}
              content={content}
              content2={content2}
              content3={content3}
              content4={content4}
              content5={content5}
              linkTitle={linkTitle}
              link={link}
              linkTitle2={linkTitle2}
              link2={link2}
            />
          )
        )}
      </div>
    </div>
  );
};

export default AccordionSection;
