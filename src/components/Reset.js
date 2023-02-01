const Reset = (props) => {
  return (
    <button
      className="third"
      onClick={() => {
        console.log("j'ai cliqué sur reset");
        props.setCounter(props.counter);
      }}
    >
      reset
    </button>
  );
};

export default Reset;
