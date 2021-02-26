---
id: errorMessage
title: ErrorMessage
sidebar_label: ErrorMessage
slug: /api/error-message
---

You can use this component to render an error message for an input. `<ErrorMessage />` will only work if it is a descendant of `<Formst />`.

### API

```tsx
import {ErrorMessage} from 'formst';

<Formst formInstance={formInstance}>
  <ErrorMessage name="field-name" />
</Formst>;
```

### Parameters

```
name: string, required
component: string | React.Component
```

Any extra props will be passed down to the child component.

### Usage

```
<ErrorMessage name="title" component={CustomComponent}>
```
