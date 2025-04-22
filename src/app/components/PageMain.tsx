// pages/PageMain.tsx
"use client";

import React from "react";
import ProgramSection from "./ProgramSection";

const PageMain: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-6">
      <ProgramSection title="Under Graduate Online Degree Programs" category="undergraduate" />
      <ProgramSection title="Post Graduate Online Degree Programs" category="postgraduate" />
      <ProgramSection title="Certificate Program (Online)" category="certificate" />
    </main>
  );
};

export default PageMain;
