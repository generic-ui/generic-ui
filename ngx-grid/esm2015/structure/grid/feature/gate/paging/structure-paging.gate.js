/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive } from '@angular/core';
import { PagingCommandInvoker } from '../../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../../paging/core/api/paging.event-repository';
import { StructureId } from '../../../../core/api/structure.id';
import { PagingGate } from '../../../../paging/feature/gate/paging.gate';
import { Override } from '../../../../../common/cdk/decorators';
import { PagingDisplayModeArchive } from '../../../../paging/feature/mode/paging-display-mode.archive';
export class StructurePagingGate extends PagingGate {
    /**
     * @param {?} structureId
     * @param {?} structurePagingCommandDispatcher
     * @param {?} pagingEventRepository
     * @param {?} pagingDisplayModeArchive
     */
    constructor(structureId, structurePagingCommandDispatcher, pagingEventRepository, pagingDisplayModeArchive) {
        super(structureId, structurePagingCommandDispatcher, pagingEventRepository);
        this.pagingDisplayModeArchive = pagingDisplayModeArchive;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('paging', changes)) {
            /** @type {?} */
            let pagingConfig;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
                if (this.paging.displayMode !== undefined) {
                    this.pagingDisplayModeArchive.next(this.paging.displayMode);
                }
            }
            this.structurePagingCommandDispatcher.setPaging(pagingConfig);
        }
    }
}
StructurePagingGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[paging]'
            },] }
];
/** @nocollapse */
StructurePagingGate.ctorParameters = () => [
    { type: StructureId },
    { type: PagingCommandInvoker },
    { type: PagingEventRepository },
    { type: PagingDisplayModeArchive }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], StructurePagingGate.prototype, "ngOnChanges", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePagingGate.prototype.pagingDisplayModeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFPdkcsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7Ozs7Ozs7SUFFbEQsWUFBWSxXQUF3QixFQUNqQyxnQ0FBc0QsRUFDdEQscUJBQTRDLEVBQzNCLHdCQUFrRDtRQUNyRSxLQUFLLENBQUMsV0FBVyxFQUFFLGdDQUFnQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFEekQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUV0RSxDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxPQUF1QztRQUVsRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFOztnQkFFbEMsWUFBMEI7WUFFOUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxZQUFZLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRTNCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUMxQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzVEO2FBQ0Q7WUFFRCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzlEO0lBQ0YsQ0FBQzs7O1lBakNELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2FBQ2pDOzs7O1lBVlEsV0FBVztZQUZYLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFLckIsd0JBQXdCOztBQWlCaEM7SUFEQyxRQUFROzs7O3NEQXFCUjs7Ozs7O0lBekJFLHVEQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2ZlYXR1cmUvZ2F0ZS9wYWdpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3BhZ2luZ10nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVBhZ2luZ0dhdGUgZXh0ZW5kcyBQYWdpbmdHYXRlIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyOiBQYWdpbmdDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cGFnaW5nRXZlbnRSZXBvc2l0b3J5OiBQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgc3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIsIHBhZ2luZ0V2ZW50UmVwb3NpdG9yeSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVBhZ2luZ0dhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ3BhZ2luZycsIGNoYW5nZXMpKSB7XG5cblx0XHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnBhZ2luZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0gdGhpcy5wYWdpbmc7XG5cblx0XHRcdFx0aWYgKHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZS5uZXh0KHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLnNldFBhZ2luZyhwYWdpbmdDb25maWcpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=