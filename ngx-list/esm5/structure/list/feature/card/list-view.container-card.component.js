/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
var ListViewContainerCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewContainerCardComponent, _super);
    function ListViewContainerCardComponent(changeDetectorRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        var _this = _super.call(this, changeDetectorRef) || this;
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
                    template: "\n\n\t\t<gui-list-card-item *ngFor=\"let element of items\"\n\t\t\t\t\t\t\t[item]=\"element\"\n\t\t\t\t\t\t\t[template]=\"cardTemplate\">\n\t\t</gui-list-card-item>\n\n\t\t<gui-empty-source [items]=\"items\">\n\t\t</gui-empty-source>\n\n\t",
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
        { type: SourceWarehouse },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpILE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTdELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXpGO0lBbUJvRCwwREFBYztJQU1qRSx3Q0FBNkIsaUJBQW9DLEVBQzdDLFdBQXdCLEVBQ3hCLHdCQUF5QyxFQUN6Qyx1QkFBb0Q7UUFIeEUsWUFJQyxrQkFBTSxpQkFBaUIsQ0FBQyxTQUN4QjtRQUw0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBaUI7UUFDekMsNkJBQXVCLEdBQXZCLHVCQUF1QixDQUE2QjtRQVB4RSxXQUFLLEdBQWUsRUFBRSxDQUFDOztJQVN2QixDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO1FBQUEsaUJBb0JDO1FBbkJBLElBQUksQ0FBQyx3QkFBd0I7YUFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxLQUF3QjtZQUNuQyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUM7WUFDekMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHVCQUF1QjthQUMxQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQThCO1lBQ3pDLEtBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXBERCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLGlQQVVUO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNMLGlDQUFpQyxFQUFFLFVBQVE7cUJBQzNDO2lCQUNEOzs7O2dCQTNCaUMsaUJBQWlCO2dCQUsxQyxXQUFXO2dCQUhYLGVBQWU7Z0JBS2YsMkJBQTJCOztJQXdEcEMscUNBQUM7Q0FBQSxBQXRERCxDQW1Cb0QsY0FBYyxHQW1DakU7U0FuQ1ksOEJBQThCOzs7SUFFMUMsK0NBQXVCOztJQUV2QixzREFBbUM7Ozs7O0lBRXZCLDJEQUFxRDs7Ozs7SUFDOUQscURBQXlDOzs7OztJQUN6QyxrRUFBMEQ7Ozs7O0lBQzFELGlFQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LWNvbnRhaW5lci1jYXJkJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxndWktbGlzdC1jYXJkLWl0ZW0gKm5nRm9yPVwibGV0IGVsZW1lbnQgb2YgaXRlbXNcIlxuXHRcdFx0XHRcdFx0XHRbaXRlbV09XCJlbGVtZW50XCJcblx0XHRcdFx0XHRcdFx0W3RlbXBsYXRlXT1cImNhcmRUZW1wbGF0ZVwiPlxuXHRcdDwvZ3VpLWxpc3QtY2FyZC1pdGVtPlxuXG5cdFx0PGd1aS1lbXB0eS1zb3VyY2UgW2l0ZW1zXT1cIml0ZW1zXCI+XG5cdFx0PC9ndWktZW1wdHktc291cmNlPlxuXG5cdGAsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdC1jb250YWluZXItY2FyZF0nOiBgXCJ0cnVlXCJgXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb250YWluZXJDYXJkQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cblx0Y2FyZFRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdENhcmRUZW1wbGF0ZUFyY2hpdmU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlV2FyZWhvdXNlXG5cdFx0XHQub25FbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zID0gaXRlbXMubWFwKGkgPT4gaS5nZXREYXRhKCkpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5saXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZSkgPT4ge1xuXHRcdFx0XHR0aGlzLmNhcmRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==