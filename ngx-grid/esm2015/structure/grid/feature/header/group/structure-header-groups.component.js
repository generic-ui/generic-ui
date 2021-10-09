/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, Input, ViewEncapsulation } from '@angular/core';
import { StructureColumnConfigService } from '../menu/structure.column-config.service';
import { SortOrder } from '../../../../../composition/core/domain/column/sort/sort-order';
import { SortingCommandInvoker } from '../../../../sorting/core/api/sorting.command-invoker';
import { CompositionId } from '../../../../../composition/core/domain/composition.id';
import { StructureId } from '../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../source/core/api/formation/formation.command-invoker';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export class StructureHeaderGroupsComponent extends PureComponent {
    /**
     * @param {?} elementRef
     * @param {?} injector
     * @param {?} changeDetectorRef
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} formationCommandDispatcher
     * @param {?} sortingCommandDispatcher
     */
    constructor(elementRef, injector, changeDetectorRef, compositionId, structureId, formationCommandDispatcher, sortingCommandDispatcher) {
        super(elementRef);
        this.elementRef = elementRef;
        this.injector = injector;
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.checkboxSelection = false;
        this.globalSearching = false;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    toggleSort(column) {
        if (column.isSortEnabled()) {
            this.sortingCommandDispatcher.toggleSort(column.getFieldId(), this.compositionId, this.structureId);
        }
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortAsc(column) {
        return column.getSortStatus() === SortOrder.ASC;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortDesc(column) {
        return column.getSortStatus() === SortOrder.DESC;
    }
    /**
     * @return {?}
     */
    isGlobalSortEnabled() {
        return this.globalSearching;
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-structure-header-groups';
    }
}
StructureHeaderGroupsComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-header-groups][groups][checkboxSelection]',
                template: "<div *ngIf=\"checkboxSelection\"\n\t class=\"gui-header-cell gui-row-checkbox gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\t<div gui-select-all></div>\n</div>\n\n<div *ngFor=\"let group of groups\"\n\t [style.width.px]=\"group.width\"\n\t class=\"gui-header-cell gui-flex gui-justify-between\n\t gui-overflow-hidden gui-relative gui-py-0 gui-px-6 gui-box-border\n\t gui-leading-4 gui-whitespace-nowrap gui-overflow-ellipsis\">\n\n\t<div class=\"gui-header-title\">\n\t\t{{group.header}}\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    StructureColumnConfigService
                ]
            }] }
];
/** @nocollapse */
StructureHeaderGroupsComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: ChangeDetectorRef },
    { type: CompositionId },
    { type: StructureId },
    { type: FormationCommandInvoker },
    { type: SortingCommandInvoker }
];
StructureHeaderGroupsComponent.propDecorators = {
    groups: [{ type: Input }],
    showGroups: [{ type: Input }],
    checkboxSelection: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureHeaderGroupsComponent.prototype.groups;
    /** @type {?} */
    StructureHeaderGroupsComponent.prototype.showGroups;
    /** @type {?} */
    StructureHeaderGroupsComponent.prototype.checkboxSelection;
    /** @type {?} */
    StructureHeaderGroupsComponent.prototype.globalSearching;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderGroupsComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderGroupsComponent.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderGroupsComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderGroupsComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderGroupsComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderGroupsComponent.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureHeaderGroupsComponent.prototype.sortingCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9ncm91cC9zdHJ1Y3R1cmUtaGVhZGVyLWdyb3Vwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEksT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDdkYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFFMUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBWW5GLE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxhQUFhOzs7Ozs7Ozs7O0lBYWhFLFlBQTZCLFVBQXNCLEVBQy9CLFFBQWtCLEVBQ2xCLGlCQUFvQyxFQUNwQyxhQUE0QixFQUM1QixXQUF3QixFQUN4QiwwQkFBbUQsRUFDbkQsd0JBQStDO1FBQ2xFLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQVBVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBeUI7UUFDbkQsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUF1QjtRQVZuRSxzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFFbkMsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFVeEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsTUFBK0I7UUFFekMsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDM0IsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEc7SUFDRixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxNQUErQjtRQUN4QyxPQUFPLE1BQU0sQ0FBQyxhQUFhLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQStCO1FBQ3pDLE9BQU8sTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDbEQsQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sNkJBQTZCLENBQUM7SUFDdEMsQ0FBQzs7O1lBckRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsNkRBQTZEO2dCQUN2RSwrbkJBQXVEO2dCQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFNBQVMsRUFBRTtvQkFDViw0QkFBNEI7aUJBQzVCO2FBQ0Q7Ozs7WUFyQitELFVBQVU7WUFBRSxRQUFRO1lBQWxELGlCQUFpQjtZQU0xQyxhQUFhO1lBQ2IsV0FBVztZQUNYLHVCQUF1QjtZQUh2QixxQkFBcUI7OztxQkFtQjVCLEtBQUs7eUJBR0wsS0FBSztnQ0FHTCxLQUFLOzs7O0lBTk4sZ0RBQ3FCOztJQUVyQixvREFDb0I7O0lBRXBCLDJEQUNtQzs7SUFFbkMseURBQXdCOzs7OztJQUVaLG9EQUF1Qzs7Ozs7SUFDaEQsa0RBQW1DOzs7OztJQUNuQywyREFBcUQ7Ozs7O0lBQ3JELHVEQUE2Qzs7Ozs7SUFDN0MscURBQXlDOzs7OztJQUN6QyxvRUFBb0U7Ozs7O0lBQ3BFLGtFQUFnRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3RvciwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBTb3J0aW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2dyb3VwL2dyb3VwJztcbmltcG9ydCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9wdXJlLWNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtaGVhZGVyLWdyb3Vwc11bZ3JvdXBzXVtjaGVja2JveFNlbGVjdGlvbl0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLWhlYWRlci1ncm91cHMuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUhlYWRlckdyb3Vwc0NvbXBvbmVudCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdGdyb3VwczogQXJyYXk8R3JvdXA+O1xuXG5cdEBJbnB1dCgpXG5cdHNob3dHcm91cHM6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2hlY2tib3hTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRnbG9iYWxTZWFyY2hpbmcgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcihlbGVtZW50UmVmKTtcblx0fVxuXG5cdHRvZ2dsZVNvcnQoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbHVtbi5pc1NvcnRFbmFibGVkKCkpIHtcblx0XHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNvcnQoY29sdW1uLmdldEZpZWxkSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxuXHRpc1NvcnRBc2MoY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb2x1bW4uZ2V0U29ydFN0YXR1cygpID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNTb3J0RGVzYyhjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbHVtbi5nZXRTb3J0U3RhdHVzKCkgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNHbG9iYWxTb3J0RW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxTZWFyY2hpbmc7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc3RydWN0dXJlLWhlYWRlci1ncm91cHMnO1xuXHR9XG5cbn1cbiJdfQ==