import { SourceManager } from './source.manager';
import { FormationManagerFactory } from '../../../formation/src/domain/formation.manager-factory';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
export declare class SourceManagerFactory {
    private readonly formationManagerFactory;
    constructor(formationManagerFactory: FormationManagerFactory);
    static readonly services: (typeof FormationManagerFactory)[];
    createDefault(id: StructureId): SourceManager;
    create(id: StructureId): SourceManager;
}
