const Increment = (props) => {
  return (
    <div>
      {props.counter < 10 && (
        <button
          onClick={() => {
            console.log("j'ai cliqué sur le +");
            props.setCounter(props.counter + 1);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};

export default Increment;
