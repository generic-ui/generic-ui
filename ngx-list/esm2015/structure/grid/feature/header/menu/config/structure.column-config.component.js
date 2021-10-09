/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class StructureColumnConfigComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     * @param {?} structureId
     * @param {?} structureCommandService
     * @param {?} compositionReadModelService
     * @param {?} filterWarehouse
     * @param {?} translationFacade
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} column
     */
    constructor(changeDetectorRef, elementRef, structureId, structureCommandService, compositionReadModelService, filterWarehouse, translationFacade, structureColumnMenuConfigArchive, column) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureCommandService = structureCommandService;
        this.compositionReadModelService = compositionReadModelService;
        this.filterWarehouse = filterWarehouse;
        this.translationFacade = translationFacade;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.column = column;
        this.uniqueValues = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.filterWarehouse.onUniqueValues(this.structureId), (/**
         * @param {?} uniqueValuesReadModel
         * @return {?}
         */
        (uniqueValuesReadModel) => {
            this.uniqueValues = uniqueValuesReadModel.getValues(this.column.getFieldId());
        }));
        this.hermesSubscribe(this.structureColumnMenuConfigArchive
            .on()
            .pipe(hermesSwitchMap((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.config = config;
            return this.translationFacade.onTranslation();
        }))), (/**
         * @param {?} translation
         * @return {?}
         */
        (translation) => {
            this.setTabTitles(translation);
            this.dropdownTextTranslation = translation.headerMenuMainTabColumnSort;
        }));
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
    /**
     * @private
     * @param {?} translation
     * @return {?}
     */
    setTabTitles(translation) {
        this.config.setMainMenu(translation.headerMenuMainTab);
        this.config.setFilterMenu(translation.headerMenuFilterTab);
        this.config.setColumnsMenu(translation.headerMenuColumnsTab);
    }
    /**
     * @protected
     * @return {?}
     */
    getSelectorName() {
        return 'gui-column-config';
    }
}
StructureColumnConfigComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-column-config]',
                template: "<div *ngIf=\"isEnabled()\"\n\t class=\"gui-header-menu-tab\">\n\n\t<gui-tab [active]=\"config.getActiveMenu()\" [menu]=\"config.getMenus()\">\n\n\t\t<ng-container *ngIf=\"config.isMainEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getMainMenu()\" class=\"gui-tab-item-dropdown\">\n\n\t\t\t\t<gui-structure-column-config-sort *ngIf=\"column.isSortEnabled()\"\n\t\t\t\t\t\t\t\t\t\t\t\t  [column]=\"column\"\n\t\t\t\t\t\t\t\t\t\t\t\t  [dropdownTextTranslation]=\"dropdownTextTranslation\">\n\t\t\t\t</gui-structure-column-config-sort>\n\n\t\t\t\t<gui-structure-column-config-column-hide\n\t\t\t\t\t[column]=\"column\">\n\t\t\t\t</gui-structure-column-config-column-hide>\n\n\t\t\t\t<gui-structure-column-config-column-move\n\t\t\t\t\t[column]=\"column\">\n\t\t\t\t</gui-structure-column-config-column-move>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isFilteringEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getFilterMenu()\">\n\n\t\t\t\t<!--\t\t\t\t\t\t<div class=\"gui-header-menu-item\">{{config.getFilterMenu()}}</div>-->\n\n\t\t\t\t<div [fieldId]=\"column.getFieldId()\"\n\t\t\t\t\t gui-unique-value-list>\n\t\t\t\t</div>\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t\t<ng-container *ngIf=\"config.isColumnManagerEnabled()\">\n\n\t\t\t<gui-tab-item [tab]=\"config.getColumnMenu()\">\n\n\t\t\t\t<div gui-structure-menu-column-manager>\n\t\t\t\t</div>\n\n\n\t\t\t</gui-tab-item>\n\n\t\t</ng-container>\n\n\t</gui-tab>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnConfigComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: StructureId },
    { type: StructureCommandInvoker },
    { type: CompositionWarehouse },
    { type: FilterWarehouse },
    { type: TranslationFacade },
    { type: StructureColumnMenuConfigArchive },
    { type: CellTemplateWithContext, decorators: [{ type: Inject, args: ['column',] }] }
];
StructureColumnConfigComponent.propDecorators = {
    headerSortMenu: [{ type: ViewChild, args: ['headerSortMenu', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEosT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFDL0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBRXBHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNsRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFdkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU3JELE1BQU0sT0FBTyw4QkFBK0IsU0FBUSxjQUFjOzs7Ozs7Ozs7Ozs7SUFhakUsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsV0FBd0IsRUFDeEIsdUJBQWdELEVBQ2hELDJCQUFpRCxFQUNqRCxlQUFnQyxFQUNoQyxpQkFBb0MsRUFDcEMsZ0NBQWtFLEVBQ2pELE1BQStCO1FBQ25FLEtBQUssQ0FB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4vc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBGaWx0ZXJXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWx0ZXIvY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZXMucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkZhY2FkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktY29sdW1uLWNvbmZpZ10nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnaGVhZGVyU29ydE1lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSlcblx0aGVhZGVyU29ydE1lbnU6IEVsZW1lbnRSZWY7XG5cblx0Y29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnO1xuXG5cdHVuaXF1ZVZhbHVlczogQXJyYXk8YW55PiA9IFtdO1xuXG5cdGhpZGVDb2x1bW5UaXRsZTogc3RyaW5nO1xuXG5cdGRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uRmFjYWRlOiBUcmFuc2xhdGlvbkZhY2FkZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdEBJbmplY3QoJ2NvbHVtbicpIHB1YmxpYyByZWFkb25seSBjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuZmlsdGVyV2FyZWhvdXNlLm9uVW5pcXVlVmFsdWVzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHVuaXF1ZVZhbHVlc1JlYWRNb2RlbDogVW5pcXVlVmFsdWVzUmVhZE1vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5pcXVlVmFsdWVzID0gdW5pcXVlVmFsdWVzUmVhZE1vZGVsLmdldFZhbHVlcyh0aGlzLmNvbHVtbi5nZXRGaWVsZElkKCkpO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmVcblx0XHRcdFx0Lm9uKClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0aGVybWVzU3dpdGNoTWFwKChjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWcpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudHJhbnNsYXRpb25GYWNhZGUub25UcmFuc2xhdGlvbigpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCksXG5cdFx0XHQodHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0VGFiVGl0bGVzKHRyYW5zbGF0aW9uKTtcblx0XHRcdFx0dGhpcy5kcm9wZG93blRleHRUcmFuc2xhdGlvbiA9IHRyYW5zbGF0aW9uLmhlYWRlck1lbnVNYWluVGFiQ29sdW1uU29ydDtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5pc0VuYWJsZWQoKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VGFiVGl0bGVzKHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbik6IHZvaWQge1xuXHRcdHRoaXMuY29uZmlnLnNldE1haW5NZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVNYWluVGFiKTtcblx0XHR0aGlzLmNvbmZpZy5zZXRGaWx0ZXJNZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVGaWx0ZXJUYWIpO1xuXHRcdHRoaXMuY29uZmlnLnNldENvbHVtbnNNZW51KHRyYW5zbGF0aW9uLmhlYWRlck1lbnVDb2x1bW5zVGFiKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1jb2x1bW4tY29uZmlnJztcblx0fVxufVxuIl19