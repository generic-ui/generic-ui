import { OnChanges, SimpleChanges } from '@angular/core';
import { SourceCommandDispatcher } from '../../../lib/structure/feature-api/source/source.command-dispatcher';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { ContainerTemplateArchive } from './template/container-template.archive';
import { ContanierTemplate } from './template/contanier-template';
import { PagingConfig } from '../../paging/domain-api/paging-config';
import { PagingCommandDispatcher } from '../../paging/domain-api/paging.command-dispatcher';
export declare abstract class ContainerGateway implements OnChanges {
    readonly structureId: StructureId;
    protected readonly sourceCommandService: SourceCommandDispatcher;
    protected readonly containerTemplateArchive: ContainerTemplateArchive;
    protected readonly structurePagingCommandDispatcher: PagingCommandDispatcher;
    items: Array<any>;
    template: ContanierTemplate;
    paging: PagingConfig;
    protected constructor(structureId: StructureId, sourceCommandService: SourceCommandDispatcher, containerTemplateArchive: ContainerTemplateArchive, structurePagingCommandDispatcher: PagingCommandDispatcher);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
