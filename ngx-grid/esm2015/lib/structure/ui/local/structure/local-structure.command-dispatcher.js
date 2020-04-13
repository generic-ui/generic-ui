/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandDispatcher } from '../../../ui-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { StructureFilterCommandDispatcher } from '../../../ui-api/filter/structure-filter.command-dispatcher';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { structureGlobalId } from '../../../ui-api/structure.global-id';
import { FieldId } from '../../../domain/structure/field/data-type/field.id';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
import { StructureSearchDispatcher } from '../../../domain/structure/search/structure.search.dispatcher';
import { SchemaTheme } from '../../../../schema/domain/schema-theme';
export class LocalStructureCommandDispatcher extends StructureCommandDispatcher {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     * @param {?} structureSearchDispatcher
     */
    constructor(structureId, compositionId, commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher) {
        super(commandDispatcher, structureFilterCommandService, sourceDispatcher, structureSearchDispatcher);
        this.structureId = structureId;
        this.compositionId = compositionId;
    }
    /**
     * @return {?}
     */
    createStructure() {
        super.createStructure(this.structureId);
    }
    /**
     * @return {?}
     */
    enableVerticalScroll() {
        super.enableVerticalScroll(this.structureId);
    }
    /**
     * @return {?}
     */
    disableVerticalScroll() {
        super.disableVerticalScroll(this.structureId);
    }
    /**
     * @param {?} position
     * @return {?}
     */
    setScrollPosition(position) {
        super.setScrollPosition(position, this.structureId);
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setOrigin(items) {
        super.setOrigin(items, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSortingConfig(config, structureId = structureGlobalId) {
        super.setSortingConfig(config, this.structureId);
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    toggleSort(fieldId) {
        super.toggleSort(fieldId, this.compositionId, this.structureId);
    }
    /**
     * @param {?} fieldId
     * @param {?} sortOrder
     * @return {?}
     */
    setSortOrder(fieldId, sortOrder) {
        super.setSortOrder(fieldId, sortOrder, this.compositionId, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setFilterConfig(config, structureId = structureGlobalId) {
        super.setFilterConfig(config, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setQuickFiltersConfig(config, structureId = structureGlobalId) {
        super.setQuickFiltersConfig(config, this.structureId);
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    initFields(columns) {
        super.initFields(columns, this.compositionId, this.structureId);
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = structureGlobalId) {
        super.setSearchingConfig(config, this.structureId);
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    search(phrase) {
        super.search(phrase, this.structureId);
    }
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    setRowHeight(rowHeight) {
        super.setRowHeight(rowHeight, this.structureId);
    }
    /**
     * @param {?} rowHeight
     * @return {?}
     */
    setContainerHeight(rowHeight) {
        super.setContainerHeight(rowHeight, this.structureId);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setRowHeightBasedOnTheme(theme) {
        super.setRowHeightBasedOnTheme(theme, this.structureId);
    }
}
LocalStructureCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: CompositionId },
    { type: CommandDispatcher },
    { type: StructureFilterCommandDispatcher },
    { type: SourceDispatcher },
    { type: StructureSearchDispatcher }
];
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
], LocalStructureCommandDispatcher.prototype, "setSortingConfig", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FieldId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "toggleSort", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [FieldId, Number]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setSortOrder", null);
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
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "initFields", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, StructureId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "setSearchingConfig", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalStructureCommandDispatcher.prototype, "search", null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBSzdFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNsRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFJckUsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLDBCQUEwQjs7Ozs7Ozs7O0lBRTlFLFlBQTZCLFdBQXdCLEVBQ2pDLGFBQTRCLEVBQzdDLGlCQUFvQyxFQUNwQyw2QkFBK0QsRUFDL0QsZ0JBQWtDLEVBQ2xD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Q0FBQztJQUN6RCxDQUFDOzs7WUExRkQsVUFBVTs7OztZQWpCRixXQUFXO1lBQ1gsYUFBYTtZQUpiLGlCQUFpQjtZQUtqQixnQ0FBZ0M7WUFDaEMsZ0JBQWdCO1lBVWhCLHlCQUF5Qjs7QUFpQmpDO0lBREMsUUFBUTs7OztzRUFHUjtBQUdEO0lBREMsUUFBUTs7OzsyRUFHUjtBQUdEO0lBREMsUUFBUTs7Ozs0RUFHUjtBQUdEO0lBREMsUUFBUTs7Ozt3RUFHUjtBQUdEO0lBREMsUUFBUTs7NkNBQ1EsS0FBSzs7Z0VBRXJCO0FBR0Q7SUFEQyxRQUFROztxREFDNEMsV0FBVzs7dUVBRS9EO0FBR0Q7SUFEQyxRQUFROzs2Q0FDVyxPQUFPOztpRUFFMUI7QUFHRDtJQURDLFFBQVE7OzZDQUNhLE9BQU87O21FQUU1QjtBQUdEO0lBREMsUUFBUTs7cURBQzBDLFdBQVc7O3NFQUU3RDtBQUdEO0lBREMsUUFBUTs7cURBQ3NELFdBQVc7OzRFQUV6RTtBQUdEO0lBREMsUUFBUTs7NkNBQ1csS0FBSzs7aUVBRXhCO0FBR0Q7SUFEQyxRQUFROztxREFDNkMsV0FBVzs7eUVBRWhFO0FBR0Q7SUFEQyxRQUFROzs7OzZEQUdSO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3lFQUdSO0FBR0Q7SUFEQyxRQUFROzs7OytFQUdSOzs7Ozs7SUF2Rlcsc0RBQXlDOzs7OztJQUNsRCx3REFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9maWVsZC5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3NjaGVtYS10aGVtZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0Y29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZTogU3RydWN0dXJlRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHNvdXJjZURpc3BhdGNoZXI6IFNvdXJjZURpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXI6IFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcihjb21tYW5kRGlzcGF0Y2hlciwgc3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UsIHNvdXJjZURpc3BhdGNoZXIsIHN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGNyZWF0ZVN0cnVjdHVyZSgpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGVTdHJ1Y3R1cmUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZW5hYmxlVmVydGljYWxTY3JvbGwoKTogdm9pZCB7XG5cdFx0c3VwZXIuZW5hYmxlVmVydGljYWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHN1cGVyLmRpc2FibGVWZXJ0aWNhbFNjcm9sbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24sIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdHN1cGVyLnNldE9yaWdpbihpdGVtcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U29ydGluZ0NvbmZpZyhjb25maWc6IFNvcnRpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U29ydGluZ0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHRvZ2dsZVNvcnQoZmllbGRJZDogRmllbGRJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnRvZ2dsZVNvcnQoZmllbGRJZCwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgc29ydE9yZGVyOiBTb3J0T3JkZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTb3J0T3JkZXIoZmllbGRJZCwgc29ydE9yZGVyLCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldEZpbHRlckNvbmZpZyhjb25maWc6IEZpbHRlckNvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRGaWx0ZXJDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRRdWlja0ZpbHRlcnNDb25maWcoY29uZmlnOiBRdWlja0ZpbHRlcnNDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0aW5pdEZpZWxkcyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogdm9pZCB7XG5cdFx0c3VwZXIuaW5pdEZpZWxkcyhjb2x1bW5zLCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRzdXBlci5zZWFyY2gocGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSb3dIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSb3dIZWlnaHQocm93SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb250YWluZXJIZWlnaHQocm93SGVpZ2h0OiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRDb250YWluZXJIZWlnaHQocm93SGVpZ2h0LCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWU6IFNjaGVtYVRoZW1lKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=