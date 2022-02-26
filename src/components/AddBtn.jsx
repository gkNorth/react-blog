import { Link } from 'react-router-dom';

const AddBtn = () => {
  return (
    <Link to="/post">
      <button className="position-fixed bottom-0 end-0 btn btn-primary rounded-circle m-3">+</button>
    </Link>
  )
}
export default AddBtn