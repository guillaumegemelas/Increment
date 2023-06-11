const Increment = ({ counter, setCounter }) => {
  return (
    <div>
      {counter < 10 && (
        <button
          onClick={() => {
            console.log("j'ai cliqué sur le +");
            setCounter((counter) => counter + 1);
            //équivalent à setCounter(counter +1)
          }}
        >
          +
        </button>
      )}
    </div>
  );
};

export default Increment;
