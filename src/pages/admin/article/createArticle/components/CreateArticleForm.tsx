/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, makeStyles, Theme } from '@material-ui/core';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import { useMutation } from 'react-query';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useDispatch } from 'react-redux';
import RichEditor from '@components/RichEditor';
import { TextField } from 'formik-material-ui';
import Field from '@components/CustomField';
import { IArticleRequest, postArticle, putArticle } from '@services/ArticleServices';
import UserGroup from '@constants/UserGroupEnum';
import { useEffect, useMemo, useState } from 'react';
import { requestArticleCategories } from '@redux/actions/articleCategoriesActions';
import { useHistory } from 'react-router-dom';
import CategoryField from '@components/CategoryField';
import TagsField from './TagsField';
import AccessByField from './AccessByField';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
}));

interface ArticleFormValues {
  title: string;
  articleCategoryId?: IArticleCategory['id'];
  scopes: { [key: string]: boolean };
  tags: {
    inputValue: string;
  }[];
  content: string;
}

const validationSchema = yup.object({
  title: yup.string().required(),
});

interface CreateArticleFormProps {
  isEdit?: boolean;
  initialData?: IArticle;
}

const CreateArticleForm = ({ isEdit = false, initialData }: CreateArticleFormProps) => {
  const classes = useStyles();

  const [content, setContent] = useState('');

  const history = useHistory();

  const handleEdit = (data: IArticleRequest) => putArticle(initialData?.id ?? 0, data);

  const mutation = useMutation(initialData ? handleEdit : postArticle);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestArticleCategories());
  }, []);

  useEffect(() => {
    if (mutation.isSuccess) {
      history.goBack();
    }
  }, [mutation.isSuccess]);

  const initialValues: ArticleFormValues = useMemo(
    () => ({
      title: initialData?.title ?? '',
      articleCategoryId: undefined,
      scopes: {
        [UserGroup.Cadre]: false,
        [UserGroup.Midwife]: false,
        [UserGroup.Conselor]: false,
        [UserGroup.DoctorGeneral]: false,
        [UserGroup.DoctorSpecialist]: false,
        [UserGroup.Mommies]: false,
      },
      content: initialData?.content ?? '<p>Tulis konten anda disini</p>',
      tags: initialData?.tags.map((tag) => ({ inputValue: tag.name })) ?? [],
    }),
    [initialData],
  );

  const onSubmit = async (values: ArticleFormValues) => {
    const data: IArticleRequest = {
      title: values.title,
      content,
      articleCategoryId: values.articleCategoryId,
      scopes: Object.keys(values.scopes)
        .filter((key) => values.scopes[key])
        .map((key) => key),
      tags: values.tags.map((obj) => obj.inputValue),
    };

    mutation.mutate(data);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form className={classes.form}>
          <Field
            component={TextField}
            name="title"
            label="Judul"
            disabled={mutation.isLoading}
            autoFocus={!isEdit}
          />
          <CategoryField name="articleCategoryId" disabled={mutation.isLoading} />
          <TagsField disabled={mutation.isLoading} />
          <AccessByField disabled={mutation.isLoading} />
          <RichEditor
            initialValue={initialValues.content}
            onEditorChange={(value) => setContent(value)}
            disabled={mutation.isLoading}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            disableElevation
            disabled={mutation.isLoading}
          >
            Buat artikel
          </Button>
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default CreateArticleForm;
