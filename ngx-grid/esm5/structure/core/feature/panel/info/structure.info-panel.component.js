/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { SourceWarehouse } from '../../../../source/domain-api/source.warehouse';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../../composition/domain/composition.id';
import { StructureId } from '../../../domain/structure.id';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { StructureInfoPanelArchive } from './structure.info-panel.archive';
import { StructureDialogSchemaManagerService } from '../../../../../schema/feature/manager/dialog/structure.dialog-schema-manager.service';
var StructureInfoPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureInfoPanelComponent, _super);
    function StructureInfoPanelComponent(changeDetectorRef, renderer, elementRef, sourceReadModelService, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, schemaManagerService, structureInfoPanelEnabledArchive) {
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
        _this.schemaManagerService = schemaManagerService;
        _this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        _this.infoModal = StructureInfoModalComponent;
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
        this.structureInfoPanelEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} infoPanel
         * @return {?}
         */
        function (infoPanel) {
            _this.infoPanelConfig = infoPanel;
            _this.changeDetectorRef.detectChanges();
        }));
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
        this.dialog.open(this.infoModal);
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
    /**
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.openSchemaManager = /**
     * @return {?}
     */
    function () {
        this.schemaManagerService.open(this.schemaReadModelRootId);
    };
    StructureInfoPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-info-panel',
                    template: "\n\n\t\t<div>\n\t\t\t<div *ngIf=\"infoPanelConfig.isSourceSizeEnabled()\">\n\n\t\t\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t\t\t<ng-container *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\t\t\tShowing <b>{{totalItemsSize | numberFormatter}}</b> items\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<span *ngIf=\"preparedItemsSize !== totalItemsSize\"\n\t\t\t\t\t\t  gui-active-filter-menu-trigger>\n\t\t\t\t\t\tShowing <b>{{preparedItemsSize | numberFormatter}}</b> out of <b>{{totalItemsSize | numberFormatter}}</b> items\n\t\t\t\t\t</span>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<div class=\"gui-right-section\">\n\n\t\t\t\t<div *ngIf=\"infoPanelConfig.isSchemaManagerEnabled()\"\n\t\t\t\t\t (click)=\"openSchemaManager()\">\n\t\t\t\t\t<gui-structure-schema-manager-icon [gui-tooltip]=\"'Theme manager'\"></gui-structure-schema-manager-icon>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"infoPanelConfig.isColumnsManagerEnabled()\"\n\t\t\t\t\t (click)=\"openColumnManager()\">\n\t\t\t\t\t<gui-structure-column-manager-icon [gui-tooltip]=\"'Column manager'\"></gui-structure-column-manager-icon>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"infoPanelConfig.isInfoDialogEnabled()\"\n\t\t\t\t\t (click)=\"openInfo()\">\n\t\t\t\t\t<gui-structure-info-icon [gui-tooltip]=\"'Info'\"></gui-structure-info-icon>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureInfoPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: SourceWarehouse },
        { type: FabricDialogService },
        { type: CompositionId },
        { type: StructureId },
        { type: SchemaReadModelRootId },
        { type: StructureDialogColumnManagerService },
        { type: StructureDialogSchemaManagerService },
        { type: StructureInfoPanelArchive }
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
    StructureInfoPanelComponent.prototype.infoModal;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.infoPanelConfig;
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
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.schemaManagerService;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.structureInfoPanelEnabledArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN4RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUkzSTtJQThDaUQsdURBQWM7SUFZOUQscUNBQTZCLGlCQUFvQyxFQUM3QyxRQUFtQixFQUNuQixVQUFzQixFQUN0QixzQkFBdUMsRUFDdkMsTUFBMkIsRUFDM0IsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIscUJBQTRDLEVBQzVDLHdCQUE2RCxFQUM3RCxvQkFBeUQsRUFD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Qzs7Ozs7SUFFOUIsd0RBQXFEOzs7OztJQUM5RCwrQ0FBb0M7Ozs7O0lBQ3BDLGlEQUF1Qzs7Ozs7SUFDdkMsNkRBQXdEOzs7OztJQUN4RCw2Q0FBNEM7Ozs7O0lBQzVDLG9EQUE2Qzs7Ozs7SUFDN0Msa0RBQXlDOzs7OztJQUN6Qyw0REFBNkQ7Ozs7O0lBQzdELCtEQUE4RTs7Ozs7SUFDOUUsMkRBQTBFOzs7OztJQUMxRSx1RUFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLW1vZGFsL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb2x1bW4tbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3JlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUvbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiAqbmdJZj1cImluZm9QYW5lbENvbmZpZy5pc1NvdXJjZVNpemVFbmFibGVkKClcIj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgIT09IHVuZGVmaW5lZCAmJiB0b3RhbEl0ZW1zU2l6ZSAhPT0gdW5kZWZpbmVkXCI+XG5cblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgPT09IHRvdGFsSXRlbXNTaXplXCI+XG5cdFx0XHRcdFx0XHRTaG93aW5nIDxiPnt7dG90YWxJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj4gaXRlbXNcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHRcdDxzcGFuICpuZ0lmPVwicHJlcGFyZWRJdGVtc1NpemUgIT09IHRvdGFsSXRlbXNTaXplXCJcblx0XHRcdFx0XHRcdCAgZ3VpLWFjdGl2ZS1maWx0ZXItbWVudS10cmlnZ2VyPlxuXHRcdFx0XHRcdFx0U2hvd2luZyA8Yj57e3ByZXBhcmVkSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IG91dCBvZiA8Yj57e3RvdGFsSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IGl0ZW1zXG5cdFx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLXJpZ2h0LXNlY3Rpb25cIj5cblxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaW5mb1BhbmVsQ29uZmlnLmlzU2NoZW1hTWFuYWdlckVuYWJsZWQoKVwiXG5cdFx0XHRcdFx0IChjbGljayk9XCJvcGVuU2NoZW1hTWFuYWdlcigpXCI+XG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtc2NoZW1hLW1hbmFnZXItaWNvbiBbZ3VpLXRvb2x0aXBdPVwiJ1RoZW1lIG1hbmFnZXInXCI+PC9ndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLWljb24+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJpbmZvUGFuZWxDb25maWcuaXNDb2x1bW5zTWFuYWdlckVuYWJsZWQoKVwiXG5cdFx0XHRcdFx0IChjbGljayk9XCJvcGVuQ29sdW1uTWFuYWdlcigpXCI+XG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXItaWNvbiBbZ3VpLXRvb2x0aXBdPVwiJ0NvbHVtbiBtYW5hZ2VyJ1wiPjwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlci1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaW5mb1BhbmVsQ29uZmlnLmlzSW5mb0RpYWxvZ0VuYWJsZWQoKVwiXG5cdFx0XHRcdFx0IChjbGljayk9XCJvcGVuSW5mbygpXCI+XG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtaW5mby1pY29uIFtndWktdG9vbHRpcF09XCInSW5mbydcIj48L2d1aS1zdHJ1Y3R1cmUtaW5mby1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dG90YWxJdGVtc1NpemU6IG51bWJlcjtcblxuXHRwcmVwYXJlZEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdGluZm9Nb2RhbCA9IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudDtcblxuXHRpbmZvUGFuZWxDb25maWc6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSByZW5kZXJlcjogUmVuZGVyZXIyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlUmVhZE1vZGVsU2VydmljZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpYWxvZzogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtZW51Q29sdW1uTWFuYWdlclNlcnZpY2U6IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYU1hbmFnZXJTZXJ2aWNlOiBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoaW5mb1BhbmVsOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0XHR0aGlzLmluZm9QYW5lbENvbmZpZyA9IGluZm9QYW5lbDtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uT3JpZ2luU2l6ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMudG90YWxJdGVtc1NpemUgPSBzaXplO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25QcmVwYXJlZEVudGl0aWVzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwcmVwYXJlZEl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnByZXBhcmVkSXRlbXNTaXplID0gcHJlcGFyZWRJdGVtcy5sZW5ndGg7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvcGVuSW5mbygpOiB2b2lkIHtcblx0XHR0aGlzLmRpYWxvZy5vcGVuKHRoaXMuaW5mb01vZGFsKTtcblx0fVxuXG5cdG9wZW5Db2x1bW5NYW5hZ2VyKCk6IHZvaWQge1xuXHRcdHRoaXMubWVudUNvbHVtbk1hbmFnZXJTZXJ2aWNlLm9wZW4odGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRvcGVuU2NoZW1hTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYU1hbmFnZXJTZXJ2aWNlLm9wZW4odGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cbn1cbiJdfQ==