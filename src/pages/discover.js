import React from "react";
import ClientSection from "../components/ClientSection";
import InfoSection from "../components/InfoSection";
import { ourStoryObj, ourStory2Obj } from "../components/InfoSection/Data";
import Timeline from "../components/Timeline";

export default function Discover() {
  return (
    <>
      <InfoSection {...ourStoryObj} />
      <ClientSection />
      <InfoSection {...ourStory2Obj} />
      <Timeline />
    </>
  );
}
