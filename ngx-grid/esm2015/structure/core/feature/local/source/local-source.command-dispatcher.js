/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { SourceCommandInvoker } from '../../../../source/domain-api/source.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { SourceDispatcher } from '../../../../source/domain/source.dispatcher';
import { SourceWarehouse } from '../../../../source/domain-api/source.warehouse';
import { StructureEditSourceItemParams } from '../../../../source/domain/origin/edit/structure.edit-source-item.params';
import { FieldWarehouse } from '../../../../field/domain-api/field.warehouse';
import { CommandDispatcher } from '@generic-ui/hermes';
export class LocalSourceCommandDispatcher extends SourceCommandInvoker {
    /**
     * @param {?} structureId
     * @param {?} commandDispatcher
     * @param {?} sourceDispatcher
     * @param {?} fieldWarehouse
     * @param {?} sourceReadModelService
     */
    constructor(structureId, commandDispatcher, sourceDispatcher, fieldWarehouse, sourceReadModelService) {
        super(commandDispatcher, sourceDispatcher, fieldWarehouse, sourceReadModelService);
        this.structureId = structureId;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setOrigin(items) {
        super.setOrigin(items, this.structureId);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    setLoading(enabled) {
        super.setLoading(enabled, this.structureId);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    editItem(params) {
        super.editItem(params, this.structureId);
    }
    /**
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @return {?}
     */
    editItemByIndex(itemIndex, fieldIndex, value) {
        super.editItemByIndex(itemIndex, fieldIndex, value, this.structureId);
    }
}
LocalSourceCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSourceCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: CommandDispatcher },
    { type: SourceDispatcher },
    { type: FieldWarehouse },
    { type: SourceWarehouse }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSourceCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9zb3VyY2UvbG9jYWwtc291cmNlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDeEgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXZELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxvQkFBb0I7Ozs7Ozs7O0lBRXJFLFlBQTZCLFdBQXdCLEVBQ2xELGlCQUFvQyxFQUNwQyxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsc0JBQXVDO1FBQ3pDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUx2RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQU1yRCxDQUFDOzs7OztJQUdELFNBQVMsQ0FBQyxLQUFpQjtRQUMxQixLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBR0QsUUFBUSxDQUFDLE1BQXFDO1FBQzdDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7O0lBR0QsZUFBZSxDQUFDLFNBQWlCLEVBQUUsVUFBa0IsRUFBRSxLQUFVO1FBQ2hFLEtBQUssQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7OztZQTdCRCxVQUFVOzs7O1lBUkYsV0FBVztZQUtYLGlCQUFpQjtZQUpqQixnQkFBZ0I7WUFHaEIsY0FBYztZQUZkLGVBQWU7O0FBa0J2QjtJQURDLFFBQVE7OzZDQUNRLEtBQUs7OzZEQUVyQjtBQUdEO0lBREMsUUFBUTs7Ozs4REFHUjtBQUdEO0lBREMsUUFBUTs7NkNBQ1EsNkJBQTZCOzs0REFFN0M7QUFHRDtJQURDLFFBQVE7Ozs7bUVBR1I7Ozs7OztJQTFCVyxtREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU291cmNlQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTb3VyY2VDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcixcblx0XHRcdFx0ZmllbGRXYXJlaG91c2U6IEZpZWxkV2FyZWhvdXNlLFxuXHRcdFx0XHRzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTb3VyY2VXYXJlaG91c2UpIHtcblx0XHRzdXBlcihjb21tYW5kRGlzcGF0Y2hlciwgc291cmNlRGlzcGF0Y2hlciwgZmllbGRXYXJlaG91c2UsIHNvdXJjZVJlYWRNb2RlbFNlcnZpY2UpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdHN1cGVyLnNldE9yaWdpbihpdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0TG9hZGluZyhlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0TG9hZGluZyhlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zKTogdm9pZCB7XG5cdFx0c3VwZXIuZWRpdEl0ZW0ocGFyYW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdHN1cGVyLmVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXgsIGZpZWxkSW5kZXgsIHZhbHVlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=