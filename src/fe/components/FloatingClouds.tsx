"use client";
import React from "react";
import Image from "next/image";
import "./FloatingClouds.css";

export function FloatingClouds() {
  return (
    <>
      {/* Small cloud - top left */}
      <div className="floating-cloud cloud-1">
        <Image
          src="/images/cloud-small.png"
          alt=""
          width={120}
          height={60}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Large cloud - top right */}
      <div className="floating-cloud cloud-2">
        <Image
          src="/images/cloud-large.png"
          alt=""
          width={180}
          height={90}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Small cloud - middle left */}
      <div className="floating-cloud cloud-3">
        <Image
          src="/images/cloud-small.png"
          alt=""
          width={100}
          height={50}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Large cloud - bottom right */}
      <div className="floating-cloud cloud-4">
        <Image
          src="/images/cloud-large.png"
          alt=""
          width={150}
          height={75}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Small cloud - bottom left */}
      <div className="floating-cloud cloud-5">
        <Image
          src="/images/cloud-small.png"
          alt=""
          width={110}
          height={55}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </>
  );
}
