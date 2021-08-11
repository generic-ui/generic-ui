/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchComponent, _super);
    function SearchComponent(formBuilder, changeDetectorRef, elementRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse, verticalFormationWarehouse, structureSearchPlaceholderArchive) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.formBuilder = formBuilder;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.searchCommandDispatcher = searchCommandDispatcher;
        _this.structureWarehouse = structureWarehouse;
        _this.searchWarehouse = searchWarehouse;
        _this.verticalFormationWarehouse = verticalFormationWarehouse;
        _this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
        _this.placeholder = 'Search';
        _this.searchingEnabled = false;
        /** @type {?} */
        var controlsConfig = {};
        controlsConfig[SearchComponent.FORM_SEARCH_NAME] = '';
        _this.searchForm = _this.formBuilder.group(controlsConfig);
        return _this;
    }
    /**
     * @return {?}
     */
    SearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.observeChanges();
        this.structureSearchPlaceholderArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} placeholder
         * @return {?}
         */
        function (placeholder) {
            _this.placeholder = placeholder;
            _this.changeDetectorRef.detectChanges();
        }));
        this.searchWarehouse
            .onPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) {
            if (phrase === undefined) {
                phrase = null;
            }
            /** @type {?} */
            var controlsConfig = {};
            controlsConfig[SearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== _this.searchForm.get([SearchComponent.FORM_SEARCH_NAME]).value) {
                _this.stopObserveChanges();
                _this.searchForm.setValue(controlsConfig);
                _this.observeChanges();
            }
        }));
        this.searchWarehouse
            .onSearchEnabled(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} searchingEnabled
         * @return {?}
         */
        function (searchingEnabled) {
            _this.searchingEnabled = searchingEnabled;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    SearchComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.searchForm.reset();
    };
    /**
     * @private
     * @return {?}
     */
    SearchComponent.prototype.observeChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.searchInputSubscription =
            this.searchForm
                .controls[SearchComponent.FORM_SEARCH_NAME]
                .valueChanges
                .pipe(debounceTime(200), this.takeUntil())
                .subscribe((/**
             * @param {?} phrase
             * @return {?}
             */
            function (phrase) {
                _this.searchCommandDispatcher.search(phrase, _this.structureId);
            }));
    };
    /**
     * @private
     * @return {?}
     */
    SearchComponent.prototype.stopObserveChanges = /**
     * @private
     * @return {?}
     */
    function () {
        this.searchInputSubscription.unsubscribe();
    };
    /**
     * @protected
     * @return {?}
     */
    SearchComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-search-bar';
    };
    SearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
    SearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-search-bar]',
                    template: "\n\t\t<ng-container *ngIf=\"searchingEnabled\">\n\t\t\t<form #formRef\n\t\t\t\t  [formGroup]=\"searchForm\"\n\t\t\t\t  class=\"gui-flex gui-relative gui-w-full\">\n\n\t\t\t\t<div gui-search-icon></div>\n\n\t\t\t\t<input formControlName=\"searchPhrase\"\n\t\t\t\t\t   class=\"gui-border-0 gui-w-full gui-h-full gui-py-5 gui-pr-5 gui-pl-21\"\n\t\t\t\t\t   [placeholder]=\"placeholder\">\n\n\n\t\t\t\t<span *ngIf=\"searchForm.controls['searchPhrase'].value\"\n\t\t\t\t\t  class=\"gui-clear-search-icon\"\n\t\t\t\t\t  (click)=\"clear()\">\n\t\t\t\t</span>\n\t\t\t</form>\n\t\t</ng-container>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-search-bar form{background:#fff}.gui-search-bar form:hover .gui-search-icon-svg circle,.gui-search-bar form:hover .gui-search-icon-svg line{stroke:#333}.gui-search-bar .gui-search-icon-svg{height:17px;left:10px;position:absolute;top:6px;width:17px}.gui-search-bar .gui-search-icon-svg circle,.gui-search-bar .gui-search-icon-svg line{stroke:#ccc;transition:stroke .3s ease-in-out}"]
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: SearchCommandInvoker },
        { type: StructureWarehouse },
        { type: SearchWarehouse },
        { type: StructureVerticalFormationWarehouse },
        { type: SearchPlaceholderArchive }
    ]; };
    SearchComponent.propDecorators = {
        formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }]
    };
    return SearchComponent;
}(SmartComponent));
export { SearchComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEksT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDOUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQy9ILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcvRDtJQTRCcUMsMkNBQWM7SUFlbEQseUJBQTZCLFdBQXdCLEVBQ2pDLGlCQUFvQyxFQUNyRCxVQUFzQixFQUNMLFdBQXdCLEVBQ3hCLHVCQUE2QyxFQUM3QyxrQkFBc0MsRUFDdEMsZUFBZ0MsRUFDaEMsMEJBQStELEVBQy9ELGlDQUEyRDtRQVIvRSxZQVNDLGtCQUFNLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxTQU1wQztRQWY0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyx1QkFBaUIsR0FBakIsaUJBQWlCLENB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QUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTyw0Q0FBa0I7Ozs7SUFBMUI7UUFDQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFUyx5Q0FBZTs7OztJQUF6QjtRQUNDLE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQztJQXJHdUIsZ0NBQWdCLEdBQUcsY0FBYyxDQUFDOztnQkE5QjFELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsaWxCQW1CVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2lCQUlyQzs7OztnQkF4Q1EsV0FBVztnQkFEYyxpQkFBaUI7Z0JBQWEsVUFBVTtnQkFRakUsV0FBVztnQkFFWCxvQkFBb0I7Z0JBSnBCLGtCQUFrQjtnQkFLbEIsZUFBZTtnQkFGZixtQ0FBbUM7Z0JBRm5DLHdCQUF3Qjs7OzBCQXVDL0IsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBb0d4QyxzQkFBQztDQUFBLEFBcElELENBNEJxQyxjQUFjLEdBd0dsRDtTQXhHWSxlQUFlOzs7Ozs7SUFFM0IsaUNBQTBEOztJQUUxRCxrQ0FDb0I7O0lBRXBCLHFDQUFzQjs7SUFFdEIsc0NBQXVCOztJQUV2QiwyQ0FBa0M7O0lBRWxDLGtEQUFzQzs7Ozs7SUFFMUIsc0NBQXlDOzs7OztJQUNsRCw0Q0FBcUQ7Ozs7O0lBRXJELHNDQUF5Qzs7Ozs7SUFDekMsa0RBQThEOzs7OztJQUM5RCw2Q0FBdUQ7Ozs7O0lBQ3ZELDBDQUFpRDs7Ozs7SUFDakQscURBQWdGOzs7OztJQUNoRiw0REFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi9jb3JlL2FwaS9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vY29yZS9hcGkvc2VhcmNoLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zZWFyY2gtYmFyXScsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlYXJjaGluZ0VuYWJsZWRcIj5cblx0XHRcdDxmb3JtICNmb3JtUmVmXG5cdFx0XHRcdCAgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCJcblx0XHRcdFx0ICBjbGFzcz1cImd1aS1mbGV4IGd1aS1yZWxhdGl2ZSBndWktdy1mdWxsXCI+XG5cblx0XHRcdFx0PGRpdiBndWktc2VhcmNoLWljb24+PC9kaXY+XG5cblx0XHRcdFx0PGlucHV0IGZvcm1Db250cm9sTmFtZT1cInNlYXJjaFBocmFzZVwiXG5cdFx0XHRcdFx0ICAgY2xhc3M9XCJndWktYm9yZGVyLTAgZ3VpLXctZnVsbCBndWktaC1mdWxsIGd1aS1weS01IGd1aS1wci01IGd1aS1wbC0yMVwiXG5cdFx0XHRcdFx0ICAgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+XG5cblxuXHRcdFx0XHQ8c3BhbiAqbmdJZj1cInNlYXJjaEZvcm0uY29udHJvbHNbJ3NlYXJjaFBocmFzZSddLnZhbHVlXCJcblx0XHRcdFx0XHQgIGNsYXNzPVwiZ3VpLWNsZWFyLXNlYXJjaC1pY29uXCJcblx0XHRcdFx0XHQgIChjbGljayk9XCJjbGVhcigpXCI+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L25nLWNvbnRhaW5lcj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL3NlYXJjaGluZy5uZ3guc2Nzcydcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9TRUFSQ0hfTkFNRSA9ICdzZWFyY2hQaHJhc2UnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcblxuXHRzZWFyY2hpbmdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0c2VhcmNoSW5wdXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmREaXNwYXRjaGVyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hXYXJlaG91c2U6IFNlYXJjaFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHRsZXQgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRjb250cm9sc0NvbmZpZ1tTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSAnJztcblxuXHRcdHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwbGFjZWhvbGRlcjogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlXG5cdFx0XHQub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHBocmFzZSA9IG51bGw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZXQgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRcdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gcGhyYXNlO1xuXG5cdFx0XHRcdGlmIChwaHJhc2UgIT09IHRoaXMuc2VhcmNoRm9ybS5nZXQoW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSkudmFsdWUpIHtcblxuXHRcdFx0XHRcdHRoaXMuc3RvcE9ic2VydmVDaGFuZ2VzKCk7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hGb3JtLnNldFZhbHVlKGNvbnRyb2xzQ29uZmlnKTtcblx0XHRcdFx0XHR0aGlzLm9ic2VydmVDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZVxuXHRcdFx0Lm9uU2VhcmNoRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNlYXJjaGluZ0VuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hpbmdFbmFibGVkID0gc2VhcmNoaW5nRW5hYmxlZDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGNsZWFyKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRm9ybS5yZXNldCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvYnNlcnZlQ2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMuc2VhcmNoRm9ybVxuXHRcdFx0XHQuY29udHJvbHNbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0ZGVib3VuY2VUaW1lKDIwMCksXG5cdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kRGlzcGF0Y2hlci5zZWFyY2gocGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHN0b3BPYnNlcnZlQ2hhbmdlcygpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaElucHV0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktc2VhcmNoLWJhcic7XG5cdH1cbn1cbiJdfQ==