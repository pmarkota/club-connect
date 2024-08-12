"use client";

import { useEffect } from "react";

export default function ClientLogger({ data }) {
  useEffect(() => {
    console.log("Data fetched:", data);
  }, [data]);

  return null;
}
