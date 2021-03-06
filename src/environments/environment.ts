// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'dxesoft-lunchtime',
  clientId: 'dxesoft-lunchtime-frontend'
};

export const environment = {
  production: false,
  urlAddress: 'http://localhost:8085',
  keycloak: keycloakConfig
};
