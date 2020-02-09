/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { StructureCommandService } from '../../../../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../../../../ui-api/structure/structure-read-model.service';
var StructureSearchComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSearchComponent, _super);
    function StructureSearchComponent(formBuilder, renderer2, structureCommandService, structureReadModelService) {
        var _this = _super.call(this) || this;
        _this.formBuilder = formBuilder;
        _this.renderer2 = renderer2;
        _this.structureCommandService = structureCommandService;
        _this.structureReadModelService = structureReadModelService;
        _this.searchForm = _this.formBuilder.group({
            'searchPhrase': ''
        });
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSearchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.observeChanges();
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
    StructureSearchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-search-bar',
                    template: "\n\t\t<form #formRef\n\t\t\t  [formGroup]=\"searchForm\">\n\t\t\t<div class=\"gui-search-icon\"></div>\n\t\t\t<input formControlName=\"searchPhrase\" [placeholder]=\"'Search ...'\">\n\t\t</form>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureSearchComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Renderer2 },
        { type: StructureCommandService },
        { type: StructureReadModelService }
    ]; };
    StructureSearchComponent.propDecorators = {
        formRef: [{ type: ViewChild, args: ['formRef', { static: false },] }]
    };
    return StructureSearchComponent;
}(SmartComponent));
export { StructureSearchComponent };
if (false) {
    /** @type {?} */
    StructureSearchComponent.prototype.formRef;
    /** @type {?} */
    StructureSearchComponent.prototype.searchForm;
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
    StructureSearchComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureSearchComponent.prototype.structureReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvcGFuZWwvdG9wL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9JLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBR3RHO0lBWThDLG9EQUFjO0lBTzNELGtDQUFvQixXQUF3QixFQUNqQyxTQUFvQixFQUNwQix1QkFBZ0QsRUFDaEQseUJBQW9EO1FBSC9ELFlBSUMsaUJBQU8sU0FJUDtRQVJtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxlQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUU5RCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ3hDLGNBQWMsRUFBRSxFQUFFO1NBQ2xCLENBQUMsQ0FBQzs7SUFDSixDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxrREFBZTs7O0lBQWY7UUFBQSxpQkFTQztRQVJBLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxTQUFpQjtZQUM1QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGlEQUFjOzs7O0lBQXRCO1FBQUEsaUJBV0M7UUFWQSxJQUFJLENBQUMsVUFBVTthQUNiLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDeEIsWUFBWTthQUNaLElBQUksQ0FDSixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxNQUFjO1lBQ3pCLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF2REQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSx3TUFNVDtvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQXBCUSxXQUFXO2dCQUQ0RCxTQUFTO2dCQU1oRix1QkFBdUI7Z0JBQ3ZCLHlCQUF5Qjs7OzBCQWlCaEMsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBMEN4QywrQkFBQztDQUFBLEFBeERELENBWThDLGNBQWMsR0E0QzNEO1NBNUNZLHdCQUF3Qjs7O0lBRXBDLDJDQUNvQjs7SUFFcEIsOENBQXNCOzs7OztJQUVWLCtDQUFnQzs7Ozs7SUFDekMsNkNBQTRCOzs7OztJQUM1QiwyREFBd0Q7Ozs7O0lBQ3hELDZEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1zZWFyY2gtYmFyJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8Zm9ybSAjZm9ybVJlZlxuXHRcdFx0ICBbZm9ybUdyb3VwXT1cInNlYXJjaEZvcm1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktc2VhcmNoLWljb25cIj48L2Rpdj5cblx0XHRcdDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzZWFyY2hQaHJhc2VcIiBbcGxhY2Vob2xkZXJdPVwiJ1NlYXJjaCAuLi4nXCI+XG5cdFx0PC9mb3JtPlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnZm9ybVJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRmb3JtUmVmOiBFbGVtZW50UmVmO1xuXG5cdHNlYXJjaEZvcm06IEZvcm1Hcm91cDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZW5kZXJlcjI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zZWFyY2hGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG5cdFx0XHQnc2VhcmNoUGhyYXNlJzogJydcblx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub2JzZXJ2ZUNoYW5nZXMoKTtcblx0fVxuXG5cdG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblx0XHR0aGlzLnN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblJvd0hlaWdodCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yZW5kZXJlcjIuc2V0U3R5bGUodGhpcy5mb3JtUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnMzBweCcpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIG9ic2VydmVDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRm9ybVxuXHRcdFx0LmNvbnRyb2xzWydzZWFyY2hQaHJhc2UnXVxuXHRcdFx0LnZhbHVlQ2hhbmdlc1xuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGRlYm91bmNlVGltZSgyMDApLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwaHJhc2U6IHN0cmluZykgPT4ge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNlYXJjaChwaHJhc2UpO1xuXHRcdFx0fSk7XG5cdH1cbn1cbiJdfQ==