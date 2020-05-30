/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { StructureFilterCommandDispatcher } from '../../../domain-api/filter/structure-filter.command-dispatcher';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { structureGlobalId } from '../../../domain-api/structure.global-id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
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
        { type: StructureFilterCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3N0cnVjdHVyZS9sb2NhbC1zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUc1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFHOUU7SUFDcUQsMkRBQTBCO0lBRTlFLHlDQUE2QixXQUF3QixFQUNqQyxhQUE0QixFQUM3QyxpQkFBb0MsRUFDcEMsNkJBQStELEVBQy9ELGdCQUFrQztRQUpyQyxZQUtDLGtCQUFNLGlCQUFpQixFQUFFLDZCQUE2QixFQUFFLGdCQUFnQixDQUFDLFNBQ3pFO1FBTjRCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLG1CQUFhLEdBQWIsYUFBYSxDQUFlOztJQUtoRCxDQUFDOzs7O0lBR0QseURBQWU7OztJQUFmO1FBQ0MsaUJBQU0sZUFBZSxZQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBR0QsOERBQW9COzs7SUFBcEI7UUFDQyxpQkFBTSxvQkFBb0IsWUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQUdELCtEQUFxQjs7O0lBQXJCO1FBQ0MsaUJBQU0scUJBQXFCLFlBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBR0QsMkRBQWlCOzs7O0lBQWpCLFVBQWtCLFFBQWdCO1FBQ2pDLGlCQUFNLGlCQUFpQixZQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7SUFHRCxtREFBUzs7OztJQUFULFVBQVUsS0FBaUI7UUFDMUIsaUJBQU0sU0FBUyxZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBR0QseURBQWU7Ozs7O0lBQWYsVUFBZ0IsTUFBb0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNqRixpQkFBTSxlQUFlLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFHRCwrREFBcUI7Ozs7O0lBQXJCLFVBQXNCLE1BQTBCLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDN0YsaUJBQU0scUJBQXFCLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUdELHNEQUFZOzs7O0lBQVosVUFBYSxTQUFpQjtRQUM3QixpQkFBTSxZQUFZLFlBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUdELDREQUFrQjs7OztJQUFsQixVQUFtQixTQUFpQjtRQUNuQyxpQkFBTSxrQkFBa0IsWUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBR0Qsa0VBQXdCOzs7O0lBQXhCLFVBQXlCLEtBQWtCO1FBQzFDLGlCQUFNLHdCQUF3QixZQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBM0RELFVBQVU7Ozs7Z0JBWEYsV0FBVztnQkFDWCxhQUFhO2dCQUpiLGlCQUFpQjtnQkFLakIsZ0NBQWdDO2dCQUNoQyxnQkFBZ0I7O0lBb0J4QjtRQURDLFFBQVE7Ozs7MEVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7K0VBR1I7SUFHRDtRQURDLFFBQVE7Ozs7Z0ZBR1I7SUFHRDtRQURDLFFBQVE7Ozs7NEVBR1I7SUFHRDtRQURDLFFBQVE7O2lEQUNRLEtBQUs7O29FQUVyQjtJQUdEO1FBREMsUUFBUTs7eURBQzBDLFdBQVc7OzBFQUU3RDtJQUdEO1FBREMsUUFBUTs7eURBQ3NELFdBQVc7O2dGQUV6RTtJQUdEO1FBREMsUUFBUTs7Ozt1RUFHUjtJQUdEO1FBREMsUUFBUTs7Ozs2RUFHUjtJQUdEO1FBREMsUUFBUTs7OzttRkFHUjtJQUVGLHNDQUFDO0NBQUEsQUE3REQsQ0FDcUQsMEJBQTBCLEdBNEQ5RTtTQTVEWSwrQkFBK0I7Ozs7OztJQUUvQixzREFBeUM7Ozs7O0lBQ2xELHdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZmlsdGVyL3N0cnVjdHVyZS1maWx0ZXIuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogU3RydWN0dXJlRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihjb21tYW5kRGlzcGF0Y2hlciwgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UsIHNvdXJjZURpc3BhdGNoZXIpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNyZWF0ZVN0cnVjdHVyZSgpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGVTdHJ1Y3R1cmUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZW5hYmxlVmVydGljYWxTY3JvbGwoKTogdm9pZCB7XG5cdFx0c3VwZXIuZW5hYmxlVmVydGljYWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHN1cGVyLmRpc2FibGVWZXJ0aWNhbFNjcm9sbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24sIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdHN1cGVyLnNldE9yaWdpbihpdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldEZpbHRlckNvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSb3dIZWlnaHQocm93SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb250YWluZXJIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRDb250YWluZXJIZWlnaHQocm93SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=