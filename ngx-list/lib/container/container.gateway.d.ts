import { OnChanges, SimpleChanges } from '@angular/core';
import { SourceCommandDispatcher } from '../structure/feature-api/source/source.command-dispatcher';
import { StructureId } from '../structure/domain/structure.id';
import { ContainerTemplateArchive } from './template/container-template.archive';
import { ContanierTemplate } from './template/contanier-template';
export declare abstract class ContainerGateway implements OnChanges {
    readonly structureId: StructureId;
    protected readonly sourceCommandService: SourceCommandDispatcher;
    protected readonly containerTemplateArchive: ContainerTemplateArchive;
    source: Array<any>;
    template: ContanierTemplate;
    protected constructor(structureId: StructureId, sourceCommandService: SourceCommandDispatcher, containerTemplateArchive: ContainerTemplateArchive);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
