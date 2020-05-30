/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { StructureSourceWarehouse } from '../../../../lib/structure/domain-api/source/structure-source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
var ListViewContainerCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewContainerCardComponent, _super);
    function ListViewContainerCardComponent(changeDetectorRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureSourceWarehouse = structureSourceWarehouse;
        _this.listCardTemplateArchive = listCardTemplateArchive;
        _this.items = [];
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewContainerCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.structureSourceWarehouse
            .onEntities(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.items = items.map((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.getData(); }));
            _this.changeDetectorRef.detectChanges();
        }));
        this.listCardTemplateArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} template
         * @return {?}
         */
        function (template) {
            _this.cardTemplate = template;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    ListViewContainerCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-container-card',
                    template: "\n\n\t\t<gui-list-card-item *ngFor=\"let element of items\"\n\t\t\t\t\t\t\t\t [item]=\"element\"\n\t\t\t\t\t\t\t\t [template]=\"cardTemplate\">\n\t\t</gui-list-card-item>\n\n\t\t<gui-empty-source [items]=\"items\">\n\t\t</gui-empty-source>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-list-container-card]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ListViewContainerCardComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: StructureId },
        { type: StructureSourceWarehouse },
        { type: ListViewCardTemplateArchive }
    ]; };
    return ListViewContainerCardComponent;
}(SmartComponent));
export { ListViewContainerCardComponent };
if (false) {
    /** @type {?} */
    ListViewContainerCardComponent.prototype.items;
    /** @type {?} */
    ListViewContainerCardComponent.prototype.cardTemplate;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.structureSourceWarehouse;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerCardComponent.prototype.listCardTemplateArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUV4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFFNUUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFekY7SUFtQm9ELDBEQUFjO0lBTWpFLHdDQUE2QixpQkFBb0MsRUFDN0MsV0FBd0IsRUFDeEIsd0JBQWtELEVBQ2xELHVCQUFvRDtRQUh4RSxZQUlDLGlCQUFPLFNBQ1A7UUFMNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw4QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNkI7UUFQeEUsV0FBSyxHQUFlLEVBQUUsQ0FBQzs7SUFTdkIsQ0FBQzs7OztJQUVELGlEQUFROzs7SUFBUjtRQUFBLGlCQW9CQztRQW5CQSxJQUFJLENBQUMsd0JBQXdCO2FBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzVCLElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUMsS0FBd0I7WUFDbkMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFYLENBQVcsRUFBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyx1QkFBdUI7YUFDMUIsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxRQUE4QjtZQUN6QyxLQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztZQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkFwREQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFFBQVEsRUFBRSx1UEFVVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDTCxpQ0FBaUMsRUFBRSxVQUFRO3FCQUMzQztpQkFDRDs7OztnQkEzQmlDLGlCQUFpQjtnQkFLMUMsV0FBVztnQkFIWCx3QkFBd0I7Z0JBS3hCLDJCQUEyQjs7SUF3RHBDLHFDQUFDO0NBQUEsQUF0REQsQ0FtQm9ELGNBQWMsR0FtQ2pFO1NBbkNZLDhCQUE4Qjs7O0lBRTFDLCtDQUF1Qjs7SUFFdkIsc0RBQW1DOzs7OztJQUV2QiwyREFBcUQ7Ozs7O0lBQzlELHFEQUF5Qzs7Ozs7SUFDekMsa0VBQW1FOzs7OztJQUNuRSxpRUFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0NhcmRUZW1wbGF0ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlIH0gZnJvbSAnLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZS5hcmNoaXZlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QtY29udGFpbmVyLWNhcmQnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGd1aS1saXN0LWNhcmQtaXRlbSAqbmdGb3I9XCJsZXQgZWxlbWVudCBvZiBpdGVtc1wiXG5cdFx0XHRcdFx0XHRcdFx0IFtpdGVtXT1cImVsZW1lbnRcIlxuXHRcdFx0XHRcdFx0XHRcdCBbdGVtcGxhdGVdPVwiY2FyZFRlbXBsYXRlXCI+XG5cdFx0PC9ndWktbGlzdC1jYXJkLWl0ZW0+XG5cblx0XHQ8Z3VpLWVtcHR5LXNvdXJjZSBbaXRlbXNdPVwiaXRlbXNcIj5cblx0XHQ8L2d1aS1lbXB0eS1zb3VyY2U+XG5cblx0YCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1saXN0LWNvbnRhaW5lci1jYXJkXSc6IGBcInRydWVcImBcblx0fVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRjYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlXG5cdFx0XHQub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0gaXRlbXMubWFwKGkgPT4gaS5nZXREYXRhKCkpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNhcmRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==