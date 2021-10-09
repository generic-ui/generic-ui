import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { RowColoring } from '../../../../../../schema/core/api/row-coloring/row-coloring';
import { SchemaRowColoring } from '../../../../../../schema/core/api/row-coloring/schema-row-coloring';
import { SchemaCommandInvoker } from '../../../../../../schema/core/api/schema.command-invoker';
import { SchemaEventRepository } from '../../../../../../schema/core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../../../schema/core/api/schema.read-model-root-id';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
export declare class StructureRowColoringGate extends Gate implements OnChanges, OnInit, OnDestroy {
    private readonly schemaId;
    private readonly schemaCommandInvoker;
    private readonly schemaEventRepository;
    rowColoring: RowColoring;
    rowColoringChanged: EventEmitter<SchemaRowColoring>;
    constructor(schemaId: SchemaReadModelRootId, schemaCommandInvoker: SchemaCommandInvoker, schemaEventRepository: SchemaEventRepository);
    ngOnChanges(changes: NgChanges<StructureRowColoringGate>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
