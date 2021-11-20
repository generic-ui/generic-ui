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
        this.subscribe(this.structureInfoPanelArchive.on(), (infoPanel) => {
            this.infoPanelConfig = infoPanel;
        });
        this.subscribe(this.sourceWarehouse.onOriginSize(this.structureId), (size) => {
            this.totalItemsSize = size;
        });
        this.subscribe(this.sourceWarehouse.onPreparedEntities(this.structureId), (preparedItems) => {
            this.preparedItemsSize = preparedItems.length;
        });
        this.subscribe(this.translationService.onTranslation(), (translation) => {
            this.themeManagerTooltipText = translation.infoPanelThemeMangerTooltipText;
            this.columnManagerTooltipText = translation.infoPanelColumnManagerTooltipText;
            this.infoTooltipText = translation.infoPanelInfoTooltipText;
        });
    }
    openInfo() {
        this.dialog.open({ component: this.infoModal });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFFckYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFMUYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHFFQUFxRSxDQUFDO0FBQzFILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUNuRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDakcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFdEcsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0ZBQXNGLENBQUM7QUFFM0ksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFVcEYsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7SUFrQjlELFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLFFBQWtCLEVBQ2xCLGVBQWdD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QUFRO1lBUTNFLGVBQWU7WUFOZixtQkFBbUI7WUFRbkIsYUFBYTtZQUNiLFdBQVc7WUFDWCxxQkFBcUI7WUFIckIsbUNBQW1DO1lBUW5DLGlCQUFpQjtZQUZqQixtQ0FBbUM7WUFGbkMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW5mby1tb2RhbC9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS9tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLXNjaGVtYS1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5mYWNhZGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sMTBuL2NvcmUvYXBpL3RyYW5zbGF0aW9uJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1pbmZvLXBhbmVsXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHR0b3RhbEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdHByZXBhcmVkSXRlbXNTaXplOiBudW1iZXI7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0aW5mb01vZGFsID0gU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50O1xuXG5cdGluZm9QYW5lbENvbmZpZzogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnO1xuXG5cdHRoZW1lTWFuYWdlclRvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0Y29sdW1uTWFuYWdlclRvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0aW5mb1Rvb2x0aXBUZXh0OiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpYWxvZzogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtZW51Q29sdW1uTWFuYWdlclNlcnZpY2U6IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25GYWNhZGUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hTWFuYWdlclNlcnZpY2U6IFN0cnVjdHVyZURpYWxvZ1NjaGVtYU1hbmFnZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmU6IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlLm9uKCksXG5cdFx0XHQoaW5mb1BhbmVsOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy5pbmZvUGFuZWxDb25maWcgPSBpbmZvUGFuZWw7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zb3VyY2VXYXJlaG91c2Uub25PcmlnaW5TaXplKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnRvdGFsSXRlbXNTaXplID0gc2l6ZTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNvdXJjZVdhcmVob3VzZS5vblByZXBhcmVkRW50aXRpZXModGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocHJlcGFyZWRJdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0dGhpcy5wcmVwYXJlZEl0ZW1zU2l6ZSA9IHByZXBhcmVkSXRlbXMubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLm9uVHJhbnNsYXRpb24oKSxcblx0XHRcdCh0cmFuc2xhdGlvbjogVHJhbnNsYXRpb24pID0+IHtcblx0XHRcdFx0dGhpcy50aGVtZU1hbmFnZXJUb29sdGlwVGV4dCA9IHRyYW5zbGF0aW9uLmluZm9QYW5lbFRoZW1lTWFuZ2VyVG9vbHRpcFRleHQ7XG5cdFx0XHRcdHRoaXMuY29sdW1uTWFuYWdlclRvb2x0aXBUZXh0ID0gdHJhbnNsYXRpb24uaW5mb1BhbmVsQ29sdW1uTWFuYWdlclRvb2x0aXBUZXh0O1xuXHRcdFx0XHR0aGlzLmluZm9Ub29sdGlwVGV4dCA9IHRyYW5zbGF0aW9uLmluZm9QYW5lbEluZm9Ub29sdGlwVGV4dDtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0b3BlbkluZm8oKTogdm9pZCB7XG5cdFx0dGhpcy5kaWFsb2cub3Blbih7IGNvbXBvbmVudDogdGhpcy5pbmZvTW9kYWwgfSk7XG5cdH1cblxuXHRvcGVuQ29sdW1uTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLm1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuaW5qZWN0b3IpO1xuXHR9XG5cblx0b3BlblNjaGVtYU1hbmFnZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFNYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLmluamVjdG9yKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbCc7XG5cdH1cblxufVxuIl19