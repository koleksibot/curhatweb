import UserGroup from '@constants/UserGroupEnum';
import { $enum } from 'ts-enum-util';
import { CheckboxWithLabel } from 'formik-material-ui';
import UserGroupLabel from '@constants/UserGroupLabel';
import { Field, FieldAttributes } from 'formik';

const AccessByField = (props: FieldAttributes<any>) => {
  const renderCheckBox = () =>
    $enum(UserGroup).map(
      (userGroup) =>
        userGroup !== UserGroup.Administrator && (
          <Field
            key={userGroup}
            component={CheckboxWithLabel}
            type="checkbox"
            name={`scopes[${userGroup}]`}
            Label={{ label: UserGroupLabel[userGroup] }}
            {...props}
          />
        ),
    );

  return (
    <div>
      <span>Dapat dilihat oleh</span>
      <br />
      {renderCheckBox()}
    </div>
  );
};

export default AccessByField;
