import { SourceManager } from './source.manager';
import { FormationManagerFactory } from '../../../formation/domain/core/formation.manager-factory';
export declare class SourceManagerFactory {
    private readonly formationManagerFactory;
    constructor(formationManagerFactory: FormationManagerFactory);
    static readonly services: (typeof FormationManagerFactory)[];
    createDefault(): SourceManager;
    create(): SourceManager;
}
