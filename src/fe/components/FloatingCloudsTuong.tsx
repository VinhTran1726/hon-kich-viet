"use client";
import React from "react";
import Image from "next/image";
import "./FloatingCloudsTuong.css";

export function FloatingCloudsTuong() {
  return (
    <>
      {/* Mây nhỏ - top left */}
      <div className="floating-cloud-tuong cloud-1">
        <Image
          src="/images/QR-Tuong/may-nho.png"
          alt=""
          width={120}
          height={60}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Mây lớn - top right */}
      <div className="floating-cloud-tuong cloud-2">
        <Image
          src="/images/QR-Tuong/may-lon.png"
          alt=""
          width={180}
          height={90}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Mây nhỏ - middle left */}
      <div className="floating-cloud-tuong cloud-3">
        <Image
          src="/images/QR-Tuong/may-nho.png"
          alt=""
          width={100}
          height={50}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Mây lớn - bottom right */}
      <div className="floating-cloud-tuong cloud-4">
        <Image
          src="/images/QR-Tuong/may-lon.png"
          alt=""
          width={150}
          height={75}
          style={{ width: "auto", height: "auto" }}
        />
      </div>

      {/* Mây nhỏ - bottom left */}
      <div className="floating-cloud-tuong cloud-5">
        <Image
          src="/images/QR-Tuong/may-nho.png"
          alt=""
          width={110}
          height={55}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </>
  );
}
