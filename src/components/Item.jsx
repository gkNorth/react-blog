import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import GoodBtn from './GoodBtn';

const Item = props => {
  const params = useParams();
  const items = props.items.filter(val => val.permalink === params.id);
  return (
    items.map(item => {
      return (
        <div key={item.id} className="container mt-3">
          <div>
            <h1>{item.title}</h1>
            <div className="mb-4">{item.contents}</div>
            <div className="d-flex justify-content-between align-items-center">
            <GoodBtn className="btn btn-outline-success" name={item.id} />
              <Link to="/">Back to Home</Link>
            </div>
          </div>
        </div>
      )
    })
  )
}
export default Item