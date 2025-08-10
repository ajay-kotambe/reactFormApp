import { useRef } from "react";

export default function UncontrolledComps() {
  const nameRef = useRef();

  const showName = () => {
    alert(nameRef.current.value); // read directly from the cup
  };

  return (
    <div>
      <input type="text" ref={nameRef} />
      <button onClick={showName}>Show Name</button>
    </div>
  );
}
