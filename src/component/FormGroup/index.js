const FormGroup = ({name,error,value,maxlength}) => {
  return (
    <div className="form-group">
      <label>{name} : </label>
      {error ? <span>{error}</span> : null}
      <input type="text" onBlur={value} maxLength={maxlength} />
    </div>
  );
};

export default FormGroup;
