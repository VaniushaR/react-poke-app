
const Rainbow = (WrappedComponent) => {

  return () => {
    const colours = ['red', 'pink', 'blue', 'gray', 'purple', 'green', 'orange', 'yellow', 'lime', 'fucsia', 'teal', 'aqua', 'navy', 'olive', 'maroon', 'silver' ]
    const randomColor = colours[Math.floor(Math.random() * 16)]
    const className = randomColor + '-text'

    return(props) => {
      return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
       ) }
  }
}

export default Rainbow