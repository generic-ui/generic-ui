/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandService } from '../../../app/structure/structure-command.service';
import { StructureId } from '../../../domain/structure-id';
import { CompositionId } from '../../../domain/composition/composition-id';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { SourceDispatcher } from '../../../domain/source/command/source.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
import { FieldId } from '../../../domain/structure/command/field/data-type/field.id';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLWNvbW1hbmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDM0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUNsSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNwRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBUXJGO0lBQ2tELHdEQUF1QjtJQUV4RSxzQ0FBNkIsV0FBd0IsRUFDakMsYUFBNEIsRUFDN0MsaUJBQW9DLEVBQ3BDLDZCQUE0RCxFQUM1RCxnQkFBa0M7UUFKckMsWUFLQyxrQkFBTSxpQkFBaUIsRUFBRSw2QkFBNkIsRUFBRSxnQkFBZ0IsQ0FBQyxTQUN6RTtRQU40QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFLaEQsQ0FBQzs7OztJQUdELDJDQUFJOzs7SUFBSjtRQUNDLGlCQUFNLElBQUksWUFB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L2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXBwL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvc3RydWN0dXJlLmZpbHRlci5jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2UvY29tbWFuZC9zb3VyY2UuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29sdW1uLmNvbmZpZyc7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSxcblx0XHRcdFx0c291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGNvbW1hbmREaXNwYXRjaGVyLCBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSwgc291cmNlRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0aW5pdCgpOiB2b2lkIHtcblx0XHRzdXBlci5pbml0KHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVuYWJsZVZlcnRpY2FsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZVZlcnRpY2FsU2Nyb2xsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGRpc2FibGVWZXJ0aWNhbFNjcm9sbCgpOiB2b2lkIHtcblx0XHRzdXBlci5kaXNhYmxlVmVydGljYWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0T3JpZ2luKGl0ZW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24sIHRoaXMuc3RydWN0dXJlSWQpXG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U29ydGluZ0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpXG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0dG9nZ2xlU29ydChmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cdFx0c3VwZXIudG9nZ2xlU29ydChmaWVsZElkLCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpXG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0RmlsdGVyQ29uZmlnKGNvbmZpZzogRmlsdGVyQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBnbG9iYWxTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldEZpbHRlckNvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IGdsb2JhbFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0aW5pdEZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogdm9pZCB7XG5cdFx0c3VwZXIuaW5pdEZpZWxkcyhjb2x1bW5zLCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==