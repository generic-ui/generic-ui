/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { SourceWarehouse } from '../../../../source/domain-api/source.warehouse';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../../composition/domain/composition.id';
import { StructureId } from '../../../domain/structure.id';
import { SchemaReadModelRootId } from '../../../../../schema/domain-api/read/schema.read-model-root-id';
import { StructureInfoPanelArchive } from './structure.info-panel.archive';
import { StructureDialogSchemaManagerService } from '../../../../../schema/feature/manager/dialog/structure.dialog-schema-manager.service';
export class StructureInfoPanelComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} sourceReadModelService
     * @param {?} dialog
     * @param {?} compositionId
     * @param {?} structureId
     * @param {?} schemaReadModelRootId
     * @param {?} menuColumnManagerService
     * @param {?} schemaManagerService
     * @param {?} structureInfoPanelEnabledArchive
     */
    constructor(changeDetectorRef, renderer, elementRef, sourceReadModelService, dialog, compositionId, structureId, schemaReadModelRootId, menuColumnManagerService, schemaManagerService, structureInfoPanelEnabledArchive) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.sourceReadModelService = sourceReadModelService;
        this.dialog = dialog;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.menuColumnManagerService = menuColumnManagerService;
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
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId);
    }
    /**
     * @return {?}
     */
    openSchemaManager() {
        this.schemaManagerService.open(this.schemaReadModelRootId);
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
						Showing <b>{{totalItemsSize | numberFormatter}}</b> items
					</ng-container>

					<span *ngIf="preparedItemsSize !== totalItemsSize"
						  gui-active-filter-menu-trigger>
						Showing <b>{{preparedItemsSize | numberFormatter}}</b> out of <b>{{totalItemsSize | numberFormatter}}</b> items
					</span>

				</ng-container>

			</div>
		</div>

		<div>
			<div class="gui-right-section">

				<div *ngIf="infoPanelConfig.isSchemaManagerEnabled()"
					 (click)="openSchemaManager()">
					<gui-structure-schema-manager-icon [gui-tooltip]="'Theme manager'"></gui-structure-schema-manager-icon>
				</div>

				<div *ngIf="infoPanelConfig.isColumnsManagerEnabled()"
					 (click)="openColumnManager()">
					<gui-structure-column-manager-icon [gui-tooltip]="'Column manager'"></gui-structure-column-manager-icon>
				</div>

				<div *ngIf="infoPanelConfig.isInfoDialogEnabled()"
					 (click)="openInfo()">
					<gui-structure-info-icon [gui-tooltip]="'Info'"></gui-structure-info-icon>
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
    { type: SourceWarehouse },
    { type: FabricDialogService },
    { type: CompositionId },
    { type: StructureId },
    { type: SchemaReadModelRootId },
    { type: StructureDialogColumnManagerService },
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
    StructureInfoPanelComponent.prototype.schemaManagerService;
    /**
     * @type {?}
     * @private
     */
    StructureInfoPanelComponent.prototype.structureInfoPanelEnabledArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ3hHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLHNGQUFzRixDQUFDO0FBa0QzSSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7SUFZOUQsWUFBNkIsaUJBQW9DLEVBQzdDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3RCLHNCQUF1QyxFQUN2QyxNQUEyQixFQUMzQixhQUE0QixFQUM1QixXQUF3QixFQUN4QixxQkFBNEMsRUFD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Ozs7SUFDOUQsK0NBQW9DOzs7OztJQUNwQyxpREFBdUM7Ozs7O0lBQ3ZDLDZEQUF3RDs7Ozs7SUFDeEQsNkNBQTRDOzs7OztJQUM1QyxvREFBNkM7Ozs7O0lBQzdDLGtEQUF5Qzs7Ozs7SUFDekMsNERBQTZEOzs7OztJQUM3RCwrREFBOEU7Ozs7O0lBQzlFLDJEQUEwRTs7Ozs7SUFDMUUsdUVBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW5mby1tb2RhbC9zdHJ1Y3R1cmUtaW5mby1tb2RhbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBTb3VyY2VXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZURpYWxvZ0NvbHVtbk1hbmFnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29sdW1uLW1hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctY29sdW1uLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9mZWF0dXJlL21hbmFnZXIvZGlhbG9nL3N0cnVjdHVyZS5kaWFsb2ctc2NoZW1hLW1hbmFnZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWluZm8tcGFuZWwnLFxuXHR0ZW1wbGF0ZTogYFxuXG5cdFx0PGRpdj5cblx0XHRcdDxkaXYgKm5nSWY9XCJpbmZvUGFuZWxDb25maWcuaXNTb3VyY2VTaXplRW5hYmxlZCgpXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB1bmRlZmluZWQgJiYgdG90YWxJdGVtc1NpemUgIT09IHVuZGVmaW5lZFwiPlxuXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplID09PSB0b3RhbEl0ZW1zU2l6ZVwiPlxuXHRcdFx0XHRcdFx0U2hvd2luZyA8Yj57e3RvdGFsSXRlbXNTaXplIHwgbnVtYmVyRm9ybWF0dGVyfX08L2I+IGl0ZW1zXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XG5cblx0XHRcdFx0XHQ8c3BhbiAqbmdJZj1cInByZXBhcmVkSXRlbXNTaXplICE9PSB0b3RhbEl0ZW1zU2l6ZVwiXG5cdFx0XHRcdFx0XHQgIGd1aS1hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlcj5cblx0XHRcdFx0XHRcdFNob3dpbmcgPGI+e3twcmVwYXJlZEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPiBvdXQgb2YgPGI+e3t0b3RhbEl0ZW1zU2l6ZSB8IG51bWJlckZvcm1hdHRlcn19PC9iPiBpdGVtc1xuXHRcdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImd1aS1yaWdodC1zZWN0aW9uXCI+XG5cblx0XHRcdFx0PGRpdiAqbmdJZj1cImluZm9QYW5lbENvbmZpZy5pc1NjaGVtYU1hbmFnZXJFbmFibGVkKClcIlxuXHRcdFx0XHRcdCAoY2xpY2spPVwib3BlblNjaGVtYU1hbmFnZXIoKVwiPlxuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLWljb24gW2d1aS10b29sdGlwXT1cIidUaGVtZSBtYW5hZ2VyJ1wiPjwvZ3VpLXN0cnVjdHVyZS1zY2hlbWEtbWFuYWdlci1pY29uPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaW5mb1BhbmVsQ29uZmlnLmlzQ29sdW1uc01hbmFnZXJFbmFibGVkKClcIlxuXHRcdFx0XHRcdCAoY2xpY2spPVwib3BlbkNvbHVtbk1hbmFnZXIoKVwiPlxuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyLWljb24gW2d1aS10b29sdGlwXT1cIidDb2x1bW4gbWFuYWdlcidcIj48L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXItaWNvbj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiAqbmdJZj1cImluZm9QYW5lbENvbmZpZy5pc0luZm9EaWFsb2dFbmFibGVkKClcIlxuXHRcdFx0XHRcdCAoY2xpY2spPVwib3BlbkluZm8oKVwiPlxuXHRcdFx0XHRcdDxndWktc3RydWN0dXJlLWluZm8taWNvbiBbZ3VpLXRvb2x0aXBdPVwiJ0luZm8nXCI+PC9ndWktc3RydWN0dXJlLWluZm8taWNvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0YCxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdHRvdGFsSXRlbXNTaXplOiBudW1iZXI7XG5cblx0cHJlcGFyZWRJdGVtc1NpemU6IG51bWJlcjtcblxuXHRyb3dIZWlnaHQ6IG51bWJlcjtcblxuXHRpbmZvTW9kYWwgPSBTdHJ1Y3R1cmVJbmZvTW9kYWxDb21wb25lbnQ7XG5cblx0aW5mb1BhbmVsQ29uZmlnOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVJlYWRNb2RlbFNlcnZpY2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkaWFsb2c6IEZhYnJpY0RpYWxvZ1NlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbWVudUNvbHVtbk1hbmFnZXJTZXJ2aWNlOiBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFNYW5hZ2VyU2VydmljZTogU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZShcblx0XHRcdFx0KGluZm9QYW5lbDogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5pbmZvUGFuZWxDb25maWcgPSBpbmZvUGFuZWw7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cblx0XHR0aGlzLnNvdXJjZVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbk9yaWdpblNpemUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnRvdGFsSXRlbXNTaXplID0gc2l6ZTtcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlUmVhZE1vZGVsU2VydmljZVxuXHRcdFx0Lm9uUHJlcGFyZWRFbnRpdGllcygpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgocHJlcGFyZWRJdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0dGhpcy5wcmVwYXJlZEl0ZW1zU2l6ZSA9IHByZXBhcmVkSXRlbXMubGVuZ3RoO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b3BlbkluZm8oKTogdm9pZCB7XG5cdFx0dGhpcy5kaWFsb2cub3Blbih0aGlzLmluZm9Nb2RhbCk7XG5cdH1cblxuXHRvcGVuQ29sdW1uTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLm1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQpO1xuXHR9XG5cblx0b3BlblNjaGVtYU1hbmFnZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFNYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG59XG4iXX0=