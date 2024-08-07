Repository scaffolded with NX 19.5.6 shows broken eslint module boundaries validation.

In this repo importing  `import { FooComponent } from '@nx19.5.6/foo';` in main app component should render eslint error because `foo` lib is not in allowed scope defined by eslint rule

```
{
                "sourceTag": "scope:app",
                "onlyDependOnLibsWithTags": ["scope:allowed"]
              }
              ```
