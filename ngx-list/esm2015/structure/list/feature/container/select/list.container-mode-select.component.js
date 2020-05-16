/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { ListViewMode } from '../../../domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../domain-api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../domain-api/read/list-view.read-model-root-id';
export class ListContainerModeSelectComponent extends SmartComponent {
    /**
     * @param {?} changeDetectorRef
     * @param {?} listViewReadModelRootId
     * @param {?} listViewModeRepository
     */
    constructor(changeDetectorRef, listViewReadModelRootId, listViewModeRepository) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewModeRepository = listViewModeRepository;
        this.options = Object.keys(ListViewMode)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => ListViewMode[key]))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        (val) => !Number.isInteger(val)));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.listViewModeRepository
            .on(this.listViewReadModelRootId.toAggregateId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        (mode) => {
            this.listContainerMode = mode;
            this.changeDetectorRef.detectChanges();
        }));
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    changeContainerMode(mode) {
        this.listViewModeRepository.setMode(mode, this.listViewReadModelRootId.toAggregateId());
    }
}
ListContainerModeSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gui-list-mode-select',
                template: `

		<gui-select (optionChanged)="changeContainerMode($event)"
					[options]="options"
					[selected]="listContainerMode">
		</gui-select>

	`,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.gui-list-mode-select]': `"true"`
                }
            }] }
];
/** @nocollapse */
ListContainerModeSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ListViewReadModelRootId },
    { type: ListViewModeRepository }
];
if (false) {
    /** @type {?} */
    ListContainerModeSelectComponent.prototype.options;
    /** @type {?} */
    ListContainerModeSelectComponent.prototype.listContainerMode;
    /**
     * @type {?}
     * @private
     */
    ListContainerModeSelectComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListContainerModeSelectComponent.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListContainerModeSelectComponent.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2NvbnRhaW5lci9zZWxlY3QvbGlzdC5jb250YWluZXItbW9kZS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDNUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFtQmhHLE1BQU0sT0FBTyxnQ0FBaUMsU0FBUSxjQUFjOzs7Ozs7SUFRbkUsWUFBNkIsaUJBQW9DLEVBQzdDLHVCQUFnRCxFQUNoRCxzQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFIb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFSbEUsWUFBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQzlCLEdBQUc7Ozs7UUFBQyxDQUFDLEdBQVcsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFDO2FBQ3ZDLE1BQU07Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7SUFRN0MsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUM5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLElBQWtCO1FBQ3JDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7OztZQTVDRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7O0VBT1Q7Z0JBQ0QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxJQUFJLEVBQUU7b0JBQ0wsOEJBQThCLEVBQUUsUUFBUTtpQkFDeEM7YUFDRDs7OztZQXRCaUMsaUJBQWlCO1lBSTFDLHVCQUF1QjtZQUR2QixzQkFBc0I7Ozs7SUFzQjlCLG1EQUU2Qzs7SUFFN0MsNkRBQWdDOzs7OztJQUVwQiw2REFBcUQ7Ozs7O0lBQzlELG1FQUFpRTs7Ozs7SUFDakUsa0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC1tb2RlLXNlbGVjdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJjaGFuZ2VDb250YWluZXJNb2RlKCRldmVudClcIlxuXHRcdFx0XHRcdFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuXHRcdFx0XHRcdFtzZWxlY3RlZF09XCJsaXN0Q29udGFpbmVyTW9kZVwiPlxuXHRcdDwvZ3VpLXNlbGVjdD5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3QtbW9kZS1zZWxlY3RdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb250YWluZXJNb2RlU2VsZWN0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdG9wdGlvbnMgPSBPYmplY3Qua2V5cyhMaXN0Vmlld01vZGUpXG5cdFx0XHRcdFx0Lm1hcCgoa2V5OiBzdHJpbmcpID0+IExpc3RWaWV3TW9kZVtrZXldKVxuXHRcdFx0XHRcdC5maWx0ZXIoKHZhbCkgPT4gIU51bWJlci5pc0ludGVnZXIodmFsKSk7XG5cblx0bGlzdENvbnRhaW5lck1vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdNb2RlUmVwb3NpdG9yeTogTGlzdFZpZXdNb2RlUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnlcblx0XHRcdC5vbih0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSlcblx0XHRcdC5waXBlKFxuXHRcdFx0XHR0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChtb2RlOiBMaXN0Vmlld01vZGUpID0+IHtcblx0XHRcdFx0dGhpcy5saXN0Q29udGFpbmVyTW9kZSA9IG1vZGU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRjaGFuZ2VDb250YWluZXJNb2RlKG1vZGU6IExpc3RWaWV3TW9kZSk6IHZvaWQge1xuXHRcdHRoaXMubGlzdFZpZXdNb2RlUmVwb3NpdG9yeS5zZXRNb2RlKG1vZGUsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxufVxuIl19