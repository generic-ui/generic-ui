/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { StructureCommandDispatcher } from '../../../domain-api/structure.command-dispatcher';
import { StructureColumnConfigService } from './structure.column-config.service';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureColumnMenuConfigArchive } from './config/structure.column-menu-config.archive';
export class StructureColumnConfigTriggerComponent extends SmartComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} structureCommandService
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structureColumnConfigService
     */
    constructor(elementRef, changeDetectorRef, structureCommandService, structureColumnMenuConfigArchive, structureColumnConfigService) {
        super();
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.structureCommandService = structureCommandService;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.structureColumnMenuConfigArchive
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.config = config;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @return {?}
     */
    openConfigDialog() {
        this.structureColumnConfigService.open(this.headerDialogContainer, this.column);
    }
    /**
     * @return {?}
     */
    closeConfigDialog() {
        this.structureColumnConfigService.close();
    }
    /**
     * @return {?}
     */
    isEnabled() {
        return this.config && this.config.isEnabled();
    }
}
StructureColumnConfigTriggerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-structure-column-config-trigger',
                template: `
		<div #headerDialogContainer
			 *ngIf="isEnabled()"
			 class="gui-header-menu-icon-wrapper"
			 (click)="openConfigDialog()">

			<gui-structure-column-menu-icon [ngClass]="'gui-header-menu-icon'"></gui-structure-column-menu-icon>

		</div>
	`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
StructureColumnConfigTriggerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: StructureCommandDispatcher },
    { type: StructureColumnMenuConfigArchive },
    { type: StructureColumnConfigService }
];
StructureColumnConfigTriggerComponent.propDecorators = {
    headerDialogContainer: [{ type: ViewChild, args: ['headerDialogContainer', { static: false },] }],
    column: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.headerDialogContainer;
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.column;
    /** @type {?} */
    StructureColumnConfigTriggerComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigTriggerComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0ZBQWtGLENBQUM7QUFDM0gsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBa0JqRyxNQUFNLE9BQU8scUNBQXNDLFNBQVEsY0FBYzs7Ozs7Ozs7SUFVeEUsWUFBb0IsVUFBc0IsRUFDL0IsaUJBQW9DLEVBQ3BDLHVCQUFtRCxFQUNuRCxnQ0FBa0UsRUFDbEUsNEJBQTBEO1FBQ3BFLEtBQUssRUFBRSxDQUFDO1FBTFcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBNEI7UUFDbkQscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBRXJFLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGdDQUFnQzthQUNuQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQ0osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUNoQjthQUNBLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRTtZQUNoRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2YsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDaEIsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0MsQ0FBQzs7O1lBdkRELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7OztFQVNUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTthQUNyQzs7OztZQTdCQSxVQUFVO1lBRlYsaUJBQWlCO1lBVVQsMEJBQTBCO1lBSTFCLGdDQUFnQztZQUhoQyw0QkFBNEI7OztvQ0F1Qm5DLFNBQVMsU0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7cUJBR3BELEtBQUs7Ozs7SUFITixzRUFDa0M7O0lBRWxDLHVEQUNnQzs7SUFFaEMsdURBQWtDOzs7OztJQUV0QiwyREFBOEI7Ozs7O0lBQ3ZDLGtFQUE0Qzs7Ozs7SUFDNUMsd0VBQTJEOzs7OztJQUMzRCxpRkFBMEU7Ozs7O0lBQzFFLDZFQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRJbnB1dCxcblx0T25Jbml0LFxuXHRWaWV3Q2hpbGQsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXRyaWdnZXInLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgI2hlYWRlckRpYWxvZ0NvbnRhaW5lclxuXHRcdFx0ICpuZ0lmPVwiaXNFbmFibGVkKClcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWljb24td3JhcHBlclwiXG5cdFx0XHQgKGNsaWNrKT1cIm9wZW5Db25maWdEaWFsb2coKVwiPlxuXG5cdFx0XHQ8Z3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1pY29uIFtuZ0NsYXNzXT1cIidndWktaGVhZGVyLW1lbnUtaWNvbidcIj48L2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1lbnUtaWNvbj5cblxuXHRcdDwvZGl2PlxuXHRgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdUcmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdEBWaWV3Q2hpbGQoJ2hlYWRlckRpYWxvZ0NvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KVxuXHRoZWFkZXJEaWFsb2dDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb25maWc6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2U6IFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdG9wZW5Db25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLm9wZW4odGhpcy5oZWFkZXJEaWFsb2dDb250YWluZXIsIHRoaXMuY29sdW1uKTtcblx0fVxuXG5cdGNsb3NlQ29uZmlnRGlhbG9nKCk6IHZvaWQge1xuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZyAmJiB0aGlzLmNvbmZpZy5pc0VuYWJsZWQoKTtcblx0fVxuXG59XG4iXX0=