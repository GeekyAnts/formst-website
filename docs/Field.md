---
id: field
title: Field
sidebar_label: Field
slug: /api/field
---

You can use `<Field />` to reduce the code you write for wiring up inputs and handlers to your input element. `<Field />` will only work if it is a descendant of `<Formst />`.

### API

```tsx
import { Field } from "formst";

<Formst formInstance={formInstance}>
  // This will handle name, value, onChange and onBlur props for you
  <Field name="field-name" />
</Formst>;
```

### Parameters

```tsx
name: string, required;
component: string | React.Component;
```

Any extra props will be passed down to the child component.

### Usage

```
<Field name="title" component={CustomComponent}>
```
