import { ListViewGateway } from './gateway/list-view.gateway';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { StructureIdGenerator } from '../../../lib/structure/feature/structure-id.generator';
import { StructureCommandDispatcher } from '../../../lib/structure/domain-api/structure.command-dispatcher';
import { SourceCommandDispatcher } from '../../../lib/structure/domain-api/source/source.command-dispatcher';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
import { ListViewTemplateArchive } from './source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from './card/template/list-view.card-template.archive';
import { ListViewReadModelRootId } from '../domain-api/read/list-view.read-model-root-id';
import { ListViewCommandDispatcher } from '../domain-api/list-view.command-dispatcher';
/** @internal */
export declare function listViewIdFactory(generator: StructureIdGenerator): ListViewReadModelRootId;
export declare class ListViewComponent extends ListViewGateway {
    readonly structureId: StructureId;
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    constructor(structureId: StructureId, listViewReadModelRootId: ListViewReadModelRootId, sourceCommandService: SourceCommandDispatcher, containerTemplateArchive: ListViewTemplateArchive, listCardTemplateArchive: ListViewCardTemplateArchive, structureCommandService: StructureCommandDispatcher, structurePagingCommandDispatcher: PagingCommandDispatcher, listViewCommandDispatcher: ListViewCommandDispatcher);
}
