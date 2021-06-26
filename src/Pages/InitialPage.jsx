import React, { useState, useEffect } from "react";
import Menu from "../Component/Menu";
import Animation from "../Component/Animation";
import Item from "../Component/Item";

export default function InitialPage() {
  const [isName, setIsName] = useState(false);

  useEffect(() => {
    setIsName(true);
  });
<<<<<<< HEAD

=======
>>>>>>> e44948eec1e6d62d86910e9cfedf644765ee4eaa
  return (
    <>
      <Menu isName={isName} setIsName={setIsName} />
      <Animation />
      <Item />
    </>
  );
}
