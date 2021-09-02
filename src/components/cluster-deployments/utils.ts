import { CIM } from 'openshift-assisted-ui-lib';
import { AgentClusterInstallK8sResource } from 'openshift-assisted-ui-lib/dist/src/cim';

const { getClusterStatus } = CIM;

export const canEditCluster = (agentClusterInstall?: AgentClusterInstallK8sResource): boolean => {
  if (!agentClusterInstall) {
    return false;
  }
  const [status] = getClusterStatus(agentClusterInstall);
  return ['insufficient', 'ready', 'pending-for-input'].includes(status);
};
