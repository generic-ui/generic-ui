/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaCommandService } from '../../../ui-api/schema/schema-command.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { SchemaDispatcher } from '../../../domain/schema/command/schema.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
import { SchemaTheme } from '../../../domain/schema/schema-theme';
import { SchemaRowColoring } from '../../../domain/schema/schema-row-coloring';
export class LocalSchemaCommandService extends SchemaCommandService {
    /**
     * @param {?} structureId
     * @param {?} schemaQueryService
     * @param {?} schemaDispatcher
     */
    constructor(structureId, schemaQueryService, schemaDispatcher) {
        super(schemaDispatcher, schemaQueryService);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    setDefaultSchema() {
        super.setSchema(Number.MAX_SAFE_INTEGER, this.structureId);
    }
    /**
     * @param {?} height
     * @param {?=} structureId
     * @return {?}
     */
    setSchema(height, structureId = globalStructureId) {
        super.setSchema(height, this.structureId);
    }
    /**
     * @param {?} height
     * @return {?}
     */
    setHeight(height) {
        super.setHeight(height, this.structureId);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    changeVerticalGrid(enabled) {
        super.changeVerticalGrid(enabled, this.structureId);
    }
    /**
     * @param {?} enabled
     * @return {?}
     */
    changeHorizontalGrid(enabled) {
        super.changeHorizontalGrid(enabled, this.structureId);
    }
    /**
     * @return {?}
     */
    toggleVerticalGrid() {
        super.toggleVerticalGrid(this.structureId);
    }
    /**
     * @return {?}
     */
    toggleHorizontalGrid() {
        super.toggleHorizontalGrid(this.structureId);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        super.setTheme(theme, this.structureId);
    }
    /**
     * @param {?} coloring
     * @param {?=} structureId
     * @return {?}
     */
    setRowColoring(coloring, structureId = globalStructureId) {
        super.setRowColoring(coloring, this.structureId);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeTopHeader(enabled, structureId = globalStructureId) {
        super.changeTopHeader(enabled, this.structureId);
    }
    /**
     * @param {?} enabled
     * @param {?=} structureId
     * @return {?}
     */
    changeBottomHeader(enabled, structureId = globalStructureId) {
        super.changeBottomHeader(enabled, this.structureId);
    }
    /**
     * @return {?}
     */
    toggleTopHeader() {
        super.toggleTopHeader(this.structureId);
    }
    /**
     * @return {?}
     */
    toggleBottomHeader() {
        super.toggleBottomHeader(this.structureId);
    }
}
LocalSchemaCommandService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaCommandService.ctorParameters = () => [
    { type: StructureId },
    { type: SchemaReadModelService },
    { type: SchemaDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, StructureId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "setSchema", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "setHeight", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "changeVerticalGrid", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "changeHorizontalGrid", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "toggleVerticalGrid", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "toggleHorizontalGrid", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "setTheme", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, StructureId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "setRowColoring", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean, StructureId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "changeTopHeader", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean, StructureId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "changeBottomHeader", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "toggleTopHeader", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandService.prototype, "toggleBottomHeader", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFJL0UsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG9CQUFvQjs7Ozs7O0lBRWxFLFlBQW9CLFdBQXdCLEVBQ3pDLGtCQUEwQyxFQUMxQyxnQkFBa0M7UUFDcEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFIekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFJNUMsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFHRCxTQUFTLENBQUMsTUFBYyxFQUFFLGNBQTJCLGlCQUFpQjtRQUNyRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsTUFBYztRQUN2QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxrQkFBa0IsQ0FBQyxPQUFnQjtRQUNsQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUdELG9CQUFvQixDQUFDLE9BQWdCO1FBQ3BDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFHRCxrQkFBa0I7UUFDakIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0Qsb0JBQW9CO1FBQ25CLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBa0I7UUFDMUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUdELGNBQWMsQ0FBQyxRQUEyQixFQUFFLGNBQTJCLGlCQUFpQjtRQUN2RixLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBR0QsZUFBZSxDQUFDLE9BQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzdFLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFHRCxrQkFBa0IsQ0FBQyxPQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUNoRixLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBR0QsZUFBZTtRQUNkLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCxrQkFBa0I7UUFDakIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUF2RUQsVUFBVTs7OztZQVRGLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsZ0JBQWdCOztBQXFCeEI7SUFEQyxRQUFROztxREFDOEIsV0FBVzs7MERBRWpEO0FBR0Q7SUFEQyxRQUFROzs7OzBEQUdSO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3FFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3FFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3lEQUdSO0FBR0Q7SUFEQyxRQUFROztxREFDZ0QsV0FBVzs7K0RBRW5FO0FBR0Q7SUFEQyxRQUFROztzREFDc0MsV0FBVzs7Z0VBRXpEO0FBR0Q7SUFEQyxRQUFROztzREFDeUMsV0FBVzs7bUVBRTVEO0FBR0Q7SUFEQyxRQUFROzs7O2dFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSOzs7Ozs7SUFwRVcsZ0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNjaGVtYUNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgU2NoZW1hQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHNjaGVtYURpc3BhdGNoZXI6IFNjaGVtYURpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihzY2hlbWFEaXNwYXRjaGVyLCBzY2hlbWFRdWVyeVNlcnZpY2UpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFNjaGVtYSgpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTY2hlbWEoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNjaGVtYShoZWlnaHQ6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTY2hlbWEoaGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRIZWlnaHQoaGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHN1cGVyLmNoYW5nZVZlcnRpY2FsR3JpZChlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlSG9yaXpvbnRhbEdyaWQoZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0dG9nZ2xlVmVydGljYWxHcmlkKCk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZVZlcnRpY2FsR3JpZCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVIb3Jpem9udGFsR3JpZCgpOiB2b2lkIHtcblx0XHRzdXBlci50b2dnbGVIb3Jpem9udGFsR3JpZCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRUaGVtZSh0aGVtZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Um93Q29sb3JpbmcoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJvd0NvbG9yaW5nKGNvbG9yaW5nLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VUb3BIZWFkZXIoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHRzdXBlci5jaGFuZ2VUb3BIZWFkZXIoZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y2hhbmdlQm90dG9tSGVhZGVyKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlQm90dG9tSGVhZGVyKGVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZVRvcEhlYWRlcigpOiB2b2lkIHtcblx0XHRzdXBlci50b2dnbGVUb3BIZWFkZXIodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0dG9nZ2xlQm90dG9tSGVhZGVyKCk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZUJvdHRvbUhlYWRlcih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=