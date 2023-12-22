/* eslint-disable @next/next/no-img-element */

export default function Project(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt={props.nameImg} />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <div>
          <a
            href={props.site}
            className="btn btn-outline-primary"
            target="_blank"
          >
            Site
          </a>
          <a
            href={props.git}
            className="btn btn-outline-primary mx-3"
            target="_blank"
          >
            Repositório
          </a>
        </div>
      </div>
    </div>
  );
}
