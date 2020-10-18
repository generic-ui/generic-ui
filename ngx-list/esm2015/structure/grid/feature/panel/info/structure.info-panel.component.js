/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class StructureInfoPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} injector
     * @param {?} sourceReadModelService
     * @param {?} dialog
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} schemaReadModelRootId
     * @param {?} menuColumnManagerService
     * @param {?} translationService
     * @param {?} schemaManagerService
     * @param {?} structureInfoPanelEnabledArchive
     */
    constructor(changeDetectorRef, renderer, elementRef, injector, sourceReadModelService, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, translationService, schemaManagerService, structureInfoPanelEnabledArchive) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.injector = injector;
        this.sourceReadModelService = sourceReadModelService;
        this.dialog = dialog;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.menuColumnManagerService = menuColumnManagerService;
        this.translationService = translationService;
        this.schemaManagerService = schemaManagerService;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.infoModal = StructureInfoModalComponent;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureInfoPanelEnabledArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} infoPanel
         * @return {?}
         */
        (infoPanel) => {
            this.infoPanelConfig = infoPanel;
            this.changeDetectorRef.detectChanges();
        }));
        this.sourceReadModelService
            .onOriginSize()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} size
         * @return {?}
         */
        (size) => {
            this.totalItemsSize = size;
            this.changeDetectorRef.detectChanges();
        }));
        this.sourceReadModelService
            .onPreparedEntities()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} preparedItems
         * @return {?}
         */
        (preparedItems) => {
            this.preparedItemsSize = preparedItems.length;
            this.changeDetectorRef.detectChanges();
        }));
        this.translationService
            .onTranslation()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} translation
         * @return {?}
         */
        (translation) => {
            this.themeManagerTooltipText = translation.infoPanelThemeMangerTooltipText;
            this.columnManagerTooltipText = translation.infoPanelColumnManagerTooltipText;
            this.infoTooltipText = translation.infoPanelInfoTooltipText;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    openInfo() {
        this.dialog.open(this.infoModal);
    }
    /**
     * @return {?}
     */
    openColumnManager() {
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId, this.injector);
    }
    /**
     * @return {?}
     */
    openSchemaManager() {
        this.schemaManagerService.open(this.schemaReadModelRootId, this.injector);
    }
}
StructureInfoPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-info-panel',
                template: `

		<div>
			<div *ngIf="infoPanelConfig.isSourceSizeEnabled()">

				<ng-container *ngIf="preparedItemsSize !== undefined && totalItemsSize !== undefined">

					<ng-container *ngIf="preparedItemsSize === totalItemsSize">
						{{'infoPanelShowing' | translate}} <b>{{totalItemsSize | numberFormatter}}</b> {{'infoPanelItems' | translate}}
					</ng-container>

					<span *ngIf="preparedItemsSize !== totalItemsSize"
						  gui-active-filter-menu-trigger>
						{{'infoPanelShowing' | translate}}
						<b>{{preparedItemsSize | numberFormatter}}</b>
						{{'infoPanelOutOf' | translate}}
						<b>{{totalItemsSize | numberFormatter}}</b>
						{{'infoPanelItems' | translate}}
					</span>

				</ng-container>

			</div>
		</div>

		<div>
			<div class="gui-right-section">

				<div *ngIf="infoPanelConfig.isSchemaManagerEnabled()"
					 (click)="openSchemaManager()">
					<gui-structure-schema-manager-icon [gui-tooltip]="themeManagerTooltipText"></gui-structure-schema-manager-icon>
				</div>

				<div *ngIf="infoPanelConfig.isColumnsManagerEnabled()"
					 (click)="openColumnManager()">
					<gui-structure-column-manager-icon [gui-tooltip]="columnManagerTooltipText"></gui-structure-column-manager-icon>
				</div>

				<div *ngIf="infoPanelConfig.isInfoDialogEnabled()"
					 (click)="openInfo()">
					<gui-structure-info-icon [gui-tooltip]="infoTooltipText"></gui-structure-info-icon>
				</div>
			</div>
		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureInfoPanelComponent.ctorParameters = () => [
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
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxKLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUUzSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQXNEdEYsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQjlELFlBQTZCLGlCQUFvQyxFQUM3QyxRQUFtQixFQUNuQixVQUFzQixFQUN0QixR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SUFDbkcsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7O1lBM0lELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNENUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQXRFaUMsaUJBQWlCO1lBQWlDLFNBQVM7WUFBN0IsVUFBVTtZQUF3QyxRQUFRO1lBUWpILGVBQWU7WUFOZixtQkFBbUI7WUFRbkIsYUFBYTtZQUNiLFdBQVc7WUFDWCxxQkFBcUI7WUFIckIsbUNBQW1DO1lBUW5DLGtCQUFrQjtZQUZsQixtQ0FBbUM7WUFGbkMseUJBQXlCOzs7O0lBNERqQyxxREFBdUI7O0lBRXZCLHdEQUEwQjs7SUFFMUIsZ0RBQWtCOztJQUVsQixnREFBd0M7O0lBRXhDLHNEQUEwQzs7SUFFMUMsOERBQWdDOztJQUVoQywrREFBaUM7O0lBRWpDLHNEQUF3Qjs7Ozs7SUFFWix3REFBcUQ7Ozs7O0lBQzlELCtDQUFvQzs7Ozs7SUFDcEMsaURBQXVDOzs7OztJQUN2QywrQ0FBbUM7Ozs7O0lBQ25DLDZEQUF3RDs7Ozs7SUFDeEQsNkNBQTRDOzs7OztJQUM1QyxvREFBNkM7Ozs7O0lBQzdDLGtEQUF5Qzs7Ozs7SUFDekMsNERBQTZEOzs7OztJQUM3RCwrREFBOEU7Ozs7O0lBQzlFLHlEQUF1RDs7Ozs7SUFDdkQsMkRBQTBFOzs7OztJQUMxRSx1RUFBNEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBSZW5kZXJlcjIsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW5mby1tb2RhbC9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbHVtbi1tYW5hZ2VyL2RpYWxvZy9zdHJ1Y3R1cmUuZGlhbG9nLWNvbHVtbi1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL21hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbDEwbi9jb3JlL2FwaS90cmFuc2xhdGlvbic7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1pbmZvLXBhbmVsJyxcblx0dGVtcGxhdGU6IGBcblxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiaW5mb1BhbmVsQ29uZmlnLmlzU291cmNlU2l6ZUVuYWJsZWQoKVwiPlxuXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJwcmVwYXJlZEl0ZW1zU2l6ZSAhPT0gdW5kZWZpbmVkICYmIHRvdGFsSXRlbXNTaXplICE9PSB1bmRlZmluZWRcIj5cblxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJwcmVwYXJlZEl0ZW1zU2l6ZSA9PT0gdG90YWxJdGVtc1NpemVcIj5cblx0XHRcdFx0XHRcdHt7J2luZm9QYW5lbFNob3dpbmcnIHwgdHJhbnNsYXRlfX0gPGI+e3t0b3RhbEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPiB7eydpbmZvUGFuZWxJdGVtcycgfCB0cmFuc2xhdGV9fVxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0XHRcdFx0PHNwYW4gKm5nSWY9XCJwcmVwYXJlZEl0ZW1zU2l6ZSAhPT0gdG90YWxJdGVtc1NpemVcIlxuXHRcdFx0XHRcdFx0ICBndWktYWN0aXZlLWZpbHRlci1tZW51LXRyaWdnZXI+XG5cdFx0XHRcdFx0XHR7eydpbmZvUGFuZWxTaG93aW5nJyB8IHRyYW5zbGF0ZX19XG5cdFx0XHRcdFx0XHQ8Yj57e3ByZXBhcmVkSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+XG5cdFx0XHRcdFx0XHR7eydpbmZvUGFuZWxPdXRPZicgfCB0cmFuc2xhdGV9fVxuXHRcdFx0XHRcdFx0PGI+e3t0b3RhbEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPlxuXHRcdFx0XHRcdFx0e3snaW5mb1BhbmVsSXRlbXMnIHwgdHJhbnNsYXRlfX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cblx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJndWktcmlnaHQtc2VjdGlvblwiPlxuXG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJpbmZvUGFuZWxDb25maWcuaXNTY2hlbWFNYW5hZ2VyRW5hYmxlZCgpXCJcblx0XHRcdFx0XHQgKGNsaWNrKT1cIm9wZW5TY2hlbWFNYW5hZ2VyKClcIj5cblx0XHRcdFx0XHQ8Z3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1pY29uIFtndWktdG9vbHRpcF09XCJ0aGVtZU1hbmFnZXJUb29sdGlwVGV4dFwiPjwvZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaW5mb1BhbmVsQ29uZmlnLmlzQ29sdW1uc01hbmFnZXJFbmFibGVkKClcIlxuXHRcdFx0XHRcdCAoY2xpY2spPVwib3BlbkNvbHVtbk1hbmFnZXIoKVwiPlxuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyLWljb24gW2d1aS10b29sdGlwXT1cImNvbHVtbk1hbmFnZXJUb29sdGlwVGV4dFwiPjwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlci1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaW5mb1BhbmVsQ29uZmlnLmlzSW5mb0RpYWxvZ0VuYWJsZWQoKVwiXG5cdFx0XHRcdFx0IChjbGljayk9XCJvcGVuSW5mbygpXCI+XG5cdFx0XHRcdFx0PGd1aS1zdHJ1Y3R1cmUtaW5mby1pY29uIFtndWktdG9vbHRpcF09XCJpbmZvVG9vbHRpcFRleHRcIj48L2d1aS1zdHJ1Y3R1cmUtaW5mby1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0dG90YWxJdGVtc1NpemU6IG51bWJlcjtcblxuXHRwcmVwYXJlZEl0ZW1zU2l6ZTogbnVtYmVyO1xuXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdGluZm9Nb2RhbCA9IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudDtcblxuXHRpbmZvUGFuZWxDb25maWc6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZztcblxuXHR0aGVtZU1hbmFnZXJUb29sdGlwVGV4dDogc3RyaW5nO1xuXG5cdGNvbHVtbk1hbmFnZXJUb29sdGlwVGV4dDogc3RyaW5nO1xuXG5cdGluZm9Ub29sdGlwVGV4dDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlUmVhZE1vZGVsU2VydmljZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRpYWxvZzogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtZW51Q29sdW1uTWFuYWdlclNlcnZpY2U6IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYU1hbmFnZXJTZXJ2aWNlOiBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoXG5cdFx0XHRcdChpbmZvUGFuZWw6IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuaW5mb1BhbmVsQ29uZmlnID0gaW5mb1BhbmVsO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXG5cdFx0dGhpcy5zb3VyY2VSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25PcmlnaW5TaXplKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChzaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy50b3RhbEl0ZW1zU2l6ZSA9IHNpemU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vblByZXBhcmVkRW50aXRpZXMoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHByZXBhcmVkSXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSA9PiB7XG5cdFx0XHRcdHRoaXMucHJlcGFyZWRJdGVtc1NpemUgPSBwcmVwYXJlZEl0ZW1zLmxlbmd0aDtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG5cdFx0XHQub25UcmFuc2xhdGlvbigpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgodHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKSA9PiB7XG5cdFx0XHRcdHRoaXMudGhlbWVNYW5hZ2VyVG9vbHRpcFRleHQgPSB0cmFuc2xhdGlvbi5pbmZvUGFuZWxUaGVtZU1hbmdlclRvb2x0aXBUZXh0O1xuXHRcdFx0XHR0aGlzLmNvbHVtbk1hbmFnZXJUb29sdGlwVGV4dCA9IHRyYW5zbGF0aW9uLmluZm9QYW5lbENvbHVtbk1hbmFnZXJUb29sdGlwVGV4dDtcblx0XHRcdFx0dGhpcy5pbmZvVG9vbHRpcFRleHQgPSB0cmFuc2xhdGlvbi5pbmZvUGFuZWxJbmZvVG9vbHRpcFRleHQ7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvcGVuSW5mbygpOiB2b2lkIHtcblx0XHR0aGlzLmRpYWxvZy5vcGVuKHRoaXMuaW5mb01vZGFsKTtcblx0fVxuXG5cdG9wZW5Db2x1bW5NYW5hZ2VyKCk6IHZvaWQge1xuXHRcdHRoaXMubWVudUNvbHVtbk1hbmFnZXJTZXJ2aWNlLm9wZW4odGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCwgdGhpcy5pbmplY3Rvcik7XG5cdH1cblxuXHRvcGVuU2NoZW1hTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYU1hbmFnZXJTZXJ2aWNlLm9wZW4odGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuaW5qZWN0b3IpO1xuXHR9XG5cbn1cbiJdfQ==