/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandDispatcher } from '../../../../ui-api/structure/structure.command-dispatcher';
import { StructureReadModelWarehouse } from '../../../../ui-api/structure/structure.read-model-warehouse';
import { StructureSearchPlaceholderArchive } from '../../../../read/structure/searching/placeholder/structure.search-placeholder.archive';
import { StructureSearchPhraseRepository } from '../../../../read/structure/searching/phrase/structure.search-phrase.repository';
import { StructureId } from '../../../../domain/structure.id';
var StructureSearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSearchComponent, _super);
    function StructureSearchComponent(formBuilder, renderer2, changeDetectorRef, structureId, structureCommandService, structureReadModelService, structureSearchPhraseRepository, structureSearchPlaceholderArchive) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.renderer2 = renderer2;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.structureReadModelService = structureReadModelService;
        _this.structureSearchPhraseRepository = structureSearchPhraseRepository;
        _this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
        _this.placeholder = 'Search';
        /** @type {?} */
        var controlsConfig = {};
        controlsConfig[StructureSearchComponent.FORM_SEARCH_NAME] = '';
        _this.searchForm = _this.formBuilder.group(controlsConfig);
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSearchComponent.prototype.ngOnInit = /**
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
        this.structureSearchPhraseRepository
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
            controlsConfig[StructureSearchComponent.FORM_SEARCH_NAME] = phrase;
            if (phrase !== _this.searchForm.get([StructureSearchComponent.FORM_SEARCH_NAME]).value) {
                _this.searchForm.setValue(controlsConfig);
            }
        }));
    };
    /**
     * @return {?}
     */
    StructureSearchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structureReadModelService
            .onRowHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} rowHeight
         * @return {?}
         */
        function (rowHeight) {
            _this.renderer2.setStyle(_this.formRef.nativeElement, 'height', '30px');
        }));
    };
    /**
     * @private
     * @return {?}
     */
    StructureSearchComponent.prototype.observeChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.searchForm
            .controls['searchPhrase']
            .valueChanges
            .pipe(debounceTime(200), this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        function (phrase) {
            _this.structureCommandService.search(phrase);
        }));
    };
    StructureSearchComponent.FORM_SEARCH_NAME = 'searchPhrase';
    StructureSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-search-bar',
                    template: "\n\t\t<form #formRef\n\t\t\t  [formGroup]=\"searchForm\">\n\t\t\t<svg class=\"gui-search-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10.231\" height=\"10.601\" viewBox=\"0 0 10.231 10.601\">\n\t\t\t\t<line x2=\"1.77\" y2=\"1.77\" transform=\"translate(7.4 7.77)\" fill=\"none\" stroke-linecap=\"round\"\n\t\t\t\t\t  stroke-linejoin=\"round\" stroke-width=\"1.5\"/>\n\t\t\t\t<circle cx=\"4.02\" cy=\"4.02\" r=\"4.02\" transform=\"translate(0.5 0.5)\" stroke-width=\"1\" \n\t\t\t\t\t\tstroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n\t\t\t</svg>\n\t\t\t<input formControlName=\"searchPhrase\" [placeholder]=\"placeholder\">\n\t\t</form>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Renderer2 },
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureCommandDispatcher },
        { type: StructureReadModelWarehouse },
        { type: StructureSearchPhraseRepository },
        { type: StructureSearchPlaceholderArchive }
    ]; };
    StructureSearchComponent.propDecorators = {
        formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }]
    };
    return StructureSearchComponent;
}(SmartComponent));
export { StructureSearchComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.FORM_SEARCH_NAME;
    /** @type {?} */
    StructureSearchComponent.prototype.formRef;
    /** @type {?} */
    StructureSearchComponent.prototype.searchForm;
    /** @type {?} */
    StructureSearchComponent.prototype.placeholder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureSearchPhraseRepository;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureSearchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvdG9wL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBRVYsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFOUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDdkcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDMUksT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0ZBQWdGLENBQUM7QUFDakksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzlEO0lBaUI4QyxvREFBYztJQVczRCxrQ0FBb0IsV0FBd0IsRUFDakMsU0FBb0IsRUFDcEIsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLHVCQUFtRCxFQUNuRCx5QkFBc0QsRUFDdEQsK0JBQWdFLEVBQ2hFLGlDQUFvRTtRQVAvRSxZQVFDLGlCQUFPLFNBTVA7UUFkbUIsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsZUFBUyxHQUFULFNBQVMsQ0FBVztRQUNwQix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7UUFDbkQsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUE2QjtRQUN0RCxxQ0FBK0IsR0FBL0IsK0JBQStCLENBQWlDO1FBQ2hFLHVDQUFpQyxHQUFqQyxpQ0FBaUMsQ0FBbUM7UUFUL0UsaUJBQVcsR0FBRyxRQUFRLENBQUM7O1lBWWxCLGNBQWMsR0FBRyxFQUFFO1FBQ3ZCLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUUvRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztJQUMxRCxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQUEsaUJBZ0NDO1FBL0JBLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsaUNBQWlDO2FBQ3BDLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsV0FBbUI7WUFDOUIsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDL0IsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLCtCQUErQjthQUNsQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMxQixJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLE1BQWM7WUFFekIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUN6QixNQUFNLEdBQUcsSUFBSSxDQUFDO2FBQ2Q7O2dCQUVHLGNBQWMsR0FBRyxFQUFFO1lBQ3ZCLGNBQWMsQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQztZQUVuRSxJQUFJLE1BQU0sS0FBSyxLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RGLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3pDO1FBRUYsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsa0RBQWU7OztJQUFmO1FBQUEsaUJBU0M7UUFSQSxJQUFJLENBQUMseUJBQXlCO2FBQzVCLFdBQVcsRUFBRTthQUNiLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsU0FBaUI7WUFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxpREFBYzs7OztJQUF0QjtRQUFBLGlCQVdDO1FBVkEsSUFBSSxDQUFDLFVBQVU7YUFDYixRQUFRLENBQUMsY0FBYyxDQUFDO2FBQ3hCLFlBQVk7YUFDWixJQUFJLENBQ0osWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsTUFBYztZQUN6QixLQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQWpGdUIseUNBQWdCLEdBQUcsY0FBYyxDQUFDOztnQkFuQjFELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUsNHBCQVdUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBNUJRLFdBQVc7Z0JBSm5CLFNBQVM7Z0JBSlQsaUJBQWlCO2dCQWlCVCxXQUFXO2dCQUpYLDBCQUEwQjtnQkFDMUIsMkJBQTJCO2dCQUUzQiwrQkFBK0I7Z0JBRC9CLGlDQUFpQzs7OzBCQTBCeEMsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBZ0Z4QywrQkFBQztDQUFBLEFBckdELENBaUI4QyxjQUFjLEdBb0YzRDtTQXBGWSx3QkFBd0I7Ozs7OztJQUVwQywwQ0FBMEQ7O0lBRTFELDJDQUNvQjs7SUFFcEIsOENBQXNCOztJQUV0QiwrQ0FBdUI7Ozs7O0lBRVgsK0NBQWdDOzs7OztJQUN6Qyw2Q0FBNEI7Ozs7O0lBQzVCLHFEQUE0Qzs7Ozs7SUFDNUMsK0NBQWdDOzs7OztJQUNoQywyREFBMkQ7Ozs7O0lBQzNELDZEQUE4RDs7Ozs7SUFDOUQsbUVBQXdFOzs7OztJQUN4RSxxRUFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRBZnRlclZpZXdJbml0LFxuXHRDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcblx0Q2hhbmdlRGV0ZWN0b3JSZWYsXG5cdENvbXBvbmVudCxcblx0RWxlbWVudFJlZixcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQaHJhc2VSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL3BocmFzZS9zdHJ1Y3R1cmUuc2VhcmNoLXBocmFzZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1zZWFyY2gtYmFyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdFx0ICBbZm9ybUdyb3VwXT1cInNlYXJjaEZvcm1cIj5cblx0XHRcdDxzdmcgY2xhc3M9XCJndWktc2VhcmNoLWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMC4yMzFcIiBoZWlnaHQ9XCIxMC42MDFcIiB2aWV3Qm94PVwiMCAwIDEwLjIzMSAxMC42MDFcIj5cblx0XHRcdFx0PGxpbmUgeDI9XCIxLjc3XCIgeTI9XCIxLjc3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcuNCA3Ljc3KVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG5cdFx0XHRcdFx0ICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiLz5cblx0XHRcdFx0PGNpcmNsZSBjeD1cIjQuMDJcIiBjeT1cIjQuMDJcIiByPVwiNC4wMlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjUgMC41KVwiIHN0cm9rZS13aWR0aD1cIjFcIiBcblx0XHRcdFx0XHRcdHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGZpbGw9XCJub25lXCIvPlxuXHRcdFx0PC9zdmc+XG5cdFx0XHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwic2VhcmNoUGhyYXNlXCIgW3BsYWNlaG9sZGVyXT1cInBsYWNlaG9sZGVyXCI+XG5cdFx0PC9mb3JtPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgRk9STV9TRUFSQ0hfTkFNRSA9ICdzZWFyY2hQaHJhc2UnO1xuXG5cdEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0Zm9ybVJlZjogRWxlbWVudFJlZjtcblxuXHRzZWFyY2hGb3JtOiBGb3JtR3JvdXA7XG5cblx0cGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeTogU3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRsZXQgY29udHJvbHNDb25maWcgPSB7fTtcblx0XHRjb250cm9sc0NvbmZpZ1tTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0gPSAnJztcblxuXHRcdHRoaXMuc2VhcmNoRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoY29udHJvbHNDb25maWcpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vYnNlcnZlQ2hhbmdlcygpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwbGFjZWhvbGRlcjogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGhyYXNlUmVwb3NpdG9yeVxuXHRcdFx0Lm9uUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRpZiAocGhyYXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRwaHJhc2UgPSBudWxsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IGNvbnRyb2xzQ29uZmlnID0ge307XG5cdFx0XHRcdGNvbnRyb2xzQ29uZmlnW1N0cnVjdHVyZVNlYXJjaENvbXBvbmVudC5GT1JNX1NFQVJDSF9OQU1FXSA9IHBocmFzZTtcblxuXHRcdFx0XHRpZiAocGhyYXNlICE9PSB0aGlzLnNlYXJjaEZvcm0uZ2V0KFtTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQuRk9STV9TRUFSQ0hfTkFNRV0pLnZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWFyY2hGb3JtLnNldFZhbHVlKGNvbnRyb2xzQ29uZmlnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblJvd0hlaWdodCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5mb3JtUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnMzBweCcpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRm9ybVxuXHRcdFx0LmNvbnRyb2xzWydzZWFyY2hQaHJhc2UnXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGRlYm91bmNlVGltZSgyMDApLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNlYXJjaChwaHJhc2UpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==