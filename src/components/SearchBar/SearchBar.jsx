import { Formik, Form, Field, ErrorMessage } from 'formik';

function SearchBar() {
  const handlerSearch = async topic => {
    // setSearchQuery(topic);
    // setPage(1);
    // setPictures([]);
  };
  return (
    <div>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(value, actions) => {
          if (value.search === '') {
            return;
          }
          handlerSearch(value.search);
          actions.resetForm();
        }}
      >
        <Form>
          <label name="search">Type text</label>
          <Field
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <ErrorMessage name="search" component="span" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}
export default SearchBar;
