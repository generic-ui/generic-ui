import { SourceManager } from './source.manager';
import { FormationManagerFactory } from '../../../../formation/core/domain/core/formation.manager-factory';
export declare class SourceManagerFactory {
    private readonly formationManagerFactory;
    constructor(formationManagerFactory: FormationManagerFactory);
    createDefault(): SourceManager;
    create(): SourceManager;
}
