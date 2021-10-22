/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, ViewChild, ViewEncapsulation, Injector } from '@angular/core';
import { StructureCommandInvoker } from '../../../../../core/api/structure.command-invoker';
import { CellTemplateWithContext } from '../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../../../composition/core/api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './structure.column-menu-config.archive';
import { FilterWarehouse } from '../../../../../filter/core/api/filter.warehouse';
import { StructureId } from '../../../../../core/api/structure.id';
import { TranslationFacade } from '../../../../../../l10n/core/api/translation.facade';
import { hermesSwitchMap } from '@generic-ui/hermes';
import { CompositionId } from '../../../../../../composition/core/api/composition.id';
import { CompositionCommandInvoker } from '../../../../../../composition/core/api/composition.command-invoker';
import { StructureColumnConfigService } from '../structure.column-config.service';
var StructureColumnConfigComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigComponent, _super);
    function StructureColumnConfigComponent(changeDetectorRef, elementRef, structureId, structureCommandService, compositionReadModelService, filterWarehouse, translationFacade, structureColumnMenuConfigArchive, compositionId, compositionCommandInvoker, injector, column) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.filterWarehouse = filterWarehouse;
        _this.translationFacade = translationFacade;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        _this.compositionId = compositionId;
        _this.compositionCommandInvoker = compositionCommandInvoker;
        _this.injector = injector;
        _this.column = column;
        _this.uniqueValues = [];
        _this.structureColumnConfigService = _this.injector.get(StructureColumnConfigService);
        return _this;
    }
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.hermesSubscribe(this.filterWarehouse.onUniqueValues(this.structureId), (/**
         * @param {?} uniqueValuesReadModel
         * @return {?}
         */
        function (uniqueValuesReadModel) {
            _this.uniqueValues = uniqueValuesReadModel.getValues(_this.column.getFieldId());
        }));
        this.hermesSubscribe(this.structureColumnMenuConfigArchive
            .on()
            .pipe(hermesSwitchMap((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.config = config;
            return _this.translationFacade.onTranslation();
        }))), (/**
         * @param {?} translation
         * @return {?}
         */
        function (translation) {
            _this.setTabTitles(translation);
            _this.dropdownTextTranslation = translation.headerMenuMainTabColumnSort;
        }));
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.config && this.config.isEnabled();
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.hideColumn = /**
     * @return {?}
     */
    function () {
        this.compositionCommandInvoker.disableColumn(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.moveLeft = /**
     * @return {?}
     */
    function () {
        this.compositionCommandInvoker.moveLeft(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.moveRight = /**
     * @return {?}
     */
    function () {
        this.compositionCommandInvoker.moveRight(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    };
    /**
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.highlightColumn = /**
     * @return {?}
     */
    function () {
        this.compositionCommandInvoker.highlightColumn(this.column.getColumnDefinitionId(), this.compositionId);
        this.structureColumnConfigService.close();
    };
    /**
     * @private
     * @param {?} translation
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.setTabTitles = /**
     * @private
     * @param {?} translation
     * @return {?}
     */
    function (translation) {
        this.config.setMainMenu(translation.headerMenuMainTab);
        this.config.setFilterMenu(translation.headerMenuFilterTab);
        this.config.setColumnsMenu(translation.headerMenuColumnsTab);
    };
    /**
     * @protected
     * @return {?}
     */
    StructureColumnConfigComponent.prototype.getSelectorName = /**
     * @protected
     * @return {?}
     */
    function () {
        return 'gui-column-config';
    };
    StructureColumnConfigComponent.decorators = [
        { type: Component, args: [{
                    selector: 'div[gui-column-config]',
                    template: "<div *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-tab\">\n\n\t<gui-tab [active]=\"config.getActiveMenu()\" [menu]=\"config.getMenus()\">\n\n\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getMainMenu()\" class=\"gui-tab-item-dropdown\">\n\n\t\t\t\t<div *ngIf=\"column.isSortEnabled()\" [column]=\"column\"\n\t\t\t\t\t [dropdownTextTranslation]=\"dropdownTextTranslation\"\n\t\t\t\t\t gui-structure-column-config-sort>\n\t\t\t\t</div>\n\n\t\t\t\t<div [column]=\"column\"\n\t\t\t\t\t (columnHidden)=\"hideColumn()\"\n\t\t\t\t\t gui-structure-column-config-column-hide>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"gui-header-menu-item\"\n\t\t\t\t\t (click)=\"highlightColumn()\">\n\t\t\t\t\t{{'headerMenuMainTabHighlightColumn' | guiTranslate}}\n\t\t\t\t</div>\n\n\t\t\t\t<div [column]=\"column\"\n\t\t\t\t\t (movedLeft)=\"moveLeft()\"\n\t\t\t\t\t (movedRight)=\"moveRight()\"\n\t\t\t\t\t gui-structure-column-config-column-move>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>-->\n\n\t\t\t\t<div [fieldId]=\"column.getFieldId()\"\n\t\t\t\t\t gui-unique-value-list>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t<div gui-structure-menu-column-manager>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t</gui-tab>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: StructureId },
        { type: StructureCommandInvoker },
        { type: CompositionWarehouse },
        { type: FilterWarehouse },
        { type: TranslationFacade },
        { type: StructureColumnMenuConfigArchive },
        { type: CompositionId },
        { type: CompositionCommandInvoker },
        { type: Injector },
        { type: CellTemplateWithContext, decorators: [{ type: Inject, args: ['column',] }] }
    ]; };
    StructureColumnConfigComponent.propDecorators = {
        headerSortMenu: [{ type: ViewChild, args: ['headerSortMenu', { static: false },] }]
    };
    return StructureColumnConfigComponent;
}(SmartComponent));
export { StructureColumnConfigComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigComponent.prototype.headerSortMenu;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.config;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.uniqueValues;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.hideColumnTitle;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.dropdownTextTranslation;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureColumnConfigService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.compositionReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.filterWarehouse;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.translationFacade;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.compositionCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.injector;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxSixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUMvSCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFFcEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUVuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUV2RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBRS9HLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBR2xGO0lBTW9ELDBEQUFjO0lBZWpFLHdDQUE2Qixp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LGNBQWMsR0EyRmpFO1NBM0ZZLDhCQUE4Qjs7O0lBRTFDLHdEQUMyQjs7SUFFM0IsZ0RBQWtDOztJQUVsQyxzREFBOEI7O0lBRTlCLHlEQUF3Qjs7SUFFeEIsaUVBQWdDOzs7OztJQUVoQyxzRUFBNEU7Ozs7O0lBRWhFLDJEQUFxRDs7Ozs7SUFFOUQscURBQXlDOzs7OztJQUN6QyxpRUFBaUU7Ozs7O0lBQ2pFLHFFQUFrRTs7Ozs7SUFDbEUseURBQWlEOzs7OztJQUNqRCwyREFBcUQ7Ozs7O0lBQ3JELDBFQUFtRjs7Ozs7SUFDbkYsdURBQTZDOzs7OztJQUM3QyxtRUFBcUU7Ozs7O0lBQ3JFLGtEQUFtQzs7SUFDbkMsZ0RBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmlsdGVyL2NvcmUvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgaGVybWVzU3dpdGNoTWFwIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0RpYWxvZ0Nsb3NlclNlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLWRpYWxvZy1jbG9zZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1jb2x1bW4tY29uZmlnXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdoZWFkZXJTb3J0TWVudScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJTb3J0TWVudTogRWxlbWVudFJlZjtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0dW5pcXVlVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XG5cblx0aGlkZUNvbHVtblRpdGxlOiBzdHJpbmc7XG5cblx0ZHJvcGRvd25UZXh0VHJhbnNsYXRpb246IHN0cmluZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uRmFjYWRlOiBUcmFuc2xhdGlvbkZhY2FkZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0QEluamVjdCgnY29sdW1uJykgcHVibGljIHJlYWRvbmx5IGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmZpbHRlcldhcmVob3VzZS5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdCh1bmlxdWVWYWx1ZXNSZWFkTW9kZWw6IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnVuaXF1ZVZhbHVlcyA9IHVuaXF1ZVZhbHVlc1JlYWRNb2RlbC5nZXRWYWx1ZXModGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlXG5cdFx0XHRcdC5vbigpXG5cdFx0XHRcdC5waXBlKFxuXHRcdFx0XHRcdGhlcm1lc1N3aXRjaE1hcCgoY29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnRyYW5zbGF0aW9uRmFjYWRlLm9uVHJhbnNsYXRpb24oKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpLFxuXHRcdFx0KHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFRhYlRpdGxlcyh0cmFuc2xhdGlvbik7XG5cdFx0XHRcdHRoaXMuZHJvcGRvd25UZXh0VHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbi5oZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnQ7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcuaXNFbmFibGVkKCk7XG5cdH1cblxuXHRoaWRlQ29sdW1uKCk6IHZvaWQge1xuXHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5kaXNhYmxlQ29sdW1uKHRoaXMuY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRtb3ZlTGVmdCgpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIubW92ZUxlZnQodGhpcy5jb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLm1vdmVSaWdodCh0aGlzLmNvbHVtbi5nZXRDb2x1bW5EZWZpbml0aW9uSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UuY2xvc2UoKTtcblx0fVxuXG5cdGhpZ2hsaWdodENvbHVtbigpOiB2b2lkIHtcblx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuaGlnaGxpZ2h0Q29sdW1uKHRoaXMuY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRUYWJUaXRsZXModHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5jb25maWcuc2V0TWFpbk1lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudU1haW5UYWIpO1xuXHRcdHRoaXMuY29uZmlnLnNldEZpbHRlck1lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudUZpbHRlclRhYik7XG5cdFx0dGhpcy5jb25maWcuc2V0Q29sdW1uc01lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudUNvbHVtbnNUYWIpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWNvbHVtbi1jb25maWcnO1xuXHR9XG59XG4iXX0=