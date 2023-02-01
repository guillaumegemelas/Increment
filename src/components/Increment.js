const Increment = (props) => {
  return (
    <button
      className="first"
      onClick={() => {
        console.log("j'ai cliqué sur le +");
        props.setCounter(props.counter + 1);
      }}
    >
      +
    </button>
  );
};

export default Increment;
