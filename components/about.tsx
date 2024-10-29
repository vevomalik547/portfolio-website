"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    After completing my studies in <span className="font-medium">Software Engineering</span>, I have accumulated over <span className="font-medium">3 years of experience</span> in the field of web and mobile application development. My journey has equipped me with hands-on skills in <span className="font-medium">full-stack development</span>, and I am particularly proficient in database, server, and network maintenance. <span className="italic">My favorite part of programming</span> is designing solutions that are efficient and user-friendly, and I <span className="underline">enjoy</span> the collaborative process of bringing projects to life.
</p>

<p className="mb-3">
    My core stack includes <span className="font-medium">React, React Native, Node.js, and Laravel</span>. I am also familiar with modern frameworks and libraries and am always eager to learn new technologies. 
</p>

<p>
    <span className="italic">Outside of coding</span>, I enjoy staying active and trying new hobbies. I spend my downtime playing video games, exploring new tech, and expanding my knowledge in <span className="font-medium">philosophy and tech innovation</span>. I am also working on developing my skills in <span className="font-medium">UI/UX design</span> to enhance the user experience in the applications I build.
</p>

    </motion.section>
  );
}
