

export const Button = ({ children, toto = "..." }) => (
  <button onClick={toto}>
    {children} {/* C'est ici que le contenu est injecté !*/}
  </button>
);