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
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
export class StructurePagingGate extends PagingGate {
    /**
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} structurePagingCommandDispatcher
     * @param {?} pagingEventRepository
     * @param {?} pagingDisplayModeArchive
     */
    constructor(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository, pagingDisplayModeArchive) {
        super(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository);
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
            this.pagingCommandInvoker.setPaging(pagingConfig, this.structureId);
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
    { type: CompositionId },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDMUYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDNUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUV6RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFFdkcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBTXRGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVOzs7Ozs7OztJQUVsRCxZQUFZLFdBQXdCLEVBQ2pDLGFBQTRCLEVBQzVCLGdDQUFzRCxFQUN0RCxxQkFBNEMsRUFDM0Isd0JBQWtEO1FBQ3JFLEtBQUssQ0FBQyxXQUFXLEVBQUUsYUFBYSxFQUFFLGdDQUFnQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFEeEUsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUV0RSxDQUFDOzs7OztJQUdELFdBQVcsQ0FBQyxPQUF1QztRQUVsRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFOztnQkFFbEMsWUFBMEI7WUFFOUIsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxZQUFZLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRTNCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUMxQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzVEO2FBQ0Q7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEU7SUFDRixDQUFDOzs7WUFsQ0QsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7YUFDakM7Ozs7WUFYUSxXQUFXO1lBTVgsYUFBYTtZQVJiLG9CQUFvQjtZQUNwQixxQkFBcUI7WUFLckIsd0JBQXdCOztBQW1CaEM7SUFEQyxRQUFROzs7O3NEQXFCUjs7Ozs7O0lBekJFLHVEQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBQYWdpbmdHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2ZlYXR1cmUvZ2F0ZS9wYWdpbmcuZ2F0ZSc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZmVhdHVyZS9tb2RlL3BhZ2luZy1kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtwYWdpbmddJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYWdpbmdHYXRlIGV4dGVuZHMgUGFnaW5nR2F0ZSB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcjogUGFnaW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHBhZ2luZ0V2ZW50UmVwb3NpdG9yeTogUGFnaW5nRXZlbnRSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZTogUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsIGNvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLCBwYWdpbmdFdmVudFJlcG9zaXRvcnkpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVQYWdpbmdHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdwYWdpbmcnLCBjaGFuZ2VzKSkge1xuXG5cdFx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5wYWdpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHRoaXMucGFnaW5nO1xuXG5cdFx0XHRcdGlmICh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUubmV4dCh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlci5zZXRQYWdpbmcocGFnaW5nQ29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxufVxuIl19