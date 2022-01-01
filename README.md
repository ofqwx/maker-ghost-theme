# Maker SES Ghost theme

## Development

You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the project's root directory:

```bash
# install dependencies and setup ghost local for dev purposes
yarn install

# run development server
yarn dev
```

Now you can edit files in `packages/<theme-name>/assets/css/` or `packages/<theme-name>/assets/js/`, which will be compiled to `packages/<theme-name>/assets/built/` automatically. And, if you're running the local ghost server you will see the changes by reloading the browser (for style changes it's better to do a hard reload, usually this is done with ctrl/cmd + shift + r).

To run a theme locally, you need to run ghost local server:

```bash
# start ghost server
yarn ghost-start

# navigate to http://localhost:2376/ghost and select maker-ses-ghost-theme theme.
```

```bash
# restart ghots server
yarn ghost-restart
```

```bash
# stop ghost server
# ghost local server won't stop unless you do it manually
yarn ghost-stop
```

```bash
# check status of ghost server
yarn ghost-status
```

To create an installable theme zip file in `packages/<theme-name>/dist/`:

```bash
# create .zip file
yarn zip --theme <theme-name>
```

## PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.
