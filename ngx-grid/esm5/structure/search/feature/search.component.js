/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../common/cdk/smart-component';
import { StructureWarehouse } from '../../grid/core/api/structure.warehouse';
import { SearchPlaceholderArchive } from '../core/api/placeholder/search-placeholder.archive';
import { StructureId } from '../../core/api/structure.id';
import { StructureVerticalFormationWarehouse } from '../../vertical-formation/core/api/structure-vertical-formation.warehouse';
import { SearchCommandInvoker } from '../core/api/search.command-invoker';
import { SearchWarehouse } from '../core/api/search.warehouse';
var SearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchComponent, _super);
    function SearchComponent(formBuilder, renderer2, changeDetectorRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse, verticalFormationWarehouse, structureSearchPlaceholderArchive) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.formBuilder = formBuilder;
        _this.renderer2 = renderer2;
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
    SearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
    SearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-search-bar',
                    template: "\n\t\t<ng-container *ngIf=\"searchingEnabled\">\n\t\t\t<form #formRef\n\t\t\t\t  [formGroup]=\"searchForm\">\n\t\t\t\t<gui-search-icon></gui-search-icon>\n\t\t\t\t<input formControlName=\"searchPhrase\" [placeholder]=\"placeholder\">\n\t\t\t\t<span *ngIf=\"searchForm.controls['searchPhrase'].value\" class=\"gui-clear-search-icon\" (click)=\"clear()\"></span>\n\t\t\t</form>\n\t\t</ng-container>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class.gui-search-bar]': "\"true\""
                    },
                    styles: [".gui-search-bar{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;height:100%;width:60%;margin-right:auto}.gui-search-bar form{display:-ms-flexbox;display:flex;background:#fff;position:relative;width:100%}.gui-search-bar form .gui-search-icon{position:absolute;top:6px;left:10px;width:17px;height:17px}.gui-search-bar form .gui-search-icon circle,.gui-search-bar form .gui-search-icon line{stroke:#ccc;transition:stroke .3s ease-in-out}.gui-search-bar form input{border:1px solid;border-color:inherit;border-radius:4px;padding:6px 6px 6px 38px;height:100%;width:100%}.gui-search-bar form:hover .gui-search-icon circle,.gui-search-bar form:hover .gui-search-icon line{stroke:#333}"]
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
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
    SearchComponent.prototype.renderer2;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUMvSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHL0Q7SUFxQnFDLDJDQUFjO0lBZWxELHlCQUE2QixXQUF3QixFQUNqQyxTQUFvQixFQUNwQixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsdUJBQTZDLEVBQzdDLGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQywwQkFBK0QsRUFDL0QsaUNBQTJEO1FBUi9FLFlBU0Msa0JBQU0saUJBQWlCLENBQUMsU0FNeEI7UUFmNEIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsZUFBUyxHQUFULFNBQVMsQ0FB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SSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9ELENBQUMsRUFBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFFTyw0Q0FBa0I7Ozs7SUFBMUI7UUFDQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQWpHdUIsZ0NBQWdCLEdBQUcsY0FBYyxDQUFDOztnQkF2QjFELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsa1pBU1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0wsd0JBQXdCLEVBQUUsVUFBUTtxQkFDbEM7O2lCQUlEOzs7O2dCQWpDUSxXQUFXO2dCQUpuQixTQUFTO2dCQUpULGlCQUFpQjtnQkFlVCxXQUFXO2dCQUVYLG9CQUFvQjtnQkFKcEIsa0JBQWtCO2dCQUtsQixlQUFlO2dCQUZmLG1DQUFtQztnQkFGbkMsd0JBQXdCOzs7MEJBZ0MvQixTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUFnR3hDLHNCQUFDO0NBQUEsQUF6SEQsQ0FxQnFDLGNBQWMsR0FvR2xEO1NBcEdZLGVBQWU7Ozs7OztJQUUzQixpQ0FBMEQ7O0lBRTFELGtDQUNvQjs7SUFFcEIscUNBQXNCOztJQUV0QixzQ0FBdUI7O0lBRXZCLDJDQUFrQzs7SUFFbEMsa0RBQXNDOzs7OztJQUUxQixzQ0FBeUM7Ozs7O0lBQ2xELG9DQUFxQzs7Ozs7SUFDckMsNENBQXFEOzs7OztJQUNyRCxzQ0FBeUM7Ozs7O0lBQ3pDLGtEQUE4RDs7Ozs7SUFDOUQsNkNBQXVEOzs7OztJQUN2RCwwQ0FBaUQ7Ozs7O0lBQ2pELHFEQUFnRjs7Ozs7SUFDaEYsNERBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdE9uSW5pdCxcblx0UmVuZGVyZXIyLFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi9jb3JlL2FwaS9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2FwaS9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vY29yZS9hcGkvc2VhcmNoLndhcmVob3VzZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXNlYXJjaC1iYXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJzZWFyY2hpbmdFbmFibGVkXCI+XG5cdFx0XHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdFx0XHQgIFtmb3JtR3JvdXBdPVwic2VhcmNoRm9ybVwiPlxuXHRcdFx0XHQ8Z3VpLXNlYXJjaC1pY29uPjwvZ3VpLXNlYXJjaC1pY29uPlxuXHRcdFx0XHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoUGhyYXNlXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+XG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwic2VhcmNoRm9ybS5jb250cm9sc1snc2VhcmNoUGhyYXNlJ10udmFsdWVcIiBjbGFzcz1cImd1aS1jbGVhci1zZWFyY2gtaWNvblwiIChjbGljayk9XCJjbGVhcigpXCI+PC9zcGFuPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvbmctY29udGFpbmVyPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLXNlYXJjaC1iYXJdJzogYFwidHJ1ZVwiYFxuXHR9LFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9zdHlsZS9zZWFyY2hpbmcubmd4LnNjc3MnXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEZPUk1fU0VBUkNIX05BTUUgPSAnc2VhcmNoUGhyYXNlJztcblxuXHRAVmlld0NoaWxkKCdmb3JtUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGZvcm1SZWY6IEVsZW1lbnRSZWY7XG5cblx0c2VhcmNoRm9ybTogRm9ybUdyb3VwO1xuXG5cdHBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG5cblx0c2VhcmNoaW5nRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHNlYXJjaElucHV0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXIyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kRGlzcGF0Y2hlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25XYXJlaG91c2U6IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXG5cdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gJyc7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGxhY2Vob2xkZXI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZVxuXHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRpZiAocGhyYXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRwaHJhc2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0XHRcdGNvbnRyb2xzQ29uZmlnW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9IHBocmFzZTtcblxuXHRcdFx0XHRpZiAocGhyYXNlICE9PSB0aGlzLnNlYXJjaEZvcm0uZ2V0KFtTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0pLnZhbHVlKSB7XG5cblx0XHRcdFx0XHR0aGlzLnN0b3BPYnNlcnZlQ2hhbmdlcygpO1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoRm9ybS5zZXRWYWx1ZShjb250cm9sc0NvbmZpZyk7XG5cdFx0XHRcdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zZWFyY2hXYXJlaG91c2Vcblx0XHRcdC5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzZWFyY2hpbmdFbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoaW5nRW5hYmxlZCA9IHNlYXJjaGluZ0VuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZvcm0ucmVzZXQoKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hJbnB1dFN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLnNlYXJjaEZvcm1cblx0XHRcdFx0LmNvbnRyb2xzW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXVxuXHRcdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGRlYm91bmNlVGltZSgyMDApLFxuXHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZERpc3BhdGNoZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzdG9wT2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hJbnB1dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG59XG4iXX0=