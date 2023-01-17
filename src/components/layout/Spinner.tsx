
const spinner = require ('./assets/spinner.gif')


const Spinner = () => {
  return (
    <div className="spinner">
      <img
        width={500}
        className="spinner__img"
        src={spinner}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner