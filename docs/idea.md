---
id: idea
title: Idea
sidebar_label: Idea
slug: /
---

## Introduction

Formst is a simple and performant library for creating forms in React running on Mobx-State-Tree. It comes with all the goodness of [MobX-state-tree](https://mobx-state-tree.js.org/) and makes your thought process data-first for building the forms.

## Motivation

While working on a recent project, [GeekyAnts](https://geekyants.com) devs realised that there was no easy way to build forms for React apps. Yes, there are solutions available but they're not quite optimal. Some are slow and don't provide a satisfactory UI while others have a steep learning curve. Devs still face unsolved problems like interdependency between form fields and nested forms. So, we decided to take matters into our own hands.

We felt that the form building process would become way simpler if we looked at the data and UI parts separately. These can later be integrated with a few lines of code. Ultimately, we looked at the way MST allows us to do this with forms. We decided to build a library based on MST that includes commonly used functionalities required in any form, such as validations and pre-processing.

## Use Case

This can be used with all sorts of forms: nested, stepper and flat. The only constraint is that Formst has the following dependencies: mobx, mobx-react/mobx-react-lite and mobx-state-tree. Ultimately, this works best with applications that use these as their state management solution.
