/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './structure-info-modal.component';
import { StructureSourceReadModelWarehouse } from '../../../ui-api/source/structure-source.read-model-warehouse';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { StructureId } from '../../../domain/structure.id';
import { SchemaReadModelRootId } from '../../../../schema/read/schema.read-model-root-id';
var StructureInfoPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureInfoPanelComponent, _super);
    function StructureInfoPanelComponent(changeDetectorRef, renderer, elementRef, sourceReadModelService, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
        _this.sourceReadModelService = sourceReadModelService;
        _this.dialog = dialog;
        _this.compositionId = compositionId;
        _this.structureId = structureId;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        _this.menuColumnManagerService = menuColumnManagerService;
        _this.infoPanel = StructureInfoModalComponent;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.sourceReadModelService
            .onOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            _this.totalItemsSize = size;
            _this.changeDetectorRef.detectChanges();
        }));
        this.sourceReadModelService
            .onPreparedEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} preparedItems
         * @return {?}
         */
        function (preparedItems) {
            _this.preparedItemsSize = preparedItems.length;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.openInfo = /**
     * @return {?}
     */
    function () {
        this.dialog.open(this.infoPanel);
    };
    /**
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.openColumnManager = /**
     * @return {?}
     */
    function () {
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId);
    };
    StructureInfoPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-info-panel',
                    template: "\n\n\t\t<div>\n\n\t\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t\t<ng-container *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\t\tShowing <b>{{totalItemsSize | numberFormatter}}</b> items\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"preparedItemsSize !== totalItemsSize\">\n\t\t\t\t\tShowing <b>{{preparedItemsSize | numberFormatter}}</b> out of <b>{{totalItemsSize | numberFormatter}}</b> items\n\t\t\t\t</ng-container>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\n\t\t<div>\n\t\t\t<div class=\"gui-right-section\">\n\n\t\t\t\t<span\n\t\t\t\t\t\t(click)=\"openColumnManager()\">\n\t\t\t\t\t<gui-structure-column-manager-icon>\n\t\t\t\t\t</gui-structure-column-manager-icon>\n\t\t\t\t</span>\n\n\t\t\t\t<span [gui-tooltip]=\"'Info'\"\n\t\t\t\t\t  (click)=\"openInfo()\">\n\t\t\t\t\t<gui-structure-info-icon></gui-structure-info-icon>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureInfoPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: StructureSourceReadModelWarehouse },
        { type: FabricDialogService },
        { type: CompositionId },
        { type: StructureId },
        { type: SchemaReadModelRootId },
        { type: StructureDialogColumnManagerService }
    ]; };
    return StructureInfoPanelComponent;
}(SmartComponent));
export { StructureInfoPanelComponent };
if (false) {
    /** @type {?} */
    StructureInfoPanelComponent.prototype.totalItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.preparedItemsSize;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.rowHeight;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.infoPanel;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.sourceReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.dialog;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.schemaReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.menuColumnManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNqSCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBRzFGO0lBdUNpRCx1REFBYztJQVU5RCxxQ0FBNkIsaUJBQW9DLEVBQzdDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLHNCQUF5RCxFQUN6RCxNQUEyQixFQUMzQixhQUE0QixFQUM1QixXQUF3QixFQUN4QixxQkFBNEMsRUFDNUMsd0JBQTZEO1FBUmpGLFlBU0MsaUJBQU8sU0FDUDtRQVY0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUFtQztRQUN6RCxZQUFNLEdBQU4sTUFBTSxDQUFxQjtRQUMzQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBcUM7UUFWakYsZUFBUyxHQUFHLDJCQUEyQixDQUFDOztJQVl4QyxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQUEsaUJBcUJDO1FBbkJBLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFZO1lBQ3ZCLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztRQUVKLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsa0JBQWtCLEVBQUU7YUFDcEIsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxhQUF5QjtZQUNwQyxLQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQztZQUM5QyxLQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsOENBQVE7OztJQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCx1REFBaUI7OztJQUFqQjtRQUNDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNwRixDQUFDOztnQkExRkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSw4N0JBaUNUO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBckRpQyxpQkFBaUI7Z0JBQWlDLFNBQVM7Z0JBQTdCLFVBQVU7Z0JBUWpFLGlDQUFpQztnQkFOakMsbUJBQW1CO2dCQVFuQixhQUFhO2dCQUNiLFdBQVc7Z0JBQ1gscUJBQXFCO2dCQUhyQixtQ0FBbUM7O0lBa0c1QyxrQ0FBQztDQUFBLEFBNUZELENBdUNpRCxjQUFjLEdBcUQ5RDtTQXJEWSwyQkFBMkI7OztJQUV2QyxxREFBdUI7O0lBRXZCLHdEQUEwQjs7SUFFMUIsZ0RBQWtCOztJQUVsQixnREFBd0M7Ozs7O0lBRTVCLHdEQUFxRDs7Ozs7SUFDOUQsK0NBQW9DOzs7OztJQUNwQyxpREFBdUM7Ozs7O0lBQ3ZDLDZEQUEwRTs7Ozs7SUFDMUUsNkNBQTRDOzs7OztJQUM1QyxvREFBNkM7Ozs7O0lBQzdDLGtEQUF5Qzs7Ozs7SUFDekMsNERBQTZEOzs7OztJQUM3RCwrREFBOEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTb3VyY2VSZWFkTW9kZWxXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2UucmVhZC1tb2RlbC13YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb2x1bW4tbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2PlxuXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgIT09IHVuZGVmaW5lZCAmJiB0b3RhbEl0ZW1zU2l6ZSAhPT0gdW5kZWZpbmVkXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplID09PSB0b3RhbEl0ZW1zU2l6ZVwiPlxuXHRcdFx0XHRcdFNob3dpbmcgPGI+e3t0b3RhbEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPiBpdGVtc1xuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgIT09IHRvdGFsSXRlbXNTaXplXCI+XG5cdFx0XHRcdFx0U2hvd2luZyA8Yj57e3ByZXBhcmVkSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IG91dCBvZiA8Yj57e3RvdGFsSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IGl0ZW1zXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktcmlnaHQtc2VjdGlvblwiPlxuXG5cdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwib3BlbkNvbHVtbk1hbmFnZXIoKVwiPlxuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyLWljb24+XG5cdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyLWljb24+XG5cdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHQ8c3BhbiBbZ3VpLXRvb2x0aXBdPVwiJ0luZm8nXCJcblx0XHRcdFx0XHQgIChjbGljayk9XCJvcGVuSW5mbygpXCI+XG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtaW5mby1pY29uPjwvZ3VpLXN0cnVjdHVyZS1pbmZvLWljb24+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dG90YWxJdGVtc1NpemU6IG51bWJlcjtcblxuXHRwcmVwYXJlZEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdGluZm9QYW5lbCA9IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlUmVhZE1vZGVsU2VydmljZTogU3RydWN0dXJlU291cmNlUmVhZE1vZGVsV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpYWxvZzogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtZW51Q29sdW1uTWFuYWdlclNlcnZpY2U6IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25PcmlnaW5TaXplKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy50b3RhbEl0ZW1zU2l6ZSA9IHNpemU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblByZXBhcmVkRW50aXRpZXMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHByZXBhcmVkSXRlbXM6IEFycmF5PGFueT4pID0+IHtcblx0XHRcdFx0dGhpcy5wcmVwYXJlZEl0ZW1zU2l6ZSA9IHByZXBhcmVkSXRlbXMubGVuZ3RoO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b3BlbkluZm8oKTogdm9pZCB7XG5cdFx0dGhpcy5kaWFsb2cub3Blbih0aGlzLmluZm9QYW5lbCk7XG5cdH1cblxuXHRvcGVuQ29sdW1uTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLm1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cbn1cbiJdfQ==