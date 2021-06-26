import React, { useState, useEffect } from "react";
import Menu from "../Component/Menu";
import Animation from "../Component/Animation";
import Item from "../Component/Item";

export default function InitialPage() {
  const [isName, setIsName] = useState(false);

  useEffect(() => {
    setIsName(true);
  });

  return (
    <>
      <Menu isName={isName} setIsName={setIsName} />
      <Animation />
      <Item />
    </>
  );
}
