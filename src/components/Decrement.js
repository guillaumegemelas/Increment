const Decrement = (props) => {
  return (
    <button
      className={props.counter <= 0 && "min"}
      onClick={() => {
        console.log("j'ai cliqué sur le -");
        props.setCounter(props.counter - 1);
      }}
    >
      -
    </button>
  );
};

export default Decrement;
