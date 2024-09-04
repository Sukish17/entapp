const Box = props => {
  const {className, message} = props
  return (
    <div className={`box ${className}`}>
      <p className='box-title'>{text}</p>
    </div>
  )
}

const element = (
  <div className='bg1'>
    <h1>Boxes</h1>
    <div className='boxer-container'>
      <Box className='cg1' text='Small' />
      <Box className='cg2' text='Medium' />
      <Box className='cg3' text='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
