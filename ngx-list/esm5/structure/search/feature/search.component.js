/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../common/cdk/smart-component';
import { StructureWarehouse } from '../../../lib/structure/domain-api/structure.warehouse';
import { SearchPlaceholderArchive } from '../domain-api/placeholder/search-placeholder.archive';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { StructureVerticalFormationWarehouse } from '../../../lib/structure/domain-api/vertical-formation/structure-vertical-formation.warehouse';
import { SearchCommandDispatcher } from '../domain-api/search.command-dispatcher';
import { SearchWarehouse } from '../domain-api/search.warehouse';
var SearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SearchComponent, _super);
    function SearchComponent(formBuilder, renderer2, changeDetectorRef, structureId, searchCommandDispatcher, structureWarehouse, searchWarehouse, verticalFormationWarehouse, structureSearchPlaceholderArchive) {
        var _this = _super.call(this) || this;
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
        { type: SearchCommandDispatcher },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9mZWF0dXJlL3NlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ04sdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQUNsSixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHakU7SUFxQnFDLDJDQUFjO0lBZWxELHlCQUE2QixXQUF3QixFQUNqQyxTQUFvQixFQUNwQixpQkFBb0MsRUFDcEMsV0FBd0IsRUFDeEIsdUJBQWdELEVBQ2hELGtCQUFzQyxFQUN0QyxlQUFnQyxFQUNoQywwQkFBK0QsRUFDL0QsaUNBQTJEO1FBUi9FLFlBU0MsaUJBQU8sU0FNUDtRQWY0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHVCQUFp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QUFDLENBQUM7WUFDL0QsQ0FBQyxFQUFDLENBQUM7SUFDTixDQUFDOzs7OztJQUVPLDRDQUFrQjs7OztJQUExQjtRQUNDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBakd1QixnQ0FBZ0IsR0FBRyxjQUFjLENBQUM7O2dCQXZCMUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLFFBQVEsRUFBRSxrWkFTVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLElBQUksRUFBRTt3QkFDTCx3QkFBd0IsRUFBRSxVQUFRO3FCQUNsQzs7aUJBSUQ7Ozs7Z0JBakNRLFdBQVc7Z0JBSm5CLFNBQVM7Z0JBSlQsaUJBQWlCO2dCQWVULFdBQVc7Z0JBRVgsdUJBQXVCO2dCQUp2QixrQkFBa0I7Z0JBS2xCLGVBQWU7Z0JBRmYsbUNBQW1DO2dCQUZuQyx3QkFBd0I7OzswQkFnQy9CLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQWdHeEMsc0JBQUM7Q0FBQSxBQXpIRCxDQXFCcUMsY0FBYyxHQW9HbEQ7U0FwR1ksZUFBZTs7Ozs7O0lBRTNCLGlDQUEwRDs7SUFFMUQsa0NBQ29COztJQUVwQixxQ0FBc0I7O0lBRXRCLHNDQUF1Qjs7SUFFdkIsMkNBQWtDOztJQUVsQyxrREFBc0M7Ozs7O0lBRTFCLHNDQUF5Qzs7Ozs7SUFDbEQsb0NBQXFDOzs7OztJQUNyQyw0Q0FBcUQ7Ozs7O0lBQ3JELHNDQUF5Qzs7Ozs7SUFDekMsa0RBQWlFOzs7OztJQUNqRSw2Q0FBdUQ7Ozs7O0lBQ3ZELDBDQUFpRDs7Ozs7SUFDakQscURBQWdGOzs7OztJQUNoRiw0REFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4tYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS92ZXJ0aWNhbC1mb3JtYXRpb24vc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9zZWFyY2gud2FyZWhvdXNlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc2VhcmNoLWJhcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlYXJjaGluZ0VuYWJsZWRcIj5cblx0XHRcdDxmb3JtICNmb3JtUmVmXG5cdFx0XHRcdCAgW2Zvcm1Hcm91cF09XCJzZWFyY2hGb3JtXCI+XG5cdFx0XHRcdDxndWktc2VhcmNoLWljb24+PC9ndWktc2VhcmNoLWljb24+XG5cdFx0XHRcdDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hQaHJhc2VcIiBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIj5cblx0XHRcdFx0PHNwYW4gKm5nSWY9XCJzZWFyY2hGb3JtLmNvbnRyb2xzWydzZWFyY2hQaHJhc2UnXS52YWx1ZVwiIGNsYXNzPVwiZ3VpLWNsZWFyLXNlYXJjaC1pY29uXCIgKGNsaWNrKT1cImNsZWFyKClcIj48L3NwYW4+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9uZy1jb250YWluZXI+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktc2VhcmNoLWJhcl0nOiBgXCJ0cnVlXCJgXG5cdH0sXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3N0eWxlL3NlYXJjaGluZy5uZ3guc2Nzcydcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9TRUFSQ0hfTkFNRSA9ICdzZWFyY2hQaHJhc2UnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcblxuXHRzZWFyY2hpbmdFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0c2VhcmNoSW5wdXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmREaXNwYXRjaGVyOiBTZWFyY2hDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVXYXJlaG91c2U6IFN0cnVjdHVyZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hXYXJlaG91c2U6IFNlYXJjaFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZTogU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0Y29udHJvbHNDb25maWdbU2VhcmNoQ29tcG9uZW50LkZPUk1fU0VBUkNIX05BTUVdID0gJyc7XG5cblx0XHR0aGlzLnNlYXJjaEZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGNvbnRyb2xzQ29uZmlnKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGxhY2Vob2xkZXI6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNlYXJjaFdhcmVob3VzZVxuXHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRpZiAocGhyYXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRwaHJhc2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0XHRcdGNvbnRyb2xzQ29uZmlnW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9IHBocmFzZTtcblxuXHRcdFx0XHRpZiAocGhyYXNlICE9PSB0aGlzLnNlYXJjaEZvcm0uZ2V0KFtTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0pLnZhbHVlKSB7XG5cblx0XHRcdFx0XHR0aGlzLnN0b3BPYnNlcnZlQ2hhbmdlcygpO1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoRm9ybS5zZXRWYWx1ZShjb250cm9sc0NvbmZpZyk7XG5cdFx0XHRcdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zZWFyY2hXYXJlaG91c2Vcblx0XHRcdC5vblNlYXJjaEVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzZWFyY2hpbmdFbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoaW5nRW5hYmxlZCA9IHNlYXJjaGluZ0VuYWJsZWQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjbGVhcigpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaEZvcm0ucmVzZXQoKTtcblx0fVxuXG5cdHByaXZhdGUgb2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hJbnB1dFN1YnNjcmlwdGlvbiA9XG5cdFx0XHR0aGlzLnNlYXJjaEZvcm1cblx0XHRcdFx0LmNvbnRyb2xzW1NlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXVxuXHRcdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGRlYm91bmNlVGltZSgyMDApLFxuXHRcdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdFx0KVxuXHRcdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZERpc3BhdGNoZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBzdG9wT2JzZXJ2ZUNoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hJbnB1dFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHR9XG59XG4iXX0=