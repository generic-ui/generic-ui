import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Gate } from '../../../../../../../feature/common/component/src/gate';
import { RowColoring } from '../../../../../../../core/schema/src/api/row-coloring/row-coloring';
import { SchemaRowColoring } from '../../../../../../../core/schema/src/api/row-coloring/schema-row-coloring';
import { SchemaPublisher } from '../../../../../../../core/schema/src/api/schema.publisher';
import { SchemaEventRepository } from '../../../../../../../core/schema/src/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { NgChanges } from '../../../../../../../feature/common/component/src/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureRowColoringGate extends Gate implements OnChanges, OnInit, OnDestroy {
    private readonly schemaId;
    private readonly schemaCommandInvoker;
    private readonly schemaEventRepository;
    rowColoring: RowColoring;
    rowColoringChanged: EventEmitter<SchemaRowColoring>;
    constructor(schemaId: SchemaReadModelRootId, schemaCommandInvoker: SchemaPublisher, schemaEventRepository: SchemaEventRepository);
    ngOnChanges(changes: NgChanges<StructureRowColoringGate>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowColoringGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureRowColoringGate, "gui-structure[rowColoring]", never, { "rowColoring": { "alias": "rowColoring"; "required": false; }; }, { "rowColoringChanged": "rowColoringChanged"; }, never, never, false, never>;
}
