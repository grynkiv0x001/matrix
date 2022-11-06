import './GenerateForm.scss';

import Button from '../shared';

import './GenerateForm.scss';

const GenerateForm = () => {
  return (
    <div className="form-wrapper">
      <form action="/" className="form">
        <input type="text" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default GenerateForm;
