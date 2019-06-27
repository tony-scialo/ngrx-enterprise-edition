# ngrx-enterprise-edition

> A scaffolding library for using ngrx in an enterprise environment

---

## what is ngrx-ee?

> Inspiration for this ngrx schematic came from the following post on [Medium](https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7) by Wes Grimes (shoutout!). Our team started using a similar process so I wrote a schematic to help automate some of the boilerplate code we were using.

### How to Use

To generate the initial boilerplate root-module, run the following:

```shell
ng g ngrx-enterprise-edition:generate-root
```

or using the alias

```shell
ng g ngrx-enterprise-edition:g-r
```

This will generate the files in a generic 'root-module' directory under 'app' (if using an application) or 'lib' (if using a library).

To change the directory name from 'root-module' to something of your choosing, use:

```shell
$ ng g ngrx-enterprise-edition:g-r --dirName=someDir
```

To generate a feature store, run the following:

```shell
ng g ngrx-enterprise-edition:generate-store MyFeature
```

or the alias

```shell
ng g ngrx-enterprise-edition:g-st MyFeature
```

You can also generate this in a the directory of your choice using:

```shell
$ ng g ngrx-enterprise-edition:g-st MyFeature --dirName=someDir
```

## Authors

Tony Scialo
