import { OnChanges, SimpleChanges } from '@angular/core';
import { SourceCommandDispatcher } from '../../../lib/structure/domain-api/source/source.command-dispatcher';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { PagingConfig } from '../../paging/domain-api/paging-config';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
import { ContainerTemplate } from './source/template/container-template';
import { ContainerTemplateArchive } from './source/template/container-template.archive';
import { ListCardTemplateArchive } from './card/template/list.card-template.archive';
import { ListCardTemplate } from './card/template/list.card-template';
import { ListViewMode } from '../domain/mode/list-view-mode';
import { ListViewCommandDispatcher } from '../domain-api/list-view.command-dispatcher';
import { ListViewReadModelRootId } from '../domain-api/read/list-view.read-model-root-id';
export declare abstract class ContainerGateway implements OnChanges {
    readonly structureId: StructureId;
    readonly listViewReadModelRootId: ListViewReadModelRootId;
    protected readonly sourceCommandService: SourceCommandDispatcher;
    protected readonly containerTemplateArchive: ContainerTemplateArchive;
    protected readonly listCardTemplateArchive: ListCardTemplateArchive;
    protected readonly structurePagingCommandDispatcher: PagingCommandDispatcher;
    protected readonly listViewCommandDispatcher: ListViewCommandDispatcher;
    items: Array<any>;
    template: ContainerTemplate;
    cardTemplate: ListCardTemplate;
    paging: PagingConfig;
    mode: ListViewMode;
    modeSelector: boolean;
    protected constructor(structureId: StructureId, listViewReadModelRootId: ListViewReadModelRootId, sourceCommandService: SourceCommandDispatcher, containerTemplateArchive: ContainerTemplateArchive, listCardTemplateArchive: ListCardTemplateArchive, structurePagingCommandDispatcher: PagingCommandDispatcher, listViewCommandDispatcher: ListViewCommandDispatcher);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
