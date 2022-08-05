---
title: Good Commit Message Conventions

description: Write better commit messages with conventional commits workflow

alt: Good Commit Message Conventions

excerpt: Good Commit Message Conventions

imgurl: https://images.pexels.com/photos/11035539/pexels-photo-11035539.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

tag: commmit-conventions

attribution: Photo by RealToughCandy.com from Pexels

createdAt: 07/25/2022
---

**Write better commit messages with conventional commits workflow**

Implementing a better way of improving and writing good commit messages can save a development team lots of time and effort as opposed to having none. Commit messages are everyday tea for any software developer in the modern day. Writing good readable commit messages comes in handy, especially when you have a larger team collaborating together on a project.

Commit message helps easily understand the nature of changes made and pushed to a code base. Writing better commit messages can be a huge hustle especially when you do not have better commit conventions configured in your development workflows.

**Why Better commit messages?**

Writing better commit messages comes with lots of benefits such as:

- Help communicate scope of changes between developers on what and why things changed.
- Ensure consistency in commit messages format.
- Sync up semantic versioning (i.e., automatic versioning, generating CHANGELOGs ).
- Help future developers easily understand the state of your changes.
- Improve developers productivity.
- Better structured commit history hence easier contribution.

While there are many conventions that are used across various teams, there is a general standard that has been widely adopted.

Conventional Commits
Conventional commits is a specification for adding human and machine readable meaning to commit messages.

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

Conventional commits message structure
Conventional commit message takes the following structure.

```js{1,3-5}]
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

Type is mandatory and can take the form of the following.

feat: new feature, fix: issues/bug fixes, docs: documentation related changes, ci: continuous integration, perf: performance improvement, test: tests related changes, chore: tool/configuration changes, refactor: code refactors, style: style changes, revert: revert changes.

The body and footer are optional and you can provide to improve and explain further about your committed changes.

The descriptions is mandatory and contains the actual summary message of what changes have been committed. If you want to further explain your changes, you can provide them in the optional body section.

**Caution breaking changes**

You can also append ! at the end of the scope to draw attention to breaking change.

```js{1,3-5}
chore!: drop support for Vue 2
```

Consider the scenario of the two commit message below

**Regular commit message**

endpoint to check if user is a publication member
Conventional commit message

```js{1,3-5}
feat(api): endpoint to check if user is a publication member
```

Which commit message looks detailed on initial glance?

The second commit message is precise in detailing the scope of why and what changed. Just by reading, the developer is able to identify that it is an api feature without opening the code.

Configuring conventional commits in your development workflow

In this part, we will dive in and configure conventional commits in a development workflow. This configuration will be on a JavaScript based dev environment.

**Installation**

You can use NPM or YARN depending on your favorite package manager.

**Using Npm**

```js{1,3-5}
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```

Run the command below to configure commitlint to use conventional config

Configure commitlint to use conventional config

```js{1,3-5}
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

**Using Yarn**

```js{1,3-5}
yarn add --dev @commitlint/{config-conventional,cli}
```

We will need commit-msg hook provided by Husky to lint commits before creation in the commit history. First we will need to install Husky.

```js{1,3-5}
yarn add husky // or npm install husky
```

Run the command below to add commit-msg hook.

```js{1,3-5}
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
```

Locate package.json file and on the scripts section, add the following "postinstall":"husky install". This will automatically install git hooks on any instance of running yarn install.

To this point, you should have conventional commits successfully configured in your development workflow.

Now anytime you write a commit message, git hooks will check if the message conforms with the format prescribed by conventional commits. If you provide a commit message that doesn't apply the rules, commit-lint will throw an error and a possible way to resolve.

**Resources**

https://github.com/conventional-changelog

https://www.conventionalcommits.org/en/v1.0.0/#specification

**Before you go**

Having a better convention for managing commit message is very handy in your development workflow. It makes is easier for small and larger team members to contribute to the project with less worry.

Every Wednesday, I send out an exclusive email with tips, articles, apps, books, and ideas I have found useful and related to technical writing.

Join others like you who want to improve their technical writing game.
