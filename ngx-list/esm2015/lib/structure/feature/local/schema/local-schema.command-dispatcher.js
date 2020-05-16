/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaDispatcher } from '../../../../../schema/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandDispatcher } from '../../../../../schema/domain-api/schema.command-dispatcher';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../domain/structure.id';
import { RowColoring } from '../../../../../schema/domain-api/row-coloring';
export class LocalSchemaCommandDispatcher extends SchemaCommandDispatcher {
    /**
     * @param {?} schemaReadModelRootId
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} schemaDispatcher
     */
    constructor(schemaReadModelRootId, structureId, structureCommandService, schemaDispatcher) {
        super(schemaDispatcher, structureCommandService);
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
    { type: StructureCommandDispatcher },
    { type: SchemaDispatcher }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3NjaGVtYS9sb2NhbC1zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNsRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDOUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFckcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFOUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFJNUUsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHVCQUF1Qjs7Ozs7OztJQUV4RSxZQUE2QixxQkFBNEMsRUFDckQsV0FBd0IsRUFDekMsdUJBQW1ELEVBQ25ELGdCQUFrQztRQUNwQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUpyQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBSTVDLENBQUM7Ozs7SUFHRCxNQUFNO1FBQ0wsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUdELFFBQVEsQ0FBQyxLQUFrQjtRQUMxQixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBR0QsY0FBYyxDQUFDLFdBQXdCO1FBQ3RDLEtBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBR0QsZUFBZSxDQUFDLFlBQXFCO1FBQ3BDLEtBQUssQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBR0QsaUJBQWlCLENBQUMsY0FBdUI7UUFDeEMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUFqQ0QsVUFBVTs7OztZQVhGLHFCQUFxQjtZQU9yQixXQUFXO1lBSFgsMEJBQTBCO1lBTDFCLGdCQUFnQjs7QUF1QnhCO0lBREMsUUFBUTs7OzswREFHUjtBQUdEO0lBREMsUUFBUTs7Ozs0REFHUjtBQUdEO0lBREMsUUFBUTs7OztrRUFHUjtBQUdEO0lBREMsUUFBUTs7OzttRUFHUjtBQUdEO0lBREMsUUFBUTs7OztxRUFHUjs7Ozs7O0lBOUJXLDZEQUE2RDs7Ozs7SUFDdEUsbURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTY2hlbWFEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9zY2hlbWEuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL2NvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yb3ctY29sb3JpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHNjaGVtYURpc3BhdGNoZXI6IFNjaGVtYURpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihzY2hlbWFEaXNwYXRjaGVyLCBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlKCk6IHZvaWQge1xuXHRcdHN1cGVyLmNyZWF0ZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0VGhlbWUodGhlbWUsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cbn1cbiJdfQ==