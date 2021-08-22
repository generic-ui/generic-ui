/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaDispatcher } from '../../../../../schema/core/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/core/api/theme/schema-theme';
import { StructureCommandInvoker } from '../../../../core/api/structure.command-invoker';
import { SchemaDomainCommandInvoker } from '../../../../../schema/core/domain/schema.domain-command-invoker';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../../core/domain/structure.id';
import { RowColoring } from '../../../../../schema/core/api/row-coloring/row-coloring';
import { FabricModalThemeService } from '@generic-ui/fabric';
export class LocalSchemaCommandDispatcher extends SchemaDomainCommandInvoker {
    /**
     * @param {?} schemaReadModelRootId
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} schemaDispatcher
     * @param {?} fabricModalThemeService
     */
    constructor(schemaReadModelRootId, structureId, structureCommandService, schemaDispatcher, fabricModalThemeService) {
        super(schemaDispatcher, structureCommandService, fabricModalThemeService);
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    create() {
        super.create(this.schemaReadModelRootId);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        super.setTheme(theme, this.schemaReadModelRootId, this.structureId);
    }
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    setRowColoring(rowColoring) {
        super.setRowColoring(rowColoring, this.schemaReadModelRootId);
    }
    /**
     * @param {?} verticalGrid
     * @return {?}
     */
    setVerticalGrid(verticalGrid) {
        super.setVerticalGrid(verticalGrid, this.schemaReadModelRootId);
    }
    /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid) {
        super.setHorizontalGrid(horizontalGrid, this.schemaReadModelRootId);
    }
}
LocalSchemaCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaCommandDispatcher.ctorParameters = () => [
    { type: SchemaReadModelRootId },
    { type: StructureId },
    { type: StructureCommandInvoker },
    { type: SchemaDispatcher },
    { type: FabricModalThemeService }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "create", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "setTheme", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "setRowColoring", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "setVerticalGrid", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalSchemaCommandDispatcher.prototype, "setHorizontalGrid", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandDispatcher.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    LocalSchemaCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRTdHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTdELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSwwQkFBMEI7Ozs7Ozs7O0lBRTNFLFlBQTZCLHFCQUE0QyxFQUNyRCxXQUF3QixFQUN6Qyx1QkFBZ0QsRUFDaEQsZ0JBQWtDLEVBQ2xDLHVCQUFnRDtRQUNsRCxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUw5QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBSzVDLENBQUM7Ozs7SUFHRCxNQUFNO1FBQ0wsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELFFBQVEsQ0FBQyxLQUFrQjtRQUMxQixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBR0QsY0FBYyxDQUFDLFdBQXdCO1FBQ3RDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBR0QsZUFBZSxDQUFDLFlBQXFCO1FBQ3BDLEtBQUssQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBR0QsaUJBQWlCLENBQUMsY0FBdUI7UUFDeEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUFsQ0QsVUFBVTs7OztZQVhGLHFCQUFxQjtZQU1yQixXQUFXO1lBSlgsdUJBQXVCO1lBSHZCLGdCQUFnQjtZQVNoQix1QkFBdUI7O0FBZS9CO0lBREMsUUFBUTs7OzswREFHUjtBQUdEO0lBREMsUUFBUTs7Ozs0REFHUjtBQUdEO0lBREMsUUFBUTs7OztrRUFHUjtBQUdEO0lBREMsUUFBUTs7OzttRUFHUjtBQUdEO0lBREMsUUFBUTs7OztxRUFHUjs7Ozs7O0lBL0JXLDZEQUE2RDs7Ozs7SUFDdEUsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hRG9tYWluQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4vc2NoZW1hLmRvbWFpbi1jb21tYW5kLWludm9rZXInO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFNjaGVtYURvbWFpbkNvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzY2hlbWFEaXNwYXRjaGVyOiBTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdFx0XHRmYWJyaWNNb2RhbFRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcihzY2hlbWFEaXNwYXRjaGVyLCBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZSwgZmFicmljTW9kYWxUaGVtZVNlcnZpY2UpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNyZWF0ZSgpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGUodGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFRoZW1lKHRoZW1lLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Um93Q29sb3Jpbmcocm93Q29sb3JpbmcsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG59XG4iXX0=