import RequestForm from './RequestForm';

function FormSection() {
  return (
    <div className="form-wrapper">
      <h1 id="add-users" className="form-heading-text">
        Working with POST request
      </h1>
      <RequestForm />
    </div>
  );
}

export default FormSection;
