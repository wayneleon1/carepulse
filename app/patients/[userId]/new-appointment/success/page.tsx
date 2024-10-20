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
            alt="logo"
            className="h-10 w-fit"
          />
        </Link>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            width={300}
            height={300}
            alt="success"
          />

          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&#39;ll be in touch shortly to confrim </p>
        </section>
        <section className="request-details">
          <p>Requested appointment detaits:</p>
          <div className="flex items-center gap-3">{/* <Image /> */}</div>
        </section>
      </div>
    </div>
  );
}

export default Success;
