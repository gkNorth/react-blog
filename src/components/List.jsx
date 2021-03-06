import { Link } from 'react-router-dom';

const List = props => {
  return (
    <div className='row container m-auto'>
      {
        props.items.map(item => {
          return (
            <div className="col-6" key={item.id}>
              <div className="card mb-2 mt-2">
                <div className="card-body">
                  <h2 className="card-title h5 mb-3">{item.title}</h2>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link className="btn btn-primary" to={`/${item.permalink}`}>Detail</Link>
                    <p className="text-secondary mb-0">{item.updated_at}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
export default List