/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation, Injector } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
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
    function StructureInfoPanelComponent(changeDetectorRef, renderer, elementRef, injector, sourceReadModelService, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, translationService, schemaManagerService, structureInfoPanelEnabledArchive) {
        var _this = _super.call(this, changeDetectorRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.elementRef = elementRef;
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
    StructureInfoPanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-info-panel',
                    template: "\n\n\t\t<div>\n\t\t\t<div *ngIf=\"infoPanelConfig.isSourceSizeEnabled()\">\n\n\t\t\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t\t\t<ng-container *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\t\t\t{{'infoPanelShowing' | translate}} <b>{{totalItemsSize | numberFormatter}}</b> {{'infoPanelItems' | translate}}\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<span *ngIf=\"preparedItemsSize !== totalItemsSize\"\n\t\t\t\t\t\t  gui-active-filter-menu-trigger>\n\t\t\t\t\t\t{{'infoPanelShowing' | translate}}\n\t\t\t\t\t\t<b>{{preparedItemsSize | numberFormatter}}</b>\n\t\t\t\t\t\t{{'infoPanelOutOf' | translate}}\n\t\t\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t\t\t{{'infoPanelItems' | translate}}\n\t\t\t\t\t</span>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div>\n\t\t\t<div class=\"gui-right-section\">\n\n\t\t\t\t<div *ngIf=\"infoPanelConfig.isSchemaManagerEnabled()\"\n\t\t\t\t\t (click)=\"openSchemaManager()\">\n\t\t\t\t\t<gui-structure-schema-manager-icon [gui-tooltip]=\"themeManagerTooltipText\"></gui-structure-schema-manager-icon>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"infoPanelConfig.isColumnsManagerEnabled()\"\n\t\t\t\t\t (click)=\"openColumnManager()\">\n\t\t\t\t\t<gui-structure-column-manager-icon [gui-tooltip]=\"columnManagerTooltipText\"></gui-structure-column-manager-icon>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngIf=\"infoPanelConfig.isInfoDialogEnabled()\"\n\t\t\t\t\t (click)=\"openInfo()\">\n\t\t\t\t\t<gui-structure-info-icon [gui-tooltip]=\"infoTooltipText\"></gui-structure-info-icon>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureInfoPanelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsSixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQzFILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDekcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFM0UsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFFM0ksT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJdEY7SUFrRGlELHVEQUFjO0lBa0I5RCxxQ0FBNkIsaUJBQW9DLEVBQzdDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLFFBQWtCLEVBQ2xCLHNCQUF1QyxFQUN2QyxNQUEy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O0lBQWpCO1FBQ0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNFLENBQUM7O2dCQTNJRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLG9uREE0Q1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUNyQzs7OztnQkF0RWlDLGlCQUFpQjtnQkFBaUMsU0FBUztnQkFBN0IsVUFBVTtnQkFBd0MsUUFBUTtnQkFRakgsZUFBZTtnQkFOZixtQkFBbUI7Z0JBUW5CLGFBQWE7Z0JBQ2IsV0FBVztnQkFDWCxxQkFBcUI7Z0JBSHJCLG1DQUFtQztnQkFRbkMsa0JBQWtCO2dCQUZsQixtQ0FBbUM7Z0JBRm5DLHlCQUF5Qjs7SUFxSmxDLGtDQUFDO0NBQUEsQUE3SUQsQ0FrRGlELGNBQWMsR0EyRjlEO1NBM0ZZLDJCQUEyQjs7O0lBRXZDLHFEQUF1Qjs7SUFFdkIsd0RBQTBCOztJQUUxQixnREFBa0I7O0lBRWxCLGdEQUF3Qzs7SUFFeEMsc0RBQTBDOztJQUUxQyw4REFBZ0M7O0lBRWhDLCtEQUFpQzs7SUFFakMsc0RBQXdCOzs7OztJQUVaLHdEQUFxRDs7Ozs7SUFDOUQsK0NBQW9DOzs7OztJQUNwQyxpREFBdUM7Ozs7O0lBQ3ZDLCtDQUFtQzs7Ozs7SUFDbkMsNkRBQXdEOzs7OztJQUN4RCw2Q0FBNEM7Ozs7O0lBQzVDLG9EQUE2Qzs7Ozs7SUFDN0Msa0RBQXlDOzs7OztJQUN6Qyw0REFBNkQ7Ozs7O0lBQzdELCtEQUE4RTs7Ozs7SUFDOUUseURBQXVEOzs7OztJQUN2RCwyREFBMEU7Ozs7O0lBQzFFLHVFQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24sIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLW1vZGFsL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2ZlYXR1cmUvbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWluZm8tcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgKm5nSWY9XCJpbmZvUGFuZWxDb25maWcuaXNTb3VyY2VTaXplRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB1bmRlZmluZWQgJiYgdG90YWxJdGVtc1NpemUgIT09IHVuZGVmaW5lZFwiPlxuXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplID09PSB0b3RhbEl0ZW1zU2l6ZVwiPlxuXHRcdFx0XHRcdFx0e3snaW5mb1BhbmVsU2hvd2luZycgfCB0cmFuc2xhdGV9fSA8Yj57e3RvdGFsSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IHt7J2luZm9QYW5lbEl0ZW1zJyB8IHRyYW5zbGF0ZX19XG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0XHQ8c3BhbiAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB0b3RhbEl0ZW1zU2l6ZVwiXG5cdFx0XHRcdFx0XHQgIGd1aS1hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlcj5cblx0XHRcdFx0XHRcdHt7J2luZm9QYW5lbFNob3dpbmcnIHwgdHJhbnNsYXRlfX1cblx0XHRcdFx0XHRcdDxiPnt7cHJlcGFyZWRJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj5cblx0XHRcdFx0XHRcdHt7J2luZm9QYW5lbE91dE9mJyB8IHRyYW5zbGF0ZX19XG5cdFx0XHRcdFx0XHQ8Yj57e3RvdGFsSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+XG5cdFx0XHRcdFx0XHR7eydpbmZvUGFuZWxJdGVtcycgfCB0cmFuc2xhdGV9fVxuXHRcdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1yaWdodC1zZWN0aW9uXCI+XG5cblx0XHRcdFx0PGRpdiAqbmdJZj1cImluZm9QYW5lbENvbmZpZy5pc1NjaGVtYU1hbmFnZXJFbmFibGVkKClcIlxuXHRcdFx0XHRcdCAoY2xpY2spPVwib3BlblNjaGVtYU1hbmFnZXIoKVwiPlxuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLWljb24gW2d1aS10b29sdGlwXT1cInRoZW1lTWFuYWdlclRvb2x0aXBUZXh0XCI+PC9ndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLWljb24+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJpbmZvUGFuZWxDb25maWcuaXNDb2x1bW5zTWFuYWdlckVuYWJsZWQoKVwiXG5cdFx0XHRcdFx0IChjbGljayk9XCJvcGVuQ29sdW1uTWFuYWdlcigpXCI+XG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXItaWNvbiBbZ3VpLXRvb2x0aXBdPVwiY29sdW1uTWFuYWdlclRvb2x0aXBUZXh0XCI+PC9ndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyLWljb24+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJpbmZvUGFuZWxDb25maWcuaXNJbmZvRGlhbG9nRW5hYmxlZCgpXCJcblx0XHRcdFx0XHQgKGNsaWNrKT1cIm9wZW5JbmZvKClcIj5cblx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1pbmZvLWljb24gW2d1aS10b29sdGlwXT1cImluZm9Ub29sdGlwVGV4dFwiPjwvZ3VpLXN0cnVjdHVyZS1pbmZvLWljb24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHR0b3RhbEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdHByZXBhcmVkSXRlbXNTaXplOiBudW1iZXI7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0aW5mb01vZGFsID0gU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50O1xuXG5cdGluZm9QYW5lbENvbmZpZzogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnO1xuXG5cdHRoZW1lTWFuYWdlclRvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0Y29sdW1uTWFuYWdlclRvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0aW5mb1Rvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VSZWFkTW9kZWxTZXJ2aWNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nOiBGYWJyaWNEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZTogU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hTWFuYWdlclNlcnZpY2U6IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KGluZm9QYW5lbDogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pbmZvUGFuZWxDb25maWcgPSBpbmZvUGFuZWw7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbk9yaWdpblNpemUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnRvdGFsSXRlbXNTaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUHJlcGFyZWRFbnRpdGllcygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocHJlcGFyZWRJdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0dGhpcy5wcmVwYXJlZEl0ZW1zU2l6ZSA9IHByZXBhcmVkSXRlbXMubGVuZ3RoO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Vcblx0XHRcdC5vblRyYW5zbGF0aW9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy50aGVtZU1hbmFnZXJUb29sdGlwVGV4dCA9IHRyYW5zbGF0aW9uLmluZm9QYW5lbFRoZW1lTWFuZ2VyVG9vbHRpcFRleHQ7XG5cdFx0XHRcdHRoaXMuY29sdW1uTWFuYWdlclRvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb24uaW5mb1BhbmVsQ29sdW1uTWFuYWdlclRvb2x0aXBUZXh0O1xuXHRcdFx0XHR0aGlzLmluZm9Ub29sdGlwVGV4dCA9IHRyYW5zbGF0aW9uLmluZm9QYW5lbEluZm9Ub29sdGlwVGV4dDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9wZW5JbmZvKCk6IHZvaWQge1xuXHRcdHRoaXMuZGlhbG9nLm9wZW4odGhpcy5pbmZvTW9kYWwpO1xuXHR9XG5cblx0b3BlbkNvbHVtbk1hbmFnZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5tZW51Q29sdW1uTWFuYWdlclNlcnZpY2Uub3Blbih0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLmluamVjdG9yKTtcblx0fVxuXG5cdG9wZW5TY2hlbWFNYW5hZ2VyKCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hTWFuYWdlclNlcnZpY2Uub3Blbih0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5pbmplY3Rvcik7XG5cdH1cblxufVxuIl19