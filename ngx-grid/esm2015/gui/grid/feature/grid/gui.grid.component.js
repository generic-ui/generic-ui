import { ChangeDetectorRef, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GuiGridGateway } from './gui.grid-gateway';
import { structureParentComponent } from '../../../../structure/grid/feature/structure-parent-component';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApiProvider } from './api/gui.grid.api-provider';
import { FormationCommandInvoker } from '../../../../structure/formation/core/api/formation.command-invoker';
import { SourceCommandInvoker } from '../../../../structure/source/core/api/source.command-invoker';
import { FormationWarehouse } from '../../../../structure/formation/core/api/formation.warehouse';
import { SearchCommandInvoker } from '../../../../structure/search/core/api/search.command-invoker';
import { GuiGridThemeCommandInvoker } from './theme/gui.grid.theme.command-invoker';
import { SchemaCommandInvoker } from '../../../../schema/core/api/schema.command-invoker';
import { StructureCommandInvoker } from '../../../../structure/core/api/structure.command-invoker';
import { ClassModifier } from '../../../../common/cdk/dom/class/class-modifier';
import { StyleModifier } from '../../../../common/cdk/dom/style/style-modifier';
import { AttributeModifier } from '../../../../common/cdk/dom/attribute/attribute-modifier';
import { PagingCommandInvoker } from '../../../../structure/paging/core/api/paging.command-invoker';
import { SummariesCommandInvoker } from '../../../../structure/summaries/core/api/summaries.command-invoker';
import { SortingCommandInvoker } from '../../../../structure/sorting/core/api/sorting.command-invoker';
import { StructureDefinition } from '../../../../structure/grid/feature/structure-definition';
import { guiGridStructureDefinition } from './gui.grid-structure-definition';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FilterIntegration } from '../../../../structure/filter/core/api-integration/filter.integration';
const ɵ0 = guiGridStructureDefinition;
export class GuiGridComponent extends GuiGridGateway {
    constructor(platformId, elementRef, changeDetectorRef, gridRegister, gridIdGenerator, 
    // delegate
    formationCommandDispatcher, formationWarehouse, compositionCommandInvoker, compositionWarehouse, filterIntegration, sourceCommandDispatcher, searchCommandInvoker, schemaCommandInvoker, structureCommandDispatcher, summariesCommandInvoker, sortingCommandInvoker, pagingCommandInvoker) {
        super();
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.gridRegister = gridRegister;
        this.gridIdGenerator = gridIdGenerator;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionWarehouse = compositionWarehouse;
        this.filterIntegration = filterIntegration;
        this.sourceCommandDispatcher = sourceCommandDispatcher;
        this.searchCommandInvoker = searchCommandInvoker;
        this.schemaCommandInvoker = schemaCommandInvoker;
        this.structureCommandDispatcher = structureCommandDispatcher;
        this.summariesCommandInvoker = summariesCommandInvoker;
        this.sortingCommandInvoker = sortingCommandInvoker;
        this.pagingCommandInvoker = pagingCommandInvoker;
        this.gridThemeCommandInvoker = new GuiGridThemeCommandInvoker(this.schemaCommandInvoker, this.gridThemeConverter, this.gridRowColoringConverter);
        this.classModifier = new ClassModifier(this.elementRef.nativeElement);
        this.styleModifier = new StyleModifier(this.elementRef.nativeElement);
        this.attributeModifier = new AttributeModifier(this.elementRef.nativeElement);
    }
    ngOnInit() {
        this.classModifier.getHost().add('gui-grid');
        // this.styleModifier.getHost().setHeight(this.maxHeight);
        this.initApi();
        let gridId = this.gridId;
        if (gridId === undefined) {
            gridId = this.gridIdGenerator.generateId();
        }
        this.localGridId = gridId;
        this.exposeGridId();
        // register
        this.gridRegister.register(gridId, this, this.structureRef.getStructureId());
        if (isPlatformBrowser(this.platformId)) {
            window['getGuiGrid'] = (gridId) => {
                const gridConsoleConfig = this.gridRegister.getValues(gridId);
                if (gridConsoleConfig) {
                    return this.api;
                }
                else {
                    return undefined;
                }
            };
        }
    }
    ngOnDestroy() {
        this.gridRegister.unregister(this.localGridId);
    }
    getElementRef() {
        return this.elementRef;
    }
    getGridId() {
        return '';
    }
    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }
    exposeGridId() {
        this.attributeModifier.getHost().setAttribute(GuiGridComponent.GUI_GRID_ID, this.localGridId);
    }
    initApi() {
        this.api = new GuiGridApiProvider(this.structureRef.structureId, this.structureRef.compositionId, this.structureRef.schemaReadModelRootId, this.formationCommandDispatcher, this.formationWarehouse, this.compositionCommandInvoker, this.compositionWarehouse, this.filterIntegration, this.sourceCommandDispatcher, this.searchCommandInvoker, this.gridThemeCommandInvoker, this.structureCommandDispatcher, this.summariesCommandInvoker, this.sortingCommandInvoker, this.pagingCommandInvoker).provide();
    }
}
GuiGridComponent.GUI_GRID_ID = 'gui-grid-id';
GuiGridComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-grid',
                template: "<gui-structure\n\t#structure\n\t(cellEditCanceled)=\"onCellEditCancel()\"\n\t(cellEditEntered)=\"onCellEditEnter()\"\n\t(cellEditSubmitted)=\"onCellEditSubmit()\"\n\t(columnsChanged)=\"onColumnsChange()\"\n\t(containerWidthChanged)=\"onContainerWidthChange($event)\"\n\t(horizontalGridChanged)=\"onHorizontalGrid($event)\"\n\t(itemsSelected)=\"onItemSelect($event)\"\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(rowColoringChanged)=\"onRowColoring($event)\"\n\t(searchPhraseChanged)=\"onSearchPhrase($event)\"\n\t(selectedRows)=\"onRowsSelect($event)\"\n\n\t(sourceEdited)=\"onSourceEdit($event)\"\n\t(themeChanged)=\"onTheme($event)\"\n\t(verticalGridChanged)=\"onVerticalGrid($event)\"\n\t[autoResizeWidth]=\"autoResizeWidth\"\n\t[cellEditing]=\"cellEditingConfig\"\n\t[columnHeaderBottom]=\"columnHeaderBottom\"\n\t[columnHeaderTop]=\"columnHeaderTop\"\n\t[columnMenu]=\"columnMenuConfig\"\n\t[columns]=\"columnsConfig\"\n\t[editMode]=\"editMode\"\n\t[filtering]=\"filtering\"\n\t[footerPanel]=\"footerPanel\"\n\t[horizontalGrid]=\"horizontalGrid\"\n\t[infoPanel]=\"infoPanel\"\n\t[loading]=\"loading\"\n\t[localization]=\"localization\"\n\t[maxHeight]=\"maxHeight\"\n\t[paging]=\"paging\"\n\t[quickFilters]=\"quickFilters\"\n\t[rowClass]=\"rowClass\"\n\t[rowColoring]=\"rowColoringConfig\"\n\t[rowDetail]=\"rowDetail\"\n\t[rowHeight]=\"rowHeight\"\n\t[rowSelection]=\"rowSelectionConfig\"\n\t[rowStyle]=\"rowStyle\"\n\t[searching]=\"searching\"\n\t[sorting]=\"sorting\"\n\t[source]=\"source\"\n\t[summaries]=\"summaries\"\n\t[theme]=\"themeConfig\"\n\t[titlePanel]=\"titlePanel\"\n\t[verticalGrid]=\"verticalGrid\"\n\t[virtualScroll]=\"virtualScroll\"\n\t[width]=\"width\"\n>\n</gui-structure>\n",
                providers: [
                    {
                        provide: StructureDefinition,
                        useValue: ɵ0
                    },
                    {
                        provide: structureParentComponent,
                        useExisting: GuiGridComponent
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                styles: [".gui-grid{display:block;width:100%}\n"]
            },] }
];
GuiGridComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: GuiGridRegister },
    { type: GuiGridIdGenerator },
    { type: FormationCommandInvoker },
    { type: FormationWarehouse },
    { type: CompositionCommandInvoker },
    { type: CompositionWarehouse },
    { type: FilterIntegration },
    { type: SourceCommandInvoker },
    { type: SearchCommandInvoker },
    { type: SchemaCommandInvoker },
    { type: StructureCommandInvoker },
    { type: SummariesCommandInvoker },
    { type: SortingCommandInvoker },
    { type: PagingCommandInvoker }
];
GuiGridComponent.propDecorators = {
    structureRef: [{ type: ViewChild, args: ['structure', { static: true },] }],
    gridId: [{ type: Input }]
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9ndWkvZ3JpZC9mZWF0dXJlL2dyaWQvZ3VpLmdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEosT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQWMsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNuRyxPQUFPLEVB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QUVwQixvQkFBb0I7WUFFcEIsb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUt2Qix1QkFBdUI7WUFDdkIscUJBQXFCO1lBRnJCLG9CQUFvQjs7OzJCQStCM0IsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7cUJBR3ZDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgUExBVEZPUk1fSUQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR3VpR3JpZEdhdGV3YXkgfSBmcm9tICcuL2d1aS5ncmlkLWdhdGV3YXknO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVQYXJlbnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1wYXJlbnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgR3VpR3JpZElkR2VuZXJhdG9yIH0gZnJvbSAnLi9yZWdpc3Rlci9ndWkuZ3JpZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgR3VpR3JpZFJlZ2lzdGVyIH0gZnJvbSAnLi9yZWdpc3Rlci9ndWkuZ3JpZC5yZWdpc3Rlcic7XG5pbXBvcnQgeyBHdWlHcmlkQXBpLCBHdWlHcmlkQXBpUHJvdmlkZXIgfSBmcm9tICcuL2FwaS9ndWkuZ3JpZC5hcGktcHJvdmlkZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZm9ybWF0aW9uL2NvcmUvYXBpL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2Zvcm1hdGlvbi9jb3JlL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBTdHlsZU1vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kb20vc3R5bGUvc3R5bGUtbW9kaWZpZXInO1xuaW1wb3J0IHsgQXR0cmlidXRlTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2FwaS9zdW1tYXJpZXMuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNvcnRpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZURlZmluaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3N0cnVjdHVyZS1kZWZpbml0aW9uJztcbmltcG9ydCB7IGd1aUdyaWRTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi9ndWkuZ3JpZC1zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlckludGVncmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS1pbnRlZ3JhdGlvbi9maWx0ZXIuaW50ZWdyYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktZ3JpZCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9ndWkuZ3JpZC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuLi9ndWkuZ3JpZC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdHVzZVZhbHVlOiBndWlHcmlkU3RydWN0dXJlRGVmaW5pdGlvblxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cHJvdmlkZTogc3RydWN0dXJlUGFyZW50Q29tcG9uZW50LFxuXHRcdFx0dXNlRXhpc3Rpbmc6IEd1aUdyaWRDb21wb25lbnRcblx0XHR9XG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpR3JpZENvbXBvbmVudCBleHRlbmRzIEd1aUdyaWRHYXRld2F5IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEdVSV9HUklEX0lEID0gJ2d1aS1ncmlkLWlkJztcblxuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuXHRzdHJ1Y3R1cmVSZWY6IGFueTtcblxuXHRASW5wdXQoKVxuXHRncmlkSWQ6IHN0cmluZzsgLy8gY2FuIGJlIHNldCBvbmNlXG5cblx0cHVibGljIGFwaTogR3VpR3JpZEFwaTtcblxuXHRwcml2YXRlIGxvY2FsR3JpZElkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbGFzc01vZGlmaWVyOiBDbGFzc01vZGlmaWVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3R5bGVNb2RpZmllcjogU3R5bGVNb2RpZmllcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGF0dHJpYnV0ZU1vZGlmaWVyOiBBdHRyaWJ1dGVNb2RpZmllcjtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkUmVnaXN0ZXI6IEd1aUdyaWRSZWdpc3Rlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBncmlkSWRHZW5lcmF0b3I6IEd1aUdyaWRJZEdlbmVyYXRvcixcblx0XHRcdFx0Ly8gZGVsZWdhdGVcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbldhcmVob3VzZTogQ29tcG9zaXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVySW50ZWdyYXRpb246IEZpbHRlckludGVncmF0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmREaXNwYXRjaGVyOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hQ29tbWFuZEludm9rZXI6IFNjaGVtYUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNDb21tYW5kSW52b2tlcjogU3VtbWFyaWVzQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmRJbnZva2VyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQ29tbWFuZEludm9rZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyXG5cdCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gbmV3IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyKFxuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMuZ3JpZFRoZW1lQ29udmVydGVyLFxuXHRcdFx0dGhpcy5ncmlkUm93Q29sb3JpbmdDb252ZXJ0ZXJcblx0XHQpO1xuXG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuXHRcdHRoaXMuc3R5bGVNb2RpZmllciA9IG5ldyBTdHlsZU1vZGlmaWVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0XHR0aGlzLmF0dHJpYnV0ZU1vZGlmaWVyID0gbmV3IEF0dHJpYnV0ZU1vZGlmaWVyKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEhvc3QoKS5hZGQoJ2d1aS1ncmlkJyk7XG5cdFx0Ly8gdGhpcy5zdHlsZU1vZGlmaWVyLmdldEhvc3QoKS5zZXRIZWlnaHQodGhpcy5tYXhIZWlnaHQpO1xuXG5cdFx0dGhpcy5pbml0QXBpKCk7XG5cblx0XHRsZXQgZ3JpZElkID0gdGhpcy5ncmlkSWQ7XG5cblx0XHRpZiAoZ3JpZElkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGdyaWRJZCA9IHRoaXMuZ3JpZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKTtcblx0XHR9XG5cblx0XHR0aGlzLmxvY2FsR3JpZElkID0gZ3JpZElkO1xuXG5cdFx0dGhpcy5leHBvc2VHcmlkSWQoKTtcblxuXHRcdC8vIHJlZ2lzdGVyXG5cdFx0dGhpcy5ncmlkUmVnaXN0ZXIucmVnaXN0ZXIoZ3JpZElkLCB0aGlzLCB0aGlzLnN0cnVjdHVyZVJlZi5nZXRTdHJ1Y3R1cmVJZCgpKTtcblxuXHRcdGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG5cdFx0XHR3aW5kb3dbJ2dldEd1aUdyaWQnXSA9IChncmlkSWQ6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGdyaWRDb25zb2xlQ29uZmlnID0gdGhpcy5ncmlkUmVnaXN0ZXIuZ2V0VmFsdWVzKGdyaWRJZCk7XG5cblx0XHRcdFx0aWYgKGdyaWRDb25zb2xlQ29uZmlnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuYXBpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5ncmlkUmVnaXN0ZXIudW5yZWdpc3Rlcih0aGlzLmxvY2FsR3JpZElkKTtcblx0fVxuXG5cdGdldEVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcblx0fVxuXG5cdGdldEdyaWRJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG5cdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdH1cblxuXHRwcml2YXRlIGV4cG9zZUdyaWRJZCgpOiB2b2lkIHtcblx0XHR0aGlzLmF0dHJpYnV0ZU1vZGlmaWVyLmdldEhvc3QoKS5zZXRBdHRyaWJ1dGUoR3VpR3JpZENvbXBvbmVudC5HVUlfR1JJRF9JRCwgdGhpcy5sb2NhbEdyaWRJZCk7XG5cdH1cblxuXHRwcml2YXRlIGluaXRBcGkoKTogdm9pZCB7XG5cdFx0dGhpcy5hcGkgPSBuZXcgR3VpR3JpZEFwaVByb3ZpZGVyKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc3RydWN0dXJlSWQsXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVJlZi5jb21wb3NpdGlvbklkLFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSZWYuc2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdHRoaXMuZmlsdGVySW50ZWdyYXRpb24sXG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0dGhpcy5zdW1tYXJpZXNDb21tYW5kSW52b2tlcixcblx0XHRcdHRoaXMuc29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlclxuXHRcdCkucHJvdmlkZSgpO1xuXHR9XG5cbn1cbiJdfQ==