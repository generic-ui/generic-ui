import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureId } from '../../../core/api/structure.id';
import { EditemItemValues } from '../../core/api/event/editem-item.values';
import { SourceCommandInvoker } from '../../core/api/source.command-invoker';
import { SourceEventService } from '../../core/api/event/source-event.service';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare abstract class SourceGate extends Gate implements OnChanges, OnInit, OnDestroy {
    protected readonly structureId: StructureId;
    protected readonly sourceCommandInvoker: SourceCommandInvoker;
    protected readonly sourceEventService: SourceEventService;
    source: Array<any>;
    items: Array<any>;
    sourceEdited: EventEmitter<EditemItemValues>;
    protected constructor(structureId: StructureId, sourceCommandInvoker: SourceCommandInvoker, sourceEventService: SourceEventService);
    ngOnChanges(changes: NgChanges<SourceGate>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SourceGate, never, never, { "source": "source"; "items": "items"; }, { "sourceEdited": "sourceEdited"; }, never>;
}
//# sourceMappingURL=source.gate.d.ts.map