export const List = ({value, setValue}) => {
  const addList = (e) => {
    e.preventDefault()
    {console.log(e)}
    const safeInputCopy = [...value]
    safeInputCopy.push(e.target[0].value)
    setValue(safeInputCopy)
    // console.log(e.target[0].value)
    e.target.reset()
  }
  return (
    <>
    <form onSubmit={(e) => addList(e)}>
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




 
