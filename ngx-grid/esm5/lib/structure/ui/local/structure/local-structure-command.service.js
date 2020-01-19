/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandService } from '../../../ui-api/structure/structure-command.service';
import { StructureId } from '../../../domain/structure-id';
import { CompositionId } from '../../../domain/composition/composition-id';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { SourceDispatcher } from '../../../domain/source/command/source.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
import { FieldId } from '../../../domain/structure/command/field/data-type/field.id';
import { SortStatus } from '../../../domain/composition/command/column/sort/sort-status';
var LocalStructureCommandService = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureCommandService, _super);
    function LocalStructureCommandService(structureId, compositionId, commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        var _this = _super.call(this, commandDispatcher, structureFilterCommandService, sourceDispatcher) || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        return _this;
    }
    /**
     * @return {?}
     */
    LocalStructureCommandService.prototype.init = /**
     * @return {?}
     */
    function () {
        _super.prototype.init.call(this, this.structureId);
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
    LocalStructureCommandService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureCommandService.ctorParameters = function () { return [
        { type: StructureId },
        { type: CompositionId },
        { type: CommandDispatcher },
        { type: StructureFilterCommandService },
        { type: SourceDispatcher }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "init", null);
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
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setOrigin", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Number]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setScrollPosition", null);
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
        tslib_1.__metadata("design:paramtypes", [Object, StructureId]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "setSearchingConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Array]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "initFields", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureCommandService.prototype, "search", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBS3JGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUd6RjtJQUNrRCx3REFBdUI7SUFFeEUsc0NBQTZCLFdBQXdCLEVBQ2pDLGFBQTRCLEVBQzdDLGlCQUFvQyxFQUNwQyw2QkFBNEQsRUFDNUQsZ0JBQWtDO1FBSnJDLFlBS0Msa0JBQU0saUJBQWlCLEVBQUUsNkJBQTZCLEVBQUUsZ0JBQWdCLENBQUMsU0FDekU7UUFONEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsbUJBQWEsR0FBYixhQUFhLENBQWU7O0lBS2hELENB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SUFHRDtRQURDLFFBQVE7O2lEQUNhLE9BQU87O29FQUU1QjtJQUdEO1FBREMsUUFBUTs7eURBQzBDLFdBQVc7O3VFQUU3RDtJQUdEO1FBREMsUUFBUTs7eURBQ3NELFdBQVc7OzZFQUV6RTtJQUdEO1FBREMsUUFBUTs7eURBQzZDLFdBQVc7OzBFQUVoRTtJQUdEO1FBREMsUUFBUTs7aURBQ1csS0FBSzs7a0VBRXhCO0lBR0Q7UUFEQyxRQUFROzs7OzhEQUdSO0lBRUYsbUNBQUM7Q0FBQSxBQTVFRCxDQUNrRCx1QkFBdUIsR0EyRXhFO1NBM0VZLDRCQUE0Qjs7Ozs7O0lBRTVCLG1EQUF5Qzs7Ozs7SUFDbEQscURBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTb3J0U3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29sdW1uL3NvcnQvc29ydC1zdGF0dXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoY29tbWFuZERpc3BhdGNoZXIsIHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLCBzb3VyY2VEaXNwYXRjaGVyKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRpbml0KCk6IHZvaWQge1xuXHRcdHN1cGVyLmluaXQodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZW5hYmxlVmVydGljYWxTY3JvbGwoKTogdm9pZCB7XG5cdFx0c3VwZXIuZW5hYmxlVmVydGljYWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHN1cGVyLmRpc2FibGVWZXJ0aWNhbFNjcm9sbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U29ydGluZ0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZVNvcnQoZmllbGRJZCwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0U3RhdHVzKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U29ydE9yZGVyKGZpZWxkSWQsIHNvcnRPcmRlciwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0RmlsdGVyQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRpbml0RmllbGRzKGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4pOiB2b2lkIHtcblx0XHRzdXBlci5pbml0RmllbGRzKGNvbHVtbnMsIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19