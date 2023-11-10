import { OnChanges } from '@angular/core';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { Gate } from '../../../../../feature/common/component/src/gate';
import { FieldConfig } from '../../../../../core/structure/field/src/api/config/field.config';
import { FieldPublisher } from '../../../../../core/structure/field/src/api/field.publisher';
import { NgChanges } from '../../../../../feature/common/component/src/ng-changes';
import * as i0 from "@angular/core";
export declare class ListViewFieldGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly fieldCommandDispatcher;
    fields: Array<FieldConfig>;
    constructor(structureId: StructureId, fieldCommandDispatcher: FieldPublisher);
    ngOnChanges(changes: NgChanges<ListViewFieldGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewFieldGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewFieldGate, "gui-list-view[fields]", never, { "fields": { "alias": "fields"; "required": false; }; }, {}, never, never, false, never>;
}
