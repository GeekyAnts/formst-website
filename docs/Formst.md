---
id: formst
title: Formst
sidebar_label: Formst
slug: /api/formst
---

We need to wrap `Field` and `ErrorMessage` components inside `Formst` and pass a `createFormModel` instance to it. The Formst component creates a React Context containing formInstance which is available to Field and ErrorMessage inside it. Field and ErrorMessage can use the values from formInstance.

### API

```tsx
import { Formst } from "formst";

<Formst formInstance={formInstance} />;
```

### Props

```tsx
formInstance: Instance of the model created by createFormModel
```

### Usage

```tsx
<Formst formInstance={formInstance}>
  <Field name="title" component={CustomComponent}>
  <ErrorMessage name="title" />
</Formst>
```
