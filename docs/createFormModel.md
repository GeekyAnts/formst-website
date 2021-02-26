---
id: createFormModel
title: createFormModel
sidebar_label: createFormModel
slug: /api/create-form-model
---

It creates a Model which comes with a few built-in actions.

### API

`createFormModel(<Model Name>, <Model structure>, options: OptionType)`

### Usage

```tsx
const TodoForm = createFormModel(
  "TodoForm",
  {
    title: types.string,
    description: types.string,
  },
  {
    validation: {
      title: ["required"],
      description: "required",
    },
  }
);
```

### Properties Provided

- **submitting:** Returns true when the form is submitting
- **touched:** Returns a JSON with the values that are touched

### Functions Provided:

- **isSubmitting():** Returns true when the form is submitting
- **errors():** Returns the error object for that instance
- **getFormData():** Returns the form data of the instance in JSON
- **onSubmit(submitHandler: (formInstance) ⇒ void):** Updates the callback that will be called on submit
- **setAllTouched():** sets all the fields as touched
- **setSubmitting(submitting:boolean):** sets the state of submitting
- **handleChange(e: React.ChangeEvent):** processes the onChange for the form
- **handleBlur(e: React.FocusEvent):** processes the onBlur for the form
- **setValue(name: string, value: any):** sets the value of the field with a given value
