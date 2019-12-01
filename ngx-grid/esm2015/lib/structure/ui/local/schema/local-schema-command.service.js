/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaCommandService } from '../../../app/schema/schema-command.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaQueryService } from '../../../app/schema/schema-query.service';
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
    { type: SchemaQueryService },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFJL0UsTUFBTSxPQUFPLHlCQUEwQixTQUFRLG9CQUFvQjs7Ozs7O0lBRWxFLFlBQW9CLFdBQXdCLEVBQ3pDLGtCQUFzQyxFQUN0QyxnQkFBa0M7UUFDcEMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFIekIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFJNUMsQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNmLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7SUFHRCxTQUFTLENBQUMsTUFBYyxFQUFFLGNBQTJCLGlCQUFpQjtRQUNyRSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsTUFBYztRQUN2QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFHRCxrQkFBa0IsQ0FBQyxPQUFnQjtRQUNsQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUdELG9CQUFvQixDQUFDLE9BQWdCO1FBQ3BDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFHRCxrQkFBa0I7UUFDakIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBR0Qsb0JBQW9CO1FBQ25CLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFHRCxRQUFRLENBQUMsS0FBa0I7UUFDMUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQUdELGNBQWMsQ0FBQyxRQUEyQixFQUFFLGNBQTJCLGlCQUFpQjtRQUN2RixLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBR0QsZUFBZSxDQUFDLE9BQWdCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzdFLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFHRCxrQkFBa0IsQ0FBQyxPQUFnQixFQUFFLGNBQTJCLGlCQUFpQjtRQUNoRixLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7O0lBR0QsZUFBZTtRQUNkLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFHRCxrQkFBa0I7UUFDakIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUF2RUQsVUFBVTs7OztZQVRGLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsZ0JBQWdCOztBQXFCeEI7SUFEQyxRQUFROztxREFDOEIsV0FBVzs7MERBRWpEO0FBR0Q7SUFEQyxRQUFROzs7OzBEQUdSO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3FFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3FFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3lEQUdSO0FBR0Q7SUFEQyxRQUFROztxREFDZ0QsV0FBVzs7K0RBRW5FO0FBR0Q7SUFEQyxRQUFROztzREFDc0MsV0FBVzs7Z0VBRXpEO0FBR0Q7SUFEQyxRQUFROztzREFDeUMsV0FBVzs7bUVBRTVEO0FBR0Q7SUFEQyxRQUFROzs7O2dFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSOzs7Ozs7SUFwRVcsZ0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9hcHAvc2NoZW1hL3NjaGVtYS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVF1ZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwcC9zY2hlbWEvc2NoZW1hLXF1ZXJ5LnNlcnZpY2UnO1xuaW1wb3J0IHsgU2NoZW1hRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvY29tbWFuZC9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNjaGVtYUNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgU2NoZW1hQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFRdWVyeVNlcnZpY2U6IFNjaGVtYVF1ZXJ5U2VydmljZSxcblx0XHRcdFx0c2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKHNjaGVtYURpc3BhdGNoZXIsIHNjaGVtYVF1ZXJ5U2VydmljZSk7XG5cdH1cblxuXHRzZXREZWZhdWx0U2NoZW1hKCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNjaGVtYShOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U2NoZW1hKGhlaWdodDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNjaGVtYShoZWlnaHQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHN1cGVyLnNldEhlaWdodChoZWlnaHQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNoYW5nZVZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuY2hhbmdlVmVydGljYWxHcmlkKGVuYWJsZWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNoYW5nZUhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRzdXBlci5jaGFuZ2VIb3Jpem9udGFsR3JpZChlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVWZXJ0aWNhbEdyaWQoKTogdm9pZCB7XG5cdFx0c3VwZXIudG9nZ2xlVmVydGljYWxHcmlkKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZUhvcml6b250YWxHcmlkKCk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZUhvcml6b250YWxHcmlkKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFRoZW1lKHRoZW1lLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSb3dDb2xvcmluZyhjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Um93Q29sb3JpbmcoY29sb3JpbmcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNoYW5nZVRvcEhlYWRlcihlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmNoYW5nZVRvcEhlYWRlcihlbmFibGVkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjaGFuZ2VCb3R0b21IZWFkZXIoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHRzdXBlci5jaGFuZ2VCb3R0b21IZWFkZXIoZW5hYmxlZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0dG9nZ2xlVG9wSGVhZGVyKCk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZVRvcEhlYWRlcih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVCb3R0b21IZWFkZXIoKTogdm9pZCB7XG5cdFx0c3VwZXIudG9nZ2xlQm90dG9tSGVhZGVyKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==