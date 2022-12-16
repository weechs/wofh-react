import React from "react";
import PartnerSection from "../components/PartnerSection";
import InfoSection from "../components/InfoSection";
import {
  partnershipObj,
  collaborationObj,
  KrysalisObj,
  CTSObj,
  DFIObj,
  SCFObj
} from "../components/InfoSection/Data";

export default function Partnership() {
  return (
    <>
      <InfoSection {...partnershipObj} />
      <PartnerSection />
      <InfoSection {...collaborationObj} />
      <InfoSection {...KrysalisObj} />
      <hr />
      <InfoSection {...CTSObj} />
      <hr />
      <InfoSection {...DFIObj} />
      <hr />
      <InfoSection {...SCFObj} />
    </>
  );
}
