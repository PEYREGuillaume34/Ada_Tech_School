

export const Button = ({ children, onClick = "..." }) => (
  <button onClick={onClick}>
    {children} {/* C'est ici que le contenu est injecté !*/}
  </button>
);