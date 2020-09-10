/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { CompositionId } from '../../../../../composition/domain/composition.id';
import { FilterCommandInvoker } from '../../../../filter/domain-api/filter.command-invoker';
import { SourceDispatcher } from '../../../../source/domain/source.dispatcher';
import { Override } from '../../../../../common/cdk/decorators';
import { structureGlobalId } from '../../../domain-api/structure.global-id';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
export class LocalStructureCommandDispatcher extends StructureCommandDispatcher {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} commandDispatcher
     * @param {?} structureFilterCommandService
     * @param {?} sourceDispatcher
     */
    constructor(structureId, compositionId, commandDispatcher, structureFilterCommandService, sourceDispatcher) {
        super(commandDispatcher, structureFilterCommandService, sourceDispatcher);
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
    { type: FilterCommandInvoker },
    { type: SourceDispatcher }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9sb2NhbC9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBSTlFLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSwwQkFBMEI7Ozs7Ozs7O0lBRTlFLFlBQTZCLFdBQXdCLEVBQ2pDLGFBQTRCLEVBQzdDLGlCQUFvQyxFQUNwQyw2QkFBbUQsRUFDbkQsZ0JBQWtDO1FBQ3BDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSw2QkFBNkIsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBTDlDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBS2hELENBQUM7Ozs7SUFHRCxlQUFlO1FBQ2QsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELG9CQUFvQjtRQUNuQixLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFHRCxxQkFBcUI7UUFDcEIsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUdELGlCQUFpQixDQUFDLFFBQWdCO1FBQ2pDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQWlCO1FBQzFCLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFHRCxlQUFlLENBQUMsTUFBb0IsRUFBRSxjQUEyQixpQkFBaUI7UUFDakYsS0FBSyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUdELHFCQUFxQixDQUFDLE1BQTBCLEVBQUUsY0FBMkIsaUJBQWlCO1FBQzdGLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBR0QsWUFBWSxDQUFDLFNBQWlCO1FBQzdCLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUdELGtCQUFrQixDQUFDLFNBQWlCO1FBQ25DLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7O0lBR0Qsd0JBQXdCLENBQUMsS0FBa0I7UUFDMUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBM0RELFVBQVU7Ozs7WUFYRixXQUFXO1lBQ1gsYUFBYTtZQUpiLGlCQUFpQjtZQUtqQixvQkFBb0I7WUFDcEIsZ0JBQWdCOztBQW9CeEI7SUFEQyxRQUFROzs7O3NFQUdSO0FBR0Q7SUFEQyxRQUFROzs7OzJFQUdSO0FBR0Q7SUFEQyxRQUFROzs7OzRFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O3dFQUdSO0FBR0Q7SUFEQyxRQUFROzs2Q0FDUSxLQUFLOztnRUFFckI7QUFHRDtJQURDLFFBQVE7O3FEQUMwQyxXQUFXOztzRUFFN0Q7QUFHRDtJQURDLFFBQVE7O3FEQUNzRCxXQUFXOzs0RUFFekU7QUFHRDtJQURDLFFBQVE7Ozs7bUVBR1I7QUFHRDtJQURDLFFBQVE7Ozs7eUVBR1I7QUFHRDtJQURDLFFBQVE7Ozs7K0VBR1I7Ozs7OztJQXhEVyxzREFBeUM7Ozs7O0lBQ2xELHdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9kb21haW4tYXBpL2ZpbHRlci5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4vc291cmNlLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3N0cnVjdHVyZS5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmlsdGVyL2RvbWFpbi1hcGkvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9maWx0ZXIvZG9tYWluLWFwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZUZpbHRlckNvbW1hbmRTZXJ2aWNlOiBGaWx0ZXJDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c291cmNlRGlzcGF0Y2hlcjogU291cmNlRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGNvbW1hbmREaXNwYXRjaGVyLCBzdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSwgc291cmNlRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlU3RydWN0dXJlKCk6IHZvaWQge1xuXHRcdHN1cGVyLmNyZWF0ZVN0cnVjdHVyZSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlbmFibGVWZXJ0aWNhbFNjcm9sbCgpOiB2b2lkIHtcblx0XHRzdXBlci5lbmFibGVWZXJ0aWNhbFNjcm9sbCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRkaXNhYmxlVmVydGljYWxTY3JvbGwoKTogdm9pZCB7XG5cdFx0c3VwZXIuZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNjcm9sbFBvc2l0aW9uKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbiwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0T3JpZ2luKGl0ZW1zLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRGaWx0ZXJDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0RmlsdGVyQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0UXVpY2tGaWx0ZXJzQ29uZmlnKGNvbmZpZzogUXVpY2tGaWx0ZXJzQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFF1aWNrRmlsdGVyc0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJvd0hlaWdodChyb3dIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHN1cGVyLnNldFJvd0hlaWdodChyb3dIZWlnaHQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbnRhaW5lckhlaWdodChyb3dIZWlnaHQ6IG51bWJlcik6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbnRhaW5lckhlaWdodChyb3dIZWlnaHQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJvd0hlaWdodEJhc2VkT25UaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==