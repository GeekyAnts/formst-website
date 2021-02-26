---
id: defineValidators
title: defineValidators
sidebar_label: defineValidators
slug: /api/define-validators
---

You can define custom validations using this function.

### Usage

```
defineValidators({
  minLen: (value: any) => ({
    valid: typeof value === 'string' && value.length > 3,
    message: 'Input should be more than 3 characters',
  }),
});
```
