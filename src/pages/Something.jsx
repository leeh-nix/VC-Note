import React from "react";
import { useParams } from "react-router-dom";

export default function Something() {
  const { slug } = useParams();
  return <div>This is a {slug}</div>;
}
