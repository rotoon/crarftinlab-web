import Link from "next/link";
import React from "react";

function GogreenPage() {
  return (
    <div>
      <h1 className="bg-green-500">Gogreenpage</h1>
      <Link href="/" className="underline bg-green-500">
        Go to Home
      </Link>
    </div>
  );
}

export default GogreenPage;
