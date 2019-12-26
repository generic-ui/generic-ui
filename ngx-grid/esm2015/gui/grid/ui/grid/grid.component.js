/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation, PLATFORM_ID, Inject } from '@angular/core';
import { GridGateway } from './grid-gateway';
import { gridProviders } from './grid.providers';
import { structureParentComponent } from '../../../../lib/structure/ui/structure-parent-component';
import { GridIdGenerator } from './register/grid-id.generator';
import { GridRegister } from './register/grid.register';
import { GridConsoleApiProvider } from './console/grid.console.api';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
export const gridSelector = 'gui-grid';
export class GridComponent extends GridGateway {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} gridRegister
     * @param {?} gridIdGenerator
     */
    constructor(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator) {
        super();
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.gridRegister = gridRegister;
        this.gridIdGenerator = gridIdGenerator;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let gridId = this.gridId;
        if (gridId === undefined) {
            gridId = this.gridIdGenerator.generateId();
        }
        this.localGridId = gridId;
        this.exposeGridId();
        // register
        this.gridRegister.register(gridId, this, this.structureRef.getStructureId());
        if (isPlatformBrowser(this.platformId)) {
            window['getGuiGrid'] = (/**
             * @param {?} gridId
             * @return {?}
             */
            (gridId) => {
                /** @type {?} */
                const gridConsoleConfig = this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return new GridConsoleApiProvider(gridConsoleConfig.component, gridConsoleConfig.structureId).provide();
                }
                else {
                    return undefined;
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.gridRegister.unregister(this.localGridId);
    }
    /**
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
    /**
     * @return {?}
     */
    getGridId() {
        return '';
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    exposeGridId() {
        this.elementRef.nativeElement.setAttribute('gui-grid-id', this.localGridId);
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: gridSelector,
                template: "<gui-structure\n\t\t\t   [height]=\"height\"\n\t\t\t   [width]=\"width\"\n\t\t\t   [autoResizeWidth]=\"autoResizeWidth\"\n\t\t\t   [columns]=\"columnsConfig\"\n\t\t\t   [columnHeaderTop]=\"columnHeaderTop\"\n\t\t\t   [columnHeaderBottom]=\"columnHeaderBottom\"\n\t\t\t   [source]=\"source\"\n\t\t\t   [paging]=\"paging\"\n\t\t\t   [verticalGrid]=\"verticalGrid\"\n\t\t\t   [horizontalGrid]=\"horizontalGrid\"\n\t\t\t   [theme]=\"themeConfig\"\n\t\t\t   [rowColoring]=\"rowColoringConfig\"\n\t\t\t   [loading]=\"loading\"\n\t\t\t   [virtualScroll]=\"virtualScroll\"\n\t\t\t   [sorting]=\"sorting\"\n\t\t\t   [filtering]=\"filtering\"\n\t\t\t   [quickFilters]=\"quickFilters\"\n\t\t\t   [searching]=\"searching\"\n\t\t\t   [editMode]=\"editMode\"\n\t\t\t   [cellEditing]=\"cellEditing\"\n\t\t\t   [summaryPanel]=\"summaryPanel\"\n\t\t\t   [aggregation]=\"aggregation\"\n\t\t\t   (pageChanged)=\"onPageChange($event)\"\n\t\t\t   (pageSizeChanged)=\"onPageSizeChange($event)\"\n\t\t\t   (itemsSelected)=\"onItemSelect($event)\"\n\t\t\t   (columnsChanged)=\"onColumnsChange()\"\n\t\t\t   (containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t\t\t   (sourceEdited)=\"onSourceEdit($event)\"\n\t\t\t   (cellEditEntered)=\"onCellEditEnter()\"\n\t\t\t   (cellEditSubmitted)=\"onCellEditSubmit()\"\n\t\t\t   (cellEditCanceled)=\"onCellEditCancel()\"\n\t\t\t   #structure >\n</gui-structure>\n",
                providers: [
                    ...gridProviders,
                    {
                        provide: structureParentComponent,
                        useExisting: GridComponent
                    }
                ],
                host: {
                    '[class]': `"${gridSelector}"`,
                    '[style.height]': 'height'
                },
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-grid{display:block;width:100%}"]
            }] }
];
/** @nocollapse */
GridComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: GridRegister },
    { type: GridIdGenerator }
];
GridComponent.propDecorators = {
    structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
    gridId: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GridComponent.prototype.structureRef;
    /** @type {?} */
    GridComponent.prototype.gridId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.localGridId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridRegister;
    /**
     * @type {?}
     * @private
     */
    GridComponent.prototype.gridIdGenerator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzSSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRW5HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRXBELE1BQU0sT0FBTyxZQUFZLEdBQUcsVUFBVTtBQXFCdEMsTUFBTSxPQUFPLGFBQWMsU0FBUSxXQUFXOzs7Ozs7OztJQVU3QyxZQUF5QyxVQUFlLEVBQzdDLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUNwQyxZQUEwQixFQUMxQixlQUFnQztRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUxnQyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQzdDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFFM0MsQ0FBQzs7OztJQUVELFFBQVE7O1lBRUgsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBRXhCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBRTFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixXQUFXO1FBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFFN0UsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxDQUFDLFlBQVksQ0FBQzs7OztZQUFHLENBQUMsTUFBYyxFQUFFLEVBQUU7O3NCQUVuQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBRTdELElBQUksaUJBQWlCLEVBQUU7b0JBQ3RCLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3hHO3FCQUFNO29CQUNOLE9BQU8sU0FBUyxDQUFDO2lCQUNqQjtZQUNGLENBQUMsQ0FBQSxDQUFDO1NBQ0Y7SUFDRixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsU0FBUztRQUNSLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7OztZQXBGRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHkzQ0FBb0M7Z0JBSXBDLFNBQVMsRUFBRTtvQkFDVixHQUFHLGFBQWE7b0JBQ2hCO3dCQUNDLE9BQU8sRUFBRSx3QkFBd0I7d0JBQ2pDLFdBQVcsRUFBRSxhQUFhO3FCQUMxQjtpQkFDRDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsU0FBUyxFQUFFLElBQUksWUFBWSxHQUFHO29CQUM5QixnQkFBZ0IsRUFBRSxRQUFRO2lCQUMxQjtnQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDckM7Ozs7NENBV2EsTUFBTSxTQUFDLFdBQVc7WUEzQ08sVUFBVTtZQUF4QyxpQkFBaUI7WUFRakIsWUFBWTtZQURaLGVBQWU7OzsyQkE0QnRCLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3FCQUd2QyxLQUFLOzs7O0lBSE4scUNBQ2tCOztJQUVsQiwrQkFDZTs7Ozs7SUFFZixvQ0FBNEI7Ozs7O0lBRWhCLG1DQUE0Qzs7Ozs7SUFDckQsbUNBQThCOzs7OztJQUM5QiwwQ0FBNEM7Ozs7O0lBQzVDLHFDQUFrQzs7Ozs7SUFDbEMsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiwgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkR2F0ZXdheSB9IGZyb20gJy4vZ3JpZC1nYXRld2F5JztcbmltcG9ydCB7IGdyaWRQcm92aWRlcnMgfSBmcm9tICcuL2dyaWQucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS91aS9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEdyaWRJZEdlbmVyYXRvciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3JpZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgR3JpZFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci9ncmlkLnJlZ2lzdGVyJztcbmltcG9ydCB7IEdyaWRDb25zb2xlQXBpUHJvdmlkZXIgfSBmcm9tICcuL2NvbnNvbGUvZ3JpZC5jb25zb2xlLmFwaSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBncmlkU2VsZWN0b3IgPSAnZ3VpLWdyaWQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IGdyaWRTZWxlY3Rvcixcblx0dGVtcGxhdGVVcmw6ICcuL2dyaWQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vZ3JpZC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3JpZFByb3ZpZGVycyxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQsXG5cdFx0XHR1c2VFeGlzdGluZzogR3JpZENvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogYFwiJHtncmlkU2VsZWN0b3J9XCJgLFxuXHRcdCdbc3R5bGUuaGVpZ2h0XSc6ICdoZWlnaHQnXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3JpZENvbXBvbmVudCBleHRlbmRzIEdyaWRHYXRld2F5IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRzdHJ1Y3R1cmVSZWY6IGFueTtcblxuXHRASW5wdXQoKVxuXHRncmlkSWQ6IHN0cmluZzsgLy8gY2FuIGJlIHNldCBvbmNlXG5cblx0cHJpdmF0ZSBsb2NhbEdyaWRJZDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIGdyaWRSZWdpc3RlcjogR3JpZFJlZ2lzdGVyLFxuXHRcdFx0XHRwcml2YXRlIGdyaWRJZEdlbmVyYXRvcjogR3JpZElkR2VuZXJhdG9yKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0bGV0IGdyaWRJZCA9IHRoaXMuZ3JpZElkO1xuXG5cdFx0aWYgKGdyaWRJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRncmlkSWQgPSB0aGlzLmdyaWRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbEdyaWRJZCA9IGdyaWRJZDtcblxuXHRcdHRoaXMuZXhwb3NlR3JpZElkKCk7XG5cblx0XHQvLyByZWdpc3RlclxuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnJlZ2lzdGVyKGdyaWRJZCwgdGhpcywgdGhpcy5zdHJ1Y3R1cmVSZWYuZ2V0U3RydWN0dXJlSWQoKSk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydnZXRHdWlHcmlkJ10gPSAoZ3JpZElkOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRjb25zdCBncmlkQ29uc29sZUNvbmZpZyA9IHRoaXMuZ3JpZFJlZ2lzdGVyLmdldFZhbHVlcyhncmlkSWQpO1xuXG5cdFx0XHRcdGlmIChncmlkQ29uc29sZUNvbmZpZykge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgR3JpZENvbnNvbGVBcGlQcm92aWRlcihncmlkQ29uc29sZUNvbmZpZy5jb21wb25lbnQsIGdyaWRDb25zb2xlQ29uZmlnLnN0cnVjdHVyZUlkKS5wcm92aWRlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmdyaWRSZWdpc3Rlci51bnJlZ2lzdGVyKHRoaXMubG9jYWxHcmlkSWQpO1xuXHR9XG5cblx0Z2V0RWxlbWVudFJlZigpOiBFbGVtZW50UmVmIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50UmVmO1xuXHR9XG5cblx0Z2V0R3JpZElkKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0ZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0fVxuXG5cdHByaXZhdGUgZXhwb3NlR3JpZElkKCk6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnZ3VpLWdyaWQtaWQnLCB0aGlzLmxvY2FsR3JpZElkKTtcblx0fVxuXG59XG4iXX0=