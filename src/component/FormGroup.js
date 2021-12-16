const FormGroup = (props) => {
  return (
    <div className="form-group">
      <label>{props.name} : </label>
      {props.error ? <span>{props.error}</span> : null}
      <input type="text" onChange={props.value} maxLength={props.maxlength} />
    </div>
  );
};

export default FormGroup;
