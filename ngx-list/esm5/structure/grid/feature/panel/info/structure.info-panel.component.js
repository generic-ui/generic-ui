/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { StructureId } from '../../../../core/api/structure.id';
import { SchemaReadModelRootId } from '../../../../../schema/core/domain-read/schema.read-model-root-id';
import { StructureInfoPanelArchive } from './structure.info-panel.archive';
import { StructureDialogSchemaManagerService } from '../../../../../schema/feature/manager/dialog/structure.dialog-schema-manager.service';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
var StructureInfoPanelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureInfoPanelComponent, _super);
    function StructureInfoPanelComponent(changeDetectorRef, elementRef, injector, sourceReadModelService, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, translationService, schemaManagerService, structureInfoPanelEnabledArchive) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.injector = injector;
        _this.sourceReadModelService = sourceReadModelService;
        _this.dialog = dialog;
        _this.compositionId = compositionId;
        _this.structureId = structureId;
        _this.schemaReadModelRootId = schemaReadModelRootId;
        _this.menuColumnManagerService = menuColumnManagerService;
        _this.translationService = translationService;
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
        this.translationService
            .onTranslation()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} translation
         * @return {?}
         */
        function (translation) {
            _this.themeManagerTooltipText = translation.infoPanelThemeMangerTooltipText;
            _this.columnManagerTooltipText = translation.infoPanelColumnManagerTooltipText;
            _this.infoTooltipText = translation.infoPanelInfoTooltipText;
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
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId, this.injector);
    };
    /**
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.openSchemaManager = /**
     * @return {?}
     */
    function () {
        this.schemaManagerService.open(this.schemaReadModelRootId, this.injector);
    };
    /**
     * @protected
     * @return {?}
     */
    StructureInfoPanelComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-structure-info-panel';
    };
    StructureInfoPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-structure-info-panel]',
                    template: "<div>\n\t<div *ngIf=\"infoPanelConfig.isSourceSizeEnabled()\">\n\n\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t<ng-container *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</ng-container>\n\n\t\t\t<span *ngIf=\"preparedItemsSize !== totalItemsSize\"\n\t\t\t\t  gui-active-filter-menu-trigger>\n\t\t\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t<b>{{preparedItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelOutOf' | guiTranslate}}\n\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</span>\n\n\t\t</ng-container>\n\n\t</div>\n</div>\n\n<div>\n\t<div class=\"gui-right-section\">\n\n\t\t<div (click)=\"openSchemaManager()\"\n\t\t\t *ngIf=\"infoPanelConfig.isSchemaManagerEnabled()\">\n\t\t\t<div [gui-tooltip]=\"themeManagerTooltipText\" gui-structure-schema-manager-icon></div>\n\t\t</div>\n\n\t\t<div (click)=\"openColumnManager()\"\n\t\t\t *ngIf=\"infoPanelConfig.isColumnsManagerEnabled()\">\n\t\t\t<div [gui-tooltip]=\"columnManagerTooltipText\" gui-structure-column-manager-icon></div>\n\t\t</div>\n\n\t\t<div (click)=\"openInfo()\"\n\t\t\t *ngIf=\"infoPanelConfig.isInfoDialogEnabled()\">\n\t\t\t<div [gui-tooltip]=\"infoTooltipText\" gui-structure-info-icon></div>\n\t\t</div>\n\t</div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureInfoPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: Injector },
        { type: SourceWarehouse },
        { type: FabricDialogService },
        { type: CompositionId },
        { type: StructureId },
        { type: SchemaReadModelRootId },
        { type: StructureDialogColumnManagerService },
        { type: TranslationService },
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
    /** @type {?} */
    StructureInfoPanelComponent.prototype.themeManagerTooltipText;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.columnManagerTooltipText;
    /** @type {?} */
    StructureInfoPanelComponent.prototype.infoTooltipText;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.injector;
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
    StructureInfoPanelComponent.prototype.translationService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZJLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUVyRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUUzSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUl0RjtJQU1pRCx1REFBYztJQWtCOUQscUNBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFFBQWtCLEVBQ2xCLHNCQUF1QyxFQUN2QyxNQUEyQixFQUMzQixhQUE0QixFQUM1QixXQUF3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QUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7SUFFUyxxREFBZTs7OztJQUF6QjtRQUNDLE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQzs7Z0JBbEdELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxxOUNBQW9EO29CQUNwRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3JDOzs7O2dCQTFCaUMsaUJBQWlCO2dCQUFhLFVBQVU7Z0JBQUUsUUFBUTtnQkFRM0UsZUFBZTtnQkFOZixtQkFBbUI7Z0JBUW5CLGFBQWE7Z0JBQ2IsV0FBVztnQkFDWCxxQkFBcUI7Z0JBSHJCLG1DQUFtQztnQkFRbkMsa0JBQWtCO2dCQUZsQixtQ0FBbUM7Z0JBRm5DLHlCQUF5Qjs7SUE0R2xDLGtDQUFDO0NBQUEsQUFwR0QsQ0FNaUQsY0FBYyxHQThGOUQ7U0E5RlksMkJBQTJCOzs7SUFFdkMscURBQXVCOztJQUV2Qix3REFBMEI7O0lBRTFCLGdEQUFrQjs7SUFFbEIsZ0RBQXdDOztJQUV4QyxzREFBMEM7O0lBRTFDLDhEQUFnQzs7SUFFaEMsK0RBQWlDOztJQUVqQyxzREFBd0I7Ozs7O0lBRVosd0RBQXFEOzs7OztJQUU5RCwrQ0FBbUM7Ozs7O0lBQ25DLDZEQUF3RDs7Ozs7SUFDeEQsNkNBQTRDOzs7OztJQUM1QyxvREFBNkM7Ozs7O0lBQzdDLGtEQUF5Qzs7Ozs7SUFDekMsNERBQTZEOzs7OztJQUM3RCwrREFBOEU7Ozs7O0lBQzlFLHlEQUF1RDs7Ozs7SUFDdkQsMkRBQTBFOzs7OztJQUMxRSx1RUFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLW1vZGFsL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUvbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1pbmZvLXBhbmVsXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHR0b3RhbEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdHByZXBhcmVkSXRlbXNTaXplOiBudW1iZXI7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0aW5mb01vZGFsID0gU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50O1xuXG5cdGluZm9QYW5lbENvbmZpZzogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnO1xuXG5cdHRoZW1lTWFuYWdlclRvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0Y29sdW1uTWFuYWdlclRvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0aW5mb1Rvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkaWFsb2c6IEZhYnJpY0RpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbWVudUNvbHVtbk1hbmFnZXJTZXJ2aWNlOiBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFNYW5hZ2VyU2VydmljZTogU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKFxuXHRcdFx0XHQoaW5mb1BhbmVsOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0XHR0aGlzLmluZm9QYW5lbENvbmZpZyA9IGluZm9QYW5lbDtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblxuXHRcdHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uT3JpZ2luU2l6ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMudG90YWxJdGVtc1NpemUgPSBzaXplO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25QcmVwYXJlZEVudGl0aWVzKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChwcmVwYXJlZEl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnByZXBhcmVkSXRlbXNTaXplID0gcHJlcGFyZWRJdGVtcy5sZW5ndGg7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZVxuXHRcdFx0Lm9uVHJhbnNsYXRpb24oKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLnRoZW1lTWFuYWdlclRvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb24uaW5mb1BhbmVsVGhlbWVNYW5nZXJUb29sdGlwVGV4dDtcblx0XHRcdFx0dGhpcy5jb2x1bW5NYW5hZ2VyVG9vbHRpcFRleHQgPSB0cmFuc2xhdGlvbi5pbmZvUGFuZWxDb2x1bW5NYW5hZ2VyVG9vbHRpcFRleHQ7XG5cdFx0XHRcdHRoaXMuaW5mb1Rvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb24uaW5mb1BhbmVsSW5mb1Rvb2x0aXBUZXh0O1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b3BlbkluZm8oKTogdm9pZCB7XG5cdFx0dGhpcy5kaWFsb2cub3Blbih0aGlzLmluZm9Nb2RhbCk7XG5cdH1cblxuXHRvcGVuQ29sdW1uTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLm1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuaW5qZWN0b3IpO1xuXHR9XG5cblx0b3BlblNjaGVtYU1hbmFnZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFNYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLmluamVjdG9yKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbCc7XG5cdH1cblxufVxuIl19