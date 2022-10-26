import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

const InputForm = ({ onSearch }) => {
  return (
  <>

      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={({ query }, { resetForm }) => {
          onSearch(query);
          resetForm();
        }}
      >
        <Form>
          <label>
            <Field type="text" name="query" />
            <button type="submit">Search</button>
          </label>
        </Form>
      </Formik>
  </>

  );
};

export default InputForm;

InputForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
