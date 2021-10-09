/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { RowColoring } from '../../../../../../schema/core/api/row-coloring/row-coloring';
import { SchemaCommandInvoker } from '../../../../../../schema/core/api/schema.command-invoker';
import { SchemaEventRepository } from '../../../../../../schema/core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../../../schema/core/api/schema.read-model-root-id';
var StructureRowColoringGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureRowColoringGate, _super);
    function StructureRowColoringGate(schemaId, schemaCommandInvoker, schemaEventRepository) {
        var _this = _super.call(this) || this;
        _this.schemaId = schemaId;
        _this.schemaCommandInvoker = schemaCommandInvoker;
        _this.schemaEventRepository = schemaEventRepository;
        _this.rowColoringChanged = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureRowColoringGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('rowColoring', changes)) {
            this.schemaCommandInvoker.setRowColoring(this.rowColoring, this.schemaId);
        }
    };
    /**
     * @return {?}
     */
    StructureRowColoringGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.subscribeAndEmit(this.schemaEventRepository.onRowColoring(this.schemaId), this.rowColoringChanged);
    };
    /**
     * @return {?}
     */
    StructureRowColoringGate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    StructureRowColoringGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[rowColoring]'
                },] }
    ];
    /** @nocollapse */
    StructureRowColoringGate.ctorParameters = function () { return [
        { type: SchemaReadModelRootId },
        { type: SchemaCommandInvoker },
        { type: SchemaEventRepository }
    ]; };
    StructureRowColoringGate.propDecorators = {
        rowColoring: [{ type: Input }],
        rowColoringChanged: [{ type: Output }]
    };
    return StructureRowColoringGate;
}(Gate));
export { StructureRowColoringGate };
if (false) {
    /** @type {?} */
    StructureRowColoringGate.prototype.rowColoring;
    /** @type {?} */
    StructureRowColoringGate.prototype.rowColoringChanged;
    /**
     * @type {?}
     * @private
     */
    StructureRowColoringGate.prototype.schemaId;
    /**
     * @type {?}
     * @private
     */
    StructureRowColoringGate.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureRowColoringGate.prototype.schemaEventRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1jb2xvcmluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcm93L2NvbG9yaW5nL3N0cnVjdHVyZS1yb3ctY29sb3JpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFFMUYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFHcEc7SUFHOEMsb0RBQUk7SUFRakQsa0NBQTZCLFFBQStCLEVBQ3hDLG9CQUEwQyxFQUMxQyxxQkFBNEM7UUFGaEUsWUFHQyxpQkFBTyxTQUNQO1FBSjRCLGNBQVEsR0FBUixRQUFRLENBQXVCO1FBQ3hDLDBCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsMkJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUpoRSx3QkFBa0IsR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFNekUsQ0FBQzs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksT0FBNEM7UUFFdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzFFO0lBQ0YsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FDcEIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3ZELElBQUksQ0FBQyxrQkFBa0IsQ0FDdkIsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCw4Q0FBVzs7O0lBQVg7UUFDQyxpQkFBTSxXQUFXLFdBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFsQ0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7aUJBQ3RDOzs7O2dCQUxRLHFCQUFxQjtnQkFGckIsb0JBQW9CO2dCQUNwQixxQkFBcUI7Ozs4QkFTNUIsS0FBSztxQ0FHTCxNQUFNOztJQTJCUiwrQkFBQztDQUFBLEFBbkNELENBRzhDLElBQUksR0FnQ2pEO1NBaENZLHdCQUF3Qjs7O0lBRXBDLCtDQUN5Qjs7SUFFekIsc0RBQ3lFOzs7OztJQUU3RCw0Q0FBZ0Q7Ozs7O0lBQ3pELHdEQUEyRDs7Ozs7SUFDM0QseURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L2dhdGUnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dDb2xvcmluZ10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NvbG9yaW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRyb3dDb2xvcmluZzogUm93Q29sb3Jpbmc7XG5cblx0QE91dHB1dCgpXG5cdHJvd0NvbG9yaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFNjaGVtYVJvd0NvbG9yaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUV2ZW50UmVwb3NpdG9yeTogU2NoZW1hRXZlbnRSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVSb3dDb2xvcmluZ0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3Jvd0NvbG9yaW5nJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIuc2V0Um93Q29sb3JpbmcodGhpcy5yb3dDb2xvcmluZywgdGhpcy5zY2hlbWFJZCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN1YnNjcmliZUFuZEVtaXQoXG5cdFx0XHR0aGlzLnNjaGVtYUV2ZW50UmVwb3NpdG9yeS5vblJvd0NvbG9yaW5nKHRoaXMuc2NoZW1hSWQpLFxuXHRcdFx0dGhpcy5yb3dDb2xvcmluZ0NoYW5nZWRcblx0XHQpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0c3VwZXIubmdPbkRlc3Ryb3koKTtcblx0fVxufVxuIl19