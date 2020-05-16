import { ContainerGateway } from './container.gateway';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { StructureIdGenerator } from '../../../lib/structure/feature/structure-id.generator';
import { StructureCommandDispatcher } from '../../../lib/structure/domain-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../../../lib/structure/domain-api/source/source.command-dispatcher';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
import { ContainerTemplateArchive } from './source/template/container-template.archive';
import { ListCardTemplateArchive } from './card/template/list.card-template.archive';
import { ListViewReadModelRootId } from '../domain-api/read/list-view.read-model-root-id';
import { ListViewCommandDispatcher } from '../domain-api/list-view.command-dispatcher';
/** @internal */
export declare function listViewIdFactory(generator: StructureIdGenerator): ListViewReadModelRootId;
export declare class ContainerComponent extends ContainerGateway {
    readonly structureId: StructureId;
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    constructor(structureId: StructureId, listViewReadModelRootId: ListViewReadModelRootId, sourceCommandService: SourceCommandDispatcher, containerTemplateArchive: ContainerTemplateArchive, listCardTemplateArchive: ListCardTemplateArchive, structureCommandService: StructureCommandDispatcher, structurePagingCommandDispatcher: PagingCommandDispatcher, listViewCommandDispatcher: ListViewCommandDispatcher);
}
