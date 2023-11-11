import React from 'react';

import {
  unstable_FormRadioGroup as FormRadioGroup,
  unstable_FormRadio as FormRadio,
} from 'reakit/Form';

import styles from './FormRadioGroup.module.scss';

const RadioGroup = ({
  name,
  title,
  size,
  items = [],
  noMessage,
  asRadio,
  ...form
}) => {
  const hasErrors = (() => {
    if (!form?.errors) return false;
    if (Array.isArray(name)) {
      return (
        form?.errors?.[name[0]]?.[name[1]]?.[name[2]] &&
        form?.touched?.[name[0]]?.[name[1]]?.[name[2]]
      );
    }
    return form?.errors?.[name] && form?.touched?.[name];
  })();

  return (
    <FormRadioGroup className={styles.container} {...form} name={name}>
      <p as="legend" name={name} {...form}>
        {title}
      </p>
      <div className={styles.items}>
        {items.map(({ value, label, description }) => (
          <FormRadio
            key={value}
            as={asRadio}
            {...form}
            name={name}
            value={value}
            label={label}
            description={description}
            size={size}
            hasError={hasErrors}
          />
        ))}
      </div>
    </FormRadioGroup>
  );
};

export { RadioGroup as default };
