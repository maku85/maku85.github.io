---
date: 2020-12-11T09:00:00.000Z
title: Git - Tips
description: Tips for a good git job
img: https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80
tags: git
published: false
---

### Commit message

It's a good habit to create quality commit messages to makes using and collaborating with Git a lot easier. As a general rule:

- messages should start with a short single capitalized line (no more than about 50 characters) that describes the changeset concisely and use imperative ("Fix bug" and not "Fixed bug")
- it's a good option to insert at the start of the description the type of changeset (example **feat** for new feature, **fix** for bug fix, **refactor** for other code change, **test** for test update, **docs** for docs change)
- optionally the description could be followed by a body with more detailed explanation (about 72 characters or so). Between description and body is required a blank line
- after the body could be placed further paragraphs (always separated by a blank line) for other use, like references to management software (example Jira)

```bash
<type>: <description>

[optional body]

[optional footer(s)]
```

https://www.conventionalcommits.org/en/v1.0.0/

### Gitflow

Gitflow is a Git workflow that helps with continuous software development defining a strict branching model designed around the project release.

- use two branches: _master_ branch to stores the official release history and _develop_ branch to serves as an integration branch for features
- tag all commits in the master branch with a version number
- **features** - each new feature should reside in its own branch, which can be pushed to the central repository for backup/collaboration. But, instead of branching off of master, feature branches use develop as their parent branch. When a feature is complete, it gets merged back into develop. Features should never interact directly with master.
- **release** - once develop has acquired enough features for a release, fork a release branch off of develop. From now no new features can be added, bug fixes, documentation generation, and other release-oriented tasks should go in this branch. Once it's ready to ship, the release branch gets merged into master and tagged with a version number. In addition, it should be merged back into develop, which may have progressed since the release was initiated.
- **hotfix** - maintenance or “hotfix” branches are used to quickly patch production releases. They're based on master instead of develop and this is the only branch that should fork directly off of master. As soon as the fix is complete, it should be merged into both master and develop (or the current release branch), and master should be tagged with an updated version number.

Using the git-flow extension library it's possible to use specific "shortcut" command:

```bash
# init workflow
# creates the develop branch on an existing repo
git flow init

# create a feature branch
# creates and switch to new feature branch from develop branch
git flow feature start feature_branch

# complete feature
# merge feature branch in develop branch
git flow feature finish feature_branch

# create a release branch
# creates and switch to new release branch from develop branch
git flow release start 0.1.0

# complete release
# merge release branch in master branch
git flow release finish '0.1.0'

# create a hotfix
# creates and switch to new hotfix branch from master branch
git flow hotfix start hotfix_branch

# complete hotfix
# merge hotfix branch in master and develop branch
git flow hotfix finish hotfix_branch
```
