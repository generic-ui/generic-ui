import { OnChanges, SimpleChanges } from '@angular/core';
import { SourceCommandDispatcher } from '../../../source/domain-api/source.command-dispatcher';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare abstract class ListViewGateway implements OnChanges {
    readonly structureId: StructureId;
    protected readonly sourceCommandService: SourceCommandDispatcher;
    items: Array<any>;
    protected constructor(structureId: StructureId, sourceCommandService: SourceCommandDispatcher);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
