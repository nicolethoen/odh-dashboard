import { k8sListResource } from '@openshift/dynamic-plugin-sdk-utils';
import { PodModel } from '~/api/models';
import { PodKind } from '~/k8sTypes';

export const getPodsForNotebook = (namespace: string, notebookName: string): Promise<PodKind[]> =>
  k8sListResource<PodKind>({
    model: PodModel,
    queryOptions: {
      ns: namespace,
      queryParams: { labelSelector: `notebook-name=${notebookName}` },
    },
  }).then((r) => r.items);

export const getPodsForModelMesh = (namespace: string, modelName: string): Promise<PodKind[]> =>
  k8sListResource<PodKind>({
    model: PodModel,
    queryOptions: {
      ns: namespace,
      queryParams: { labelSelector: `name=modelmesh-serving-${modelName}` },
    },
  }).then((r) => r.items);

export const getPodsForKserve = (namespace: string, modelName: string): Promise<PodKind[]> =>
  k8sListResource<PodKind>({
    model: PodModel,
    queryOptions: {
      ns: namespace,
      queryParams: { labelSelector: `serving.kserve.io/inferenceservice=${modelName}` },
    },
  }).then((r) => r.items);
