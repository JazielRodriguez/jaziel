import Head from "next/head";
import React from "react";
import { CustomHeadProps } from "@/types";
const CustomHead: React.FC<CustomHeadProps> = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
};
export default CustomHead