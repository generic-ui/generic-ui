/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GuiGridGateway } from './gui.grid-gateway';
import { guiGridProviders } from './gui.grid.providers';
import { structureParentComponent } from '../../../../structure/grid/feature/structure-parent-component';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApiProvider } from './api/gui.grid.api-provider';
import { FormationCommandInvoker } from '../../../../structure/source/core/api/formation/formation.command-invoker';
import { SourceCommandInvoker } from '../../../../structure/source/core/api/source.command-invoker';
import { FormationWarehouse } from '../../../../structure/source/core/api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../structure/search/core/api/search.command-invoker';
import { GuiGridThemeCommandInvoker } from './theme/gui.grid.theme.command-invoker';
import { SchemaCommandInvoker } from '../../../../schema/core/api/schema.command-invoker';
import { StructureCommandInvoker } from '../../../../structure/core/api/structure.command-invoker';
import { ClassModifier } from '../../../../common/cdk/dom/class/class-modifier';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import { AttributeModifier } from '../../../../common/cdk/dom/attribute/attribute-modifier';
var GuiGridComponent = /** @class */ (function (_super) {
    tslib_1.__extends(GuiGridComponent, _super);
    function GuiGridComponent(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker, structureCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.platformId = platformId;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.gridRegister = gridRegister;
        _this.gridIdGenerator = gridIdGenerator;
        _this.formationCommandDispatcher = formationCommandDispatcher;
        _this.formationWarehouse = formationWarehouse;
        _this.sourceCommandDispatcher = sourceCommandDispatcher;
        _this.searchCommandInvoker = searchCommandInvoker;
        _this.schemaCommandInvoker = schemaCommandInvoker;
        _this.structureCommandDispatcher = structureCommandDispatcher;
        _this.gridThemeCommandInvoker = new GuiGridThemeCommandInvoker(_this.schemaCommandInvoker, _this.gridThemeConverter, _this.gridRowColoringConverter);
        _this.classModifier = new ClassModifier(_this.elementRef.nativeElement);
        _this.styleModifier = new StyleModifier(_this.elementRef.nativeElement);
        _this.attributeModifier = new AttributeModifier(_this.elementRef.nativeElement);
        return _this;
    }
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.classModifier.getHost().add('gui-grid');
        // this.styleModifier.getHost().setHeight(this.maxHeight);
        this.initApi();
        /** @type {?} */
        var gridId = this.gridId;
        if (gridId === undefined) {
            gridId = this.gridIdGenerator.generateId();
        }
        this.localGridId = gridId;
        this.exposeGridId();
        // register
        this.gridRegister.register(gridId, this, this.structureRef.getStructureId());
        if (isPlatformBrowser(this.platformId)) {
            window['getGuiGrid'] = (/**
             * @param {?} gridId
             * @return {?}
             */
            function (gridId) {
                /** @type {?} */
                var gridConsoleConfig = _this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return _this.api;
                }
                else {
                    return undefined;
                }
            });
        }
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gridRegister.unregister(this.localGridId);
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.getElementRef = /**
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.getGridId = /**
     * @return {?}
     */
    function () {
        return '';
    };
    /**
     * @return {?}
     */
    GuiGridComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.changeDetectorRef.detectChanges();
    };
    /**
     * @private
     * @return {?}
     */
    GuiGridComponent.prototype.exposeGridId = /**
     * @private
     * @return {?}
     */
    function () {
        this.attributeModifier.getHost().setAttribute(GuiGridComponent.GUI_GRID_ID, this.localGridId);
    };
    /**
     * @private
     * @return {?}
     */
    GuiGridComponent.prototype.initApi = /**
     * @private
     * @return {?}
     */
    function () {
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker, this.structureCommandDispatcher).provide();
    };
    GuiGridComponent.GUI_GRID_ID = 'gui-grid-id';
    GuiGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-grid',
                    template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(selectedRows)=\"onRowsSelect($event)\"\n\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[localization]=\"localization\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowClass]=\"rowClass\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelection]=\"rowSelectionConfig\"\n\t[rowStyle]=\"rowStyle\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                    providers: tslib_1.__spread(guiGridProviders, [
                        {
                            provide: structureParentComponent,
                            useExisting: GuiGridComponent
                        }
                    ]),
                    encapsulation: ViewEncapsulation.None,
                    styles: [".gui-grid{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GuiGridComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: GuiGridRegister },
        { type: GuiGridIdGenerator },
        { type: FormationCommandInvoker },
        { type: FormationWarehouse },
        { type: SourceCommandInvoker },
        { type: SearchCommandInvoker },
        { type: SchemaCommandInvoker },
        { type: StructureCommandInvoker }
    ]; };
    GuiGridComponent.propDecorators = {
        structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
        gridId: [{ type: Input }]
    };
    return GuiGridComponent;
}(GuiGridGateway));
export { GuiGridComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.GUI_GRID_ID;
    /** @type {?} */
    GuiGridComponent.prototype.structureRef;
    /** @type {?} */
    GuiGridComponent.prototype.gridId;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.localGridId;
    /** @type {?} */
    GuiGridComponent.prototype.api;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridThemeCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.classModifier;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.styleModifier;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.attributeModifier;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridRegister;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.gridIdGenerator;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.formationCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.sourceCommandDispatcher;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.searchCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.schemaCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridComponent.prototype.structureCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBcUIsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFFekcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQy9ELE9BQU8sRUFBYyxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFN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QTNETyxVQUFVO2dCQUF4QyxpQkFBaUI7Z0JBU2pCLGVBQWU7Z0JBRGYsa0JBQWtCO2dCQUdsQix1QkFBdUI7Z0JBRXZCLGtCQUFrQjtnQkFEbEIsb0JBQW9CO2dCQUVwQixvQkFBb0I7Z0JBRXBCLG9CQUFvQjtnQkFDcEIsdUJBQXVCOzs7K0JBc0I5QixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt5QkFHdkMsS0FBSzs7SUE2R1AsdUJBQUM7Q0FBQSxBQWpJRCxDQWVzQyxjQUFjLEdBa0huRDtTQWxIWSxnQkFBZ0I7Ozs7OztJQVk1Qiw2QkFBb0Q7O0lBVnBELHdDQUNrQjs7SUFFbEIsa0NBQ2U7Ozs7O0lBRWYsdUNBQTRCOztJQUU1QiwrQkFBdUI7Ozs7O0lBSXZCLG1EQUFxRTs7Ozs7SUFFckUseUNBQThDOzs7OztJQUU5Qyx5Q0FBOEM7Ozs7O0lBRTlDLDZDQUFzRDs7Ozs7SUFFMUMsc0NBQXFEOzs7OztJQUM5RCxzQ0FBdUM7Ozs7O0lBQ3ZDLDZDQUFxRDs7Ozs7SUFDckQsd0NBQThDOzs7OztJQUM5QywyQ0FBb0Q7Ozs7O0lBRXBELHNEQUFvRTs7Ozs7SUFDcEUsOENBQXVEOzs7OztJQUN2RCxtREFBOEQ7Ozs7O0lBQzlELGdEQUEyRDs7Ozs7SUFDM0QsZ0RBQTJEOzs7OztJQUMzRCxzREFBb0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpR3JpZEdhdGV3YXkgfSBmcm9tICcuL2d1aS5ncmlkLWdhdGV3YXknO1xuaW1wb3J0IHsgZ3VpR3JpZFByb3ZpZGVycyB9IGZyb20gJy4vZ3VpLmdyaWQucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUdyaWRJZEdlbmVyYXRvciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEd1aUdyaWRSZWdpc3RlciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZEFwaSwgR3VpR3JpZEFwaVByb3ZpZGVyIH0gZnJvbSAnLi9hcGkvZ3VpLmdyaWQuYXBpLXByb3ZpZGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuaW1wb3J0IHsgQXR0cmlidXRlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWdyaWQnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmdyaWQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vZ3VpLmdyaWQubmd4LnNjc3MnXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmd1aUdyaWRQcm92aWRlcnMsXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogc3RydWN0dXJlUGFyZW50Q29tcG9uZW50LFxuXHRcdFx0dXNlRXhpc3Rpbmc6IEd1aUdyaWRDb21wb25lbnRcblx0XHR9XG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbXBvbmVudCBleHRlbmRzIEd1aUdyaWRHYXRld2F5IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBWaWV3Q2hpbGQoJ3N0cnVjdHVyZScsIHsgc3RhdGljOiB0cnVlIH0pXG5cdHN0cnVjdHVyZVJlZjogYW55O1xuXG5cdEBJbnB1dCgpXG5cdGdyaWRJZDogc3RyaW5nOyAvLyBjYW4gYmUgc2V0IG9uY2VcblxuXHRwcml2YXRlIGxvY2FsR3JpZElkOiBzdHJpbmc7XG5cblx0cHVibGljIGFwaTogR3VpR3JpZEFwaTtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBHVUlfR1JJRF9JRCA9ICdndWktZ3JpZC1pZCc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbGFzc01vZGlmaWVyOiBDbGFzc01vZGlmaWVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGF0dHJpYnV0ZU1vZGlmaWVyOiBBdHRyaWJ1dGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkUmVnaXN0ZXI6IEd1aUdyaWRSZWdpc3Rlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkSWRHZW5lcmF0b3I6IEd1aUdyaWRJZEdlbmVyYXRvcixcblx0XHRcdFx0Ly8gZGVsZWdhdGVcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZERpc3BhdGNoZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFDb21tYW5kSW52b2tlcjogU2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gbmV3IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyKFxuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLFxuXHRcdFx0dGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXJcblx0XHQpO1xuXG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHR0aGlzLmF0dHJpYnV0ZU1vZGlmaWVyID0gbmV3IEF0dHJpYnV0ZU1vZGlmaWVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRIb3N0KCkuYWRkKCdndWktZ3JpZCcpO1xuXHRcdC8vIHRoaXMuc3R5bGVNb2RpZmllci5nZXRIb3N0KCkuc2V0SGVpZ2h0KHRoaXMubWF4SGVpZ2h0KTtcblxuXHRcdHRoaXMuaW5pdEFwaSgpO1xuXG5cdFx0bGV0IGdyaWRJZCA9IHRoaXMuZ3JpZElkO1xuXG5cdFx0aWYgKGdyaWRJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRncmlkSWQgPSB0aGlzLmdyaWRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbEdyaWRJZCA9IGdyaWRJZDtcblxuXHRcdHRoaXMuZXhwb3NlR3JpZElkKCk7XG5cblx0XHQvLyByZWdpc3RlclxuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnJlZ2lzdGVyKGdyaWRJZCwgdGhpcywgdGhpcy5zdHJ1Y3R1cmVSZWYuZ2V0U3RydWN0dXJlSWQoKSk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydnZXRHdWlHcmlkJ10gPSAoZ3JpZElkOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRjb25zdCBncmlkQ29uc29sZUNvbmZpZyA9IHRoaXMuZ3JpZFJlZ2lzdGVyLmdldFZhbHVlcyhncmlkSWQpO1xuXG5cdFx0XHRcdGlmIChncmlkQ29uc29sZUNvbmZpZykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFwaTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnVucmVnaXN0ZXIodGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRnZXRHcmlkSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBleHBvc2VHcmlkSWQoKTogdm9pZCB7XG5cdFx0dGhpcy5hdHRyaWJ1dGVNb2RpZmllci5nZXRIb3N0KCkuc2V0QXR0cmlidXRlKEd1aUdyaWRDb21wb25lbnQuR1VJX0dSSURfSUQsIHRoaXMubG9jYWxHcmlkSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXBpKCk6IHZvaWQge1xuXHRcdHRoaXMuYXBpID0gbmV3IEd1aUdyaWRBcGlQcm92aWRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlUmVmLnN0cnVjdHVyZUlkLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlclxuXHRcdCkucHJvdmlkZSgpO1xuXHR9XG5cbn1cbiJdfQ==