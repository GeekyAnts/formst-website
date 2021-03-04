---
id: nested
title: Nested Forms
sidebar_label: Nested Forms
slug: /nested
---

Formst makes it very easy to handle nested data. You can create nested forms by creating nested form models.

### Usage

In this example, CreateProject form model contains other form models, Milestone and ProjectTeam as shown below:

```tsx
const Milestone = createFormModel(
  "Milestone",
  {
    name: types.string,
  },
  {
    validation: {
      name: (name) => {
        if (!name) {
          return "Required";
        }
      },
    },
  }
);

const ProjectTeam = createFormModel(
  "ProjectTeam",
  {
    name: types.string,
    lead: types.string,
  },
  {
    validation: {
      name: "required",
      lead: ["required", "minLen"],
    },
  }
);

const CreateProject = createFormModel(
  "CreateProject",
  {
    name: types.string,
    milestones: types.array(Milestone),
    team: ProjectTeam,
  },
  {
    validation: {
      name: ["required"],
      milestones: "valid",
      team: "valid",
    },
  }
);
```

Note: `valid` is required to ensure that the form checks the child form.

```tsx
const createProjectForm = CreateProject.create({
  projectTeam: { name: "", lead: "" },
  milestones: [{ name: "" }],
});
```

### Using this Formst instance in React:

If you want to use `<Field />` and `<ErrorMessage />`, you need to wrap your form inside `<Formst />` (as explained [here](https://www.notion.so/Formst-5ca92ac7368b42bb962048844c0d2f98)). For nested forms, you have to nest `<Formst />` in the same way as form instances and pass their corresponding instances as a `formInstance` prop.

This allows a nested `<Field />` to directly refer to the form instance to which it belongs using the `name` prop. Here's an example:

```tsx
const CreateProjectComponent = observer(() => {
  createProjectForm.onSubmit(
    (formInstance: Instance<typeof createProjectForm>) => {
      console.log(formInstance.getFormData());
      formInstance.setSubmitting(false);
    }
  );

  // Root Formst component for root form instance
  <Formst formInstance={createProjectForm}>
    <form key={"master"} onSubmit={createProjectForm.handleSubmit}>
      {createProjectForm.totalMilestone}
      <div>
        Project name:
        {/* Using Field */}
        <Field name="name" type="text" />
        {/* Using input */}
        <input
          name="name"
          value={createProjectForm.name}
          onChange={createProjectForm.handleChange}
          onBlur={createProjectForm.handleBlur}
        />
      </div>
      <div>
        <ErrorMessage name="name" />
      </div>
      <div style={{ border: "1px solid black" }}>
        {/* Nested Formst component for the nested instance */}
        <Formst formInstance={createProjectForm.team}>
          <div key={"second"}>
            <div>
              Team name:
              {/* "name" value for name prop here refers to createProjectForm.team.name */}
              <Field name="name" type="text" />
            </div>
            <div>
              <ErrorMessage name="name" />
            </div>
            <div>
              Lead name:
              <Field name="lead" type="text" />
            </div>
            <div>
              <ErrorMessage name="lead" />
            </div>
          </div>
        </Formst>
      </div>
      {createProjectForm.milestones.map((milestone, index) => {
        return (
          <Formst formInstance={milestone} key={index}>
            {/* Nested Formst component for the nested instance */}
            <div key={index}>
              <div>
                Milestone name:
                <input
                  name="name"
                  value={milestone.name}
                  onChange={milestone.handleChange}
                  onBlur={milestone.handleBlur}
                />
                <ErrorMessage name="name" />
              </div>
            </div>
          </Formst>
        );
      })}
      <button type="button" onClick={addMilestone}>
        Add new milestone
      </button>
      <button type="submit">Submit</button>
      {createProjectForm.isSubmitting ? (
        <h1>submitting</h1>
      ) : (
        <h2>submitted</h2>
      )}
      {createProjectForm.isValid ? <h1>valid</h1> : <h2>not valid</h2>}
    </form>
  </Formst>;
});
```

## Full Example

  <iframe
              src="https://codesandbox.io/embed/nestedformexample-forked-fchjg?fontsize=14&hidenavigation=1&theme=dark"
              height="500"
              width="100%"
              title="formst-demo"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
