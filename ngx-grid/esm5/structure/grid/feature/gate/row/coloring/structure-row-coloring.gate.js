/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { RowColoring } from '../../../../../../schema/core/api/row-coloring';
import { SchemaCommandInvoker } from '../../../../../../schema/core/api/schema.command-invoker';
import { SchemaEventRepository } from '../../../../../../schema/core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../../../schema/core/domain-read/schema.read-model-root-id';
import { StreamCloser } from '../../../../../../common/cdk/reactive/stream-closer';
var StructureRowColoringGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureRowColoringGate, _super);
    function StructureRowColoringGate(schemaId, schemaCommandInvoker, schemaEventRepository) {
        var _this = _super.call(this) || this;
        _this.schemaId = schemaId;
        _this.schemaCommandInvoker = schemaCommandInvoker;
        _this.schemaEventRepository = schemaEventRepository;
        _this.rowColoringChanged = new EventEmitter();
        _this.localStreamCloser = new StreamCloser();
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
            this.schemaCommandInvoker.setRowColoring(this.rowColoring);
        }
    };
    /**
     * @return {?}
     */
    StructureRowColoringGate.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.schemaEventRepository
            .onRowColoring(this.schemaId)
            .pipe(this.localStreamCloser.takeUntil())
            .subscribe((/**
         * @param {?} coloring
         * @return {?}
         */
        function (coloring) {
            _this.rowColoringChanged.emit(coloring);
        }));
    };
    /**
     * @return {?}
     */
    StructureRowColoringGate.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.localStreamCloser.unsubscribe();
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
    StructureRowColoringGate.prototype.localStreamCloser;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1jb2xvcmluZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcm93L2NvbG9yaW5nL3N0cnVjdHVyZS1yb3ctY29sb3JpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBZ0MsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDNUcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBR25GO0lBRzhDLG9EQUFJO0lBVWpELGtDQUE2QixRQUErQixFQUN4QyxvQkFBMEMsRUFDMUMscUJBQTRDO1FBRmhFLFlBR0MsaUJBQU8sU0FDUDtRQUo0QixjQUFRLEdBQVIsUUFBUSxDQUF1QjtRQUN4QywwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFOaEUsd0JBQWtCLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUFFeEQsdUJBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQzs7SUFNeEQsQ0FBQzs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksT0FBNEM7UUFFdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMzRDtJQUNGLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVJBLElBQUksQ0FBQyxxQkFBcUI7YUFDeEIsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDNUIsSUFBSSxDQUNKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FDbEM7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxRQUEyQjtZQUN0QyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDhDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN0QyxDQUFDOztnQkF4Q0QsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSw0QkFBNEI7aUJBQ3RDOzs7O2dCQU5RLHFCQUFxQjtnQkFGckIsb0JBQW9CO2dCQUNwQixxQkFBcUI7Ozs4QkFVNUIsS0FBSztxQ0FHTCxNQUFNOztJQWlDUiwrQkFBQztDQUFBLEFBekNELENBRzhDLElBQUksR0FzQ2pEO1NBdENZLHdCQUF3Qjs7O0lBRXBDLCtDQUN5Qjs7SUFFekIsc0RBQ3lFOzs7OztJQUV6RSxxREFBd0Q7Ozs7O0lBRTVDLDRDQUFnRDs7Ozs7SUFDekQsd0RBQTJEOzs7OztJQUMzRCx5REFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYUV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUvc3RyZWFtLWNsb3Nlcic7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtyb3dDb2xvcmluZ10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVJvd0NvbG9yaW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuXHRASW5wdXQoKVxuXHRyb3dDb2xvcmluZzogUm93Q29sb3Jpbmc7XG5cblx0QE91dHB1dCgpXG5cdHJvd0NvbG9yaW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPFNjaGVtYVJvd0NvbG9yaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGxvY2FsU3RyZWFtQ2xvc2VyID0gbmV3IFN0cmVhbUNsb3NlcigpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRXZlbnRSZXBvc2l0b3J5OiBTY2hlbWFFdmVudFJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVJvd0NvbG9yaW5nR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncm93Q29sb3JpbmcnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc2NoZW1hRXZlbnRSZXBvc2l0b3J5XG5cdFx0XHQub25Sb3dDb2xvcmluZyh0aGlzLnNjaGVtYUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnJvd0NvbG9yaW5nQ2hhbmdlZC5lbWl0KGNvbG9yaW5nKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5sb2NhbFN0cmVhbUNsb3Nlci51bnN1YnNjcmliZSgpO1xuXHR9XG59XG4iXX0=