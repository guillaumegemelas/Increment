const Reset = (props) => {
  return (
    <button
      className="third"
      onClick={() => {
        console.log("j'ai cliqué sur reset");
        props.setCounter(0);
      }}
    >
      reset
    </button>
  );
};

export default Reset;
