import { OnChanges } from '@angular/core';
import { StructureId } from '../../../../core/structure/core/api/global/structure.id';
import { Gate } from '../../../../feature/common/cdk/component/gate';
import { FieldConfig } from '../../../../core/structure/field/api/config/field.config';
import { FieldPublisher } from '../../../../core/structure/field/api/field.publisher';
import { NgChanges } from '../../../../feature/common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class ListViewFieldGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly fieldCommandDispatcher;
    fields: Array<FieldConfig>;
    constructor(structureId: StructureId, fieldCommandDispatcher: FieldPublisher);
    ngOnChanges(changes: NgChanges<ListViewFieldGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewFieldGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewFieldGate, "gui-list-view[fields]", never, { "fields": "fields"; }, {}, never>;
}
