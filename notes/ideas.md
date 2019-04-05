# App Structure

```
actions/
api/
components/
reducers/
resources/
screens/
store/
utils/
index.js
```

# "Resource"

A "resource" is a single entity that is made up of actions and a single reducer. It's purpose is to handle the network requests (`GET`/`PUT`/`PATCH`/`POST`/`DELETE`), their states (`REQUESTED`/`SUCCEEDED`/`FAILED`), and how all of that affects the application's state (in store).

An idea would be to have something like:

```js
// resources/index.js
import { createResource } from '@helpscout/unicorn'

createResource('posts')
createResource('post')
createResource('image')
```

The `createResource` function generates the necessary actionTypes, actions, and reducer and is automatically registered to the application's context + store (some how).

# CLI

Unicorn will have a CLI tool to help scaffold, generate, and test applications. Similar to what you'd get from Rails, Ember, and Angular.

## Generating components

```
uni generate component Hello
```

or

```
uni g c Hello
```

This generates the following files:

```
src/components/Hello/index.js
src/components/Hello/Hello.js
src/components/Hello/Hello.css.js
src/components/Hello/Hello.test.js
```

## Generating resources

```
uni generate resource images
```

or

```
uni g r images
```

This creates and adds the resource to the application:

```js
// resources/index.js
import { createResource } from '@helpscout/unicorn'

createResource('posts')
createResource('images') // <-- new
```

# Inspiration

- [Angular](https://angular.io/)
- [Ember](https://emberjs.com/)
- [Laravel](https://laravel.com/)
- [Next.js](https://nextjs.org/)
- [Rails](https://rubyonrails.org/)
