import Image from "next/image";
import Link from "next/link";
import React from "react";

function Success() {
  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Link href="/">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="Logo"
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items">
          <Image
            src="/assets/gifs/success.gif"
            width={300}
            height={300}
            alt="success"
          />
        </section>
        <h2 className="header mb-6 max-w-[600px] text-center">
          your <span className="text-green-500">appointment request</span> has
          been successfully submitted
        </h2>
        <p>W3ll be in touch shotry to cimcir </p>
      </div>
    </div>
  );
}

export default Success;
