export const List = ({value, setValue}) => {
  const addList = (e) => {
    e.preventDefault()
    {console.log(e)}
    const inputValue = e.target[0].value;
    const safeInputCopy = [...value]
    safeInputCopy.push(inputValue);
    setValue(safeInputCopy)
    // console.log(e.target[0].value)
    e.target.reset()
  }
  return (
    <>
    <form onSubmit={addList}>
        <input/>
    </form>
    <ul>
    {
      value.map((elem, id) => {
        return (
          <li key={id}>{elem}</li>
        )
      })
    }
    </ul>
    </>
  )
}




 
