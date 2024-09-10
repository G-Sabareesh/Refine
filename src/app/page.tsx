"use client";

import { Suspense } from "react";

import "../../style/global.css";

import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { Button } from "@components/ui/button";

export default function IndexPage() {
  return (
    <Suspense>
      {/* <Button>skljld</Button> */}
      <Authenticated key="home-page">
        <NavigateToResource />
      </Authenticated>
    </Suspense>
  );
}
