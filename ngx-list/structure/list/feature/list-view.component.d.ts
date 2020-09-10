import { ElementRef } from '@angular/core';
import { ListViewGateway } from './gateway/list-view.gateway';
import { StructureId } from '../../core/domain/structure.id';
import { StructureIdGenerator } from '../../core/feature/structure-id.generator';
import { StructureCommandDispatcher } from '../../core/domain-api/structure.command-dispatcher';
import { SourceCommandInvoker } from '../../source/domain-api/source.command-invoker';
import { PagingCommandInvoker } from '../../paging/domain-api/paging.command-invoker';
import { ListViewTemplateArchive } from './source/template/list-view-template.archive';
import { ListViewCardTemplateArchive } from './card/template/list-view.card-template.archive';
import { ListViewReadModelRootId } from '../domain-api/read/list-view.read-model-root-id';
import { ListViewCommandInvoker } from '../domain-api/list-view.command-invoker';
import { FilterContainerRef } from '../../filter/feature/config/filter-container-ref';
/** @internal */
export declare function listViewIdFactory(generator: StructureIdGenerator): ListViewReadModelRootId;
export declare class ListViewComponent extends ListViewGateway implements FilterContainerRef {
    readonly structureId: StructureId;
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    private readonly elementRef;
    constructor(structureId: StructureId, listViewReadModelRootId: ListViewReadModelRootId, elementRef: ElementRef, sourceCommandService: SourceCommandInvoker, containerTemplateArchive: ListViewTemplateArchive, listCardTemplateArchive: ListViewCardTemplateArchive, structureCommandService: StructureCommandDispatcher, structurePagingCommandDispatcher: PagingCommandInvoker, listViewCommandDispatcher: ListViewCommandInvoker);
    getElementRef(): ElementRef;
}
