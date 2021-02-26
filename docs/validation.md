---
id: validation
title: Validation
sidebar_label: Validation
slug: /validation
---

You can add validations to each field and pass validations using options in the `createFormModel` API. Field validations can be defined in multiple ways.

### Default way of adding validation

Validations can be passed as an array. Currently, `required`, `email` and `number` are available by default.

```tsx
const TodoForm = createFormModel(
  'TodoForm',
  {
    title: types.string,
    description: types.string,
    user: types.string,
  },
  {
    validation: {
      title: 'required',
      description: 'required',
      user: ['required', 'email'],
    },
  },
);
```

### Adding validators

You can also add more validators:

```
defineValidators({
  minLen: (value: any) => ({
    valid: typeof value === 'string' && value.length > 3,
    message: 'Input should be more than 3 characters',
  })
});
```

### Custom function

```
const TodoForm = createFormModel(
  'TodoForm',
  {
    title: types.string,
    description: types.string,
  },
  {
    validation: {
      title: ['required'],
      description: (value) => {
        if(!value) return "This is required field";
      },
    },
  }
);
```
