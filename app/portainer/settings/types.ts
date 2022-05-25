enum AuthenticationMethod {
  // AuthenticationInternal represents the internal authentication method (authentication against Portainer API)
  AuthenticationInternal,
  // AuthenticationLDAP represents the LDAP authentication method (authentication against a LDAP server)
  AuthenticationLDAP,
  // AuthenticationOAuth represents the OAuth authentication method (authentication against a authorization server)
  AuthenticationOAuth,
}

export interface Settings {
  LogoURL: string;
  BlackListedLabels: { name: string; value: string }[];
  AuthenticationMethod: AuthenticationMethod;
  InternalAuthSettings: { RequiredPasswordLength: number };
  SnapshotInterval: string;
  TemplatesURL: string;
  EnableEdgeComputeFeatures: boolean;
  UserSessionTimeout: string;
  KubeconfigExpiry: string;
  EnableTelemetry: boolean;
  HelmRepositoryURL: string;
  KubectlShellImage: string;
  TrustOnFirstConnect: boolean;
  EnforceEdgeID: boolean;
  AgentSecret: string;
  EdgePortainerUrl: string;
  EdgeAgentCheckinInterval: number;
  EdgePingInterval: number;
  EdgeSnapshotInterval: number;
  EdgeCommandInterval: number;
}
