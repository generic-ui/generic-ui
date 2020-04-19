/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandDispatcher } from '../../../feature-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { StructureFilterCommandDispatcher } from '../../../feature-api/filter/structure-filter.command-dispatcher';
import { SourceDispatcher } from '../../../domain/source/source.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { structureGlobalId } from '../../../feature-api/structure.global-id';
import { FieldId } from '../../../domain/structure/field/data-type/field.id';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
import { StructureSearchDispatcher } from '../../../domain/structure/search/structure.search.dispatcher';
import { SchemaTheme } from '../../../../schema/domain/theme/schema-theme';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlL2xvY2FsL3N0cnVjdHVyZS9sb2NhbC1zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ25ILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVoRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFLN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUkzRSxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsMEJBQTBCOzs7Ozs7Ozs7SUFFOUUsWUFBNkIsV0FBd0IsRUFDakMsYUFBNEIsRUFDN0MsaUJBQW9DLEVBQ3BDLDZCQUErRCxFQUMvRCxnQkFBa0Ms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Q0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTFGRCxVQUFVOzs7O1lBakJGLFdBQVc7WUFDWCxhQUFhO1lBSmIsaUJBQWlCO1lBS2pCLGdDQUFnQztZQUNoQyxnQkFBZ0I7WUFVaEIseUJBQXlCOztBQWlCakM7SUFEQyxRQUFROzs7O3NFQUdSO0FBR0Q7SUFEQyxRQUFROzs7OzJFQUdSO0FBR0Q7SUFEQyxRQUFROzs7OzRFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3dFQUdSO0FBR0Q7SUFEQyxRQUFROzs2Q0FDUSxLQUFLOztnRUFFckI7QUFHRDtJQURDLFFBQVE7O3FEQUM0QyxXQUFXOzt1RUFFL0Q7QUFHRDtJQURDLFFBQVE7OzZDQUNXLE9BQU87O2lFQUUxQjtBQUdEO0lBREMsUUFBUTs7NkNBQ2EsT0FBTzs7bUVBRTVCO0FBR0Q7SUFEQyxRQUFROztxREFDMEMsV0FBVzs7c0VBRTdEO0FBR0Q7SUFEQyxRQUFROztxREFDc0QsV0FBVzs7NEVBRXpFO0FBR0Q7SUFEQyxRQUFROzs2Q0FDVyxLQUFLOztpRUFFeEI7QUFHRDtJQURDLFFBQVE7O3FEQUM2QyxXQUFXOzt5RUFFaEU7QUFHRDtJQURDLFFBQVE7Ozs7NkRBR1I7QUFHRDtJQURDLFFBQVE7Ozs7bUVBR1I7QUFHRDtJQURDLFFBQVE7Ozs7eUVBR1I7QUFHRDtJQURDLFFBQVE7Ozs7K0VBR1I7Ozs7OztJQXZGVyxzREFBeUM7Ozs7O0lBQ2xELHdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlLWFwaS9maWx0ZXIvc3RydWN0dXJlLWZpbHRlci5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zb3VyY2Uvc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3NvcnRpbmctY29uZmlnJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvZmlsdGVyL2ZpbHRlci1jb25maWcnO1xuaW1wb3J0IHsgUXVpY2tGaWx0ZXJzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZS1hcGkvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmUtYXBpL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLnNlYXJjaC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUZpbHRlckNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzb3VyY2VEaXNwYXRjaGVyOiBTb3VyY2VEaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyOiBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoY29tbWFuZERpc3BhdGNoZXIsIHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlLCBzb3VyY2VEaXNwYXRjaGVyLCBzdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRjcmVhdGVTdHJ1Y3R1cmUoKTogdm9pZCB7XG5cdFx0c3VwZXIuY3JlYXRlU3RydWN0dXJlKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGVuYWJsZVZlcnRpY2FsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdHN1cGVyLmVuYWJsZVZlcnRpY2FsU2Nyb2xsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGRpc2FibGVWZXJ0aWNhbFNjcm9sbCgpOiB2b2lkIHtcblx0XHRzdXBlci5kaXNhYmxlVmVydGljYWxTY3JvbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlcik6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRPcmlnaW4oaXRlbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRzdXBlci5zZXRPcmlnaW4oaXRlbXMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNvcnRpbmdDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNvcnRpbmdDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHR0b2dnbGVTb3J0KGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblx0XHRzdXBlci50b2dnbGVTb3J0KGZpZWxkSWQsIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIHNvcnRPcmRlcjogU29ydE9yZGVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U29ydE9yZGVyKGZpZWxkSWQsIHNvcnRPcmRlciwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0RmlsdGVyQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdGluaXRGaWVsZHMoY29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPik6IHZvaWQge1xuXHRcdHN1cGVyLmluaXRGaWVsZHMoY29sdW1ucywgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Um93SGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Um93SGVpZ2h0KHJvd0hlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Q29udGFpbmVySGVpZ2h0KHJvd0hlaWdodDogbnVtYmVyKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29udGFpbmVySGVpZ2h0KHJvd0hlaWdodCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJvd0hlaWdodEJhc2VkT25UaGVtZSh0aGVtZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19