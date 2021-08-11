/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { StructureWarehouse } from '../../grid/core/api/structure.warehouse';
import { SearchPlaceholderArchive } from '../core/api/placeholder/search-placeholder.archive';
import { StructureId } from '../../core/api/structure.id';
import { StructureVerticalFormationWarehouse } from '../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { SearchCommandInvoker } from '../core/api/search.command-invoker';
import { SearchWarehouse } from '../core/api/search.warehouse';
export class SearchComponent extends SmartComponent {
    /**
     * @param {?} formBuilder
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} searchCommandDispatcher
     * @param {?} structureWarehouse
     * @param {?} searchWarehouse
     * @param {?} verticalFormationWarehouse
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(formBuilder, changeDetectorRef, elementRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse, verticalFormationWarehouse, structureSearchPlaceholderArchive) {
        super(changeDetectorRef, elementRef);
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.searchCommandDispatcher = searchCommandDispatcher;
        this.structureWarehouse = structureWarehouse;
        this.searchWarehouse = searchWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
        this.placeholder = 'Search';
        this.searchingEnabled = false;
        /** @type {?} */
        let controlsConfig = {};
        controlsConfig[SearchComponent.FORM_SEARCH_NAME] = '';
        this.searchForm = this.formBuilder.group(controlsConfig);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.observeChanges();
        this.structureSearchPlaceholderArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} placeholder
         * @return {?}
         */
        (placeholder) => {
            this.placeholder = placeholder;
            this.changeDetectorRef.detectChanges();
        }));
        this.searchWarehouse
            .onPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            if (phrase === undefined) {
                phrase = null;
            }
            /** @type {?} */
            let controlsConfig = {};
            controlsConfig[SearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== this.searchForm.get([SearchComponent.FORM_SEARCH_NAME]).value) {
                this.stopObserveChanges();
                this.searchForm.setValue(controlsConfig);
                this.observeChanges();
            }
        }));
        this.searchWarehouse
            .onSearchEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} searchingEnabled
         * @return {?}
         */
        (searchingEnabled) => {
            this.searchingEnabled = searchingEnabled;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    clear() {
        this.searchForm.reset();
    }
    /**
     * @private
     * @return {?}
     */
    observeChanges() {
        this.searchInputSubscription =
            this.searchForm
                .controls[SearchComponent.FORM_SEARCH_NAME]
                .valueChanges
                .pipe(debounceTime(200), this.takeUntil())
                .subscribe((/**
             * @param {?} phrase
             * @return {?}
             */
            (phrase) => {
                this.searchCommandDispatcher.search(phrase, this.structureId);
            }));
    }
    /**
     * @private
     * @return {?}
     */
    stopObserveChanges() {
        this.searchInputSubscription.unsubscribe();
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-search-bar';
    }
}
SearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-search-bar]',
                template: `
		<ng-container *ngIf="searchingEnabled">
			<form #formRef
				  [formGroup]="searchForm"
				  class="gui-flex gui-relative gui-w-full">

				<div gui-search-icon></div>

				<input formControlName="searchPhrase"
					   class="gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21"
					   [placeholder]="placeholder">


				<span *ngIf="searchForm.controls['searchPhrase'].value"
					  class="gui-clear-search-icon"
					  (click)="clear()">
				</span>
			</form>
		</ng-container>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg circle,.gui-search-bar form:hover .gui-search-icon-svg line{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg circle,.gui-search-bar .gui-search-icon-svg line{stroke:#ccc;transition:stroke .3s ease-in-out}"]
            }] }
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: SearchCommandInvoker },
    { type: StructureWarehouse },
    { type: SearchWarehouse },
    { type: StructureVerticalFormationWarehouse },
    { type: SearchPlaceholderArchive }
];
SearchComponent.propDecorators = {
    formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchComponent.FORM_SEARCH_NAME;
    /** @type {?} */
    SearchComponent.prototype.formRef;
    /** @type {?} */
    SearchComponent.prototype.searchForm;
    /** @type {?} */
    SearchComponent.prototype.placeholder;
    /** @type {?} */
    SearchComponent.prototype.searchingEnabled;
    /** @type {?} */
    SearchComponent.prototype.searchInputSubscription;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.searchCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.searchWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.verticalFormationWarehouse;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.structureSearchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMEVBQTBFLENBQUM7QUFDL0gsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBK0IvRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjOzs7Ozs7Ozs7Ozs7SUFlbEQsWUFBNkIsV0FBd0IsRUFDakMsaUJBQW9DLEVBQ3JELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsdUJBQTZDLEVBQzdDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQywwQkFBK0QsRUFDL0QsaUNBQTJEO1FBQzlFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQVRULGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLHNC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QztZQUMvRCxDQUFDLEVBQUMsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUVTLGVBQWU7UUFDeEIsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOztBQXJHdUIsZ0NBQWdCLEdBQUcsY0FBYyxDQUFDOztZQTlCMUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1CVDtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBSXJDOzs7O1lBeENRLFdBQVc7WUFEYyxpQkFBaUI7WUFBYSxVQUFVO1lBUWpFLFdBQVc7WUFFWCxvQkFBb0I7WUFKcEIsa0JBQWtCO1lBS2xCLGVBQWU7WUFGZixtQ0FBbUM7WUFGbkMsd0JBQXdCOzs7c0JBdUMvQixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7Ozs7OztJQUZ2QyxpQ0FBMEQ7O0lBRTFELGtDQUNvQjs7SUFFcEIscUNBQXNCOztJQUV0QixzQ0FBdUI7O0lBRXZCLDJDQUFrQzs7SUFFbEMsa0RBQXNDOzs7OztJQUUxQixzQ0FBeUM7Ozs7O0lBQ2xELDRDQUFxRDs7Ozs7SUFFckQsc0NBQXlDOzs7OztJQUN6QyxrREFBOEQ7Ozs7O0lBQzlELDZDQUF1RDs7Ozs7SUFDdkQsMENBQWlEOzs7OztJQUNqRCxxREFBZ0Y7Ozs7O0lBQ2hGLDREQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZ3JpZC9jb3JlL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4uL2NvcmUvYXBpL3BsYWNlaG9sZGVyL3NlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvYXBpL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hXYXJlaG91c2UgfSBmcm9tICcuLi9jb3JlL2FwaS9zZWFyY2gud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXNlYXJjaC1iYXJdJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VhcmNoaW5nRW5hYmxlZFwiPlxuXHRcdFx0PGZvcm0gI2Zvcm1SZWZcblx0XHRcdFx0ICBbZm9ybUdyb3VwXT1cInNlYXJjaEZvcm1cIlxuXHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWZsZXggZ3VpLXJlbGF0aXZlIGd1aS13LWZ1bGxcIj5cblxuXHRcdFx0XHQ8ZGl2IGd1aS1zZWFyY2gtaWNvbj48L2Rpdj5cblxuXHRcdFx0XHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoUGhyYXNlXCJcblx0XHRcdFx0XHQgICBjbGFzcz1cImd1aS1ib3JkZXItMCBndWktdy1mdWxsIGd1aS1oLWZ1bGwgZ3VpLXB5LTUgZ3VpLXByLTUgZ3VpLXBsLTIxXCJcblx0XHRcdFx0XHQgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIj5cblxuXG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwic2VhcmNoRm9ybS5jb250cm9sc1snc2VhcmNoUGhyYXNlJ10udmFsdWVcIlxuXHRcdFx0XHRcdCAgY2xhc3M9XCJndWktY2xlYXItc2VhcmNoLWljb25cIlxuXHRcdFx0XHRcdCAgKGNsaWNrKT1cImNsZWFyKClcIj5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvc2VhcmNoaW5nLm5neC5zY3NzJ1xuXHRdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBGT1JNX1NFQVJDSF9OQU1FID0gJ3NlYXJjaFBocmFzZSc7XG5cblx0QFZpZXdDaGlsZCgnZm9ybVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRmb3JtUmVmOiBFbGVtZW50UmVmO1xuXG5cdHNlYXJjaEZvcm06IEZvcm1Hcm91cDtcblxuXHRwbGFjZWhvbGRlciA9ICdTZWFyY2gnO1xuXG5cdHNlYXJjaGluZ0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRzZWFyY2hJbnB1dFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZERpc3BhdGNoZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFdhcmVob3VzZTogU2VhcmNoV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdGxldCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdGNvbnRyb2xzQ29uZmlnW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9ICcnO1xuXG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChjb250cm9sc0NvbmZpZyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBsYWNlaG9sZGVyOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zZWFyY2hXYXJlaG91c2Vcblx0XHRcdC5vblBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0aWYgKHBocmFzZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cGhyYXNlID0gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCBjb250cm9sc0NvbmZpZyA9IHt9O1xuXHRcdFx0XHRjb250cm9sc0NvbmZpZ1tTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSBwaHJhc2U7XG5cblx0XHRcdFx0aWYgKHBocmFzZSAhPT0gdGhpcy5zZWFyY2hGb3JtLmdldChbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdKS52YWx1ZSkge1xuXG5cdFx0XHRcdFx0dGhpcy5zdG9wT2JzZXJ2ZUNoYW5nZXMoKTtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaEZvcm0uc2V0VmFsdWUoY29udHJvbHNDb25maWcpO1xuXHRcdFx0XHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlXG5cdFx0XHQub25TZWFyY2hFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2VhcmNoaW5nRW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNlYXJjaGluZ0VuYWJsZWQgPSBzZWFyY2hpbmdFbmFibGVkO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGb3JtLnJlc2V0KCk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoSW5wdXRTdWJzY3JpcHRpb24gPVxuXHRcdFx0dGhpcy5zZWFyY2hGb3JtXG5cdFx0XHRcdC5jb250cm9sc1tTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV1cblx0XHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRkZWJvdW5jZVRpbWUoMjAwKSxcblx0XHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaENvbW1hbmREaXNwYXRjaGVyLnNlYXJjaChwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc3RvcE9ic2VydmVDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoSW5wdXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zZWFyY2gtYmFyJztcblx0fVxufVxuIl19