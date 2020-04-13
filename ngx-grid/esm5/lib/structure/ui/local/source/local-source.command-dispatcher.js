/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceCommandDispatcher } from '../../../ui-api/source/source.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { StructureFieldUiRepository } from '../../../ui-api/field/structure.field.ui-repository';
import { StructureSourceWarehouse } from '../../../ui-api/source/structure-source.warehouse';
import { StructureEditSourceItemParams } from '../../../domain/source/origin/edit/structure.edit-source-item.params';
var LocalSourceCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSourceCommandDispatcher, _super);
    function LocalSourceCommandDispatcher(structureId, sourceDispatcher, structureFieldUiRepository, sourceReadModelService) {
        var _this = _super.call(this, sourceDispatcher, structureFieldUiRepository, sourceReadModelService) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    LocalSourceCommandDispatcher.prototype.setOrigin = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        _super.prototype.setOrigin.call(this, items, this.structureId);
    };
    /**
     * @param {?} enabled
     * @return {?}
     */
    LocalSourceCommandDispatcher.prototype.setLoading = /**
     * @param {?} enabled
     * @return {?}
     */
    function (enabled) {
        _super.prototype.setLoading.call(this, enabled, this.structureId);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    LocalSourceCommandDispatcher.prototype.editItem = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        _super.prototype.editItem.call(this, params, this.structureId);
    };
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    LocalSourceCommandDispatcher.prototype.editItemByIndex = /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    function (itemIndex, fieldIndex, value) {
        _super.prototype.editItemByIndex.call(this, itemIndex, fieldIndex, value, this.structureId);
    };
    LocalSourceCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSourceCommandDispatcher.ctorParameters = function () { return [
        { type: StructureId },
        { type: SourceDispatcher },
        { type: StructureFieldUiRepository },
        { type: StructureSourceWarehouse }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSourceCommandDispatcher.prototype, "setOrigin", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Boolean]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSourceCommandDispatcher.prototype, "setLoading", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [StructureEditSourceItemParams]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSourceCommandDispatcher.prototype, "editItem", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number, Number, Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalSourceCommandDispatcher.prototype, "editItemByIndex", null);
    return LocalSourceCommandDispatcher;
}(SourceCommandDispatcher));
export { LocalSourceCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUdySDtJQUNrRCx3REFBdUI7SUFFeEUsc0NBQTZCLFdBQXdCLEVBQ2xELGdCQUFrQyxFQUNsQywwQkFBc0QsRUFDdEQsc0JBQWdEO1FBSG5ELFlBSUMsa0JBQU0sZ0JBQWdCLEVBQUUsMEJBQTBCLEVBQUUsc0JBQXNCLENBQUMsU0FDM0U7UUFMNEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7O0lBS3JELENBQUM7Ozs7O0lBR0QsZ0RBQVM7Ozs7SUFBVCxVQUFVLEtBQWlCO1FBQzFCLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsaURBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQzFCLGlCQUFNLFVBQVUsWUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsK0NBQVE7Ozs7SUFBUixVQUFTLE1BQXFDO1FBQzdDLGlCQUFNLFFBQVEsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7Ozs7SUFHRCxzREFBZTs7Ozs7O0lBQWYsVUFBZ0IsU0FBaUIsRUFBRSxVQUFrQixFQUFFLEtBQVU7UUFDaEUsaUJBQU0sZUFBZSxZQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDOztnQkE1QkQsVUFBVTs7OztnQkFQRixXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsMEJBQTBCO2dCQUMxQix3QkFBd0I7O0lBZWhDO1FBREMsUUFBUTs7aURBQ1EsS0FBSzs7aUVBRXJCO0lBR0Q7UUFEQyxRQUFROzs7O2tFQUdSO0lBR0Q7UUFEQyxRQUFROztpREFDUSw2QkFBNkI7O2dFQUU3QztJQUdEO1FBREMsUUFBUTs7Ozt1RUFHUjtJQUVGLG1DQUFDO0NBQUEsQUE5QkQsQ0FDa0QsdUJBQXVCLEdBNkJ4RTtTQTdCWSw0QkFBNEI7Ozs7OztJQUU1QixtREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU291cmNlQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZUZpZWxkVWlSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSxcblx0XHRcdFx0c291cmNlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoc291cmNlRGlzcGF0Y2hlciwgc3RydWN0dXJlRmllbGRVaVJlcG9zaXRvcnksIHNvdXJjZVJlYWRNb2RlbFNlcnZpY2UpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdHN1cGVyLnNldE9yaWdpbihpdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0TG9hZGluZyhlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogdm9pZCB7XG5cdFx0c3VwZXIuZWRpdEl0ZW0ocGFyYW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHN1cGVyLmVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXgsIGZpZWxkSW5kZXgsIHZhbHVlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=