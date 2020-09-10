/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GuiGridGateway } from './gui.grid-gateway';
import { guiGridProviders } from './gui.grid.providers';
import { structureParentComponent } from '../../../../structure/core/feature/structure-parent-component';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApiProvider } from './api/gui.grid.api-provider';
import { FormationCommandInvoker } from '../../../../structure/source/domain-api/formation/formation.command-invoker';
import { SourceCommandInvoker } from '../../../../structure/source/domain-api/source.command-invoker';
import { FormationWarehouse } from '../../../../structure/source/domain-api/formation/formation.warehouse';
import { SearchCommandInvoker } from '../../../../structure/search/domain-api/search.command-invoker';
import { GuiGridThemeCommandInvoker } from './theme/gui.grid.theme.command-invoker';
import { SchemaCommandInvoker } from '../../../../schema/domain-api/schema.command-invoker';
export class GuiGridComponent extends GuiGridGateway {
    /**
     * @param {?} platformId
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} gridRegister
     * @param {?} gridIdGenerator
     * @param {?} formationCommandDispatcher
     * @param {?} formationWarehouse
     * @param {?} sourceCommandDispatcher
     * @param {?} searchCommandInvoker
     * @param {?} schemaCommandInvoker
     */
    constructor(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, formationCommandDispatcher, formationWarehouse, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker) {
        super();
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.gridRegister = gridRegister;
        this.gridIdGenerator = gridIdGenerator;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.sourceCommandDispatcher = sourceCommandDispatcher;
        this.searchCommandInvoker = searchCommandInvoker;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.gridThemeCommandInvoker = new GuiGridThemeCommandInvoker(this.schemaCommandInvoker, this.gridThemeConverter, this.gridRowColoringConverter);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initApi();
        /** @type {?} */
        let gridId = this.gridId;
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
            (gridId) => {
                /** @type {?} */
                const gridConsoleConfig = this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return this.api;
                }
                else {
                    return undefined;
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.gridRegister.unregister(this.localGridId);
    }
    /**
     * @return {?}
     */
    getElementRef() {
        return this.elementRef;
    }
    /**
     * @return {?}
     */
    getGridId() {
        return '';
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    exposeGridId() {
        this.elementRef.nativeElement.setAttribute('gui-grid-id', this.localGridId);
    }
    /**
     * @private
     * @return {?}
     */
    initApi() {
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker).provide();
    }
}
GuiGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-grid',
                template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(selectedRows)=\"onRowsSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditing\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelection]=\"rowSelectionConfig\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                providers: [
                    ...guiGridProviders,
                    {
                        provide: structureParentComponent,
                        useExisting: GuiGridComponent
                    }
                ],
                host: {
                    '[class.gui-grid]': `"true"`,
                    '[style.height]': 'maxHeight'
                },
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-grid{display:block;width:100%}"]
            }] }
];
/** @nocollapse */
GuiGridComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: GuiGridRegister },
    { type: GuiGridIdGenerator },
    { type: FormationCommandInvoker },
    { type: FormationWarehouse },
    { type: SourceCommandInvoker },
    { type: SearchCommandInvoker },
    { type: SchemaCommandInvoker }
];
GuiGridComponent.propDecorators = {
    structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
    gridId: [{ type: Input }]
};
if (false) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0ksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQWMsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN0RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQXFCNUYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGNBQWM7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QUF1QixDQUM1QixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2IsQ0FBQzs7O1lBbEhELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsaW9EQUF3QztnQkFJeEMsU0FBUyxFQUFFO29CQUNWLEdBQUcsZ0JBQWdCO29CQUNuQjt3QkFDQyxPQUFPLEVBQUUsd0JBQXdCO3dCQUNqQyxXQUFXLEVBQUUsZ0JBQWdCO3FCQUM3QjtpQkFDRDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0wsa0JBQWtCLEVBQUUsUUFBUTtvQkFDNUIsZ0JBQWdCLEVBQUUsV0FBVztpQkFDN0I7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3JDOzs7OzRDQWVhLE1BQU0sU0FBQyxXQUFXO1lBbkRPLFVBQVU7WUFBeEMsaUJBQWlCO1lBU2pCLGVBQWU7WUFEZixrQkFBa0I7WUFHbEIsdUJBQXVCO1lBRXZCLGtCQUFrQjtZQURsQixvQkFBb0I7WUFFcEIsb0JBQW9CO1lBRXBCLG9CQUFvQjs7OzJCQXVCM0IsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBR3ZDLEtBQUs7Ozs7SUFITix3Q0FDa0I7O0lBRWxCLGtDQUNlOzs7OztJQUVmLHVDQUE0Qjs7SUFFNUIsK0JBQXVCOzs7OztJQUV2QixtREFBcUU7Ozs7O0lBRXpELHNDQUFxRDs7Ozs7SUFDOUQsc0NBQXVDOzs7OztJQUN2Qyw2Q0FBcUQ7Ozs7O0lBQ3JELHdDQUE4Qzs7Ozs7SUFDOUMsMkNBQW9EOzs7OztJQUVwRCxzREFBb0U7Ozs7O0lBQ3BFLDhDQUF1RDs7Ozs7SUFDdkQsbURBQThEOzs7OztJQUM5RCxnREFBMkQ7Ozs7O0lBQzNELGdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5wdXQsIE9uSW5pdCwgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpR3JpZEdhdGV3YXkgfSBmcm9tICcuL2d1aS5ncmlkLWdhdGV3YXknO1xuaW1wb3J0IHsgZ3VpR3JpZFByb3ZpZGVycyB9IGZyb20gJy4vZ3VpLmdyaWQucHJvdmlkZXJzJztcblxuaW1wb3J0IHsgc3RydWN0dXJlUGFyZW50Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZmVhdHVyZS9zdHJ1Y3R1cmUtcGFyZW50LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEd1aUdyaWRJZEdlbmVyYXRvciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IEd1aUdyaWRSZWdpc3RlciB9IGZyb20gJy4vcmVnaXN0ZXIvZ3VpLmdyaWQucmVnaXN0ZXInO1xuaW1wb3J0IHsgR3VpR3JpZEFwaSwgR3VpR3JpZEFwaVByb3ZpZGVyIH0gZnJvbSAnLi9hcGkvZ3VpLmdyaWQuYXBpLXByb3ZpZGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZ3JpZCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9ndWkuZ3JpZC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuLi9ndWkuZ3JpZC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0Li4uZ3VpR3JpZFByb3ZpZGVycyxcblx0XHR7XG5cdFx0XHRwcm92aWRlOiBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQsXG5cdFx0XHR1c2VFeGlzdGluZzogR3VpR3JpZENvbXBvbmVudFxuXHRcdH1cblx0XSxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWdyaWRdJzogYFwidHJ1ZVwiYCxcblx0XHQnW3N0eWxlLmhlaWdodF0nOiAnbWF4SGVpZ2h0J1xuXHR9LFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIEd1aUdyaWRDb21wb25lbnQgZXh0ZW5kcyBHdWlHcmlkR2F0ZXdheSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywgeyBzdGF0aWM6IHRydWUgfSlcblx0c3RydWN0dXJlUmVmOiBhbnk7XG5cblx0QElucHV0KClcblx0Z3JpZElkOiBzdHJpbmc7IC8vIGNhbiBiZSBzZXQgb25jZVxuXG5cdHByaXZhdGUgbG9jYWxHcmlkSWQ6IHN0cmluZztcblxuXHRwdWJsaWMgYXBpOiBHdWlHcmlkQXBpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcmVhZG9ubHkgcGxhdGZvcm1JZDogYW55LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRSZWdpc3RlcjogR3VpR3JpZFJlZ2lzdGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGdyaWRJZEdlbmVyYXRvcjogR3VpR3JpZElkR2VuZXJhdG9yLFxuXHRcdFx0XHQvLyBkZWxlZ2F0ZVxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kRGlzcGF0Y2hlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmRJbnZva2VyOiBTY2hlbWFDb21tYW5kSW52b2tlclxuXHQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IG5ldyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcihcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbnZlcnRlcixcblx0XHRcdHRoaXMuZ3JpZFJvd0NvbG9yaW5nQ29udmVydGVyXG5cdFx0KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuaW5pdEFwaSgpO1xuXG5cdFx0bGV0IGdyaWRJZCA9IHRoaXMuZ3JpZElkO1xuXG5cdFx0aWYgKGdyaWRJZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRncmlkSWQgPSB0aGlzLmdyaWRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbEdyaWRJZCA9IGdyaWRJZDtcblxuXHRcdHRoaXMuZXhwb3NlR3JpZElkKCk7XG5cblx0XHQvLyByZWdpc3RlclxuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnJlZ2lzdGVyKGdyaWRJZCwgdGhpcywgdGhpcy5zdHJ1Y3R1cmVSZWYuZ2V0U3RydWN0dXJlSWQoKSk7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0d2luZG93WydnZXRHdWlHcmlkJ10gPSAoZ3JpZElkOiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRjb25zdCBncmlkQ29uc29sZUNvbmZpZyA9IHRoaXMuZ3JpZFJlZ2lzdGVyLmdldFZhbHVlcyhncmlkSWQpO1xuXG5cdFx0XHRcdGlmIChncmlkQ29uc29sZUNvbmZpZykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFwaTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMuZ3JpZFJlZ2lzdGVyLnVucmVnaXN0ZXIodGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRnZXRFbGVtZW50UmVmKCk6IEVsZW1lbnRSZWYge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG5cdH1cblxuXHRnZXRHcmlkSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHR9XG5cblx0cHJpdmF0ZSBleHBvc2VHcmlkSWQoKTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdndWktZ3JpZC1pZCcsIHRoaXMubG9jYWxHcmlkSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0QXBpKCk6IHZvaWQge1xuXHRcdHRoaXMuYXBpID0gbmV3IEd1aUdyaWRBcGlQcm92aWRlcihcblx0XHRcdHRoaXMuc3RydWN0dXJlUmVmLnN0cnVjdHVyZUlkLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyXG5cdFx0KS5wcm92aWRlKCk7XG5cdH1cblxufVxuIl19