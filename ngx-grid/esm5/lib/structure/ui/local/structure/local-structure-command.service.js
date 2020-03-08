/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { StructureId } from '../../../domain/structure-id';
import { CompositionId } from '../../../../composition/domain/composition-id';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { SourceDispatcher } from '../../../domain/source/command/source.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
import { FieldId } from '../../../domain/structure/command/field/data-type/field.id';
import { SortOrder } from '../../../../composition/domain/command/column/sort/sort-order';
import { StructureSearchDispatcher } from '../../../domain/structure/command/search/structure.search.dispatcher';
var LocalStructureCommandService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureCommandService, _super);
    function LocalStructureCommandService(structureId, compositionId, commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher) {
        var _this = _super.call(this, commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher) || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureCommandService.prototype.createStructure = /**
     * @return {?}
     */
    function () {
        _super.prototype.createStructure.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureCommandService.prototype.enableVerticalScroll = /**
     * @return {?}
     */
    function () {
        _super.prototype.enableVerticalScroll.call(this, this.structureId);
    };
    /**
     * @return {?}
     */
    LocalStructureCommandService.prototype.disableVerticalScroll = /**
     * @return {?}
     */
    function () {
        _super.prototype.disableVerticalScroll.call(this, this.structureId);
    };
    /**
     * @param {?} position
     * @return {?}
     */
    LocalStructureCommandService.prototype.setScrollPosition = /**
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
    LocalStructureCommandService.prototype.setOrigin = /**
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
    LocalStructureCommandService.prototype.setSortingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setSortingConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    LocalStructureCommandService.prototype.toggleSort = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        _super.prototype.toggleSort.call(this, fieldId, this.compositionId, this.structureId);
    };
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @return {?}
     */
    LocalStructureCommandService.prototype.setSortOrder = /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @return {?}
     */
    function (fieldId, sortOrder) {
        _super.prototype.setSortOrder.call(this, fieldId, sortOrder, this.compositionId, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandService.prototype.setFilterConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setFilterConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandService.prototype.setQuickFiltersConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setQuickFiltersConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    LocalStructureCommandService.prototype.initFields = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        _super.prototype.initFields.call(this, columns, this.compositionId, this.structureId);
    };
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    LocalStructureCommandService.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = globalStructureId; }
        _super.prototype.setSearchingConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    LocalStructureCommandService.prototype.search = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        _super.prototype.search.call(this, phrase, this.structureId);
    };
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    LocalStructureCommandService.prototype.setRowHeight = /**
     * @param {?} rowHeight
     * @return {?}
     */
    function (rowHeight) {
        _super.prototype.setRowHeight.call(this, rowHeight, this.structureId);
    };
    LocalStructureCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: CompositionId },
        { type: CommandDispatcher },
        { type: StructureFilterCommandService },
        { type: SourceDispatcher },
        { type: StructureSearchDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "createStructure", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "enableVerticalScroll", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "disableVerticalScroll", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setScrollPosition", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setOrigin", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setSortingConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [FieldId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "toggleSort", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [FieldId, Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setSortOrder", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setFilterConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setQuickFiltersConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "initFields", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setSearchingConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "search", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setRowHeight", null);
    return LocalStructureCommandService;
}(StructureCommandService));
export { LocalStructureCommandService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    LocalStructureCommandService.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBS3JGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUdqSDtJQUNrRCx3REFBdUI7SUFFeEUsc0NBQTZCLFdBQXdCLEVBQ2pDLGFBQTRCLEVBQzdDLGlCQUFvQyxFQUNwQyw2QkFBNEQsRUFDNUQsZ0JBQWtDLEVBQ2xDLHlCQUFvRDtRQUx2RCxZQU1DLGtCQUFNLGlCQUFpQixFQUFFLDZCQUE2QixFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixDQUFD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Ozs7dUVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7NEVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7NkVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7eUVBR1I7SUFHRDtRQURDLFFBQVE7O2lEQUNRLEtBQUs7O2lFQUVyQjtJQUdEO1FBREMsUUFBUTs7eURBQzRDLFdBQVc7O3dFQUUvRDtJQUdEO1FBREMsUUFBUTs7aURBQ1csT0FBTzs7a0VBRTFCO0lBR0Q7UUFEQyxRQUFROztpREFDYSxPQUFPOztvRUFFNUI7SUFHRDtRQURDLFFBQVE7O3lEQUMwQyxXQUFXOzt1RUFFN0Q7SUFHRDtRQURDLFFBQVE7O3lEQUNzRCxXQUFXOzs2RUFFekU7SUFHRDtRQURDLFFBQVE7O2lEQUNXLEtBQUs7O2tFQUV4QjtJQUdEO1FBREMsUUFBUTs7eURBQzZDLFdBQVc7OzBFQUVoRTtJQUdEO1FBREMsUUFBUTs7Ozs4REFHUjtJQUdEO1FBREMsUUFBUTs7OztvRUFHUjtJQUVGLG1DQUFDO0NBQUEsQUFsRkQsQ0FDa0QsdUJBQXVCLEdBaUZ4RTtTQWpGWSw0QkFBNEI7Ozs7OztJQUU1QixtREFBeUM7Ozs7O0lBQ2xELHFEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3N0cnVjdHVyZS5maWx0ZXIuY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc291cmNlL2NvbW1hbmQvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgZ2xvYmFsU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZ2xvYmFsLXN0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmRpc3BhdGNoZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyOiBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoY29tbWFuZERpc3BhdGNoZXIsIHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLCBzb3VyY2VEaXNwYXRjaGVyLCBzdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjcmVhdGVTdHJ1Y3R1cmUoKTogdm9pZCB7XG5cdFx0c3VwZXIuY3JlYXRlU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVuYWJsZVZlcnRpY2FsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZVZlcnRpY2FsU2Nyb2xsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGRpc2FibGVWZXJ0aWNhbFNjcm9sbCgpOiB2b2lkIHtcblx0XHRzdXBlci5kaXNhYmxlVmVydGljYWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNvcnRpbmdDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblx0XHRzdXBlci50b2dnbGVTb3J0KGZpZWxkSWQsIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRPcmRlcjogU29ydE9yZGVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U29ydE9yZGVyKGZpZWxkSWQsIHNvcnRPcmRlciwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0RmlsdGVyQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGluaXRGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IHZvaWQge1xuXHRcdHN1cGVyLmluaXRGaWVsZHMoY29sdW1ucywgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Um93SGVpZ2h0KHJvd0hlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19