//façon destructuring: on enlève le props et on met directement les valeurs entre accolades

const Decrement = ({ counter, setCounter }) => {
  return (
    <div>
      {counter > 0 && (
        <button
          onClick={() => {
            console.log("j'ai cliqué sur le -");
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      )}
    </div>
  );
};

//pour éviter que la disparition du bouton face bouger la mise en page
//il faut soit créé une div de la meme taille que le bouton dans une
//ternaire {counter >O ? boutton : div}
//ou mettre un style: invisible

export default Decrement;
