import { Button, DialogActions, DialogContent } from '@material-ui/core';
import { Form, Formik } from 'formik';
import Field from '@components/CustomField';
import { TextField } from 'formik-material-ui';
import CategoryField from '@components/CategoryField';

interface AddCategoryFormValue {
  parrentCategory: string;
  category: string;
}

interface AddCategoryFormProps {
  handleClose: () => void;
}

const AddCategoryForm = ({ handleClose }: AddCategoryFormProps) => {
  const initialValues: AddCategoryFormValue = {
    parrentCategory: '',
    category: '',
  };

  const onSubmit = (values: AddCategoryFormValue) => {
    // TODO: handle submit category
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <DialogContent>
          <CategoryField label="Induk kategory" name="parrentCategory" />
          <Field component={TextField} name="category" label="Kategori" autoFocus />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Batal
          </Button>
          <Button onClick={handleClose} color="primary" type="submit">
            Tambahkan
          </Button>
        </DialogActions>
      </Form>
    </Formik>
  );
};

export default AddCategoryForm;
