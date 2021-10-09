/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../core/api/structure.id';
import { Gate } from '../../../../common/cdk/component/gate';
import { SortingCommandInvoker } from '../../core/api/sorting.command-invoker';
var StructureSortingGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSortingGate, _super);
    function StructureSortingGate(structureId, sortingCommandInvoker) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.sortingCommandInvoker = sortingCommandInvoker;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureSortingGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('sorting', changes)) {
            /** @type {?} */
            var sorting = void 0;
            if (typeof this.sorting === 'boolean') {
                sorting = {
                    enabled: this.sorting
                };
            }
            else {
                sorting = this.sorting;
            }
            this.sortingCommandInvoker.setSortingConfig(sorting, this.structureId);
        }
    };
    StructureSortingGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[sorting]'
                },] }
    ];
    /** @nocollapse */
    StructureSortingGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: SortingCommandInvoker }
    ]; };
    StructureSortingGate.propDecorators = {
        sorting: [{ type: Input }]
    };
    return StructureSortingGate;
}(Gate));
export { StructureSortingGate };
if (false) {
    /** @type {?} */
    StructureSortingGate.prototype.sorting;
    /**
     * @type {?}
     * @private
     */
    StructureSortingGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSortingGate.prototype.sortingCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXNvcnRpbmcuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvcnRpbmcvZmVhdHVyZS9nYXRlL3N0cnVjdHVyZS1zb3J0aW5nLmdhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUU1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRy9FO0lBRzBDLGdEQUFJO0lBSzdDLDhCQUE2QixXQUF3QixFQUNqQyxxQkFBNEM7UUFEaEUsWUFFQyxpQkFBTyxTQUNQO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDJCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7O0lBRWhFLENBQUM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXdDO1FBRW5ELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUU7O2dCQUVuQyxPQUFPLFNBQWU7WUFFMUIsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN0QyxPQUFPLEdBQUc7b0JBQ1QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2lCQUNyQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7WUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2RTtJQUVGLENBQUM7O2dCQTlCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbEM7Ozs7Z0JBVFEsV0FBVztnQkFJWCxxQkFBcUI7OzswQkFRNUIsS0FBSzs7SUEwQlAsMkJBQUM7Q0FBQSxBQS9CRCxDQUcwQyxJQUFJLEdBNEI3QztTQTVCWSxvQkFBb0I7OztJQUVoQyx1Q0FDaUM7Ozs7O0lBRXJCLDJDQUF5Qzs7Ozs7SUFDbEQscURBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3NvcnRpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTb3J0aW5nR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc6IGJvb2xlYW4gfCBTb3J0aW5nQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRpbmdDb21tYW5kSW52b2tlcjogU29ydGluZ0NvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVTb3J0aW5nR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnc29ydGluZycsIGNoYW5nZXMpKSB7XG5cblx0XHRcdGxldCBzb3J0aW5nOiBTb3J0aW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc29ydGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHNvcnRpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zb3J0aW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzb3J0aW5nID0gdGhpcy5zb3J0aW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnNvcnRpbmdDb21tYW5kSW52b2tlci5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=