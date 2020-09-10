import { OnChanges, SimpleChanges } from '@angular/core';
import { SourceCommandInvoker } from '../../../source/domain-api/source.command-invoker';
import { StructureId } from '../../../core/domain/structure.id';
export declare abstract class ListViewGateway implements OnChanges {
    readonly structureId: StructureId;
    protected readonly sourceCommandService: SourceCommandInvoker;
    items: Array<any>;
    protected constructor(structureId: StructureId, sourceCommandService: SourceCommandInvoker);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
