/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SchemaDispatcher } from '../../../../../schema/core/domain/schema.dispatcher';
import { SchemaReadModelRootId } from '../../../../../schema/core/domain-read/schema.read-model-root-id';
import { SchemaTheme } from '../../../../../schema/core/api/schema-theme';
import { SchemaCommandInvoker } from '../../../../../schema/core/api/schema.command-invoker';
import { StructureCommandDispatcher } from '../../../../core/api/structure.command-dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureId } from '../../../../core/api/structure.id';
import { RowColoring } from '../../../../../schema/core/api/row-coloring';
var LocalSchemaCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalSchemaCommandDispatcher, _super);
    function LocalSchemaCommandDispatcher(schemaReadModelRootId, structureId, structureCommandService, schemaDispatcher) {
        var _this = _super.call(this, schemaDispatcher, structureCommandService) || this;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.create = /**
     * @return {?}
     */
    function () {
        _super.prototype.create.call(this, this.schemaReadModelRootId);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        _super.prototype.setTheme.call(this, theme, this.schemaReadModelRootId, this.structureId);
    };
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.setRowColoring = /**
     * @param {?} rowColoring
     * @return {?}
     */
    function (rowColoring) {
        _super.prototype.setRowColoring.call(this, rowColoring, this.schemaReadModelRootId);
    };
    /**
     * @param {?} verticalGrid
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.setVerticalGrid = /**
     * @param {?} verticalGrid
     * @return {?}
     */
    function (verticalGrid) {
        _super.prototype.setVerticalGrid.call(this, verticalGrid, this.schemaReadModelRootId);
    };
    /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    LocalSchemaCommandDispatcher.prototype.setHorizontalGrid = /**
     * @param {?} horizontalGrid
     * @return {?}
     */
    function (horizontalGrid) {
        _super.prototype.setHorizontalGrid.call(this, horizontalGrid, this.schemaReadModelRootId);
    };
    LocalSchemaCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalSchemaCommandDispatcher.ctorParameters = function () { return [
        { type: SchemaReadModelRootId },
        { type: StructureId },
        { type: StructureCommandDispatcher },
        { type: SchemaDispatcher }
    ]; };
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
    return LocalSchemaCommandDispatcher;
}(SchemaCommandInvoker));
export { LocalSchemaCommandDispatcher };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDekcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRS9GLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzFFO0lBQ2tELHdEQUFvQjtJQUVyRSxzQ0FBNkIscUJBQTRDLEVBQ3JELFdBQXdCLEVBQ3pDLHVCQUFtRCxFQUNuRCxnQkFBa0M7UUFIckMsWUFJQyxrQkFBTSxnQkFBZ0IsRUFBRSx1QkFBdUIsQ0FBQyxTQUNoRDtRQUw0QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQ3JELGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUk1QyxDQUFDOzs7O0lBR0QsNkNBQU07OztJQUFOO1FBQ0MsaUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7O0lBR0QsK0NBQVE7Ozs7SUFBUixVQUFTLEtBQWtCO1FBQzFCLGlCQUFNLFFBQVEsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7OztJQUdELHFEQUFjOzs7O0lBQWQsVUFBZSxXQUF3QjtRQUN0QyxpQkFBTSxjQUFjLFlBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7O0lBR0Qsc0RBQWU7Ozs7SUFBZixVQUFnQixZQUFxQjtRQUNwQyxpQkFBTSxlQUFlLFlBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7O0lBR0Qsd0RBQWlCOzs7O0lBQWpCLFVBQWtCLGNBQXVCO1FBQ3hDLGlCQUFNLGlCQUFpQixZQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnQkFqQ0QsVUFBVTs7OztnQkFWRixxQkFBcUI7Z0JBTXJCLFdBQVc7Z0JBSFgsMEJBQTBCO2dCQUoxQixnQkFBZ0I7O0lBc0J4QjtRQURDLFFBQVE7Ozs7OERBR1I7SUFHRDtRQURDLFFBQVE7Ozs7Z0VBR1I7SUFHRDtRQURDLFFBQVE7Ozs7c0VBR1I7SUFHRDtRQURDLFFBQVE7Ozs7dUVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7eUVBR1I7SUFFRixtQ0FBQztDQUFBLEFBbkNELENBQ2tELG9CQUFvQixHQWtDckU7U0FsQ1ksNEJBQTRCOzs7Ozs7SUFFNUIsNkRBQTZEOzs7OztJQUN0RSxtREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9kb21haW4vc2NoZW1hLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9yb3ctY29sb3JpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU2NoZW1hQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHNjaGVtYURpc3BhdGNoZXI6IFNjaGVtYURpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihzY2hlbWFEaXNwYXRjaGVyLCBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlKCk6IHZvaWQge1xuXHRcdHN1cGVyLmNyZWF0ZSh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0VGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0VGhlbWUodGhlbWUsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cbn1cbiJdfQ==