/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { StructureCommandInvoker } from '../../../../core/api/structure.command-invoker';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
import { FilterWarehouse } from '../../../../filter/core/api/filter.warehouse';
import { StructureId } from '../../../../core/domain/structure.id';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
import { switchMap } from 'rxjs/operators';
var StructureColumnConfigComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigComponent, _super);
    function StructureColumnConfigComponent(changeDetectorRef, elementRef, structureId, structureCommandService, compositionReadModelService, filterWarehouse, translationService, structureColumnMenuConfigArchive, column) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.filterWarehouse = filterWarehouse;
        _this.translationService = translationService;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        _this.column = column;
        _this.uniqueValues = [];
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
        this.filterWarehouse
            .onUniqueValues(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} uniqueValuesReadModel
         * @return {?}
         */
        function (uniqueValuesReadModel) {
            _this.uniqueValues = uniqueValuesReadModel.getValues(_this.column.getFieldId());
            _this.changeDetectorRef.detectChanges();
        }));
        this.structureColumnMenuConfigArchive
            .on()
            .pipe(switchMap((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            _this.config = config;
            return _this.translationService.onTranslation();
        })), this.takeUntil())
            .subscribe((/**
         * @param {?} translation
         * @return {?}
         */
        function (translation) {
            _this.setTabTitles(translation);
            _this.dropdownTextTranslation = translation.headerMenuMainTabColumnSort;
            _this.changeDetectorRef.detectChanges();
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
                    selector: 'gui-column-config',
                    template: "\n\t\t<div *ngIf=\"isEnabled()\"\n\t\t\t class=\"gui-header-menu-tab\">\n\n\t\t\t<gui-tab [menu]=\"config.getMenus()\" [active]=\"config.getActiveMenu()\">\n\n\t\t\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t\t\t<gui-tab-item class=\"gui-tab-item-dropdown\" [tab]=\"config.getMainMenu()\">\n\n\t\t\t\t\t\t<gui-structure-column-config-sort *ngIf=\"column.isSortEnabled()\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  [dropdownTextTranslation]=\"dropdownTextTranslation\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t  [column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-sort>\n\n\t\t\t\t\t\t<gui-structure-column-config-column-hide\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-column-hide>\n\n\t\t\t\t\t\t<gui-structure-column-config-column-move\n\t\t\t\t\t\t\t\t[column]=\"column\">\n\t\t\t\t\t\t</gui-structure-column-config-column-move>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>-->\n\n\t\t\t\t\t\t<div gui-unique-value-list\n\t\t\t\t\t\t\t [fieldId]=\"column.getFieldId()\">\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t\t\t<div gui-structure-menu-column-manager>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</gui-tab-item>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</gui-tab>\n\t\t</div>\n\t",
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
        { type: TranslationService },
        { type: StructureColumnMenuConfigArchive },
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
    StructureColumnConfigComponent.prototype.translationService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureColumnMenuConfigArchive;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEosT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDekYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFDNUgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRWpHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTNDO0lBNERvRCwwREFBYztJQWFqRSx3Q0FBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsdUJBQWdELEVBQ2hELDJCQUFpRCxFQUNqRCxlQUFnQyxFQUNoQyxrQkFBc0MsRUFDdEMsZ0NBQWtFLEVBQ2pELE1BQStCO1FBUnBFLFlBU0Msa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFDLFNBQ3BD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QzJCOztJQUUzQixnREFBa0M7O0lBRWxDLHNEQUE4Qjs7SUFFOUIseURBQXdCOztJQUV4QixpRUFBZ0M7Ozs7O0lBRXBCLDJEQUFxRDs7Ozs7SUFFOUQscURBQXlDOzs7OztJQUN6QyxpRUFBaUU7Ozs7O0lBQ2pFLHFFQUFrRTs7Ozs7SUFDbEUseURBQWlEOzs7OztJQUNqRCw0REFBdUQ7Ozs7O0lBQ3ZELDBFQUFtRjs7SUFDbkYsZ0RBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1jb2x1bW4tY29uZmlnJyxcblx0dGVtcGxhdGU6IGBcblx0XHQ8ZGl2ICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LXRhYlwiPlxuXG5cdFx0XHQ8Z3VpLXRhYiBbbWVudV09XCJjb25maWcuZ2V0TWVudXMoKVwiIFthY3RpdmVdPVwiY29uZmlnLmdldEFjdGl2ZU1lbnUoKVwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNNYWluRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0XHQ8Z3VpLXRhYi1pdGVtIGNsYXNzPVwiZ3VpLXRhYi1pdGVtLWRyb3Bkb3duXCIgW3RhYl09XCJjb25maWcuZ2V0TWFpbk1lbnUoKVwiPlxuXG5cdFx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQgKm5nSWY9XCJjb2x1bW4uaXNTb3J0RW5hYmxlZCgpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFtkcm9wZG93blRleHRUcmFuc2xhdGlvbl09XCJkcm9wZG93blRleHRUcmFuc2xhdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBbY29sdW1uXT1cImNvbHVtblwiPlxuXHRcdFx0XHRcdFx0PC9ndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydD5cblxuXHRcdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZVxuXHRcdFx0XHRcdFx0XHRcdFtjb2x1bW5dPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZT5cblxuXHRcdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZVxuXHRcdFx0XHRcdFx0XHRcdFtjb2x1bW5dPVwiY29sdW1uXCI+XG5cdFx0XHRcdFx0XHQ8L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZT5cblxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25maWcuaXNGaWx0ZXJpbmdFbmFibGVkKClcIj5cblxuXHRcdFx0XHRcdDxndWktdGFiLWl0ZW0gW3RhYl09XCJjb25maWcuZ2V0RmlsdGVyTWVudSgpXCI+XG5cblx0XHRcdFx0XHRcdDwhLS1cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIj57e2NvbmZpZy5nZXRGaWx0ZXJNZW51KCl9fTwvZGl2Pi0tPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGd1aS11bmlxdWUtdmFsdWUtbGlzdFxuXHRcdFx0XHRcdFx0XHQgW2ZpZWxkSWRdPVwiY29sdW1uLmdldEZpZWxkSWQoKVwiPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2d1aS10YWItaXRlbT5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY29uZmlnLmlzQ29sdW1uTWFuYWdlckVuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdFx0PGd1aS10YWItaXRlbSBbdGFiXT1cImNvbmZpZy5nZXRDb2x1bW5NZW51KClcIj5cblxuXHRcdFx0XHRcdFx0PGRpdiBndWktc3RydWN0dXJlLW1lbnUtY29sdW1uLW1hbmFnZXI+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZ3VpLXRhYi1pdGVtPlxuXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHQ8L2d1aS10YWI+XG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdoZWFkZXJTb3J0TWVudScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJTb3J0TWVudTogRWxlbWVudFJlZjtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0dW5pcXVlVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XG5cblx0aGlkZUNvbHVtblRpdGxlOiBzdHJpbmc7XG5cblx0ZHJvcGRvd25UZXh0VHJhbnNsYXRpb246IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRASW5qZWN0KCdjb2x1bW4nKSBwdWJsaWMgcmVhZG9ubHkgY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Vcblx0XHRcdC5vblVuaXF1ZVZhbHVlcyh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHVuaXF1ZVZhbHVlc1JlYWRNb2RlbDogVW5pcXVlVmFsdWVzUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5pcXVlVmFsdWVzID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmdldFZhbHVlcyh0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRzd2l0Y2hNYXAoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5vblRyYW5zbGF0aW9uKCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy5zZXRUYWJUaXRsZXModHJhbnNsYXRpb24pO1xuXHRcdFx0XHR0aGlzLmRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0O1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5pc0VuYWJsZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VGFiVGl0bGVzKHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuY29uZmlnLnNldE1haW5NZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVNYWluVGFiKTtcblx0XHR0aGlzLmNvbmZpZy5zZXRGaWx0ZXJNZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVGaWx0ZXJUYWIpO1xuXHRcdHRoaXMuY29uZmlnLnNldENvbHVtbnNNZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVDb2x1bW5zVGFiKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jb2x1bW4tY29uZmlnJztcblx0fVxufVxuIl19