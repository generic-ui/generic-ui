import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Injector, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { StructureId } from '../../../../core/api/structure.id';
import { SchemaReadModelRootId } from '../../../../../schema/core/api/schema.read-model-root-id';
import { StructureInfoPanelArchive } from '../../../core/api/panel/info/structure.info-panel.archive';
import { StructureDialogSchemaManagerService } from '../../../../../schema/feature/manager/dialog/structure.dialog-schema-manager.service';
import { TranslationFacade } from '../../../../../l10n/core/api/translation.facade';
export class StructureInfoPanelComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, injector, sourceWarehouse, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, translationService, schemaManagerService, structureInfoPanelArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.injector = injector;
        this.sourceWarehouse = sourceWarehouse;
        this.dialog = dialog;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.menuColumnManagerService = menuColumnManagerService;
        this.translationService = translationService;
        this.schemaManagerService = schemaManagerService;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
        this.infoModal = StructureInfoModalComponent;
    }
    ngOnInit() {
        this.hermesSubscribe(this.structureInfoPanelArchive.on(), (infoPanel) => {
            this.infoPanelConfig = infoPanel;
        });
        this.hermesSubscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
            this.totalItemsSize = size;
        });
        this.hermesSubscribe(this.sourceWarehouse.onPreparedEntities(this.structureId), (preparedItems) => {
            this.preparedItemsSize = preparedItems.length;
        });
        this.hermesSubscribe(this.translationService.onTranslation(), (translation) => {
            this.themeManagerTooltipText = translation.infoPanelThemeMangerTooltipText;
            this.columnManagerTooltipText = translation.infoPanelColumnManagerTooltipText;
            this.infoTooltipText = translation.infoPanelInfoTooltipText;
        });
    }
    openInfo() {
        this.dialog.open(this.infoModal);
    }
    openColumnManager() {
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId, this.injector);
    }
    openSchemaManager() {
        this.schemaManagerService.open(this.schemaReadModelRootId, this.injector);
    }
    getSelectorName() {
        return 'gui-structure-info-panel';
    }
}
StructureInfoPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'div[gui-structure-info-panel]',
                template: "<div>\n\t<div *ngIf=\"infoPanelConfig.isSourceSizeEnabled()\">\n\n\t\t<ng-container *ngIf=\"preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t<ng-container *ngIf=\"preparedItemsSize === totalItemsSize\">\n\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</ng-container>\n\n\t\t\t<span *ngIf=\"preparedItemsSize !== totalItemsSize\"\n\t\t\t\t  gui-active-filter-menu-trigger>\n\t\t\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t<b>{{preparedItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelOutOf' | guiTranslate}}\n\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</span>\n\n\t\t</ng-container>\n\n\t</div>\n</div>\n\n<div>\n\t<div class=\"gui-right-section\">\n\n\t\t<div (click)=\"openSchemaManager()\"\n\t\t\t *ngIf=\"infoPanelConfig.isSchemaManagerEnabled()\">\n\t\t\t<div [gui-tooltip]=\"themeManagerTooltipText\" gui-structure-schema-manager-icon></div>\n\t\t</div>\n\n\t\t<div (click)=\"openColumnManager()\"\n\t\t\t *ngIf=\"infoPanelConfig.isColumnsManagerEnabled()\">\n\t\t\t<div [gui-tooltip]=\"columnManagerTooltipText\" gui-structure-column-manager-icon></div>\n\t\t</div>\n\n\t\t<div (click)=\"openInfo()\"\n\t\t\t *ngIf=\"infoPanelConfig.isInfoDialogEnabled()\">\n\t\t\t<div [gui-tooltip]=\"infoTooltipText\" gui-structure-info-icon></div>\n\t\t</div>\n\t</div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            },] }
];
StructureInfoPanelComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Injector },
    { type: SourceWarehouse },
    { type: FabricDialogService },
    { type: CompositionId },
    { type: StructureId },
    { type: SchemaReadModelRootId },
    { type: StructureDialogColumnManagerService },
    { type: TranslationFacade },
    { type: StructureDialogSchemaManagerService },
    { type: StructureInfoPanelArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFFckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQzFILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFdEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFFM0ksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFVcEYsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7SUFrQjlELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFFBQWtCLEVBQ2xCLGVBQWdD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QU5mLG1CQUFtQjtZQVFuQixhQUFhO1lBQ2IsV0FBVztZQUNYLHFCQUFxQjtZQUhyQixtQ0FBbUM7WUFRbkMsaUJBQWlCO1lBRmpCLG1DQUFtQztZQUZuQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0b3IsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLW1vZGFsL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL21hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25GYWNhZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWluZm8tcGFuZWxdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHRvdGFsSXRlbXNTaXplOiBudW1iZXI7XG5cblx0cHJlcGFyZWRJdGVtc1NpemU6IG51bWJlcjtcblxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRpbmZvTW9kYWwgPSBTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQ7XG5cblx0aW5mb1BhbmVsQ29uZmlnOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWc7XG5cblx0dGhlbWVNYW5hZ2VyVG9vbHRpcFRleHQ6IHN0cmluZztcblxuXHRjb2x1bW5NYW5hZ2VyVG9vbHRpcFRleHQ6IHN0cmluZztcblxuXHRpbmZvVG9vbHRpcFRleHQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlOiBTb3VyY2VXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nOiBGYWJyaWNEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJvb3RJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZTogU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvbkZhY2FkZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFNYW5hZ2VyU2VydmljZTogU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUub24oKSxcblx0XHRcdChpbmZvUGFuZWw6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmluZm9QYW5lbENvbmZpZyA9IGluZm9QYW5lbDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5oZXJtZXNTdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNvdXJjZVdhcmVob3VzZS5vbk9yaWdpblNpemUodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoc2l6ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMudG90YWxJdGVtc1NpemUgPSBzaXplO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLmhlcm1lc1N1YnNjcmliZShcblx0XHRcdHRoaXMuc291cmNlV2FyZWhvdXNlLm9uUHJlcGFyZWRFbnRpdGllcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwcmVwYXJlZEl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHR0aGlzLnByZXBhcmVkSXRlbXNTaXplID0gcHJlcGFyZWRJdGVtcy5sZW5ndGg7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uub25UcmFuc2xhdGlvbigpLFxuXHRcdFx0KHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvbikgPT4ge1xuXHRcdFx0XHR0aGlzLnRoZW1lTWFuYWdlclRvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb24uaW5mb1BhbmVsVGhlbWVNYW5nZXJUb29sdGlwVGV4dDtcblx0XHRcdFx0dGhpcy5jb2x1bW5NYW5hZ2VyVG9vbHRpcFRleHQgPSB0cmFuc2xhdGlvbi5pbmZvUGFuZWxDb2x1bW5NYW5hZ2VyVG9vbHRpcFRleHQ7XG5cdFx0XHRcdHRoaXMuaW5mb1Rvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb24uaW5mb1BhbmVsSW5mb1Rvb2x0aXBUZXh0O1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRvcGVuSW5mbygpOiB2b2lkIHtcblx0XHR0aGlzLmRpYWxvZy5vcGVuKHRoaXMuaW5mb01vZGFsKTtcblx0fVxuXG5cdG9wZW5Db2x1bW5NYW5hZ2VyKCk6IHZvaWQge1xuXHRcdHRoaXMubWVudUNvbHVtbk1hbmFnZXJTZXJ2aWNlLm9wZW4odGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5pbmplY3Rvcik7XG5cdH1cblxuXHRvcGVuU2NoZW1hTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYU1hbmFnZXJTZXJ2aWNlLm9wZW4odGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuaW5qZWN0b3IpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1pbmZvLXBhbmVsJztcblx0fVxuXG59XG4iXX0=