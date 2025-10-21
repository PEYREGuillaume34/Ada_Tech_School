const calcProgressWidth = (value) => {
  let progress = 0;

  value.forEach((element) => {
    if (element.isDone) {
      progress += 1;
    }
  });
  return {
    width: (progress * 100) / value.length + "%",
    height: "20px",
    backgroundImage: `url(https://i.pinimg.com/originals/ed/35/f8/ed35f861be81be2548e514085fb19385.gif)`,
  };
};

export const ProgressBar = ({ value }) => {
  const progressWidth = calcProgressWidth(value);
  return (
    <div>
      <h2>Progress bar : </h2>
      <div style={{ background: "#eee", height: "20px" }}>
        <div style={progressWidth}></div>
      </div>
    </div>
  );
};
