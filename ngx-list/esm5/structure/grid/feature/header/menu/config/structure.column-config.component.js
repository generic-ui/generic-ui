/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { StructureCommandInvoker } from '../../../../../core/api/structure.command-invoker';
import { CellTemplateWithContext } from '../../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../../../composition/core/api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './structure.column-menu-config.archive';
import { FilterWarehouse } from '../../../../../filter/core/api/filter.warehouse';
import { StructureId } from '../../../../../core/api/structure.id';
import { TranslationFacade } from '../../../../../../l10n/core/api/translation.facade';
import { hermesSwitchMap } from '@generic-ui/hermes';
var StructureColumnConfigComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureColumnConfigComponent, _super);
    function StructureColumnConfigComponent(changeDetectorRef, elementRef, structureId, structureCommandService, compositionReadModelService, filterWarehouse, translationFacade, structureColumnMenuConfigArchive, column) {
        var _this = _super.call(this, changeDetectorRef, elementRef) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.structureId = structureId;
        _this.structureCommandService = structureCommandService;
        _this.compositionReadModelService = compositionReadModelService;
        _this.filterWarehouse = filterWarehouse;
        _this.translationFacade = translationFacade;
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
                    template: "<div *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-tab\">\n\n\t<gui-tab [active]=\"config.getActiveMenu()\" [menu]=\"config.getMenus()\">\n\n\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getMainMenu()\" class=\"gui-tab-item-dropdown\">\n\n\t\t\t\t<gui-structure-column-config-sort *ngIf=\"column.isSortEnabled()\"\n\t\t\t\t\t\t\t\t\t\t\t\t  [column]=\"column\"\n\t\t\t\t\t\t\t\t\t\t\t\t  [dropdownTextTranslation]=\"dropdownTextTranslation\">\n\t\t\t\t</gui-structure-column-config-sort>\n\n\t\t\t\t<gui-structure-column-config-column-hide\n\t\t\t\t\t[column]=\"column\">\n\t\t\t\t</gui-structure-column-config-column-hide>\n\n\t\t\t\t<gui-structure-column-config-column-move\n\t\t\t\t\t[column]=\"column\">\n\t\t\t\t</gui-structure-column-config-column-move>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>-->\n\n\t\t\t\t<div [fieldId]=\"column.getFieldId()\"\n\t\t\t\t\t gui-unique-value-list>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t<div gui-structure-menu-column-manager>\n\t\t\t\t</div>\n\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t</gui-tab>\n</div>\n",
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
    StructureColumnConfigComponent.prototype.translationFacade;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigComponent.prototype.structureColumnMenuConfigArchive;
    /** @type {?} */
    StructureColumnConfigComponent.prototype.column;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQVUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWhKLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNGQUFzRixDQUFDO0FBQy9ILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUVwRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdyRDtJQU1vRCwwREFBYztJQWFqRSx3Q0FBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsdUJBQWdELEVBQ2hELDJCQUFpRCxFQUNqRCxlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsZ0NBQWtFLEVBQ2pELE1BQStCO1FBUnBFLFlBU0Msa0JBQU0saUJBQWlCLEVBQUUsVUFBVSxDQUFD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RSx5REFBaUQ7Ozs7O0lBQ2pELDJEQUFxRDs7Ozs7SUFDckQsMEVBQW1GOztJQUNuRixnREFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpbHRlci9jb3JlL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IGhlcm1lc1N3aXRjaE1hcCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1jb2x1bW4tY29uZmlnXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRAVmlld0NoaWxkKCdoZWFkZXJTb3J0TWVudScsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJTb3J0TWVudTogRWxlbWVudFJlZjtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0dW5pcXVlVmFsdWVzOiBBcnJheTxhbnk+ID0gW107XG5cblx0aGlkZUNvbHVtblRpdGxlOiBzdHJpbmc7XG5cblx0ZHJvcGRvd25UZXh0VHJhbnNsYXRpb246IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25GYWNhZGU6IFRyYW5zbGF0aW9uRmFjYWRlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0QEluamVjdCgnY29sdW1uJykgcHVibGljIHJlYWRvbmx5IGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25VbmlxdWVWYWx1ZXModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQodW5pcXVlVmFsdWVzUmVhZE1vZGVsOiBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwpID0+IHtcblx0XHRcdFx0dGhpcy51bmlxdWVWYWx1ZXMgPSB1bmlxdWVWYWx1ZXNSZWFkTW9kZWwuZ2V0VmFsdWVzKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0XHQub24oKVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHRoZXJtZXNTd2l0Y2hNYXAoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5jb25maWcgPSBjb25maWc7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy50cmFuc2xhdGlvbkZhY2FkZS5vblRyYW5zbGF0aW9uKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KSxcblx0XHRcdCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy5zZXRUYWJUaXRsZXModHJhbnNsYXRpb24pO1xuXHRcdFx0XHR0aGlzLmRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uID0gdHJhbnNsYXRpb24uaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0O1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZXRUYWJUaXRsZXModHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKTogdm9pZCB7XG5cdFx0dGhpcy5jb25maWcuc2V0TWFpbk1lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudU1haW5UYWIpO1xuXHRcdHRoaXMuY29uZmlnLnNldEZpbHRlck1lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudUZpbHRlclRhYik7XG5cdFx0dGhpcy5jb25maWcuc2V0Q29sdW1uc01lbnUodHJhbnNsYXRpb24uaGVhZGVyTWVudUNvbHVtbnNUYWIpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLWNvbHVtbi1jb25maWcnO1xuXHR9XG59XG4iXX0=