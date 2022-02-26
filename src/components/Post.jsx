const Post = () => {
  return (
    <form action="" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Title" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput2" className="form-label">Permalink</label>
        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Permalink" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Contents</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="15"></textarea>
      </div>
      <div className="text-center">
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
  )
}
export default Post