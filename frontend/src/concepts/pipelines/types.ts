import { K8sAPIOptions } from '~/k8sTypes';
import {
  ListPipelineRunsResourceKF,
  ListPipelineRunJobsResourceKF,
  ListPipelinesResponseKF,
  ListPipelineTemplateResourceKF,
  PipelineKF,
  PipelineRunResourceKF,
  ListExperimentsResponseKF,
  ExperimentKF,
  PipelineRunJobKF,
  CreatePipelineRunKFData,
  CreatePipelineRunJobKFData,
  PipelineCoreResourceKF,
  PipelinesFilterPredicate,
  ResourceKeyKF,
} from './kfTypes';

export type PipelinesFilter = {
  resourceReference?: ResourceKeyKF;
  predicates?: PipelinesFilterPredicate[];
};

export type PipelineParams = {
  pageToken?: string;
  pageSize?: number;
  sortField?: string;
  sortDirection?: 'asc' | 'desc';
  filter?: PipelinesFilter;
};

export type PipelineOptions = Omit<PipelineParams, 'pageToken'> & { page?: number };

export type PipelineListPaged<T extends PipelineCoreResourceKF> = {
  totalSize: number;
  nextPageToken?: string;
  items: T[];
};

export type CreateExperiment = (
  opts: K8sAPIOptions,
  name: string,
  description: string,
) => Promise<ExperimentKF>;
export type CreatePipelineRun = (
  opts: K8sAPIOptions,
  data: CreatePipelineRunKFData,
) => Promise<PipelineRunResourceKF>;
export type CreatePipelineRunJob = (
  opts: K8sAPIOptions,
  data: CreatePipelineRunJobKFData,
) => Promise<PipelineRunJobKF>;
export type GetExperiment = (opts: K8sAPIOptions, experimentId: string) => Promise<ExperimentKF>;
export type GetPipeline = (opts: K8sAPIOptions, pipelineId: string) => Promise<PipelineKF>;
export type GetPipelineRun = (
  opts: K8sAPIOptions,
  pipelineRunId: string,
) => Promise<PipelineRunResourceKF>;
export type GetPipelineRunJob = (
  opts: K8sAPIOptions,
  pipelineRunJobId: string,
) => Promise<PipelineRunJobKF>;
export type DeletePipeline = (opts: K8sAPIOptions, pipelineId: string) => Promise<void>;
export type DeletePipelineRun = (opts: K8sAPIOptions, runId: string) => Promise<void>;
export type DeletePipelineRunJob = (opts: K8sAPIOptions, jobId: string) => Promise<void>;
export type ListExperiments = (
  opts: K8sAPIOptions,
  params?: PipelineParams,
) => Promise<ListExperimentsResponseKF>;
export type ListPipelines = (
  opts: K8sAPIOptions,
  params?: PipelineParams,
) => Promise<ListPipelinesResponseKF>;
export type ListPipelineRuns = (
  opts: K8sAPIOptions,
  params?: PipelineParams,
) => Promise<ListPipelineRunsResourceKF>;
export type ListPipelineRunJobs = (
  opts: K8sAPIOptions,
  params?: PipelineParams,
) => Promise<ListPipelineRunJobsResourceKF>;
export type ListPipelineRunsByPipeline = (
  opts: K8sAPIOptions,
  pipelineId: string,
  limit?: number,
) => Promise<ListPipelineRunsResourceKF>;
export type ListPipelineTemplates = (
  opts: K8sAPIOptions,
  pipelineId: string,
) => Promise<ListPipelineTemplateResourceKF>;
export type StopPipelineRun = (opts: K8sAPIOptions, runId: string) => Promise<void>;
export type UpdatePipelineRunJob = (
  opts: K8sAPIOptions,
  jobId: string,
  enabled: boolean,
) => Promise<void>;
export type UploadPipeline = (
  opts: K8sAPIOptions,
  name: string,
  description: string,
  fileContents: string,
) => Promise<PipelineKF>;

export type PipelineAPIs = {
  createExperiment: CreateExperiment;
  createPipelineRun: CreatePipelineRun;
  createPipelineRunJob: CreatePipelineRunJob;
  getExperiment: GetExperiment;
  getPipeline: GetPipeline;
  getPipelineRun: GetPipelineRun;
  getPipelineRunJob: GetPipelineRunJob;
  deletePipeline: DeletePipeline;
  deletePipelineRun: DeletePipelineRun;
  deletePipelineRunJob: DeletePipelineRunJob;
  listExperiments: ListExperiments;
  listPipelines: ListPipelines;
  listPipelineRuns: ListPipelineRuns;
  listPipelineRunJobs: ListPipelineRunJobs;
  listPipelineRunsByPipeline: ListPipelineRunsByPipeline;
  listPipelineTemplate: ListPipelineTemplates;
  stopPipelineRun: StopPipelineRun;
  updatePipelineRunJob: UpdatePipelineRunJob;
  uploadPipeline: UploadPipeline;
};
