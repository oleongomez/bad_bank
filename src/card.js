const Card = (props) => {
    const classes = () => {
      const bg = props.bgcolor ? "bg-" + props.bgcolor : " ";
      const txt = props.txtcolor ? "text-" + props.txtcolor : " ";
      return "card mb-3 " + bg + txt;
    };
    return (
      <div className={classes()} style={{ maxWidth: "18rem" }}>
        <div className="card">
          <h5 className="card-header bg-primary text-light">{props.header}</h5>
          <div className="card-body">
            {props.title && <h5 className="card-title">{props.title}</h5>}
            {props.text && <p className="card-text">{props.text}</p>}
            {props.body}
            {props.status && <div id="createStatus">{props.status}</div>}
          </div>
        </div>
      </div>
    );
  };
  export default Card;