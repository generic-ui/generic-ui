import { ContainerGateway } from './container.gateway';
import { StructureId } from '../structure/domain/structure.id';
import { StructureCommandDispatcher } from '../structure/feature-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../structure/feature-api/source/source.command-dispatcher';
import { ContainerTemplateArchive } from './template/container-template.archive';
export declare class ContainerComponent extends ContainerGateway {
    readonly structureId: StructureId;
    constructor(structureId: StructureId, sourceCommandService: SourceCommandDispatcher, containerTemplateArchive: ContainerTemplateArchive, structureCommandService: StructureCommandDispatcher);
}
