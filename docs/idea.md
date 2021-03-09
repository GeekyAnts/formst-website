---
id: idea
title: Idea
sidebar_label: Idea
slug: /
---

## Introduction

Formst is a simple and performant library for creating forms in React running on Mobx-State-Tree. It comes with all the goodness of [MobX-State-Tree](https://mobx-state-tree.js.org/) and makes your thought process data-first while building forms.

## Motivation

While working on a recent project, [GeekyAnts](https://geekyants.com) devs realised that there was no easy way to build forms for React apps. Yes, there are solutions available but they're not quite optimal. Some are slow and don't provide a satisfactory UI while others have a steep learning curve. Devs still face unsolved problems like interdependency between form fields and nested forms.

So, we decided to take matters into our own hands. We built a library based on MST that includes commonly used functionalities required in any form, such as validations and pre-processing.

                         **Introducing Formst: A Model-driven Form Library forReact 🙌🏼**

## Philosophy

**When it comes to building forms, _Data-First > UI-First_**

We realised that we could simplify the form-building process by looking at the data and UI parts separately. Later, these can be integrated with a few lines of code. Here's a few advantages of using a model-driven approach:

- State-management becomes much easier when you separate business logic from the UI
- Testing is much simpler since your logic and UI have been decoupled

For more information, check out [UI as an afterthought.](https://medium.com/@mweststrate/ui-as-an-afterthought-26e5d2bb24d6)

## Use Cases

This can be used with all sorts of forms: nested, stepper and flat. The only constraint is that Formst has the following dependencies: mobx, mobx-react/mobx-react-lite and mobx-state-tree. Ultimately, this works best with applications that use these as their state management solution.

### When not to use

Formst was specifically built for applications running on MST(MobX-State-Tree). If MST is not your default state management solution, you will need to account for extra bundle size and this package may not be for you.
