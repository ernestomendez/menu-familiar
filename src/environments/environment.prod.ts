
import { KeycloakConfig } from 'keycloak-angular';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080/auth',
  realm: 'dxesoft-lunchtime',
  clientId: 'dxesoft-lunchtime-frontend'
};

export const environment = {
  production: true,
  urlAddress: 'http://www.ang-material-account-owner.com',
  keycloak: keycloakConfig
};
