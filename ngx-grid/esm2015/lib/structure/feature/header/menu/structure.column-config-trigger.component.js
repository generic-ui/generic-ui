/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9oZWFkZXIvbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy10cmlnZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN4SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFrQmpHLE1BQU0sT0FBTyxxQ0FBc0MsU0FBUSxjQUFjOzs7Ozs7OztJQVV4RSxZQUFvQixVQUFzQixFQUMvQixpQkFBb0MsRUFDcEMsdUJBQW1ELEVBQ25ELGdDQUFrRSxFQUNsRSw0QkFBMEQ7UUFDcEUsS0FBSyxFQUFFLENBQUM7UUFMVyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQy9CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUE0QjtRQUNuRCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO1FBQ2xFLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7SUFFckUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FDSixJQUFJLENBQUMsU0FBUyxFQUFFLENBQ2hCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFO1lBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakYsQ0FBQzs7OztJQUVELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7OztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQyxDQUFDOzs7WUF2REQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7O0VBU1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3JDOzs7O1lBN0JBLFVBQVU7WUFGVixpQkFBaUI7WUFVVCwwQkFBMEI7WUFJMUIsZ0NBQWdDO1lBSGhDLDRCQUE0Qjs7O29DQXVCbkMsU0FBUyxTQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtxQkFHcEQsS0FBSzs7OztJQUhOLHNFQUNrQzs7SUFFbEMsdURBQ2dDOztJQUVoQyx1REFBa0M7Ozs7O0lBRXRCLDJEQUE4Qjs7Ozs7SUFDdkMsa0VBQTRDOzs7OztJQUM1Qyx3RUFBMkQ7Ozs7O0lBQzNELGlGQUEwRTs7Ozs7SUFDMUUsNkVBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENoYW5nZURldGVjdG9yUmVmLFxuXHRDb21wb25lbnQsXG5cdEVsZW1lbnRSZWYsXG5cdElucHV0LFxuXHRPbkluaXQsXG5cdFZpZXdDaGlsZCxcblx0Vmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctdHJpZ2dlcicsXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiAjaGVhZGVyRGlhbG9nQ29udGFpbmVyXG5cdFx0XHQgKm5nSWY9XCJpc0VuYWJsZWQoKVwiXG5cdFx0XHQgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtaWNvbi13cmFwcGVyXCJcblx0XHRcdCAoY2xpY2spPVwib3BlbkNvbmZpZ0RpYWxvZygpXCI+XG5cblx0XHRcdDxndWktc3RydWN0dXJlLWNvbHVtbi1tZW51LWljb24gW25nQ2xhc3NdPVwiJ2d1aS1oZWFkZXItbWVudS1pY29uJ1wiPjwvZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWVudS1pY29uPlxuXG5cdFx0PC9kaXY+XG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1RyaWdnZXJDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QFZpZXdDaGlsZCgnaGVhZGVyRGlhbG9nQ29udGFpbmVyJywgeyBzdGF0aWM6IGZhbHNlIH0pXG5cdGhlYWRlckRpYWxvZ0NvbnRhaW5lcjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdGNvbmZpZzogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlXG5cdFx0XHQub25WYWx1ZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b3BlbkNvbmZpZ0RpYWxvZygpOiB2b2lkIHtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NlcnZpY2Uub3Blbih0aGlzLmhlYWRlckRpYWxvZ0NvbnRhaW5lciwgdGhpcy5jb2x1bW4pO1xuXHR9XG5cblx0Y2xvc2VDb25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlLmNsb3NlKCk7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uZmlnICYmIHRoaXMuY29uZmlnLmlzRW5hYmxlZCgpO1xuXHR9XG5cbn1cbiJdfQ==