import { useParams } from "react-router-dom"

const Item = props => {
  const params = useParams();
  const items = props.items.filter(val => val.permalink === params.id);
  return (
    items.map(item => {
      return (
        <div key={item.id} className="container mt-3">
          <div>
            <h1>{item.title}</h1>
            <div>{item.contents}</div>
          </div>
        </div>
      )
    })
  )
}
export default Item