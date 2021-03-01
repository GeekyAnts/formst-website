---
id: gettingStarted
title: Getting Started
sidebar_label: Getting Started
slug: /gettingStarted
---

## Introduction

- **Formst** is the new way to create and handle forms. Unlike most form libraries that are UI-first, Formst is data first. It is based on **_MST_**(MobX-State-Tree). This library helps you create high-performance forms with interdependent fields within tables and add validations.

Note: FormST has peer dependencies and requires [mobx](https://mobx.js.org/), [mobx-react-lite](https://www.npmjs.com/package/mobx-react-lite)/[mobx-react](https://github.com/mobxjs/mobx-react) and [mobx-state-tree](https://mobx-state-tree.js.org/).

## Installation

Use **yarn** or **npm** to install this library:

```bash
# yarn
yarn add formst

# npm
npm add formst
```

### Basic Usage

1. Create a form model:

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

2. Create an instance of the model:

   ```tsx
   const todoForm = TodoForm.create({
     title: "",
     description: "",
   });
   ```

3. Wrap the components inside **Formst** and use _Field_ API to render the fields:

   ```tsx
   export default observer(() => {
     todoForm.onSubmit((formInstance: Instance<typeof todoForm>) => {
       console.log(formInstance.getFormData());
       formInstance.setSubmitting(false);
     });

     return (
       <Formst formInstance={todoForm}>
         <form onSubmit={todoForm.handleSubmit}>
           <Field name="title" />
           <ErrorMessage name="title" />

           <Field name="description" />
           <ErrorMessage name="description" />

           <button type="submit">Submit</button>
         </form>
       </Formst>
     );
   });
   ```

4. Optional: If you don't like `Field` API, you can directly plug this to an element.

   Note: For this to work, you need to wrap the entire component inside observer.

   ```tsx
   export default observer(() => {
     return (
       <Formst formInstance={todoForm}>
         <form onSubmit={todoForm.handleSubmit}>
           <input
             name="title"
             value={todoForm.title}
             onChange={todoForm.handleChange}
             onBlur={todoForm.handleBlur}
           ></input>
           <ErrorMessage name="title" />

           <Field name="description" />
           <ErrorMessage name="description" />

           <button type="submit">Submit</button>
         </form>
       </Formst>
     );
   });
   ```
