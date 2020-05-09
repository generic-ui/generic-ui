import { ContainerGateway } from './container.gateway';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { StructureCommandDispatcher } from '../../../lib/structure/feature-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../../../lib/structure/feature-api/source/source.command-dispatcher';
import { ContainerTemplateArchive } from './template/container-template.archive';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
export declare class ContainerComponent extends ContainerGateway {
    readonly structureId: StructureId;
    constructor(structureId: StructureId, sourceCommandService: SourceCommandDispatcher, containerTemplateArchive: ContainerTemplateArchive, structureCommandService: StructureCommandDispatcher, structurePagingCommandDispatcher: PagingCommandDispatcher);
}
