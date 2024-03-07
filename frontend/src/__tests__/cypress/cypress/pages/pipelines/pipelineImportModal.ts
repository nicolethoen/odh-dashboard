import { CreatePipelineAndVersionKFData, PipelineKFv2 } from '~/concepts/pipelines/kfTypes';
import { buildMockPipelineV2 } from '~/__mocks__/mockPipelinesProxy';
import { Modal } from '~/__tests__/cypress/cypress/pages/components/Modal';

class PipelineImportModal extends Modal {
  constructor() {
    super('Import pipeline');
  }

  find() {
    return cy.findByTestId('import-pipeline-modal').parents('div[role="dialog"]');
  }

  findPipelineNameInput() {
    return this.find().findByRole('textbox', { name: 'Pipeline name' });
  }

  findPipelineDescriptionInput() {
    return this.find().findByRole('textbox', { name: 'Pipeline description' });
  }

  findUploadPipelineInput() {
    return this.find().get('[data-testid="pipeline-file-upload"] input[type="file"]');
  }

  findSubmitButton() {
    return this.findFooter().findByRole('button', { name: 'Import pipeline' });
  }

  findUploadPipelineRadio() {
    return this.find().findByTestId('upload-file-radio');
  }

  findImportPipelineRadio() {
    return this.find().findByTestId('import-url-radio');
  }

  findPipelineUrlInput() {
    return this.find().findByTestId('pipeline-url-input');
  }

  fillPipelineName(value: string) {
    this.findPipelineNameInput().clear().type(value);
  }

  fillPipelineDescription(value: string) {
    this.findPipelineDescriptionInput().clear().type(value);
  }

  uploadPipelineYaml(filePath: string) {
    this.findUploadPipelineInput().selectFile([filePath], { force: true });
  }

  mockCreatePipelineAndVersion(params: CreatePipelineAndVersionKFData) {
    return cy.intercept(
      {
        method: 'POST',
        pathname: '/api/proxy/apis/v2beta1/pipelines/create',
        times: 1,
      },
      buildMockPipelineV2(params.pipeline),
    );
  }

  mockUploadPipeline(params: Partial<PipelineKFv2>) {
    return cy.intercept(
      {
        method: 'POST',
        pathname: '/api/proxy/apis/v2beta1/pipelines/upload',
        times: 1,
      },
      buildMockPipelineV2(params),
    );
  }

  submit(): void {
    this.findSubmitButton().click();
  }
}

export const pipelineImportModal = new PipelineImportModal();
