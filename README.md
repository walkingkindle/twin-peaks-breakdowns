# TwinPeaksBreakdowns

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Deployment

The site runs at [twinpeaksbreakdowns.com](https://twinpeaksbreakdowns.com), served by nginx on the Hetzner server.

- **CI:** `.github/workflows/ci.yml` tests and builds every push and pull request. A push to `main` also rsyncs the build into `/var/www/twinpeaksbreakdowns.com/html`.
- **Secrets:** the deploy step reads three repository secrets:
  - `DEPLOY_HOST`: the server's address.
  - `DEPLOY_KNOWN_HOSTS`: its SSH host key line.
  - `DEPLOY_SSH_KEY`: the private half of the CI deploy key.
- **Server setup:** `deploy/setup-server.sh` is a one-time script. It creates the `deploy` user, whose key can only rsync into the web root. It also installs `deploy/nginx.conf` and gets the HTTPS certificate with Certbot. Later changes to `deploy/nginx.conf` have to be applied on the server by hand, because Certbot edits the installed copy.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
