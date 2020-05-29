import React, { useState } from "react";

const Pa = () => {
  const [H, G] = useState("");
  const [p, p2] = useState({ c: [{ num: 1 }, { num: 1 }, { num: 1 }] });
  return <div>{p.c.map(n => n.num)}</div>;
};

export default Pa;
