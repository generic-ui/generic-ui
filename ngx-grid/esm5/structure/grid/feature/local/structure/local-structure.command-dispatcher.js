/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandDispatcher } from '../../../../core/api/structure.command-dispatcher';
import { StructureId } from '../../../../core/api/structure.id';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { FilterCommandInvoker } from '../../../../filter/core/api/filter.command-invoker';
import { SourceDispatcher } from '../../../../source/core/domain/source.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { structureGlobalId } from '../../../../core/api/structure.global-id';
import { SchemaTheme } from '../../../../../schema/core/api/schema-theme';
var LocalStructureCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureCommandDispatcher, _super);
    function LocalStructureCommandDispatcher(structureId, compositionId, commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        var _this = _super.call(this, commandDispatcher, structureFilterCommandService, sourceDispatcher) || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.createStructure = /**
     * @return {?}
     */
    function () {
        _super.prototype.createStructure.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.enableVerticalScroll = /**
     * @return {?}
     */
    function () {
        _super.prototype.enableVerticalScroll.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.disableVerticalScroll = /**
     * @return {?}
     */
    function () {
        _super.prototype.disableVerticalScroll.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.scrollToTop = /**
     * @return {?}
     */
    function () {
        _super.prototype.scrollToTop.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        _super.prototype.scrollToBottom.call(this, this.structureId);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.setScrollPosition = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        _super.prototype.setScrollPosition.call(this, position, this.structureId);
    };
    /**
     * @param {?} items
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.setOrigin = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        _super.prototype.setOrigin.call(this, items, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.setFilterConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        _super.prototype.setFilterConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        _super.prototype.setQuickFiltersConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.setRowHeight = /**
     * @param {?} rowHeight
     * @return {?}
     */
    function (rowHeight) {
        _super.prototype.setRowHeight.call(this, rowHeight, this.structureId);
    };
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.setContainerHeight = /**
     * @param {?} rowHeight
     * @return {?}
     */
    function (rowHeight) {
        _super.prototype.setContainerHeight.call(this, rowHeight, this.structureId);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    LocalStructureCommandDispatcher.prototype.setRowHeightBasedOnTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        _super.prototype.setRowHeightBasedOnTheme.call(this, theme, this.structureId);
    };
    LocalStructureCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureCommandDispatcher.ctorParameters = function () { return [
        { type: StructureId },
        { type: CompositionId },
        { type: CommandDispatcher },
        { type: FilterCommandInvoker },
        { type: SourceDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "createStructure", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "enableVerticalScroll", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "disableVerticalScroll", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "scrollToTop", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "scrollToBottom", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "setScrollPosition", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "setOrigin", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "setFilterConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "setQuickFiltersConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "setRowHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "setContainerHeight", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandDispatcher.prototype, "setRowHeightBasedOnTheme", null);
    return LocalStructureCommandDispatcher;
}(StructureCommandDispatcher));
export { LocalStructureCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandDispatcher.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRzFFO0lBQ3FELDJEQUEwQjtJQUU5RSx5Q0FBNkIsV0FBd0IsRUFDakMsYUFBNEIsRUFDN0MsaUJBQW9DLEVBQ3BDLDZCQUFtRCxFQUNuRCxnQkFBa0M7UUFKckMsWUFLQyxrQkFBTSxpQkFBaUIsRUFBRSw2QkFBNkIsRUFBRSxnQkFBZ0IsQ0FBQyxTQUN6RTtRQU40QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFLaEQsQ0FBQzs7OztJQUdELHlEQUFlOzs7SUFBZjtRQUNDLGlCQUFNLGVBQWUsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELDhEQUFvQjs7O0lBQXBCO1FBQ0MsaUJBQU0sb0JBQW9CLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFHRCwrREFBcUI7OztJQUFyQjtRQUNDLGlCQUFNLHFCQUFxQixZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7O0lBR0QscURBQVc7OztJQUFYO1FBQ0MsaUJBQU0sV0FBVyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7O0lBR0Qsd0RBQWM7OztJQUFkO1FBQ0MsaUJBQU0sY0FBYyxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUdELDJEQUFpQjs7OztJQUFqQixVQUFrQixRQUFnQjtRQUNqQyxpQkFBTSxpQkFBaUIsWUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBR0QsbURBQVM7Ozs7SUFBVCxVQUFVLEtBQWlCO1FBQzFCLGlCQUFNLFNBQVMsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUdELHlEQUFlOzs7OztJQUFmLFVBQWdCLE1BQW9CLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDakYsaUJBQU0sZUFBZSxZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7O0lBR0QsK0RBQXFCOzs7OztJQUFyQixVQUFzQixNQUEwQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQzdGLGlCQUFNLHFCQUFxQixZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFHRCxzREFBWTs7OztJQUFaLFVBQWEsU0FBaUI7UUFDN0IsaUJBQU0sWUFBWSxZQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFHRCw0REFBa0I7Ozs7SUFBbEIsVUFBbUIsU0FBaUI7UUFDbkMsaUJBQU0sa0JBQWtCLFlBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUdELGtFQUF3Qjs7OztJQUF4QixVQUF5QixLQUFrQjtRQUMxQyxpQkFBTSx3QkFBd0IsWUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQXJFRCxVQUFVOzs7O2dCQVhGLFdBQVc7Z0JBQ1gsYUFBYTtnQkFKYixpQkFBaUI7Z0JBS2pCLG9CQUFvQjtnQkFDcEIsZ0JBQWdCOztJQW9CeEI7UUFEQyxRQUFROzs7OzBFQUdSO0lBR0Q7UUFEQyxRQUFROzs7OytFQUdSO0lBR0Q7UUFEQyxRQUFROzs7O2dGQUdSO0lBR0Q7UUFEQyxRQUFROzs7O3NFQUdSO0lBR0Q7UUFEQyxRQUFROzs7O3lFQUdSO0lBR0Q7UUFEQyxRQUFROzs7OzRFQUdSO0lBR0Q7UUFEQyxRQUFROztpREFDUSxLQUFLOztvRUFFckI7SUFHRDtRQURDLFFBQVE7O3lEQUMwQyxXQUFXOzswRUFFN0Q7SUFHRDtRQURDLFFBQVE7O3lEQUNzRCxXQUFXOztnRkFFekU7SUFHRDtRQURDLFFBQVE7Ozs7dUVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7NkVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7bUZBR1I7SUFFRixzQ0FBQztDQUFBLEFBdkVELENBQ3FELDBCQUEwQixHQXNFOUU7U0F0RVksK0JBQStCOzs7Ozs7SUFFL0Isc0RBQXlDOzs7OztJQUNsRCx3REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEtdGhlbWUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IEZpbHRlckNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoY29tbWFuZERpc3BhdGNoZXIsIHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLCBzb3VyY2VEaXNwYXRjaGVyKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjcmVhdGVTdHJ1Y3R1cmUoKTogdm9pZCB7XG5cdFx0c3VwZXIuY3JlYXRlU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVuYWJsZVZlcnRpY2FsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZVZlcnRpY2FsU2Nyb2xsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGRpc2FibGVWZXJ0aWNhbFNjcm9sbCgpOiB2b2lkIHtcblx0XHRzdXBlci5kaXNhYmxlVmVydGljYWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0c3VwZXIuc2Nyb2xsVG9Ub3AodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG5cdFx0c3VwZXIuc2Nyb2xsVG9Cb3R0b20odGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRGaWx0ZXJDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Um93SGVpZ2h0KHJvd0hlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Q29udGFpbmVySGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29udGFpbmVySGVpZ2h0KHJvd0hlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJvd0hlaWdodEJhc2VkT25UaGVtZSh0aGVtZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19