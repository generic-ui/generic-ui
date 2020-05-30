/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { ListViewMode } from '../../../domain/mode/list-view-mode';
import { ListViewModeRepository } from '../../../domain-api/mode/list-view.mode.repository';
import { ListViewReadModelRootId } from '../../../domain-api/read/list-view.read-model-root-id';
var ListViewContainerModeSelectComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewContainerModeSelectComponent, _super);
    function ListViewContainerModeSelectComponent(changeDetectorRef, listViewReadModelRootId, listViewModeRepository) {
        var _this = _super.call(this) || this;
        _this.changeDetectorRef = changeDetectorRef;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.listViewModeRepository = listViewModeRepository;
        _this.options = Object.keys(ListViewMode)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return ListViewMode[key]; }))
            .filter((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return !Number.isInteger(val); }));
        return _this;
    }
    /**
     * @return {?}
     */
    ListViewContainerModeSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listViewModeRepository
            .on(this.listViewReadModelRootId.toAggregateId())
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            _this.listContainerMode = mode;
            _this.changeDetectorRef.detectChanges();
        }));
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    ListViewContainerModeSelectComponent.prototype.changeContainerMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.listViewModeRepository.setMode(mode, this.listViewReadModelRootId.toAggregateId());
    };
    ListViewContainerModeSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-list-mode-select',
                    template: "\n\n\t\t<gui-select (optionChanged)=\"changeContainerMode($event)\"\n\t\t\t\t\t[options]=\"options\"\n\t\t\t\t\t[selected]=\"listContainerMode\">\n\t\t</gui-select>\n\n\t",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.gui-list-mode-select]': "\"true\""
                    }
                }] }
    ];
    /** @nocollapse */
    ListViewContainerModeSelectComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ListViewReadModelRootId },
        { type: ListViewModeRepository }
    ]; };
    return ListViewContainerModeSelectComponent;
}(SmartComponent));
export { ListViewContainerModeSelectComponent };
if (false) {
    /** @type {?} */
    ListViewContainerModeSelectComponent.prototype.options;
    /** @type {?} */
    ListViewContainerModeSelectComponent.prototype.listContainerMode;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerModeSelectComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerModeSelectComponent.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListViewContainerModeSelectComponent.prototype.listViewModeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1tb2RlLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvY29udGFpbmVyL3NlbGVjdC9saXN0LXZpZXcuY29udGFpbmVyLW1vZGUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUdoRztJQWdCMEQsZ0VBQWM7SUFRdkUsOENBQTZCLGlCQUFvQyxFQUM3Qyx1QkFBZ0QsRUFDaEQsc0JBQThDO1FBRmxFLFlBR0MsaUJBQU8sU0FDUDtRQUo0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsNEJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQVJsRSxhQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7YUFDOUIsR0FBRzs7OztRQUFDLFVBQUMsR0FBVyxJQUFLLE9BQUEsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFqQixDQUFpQixFQUFDO2FBQ3ZDLE1BQU07Ozs7UUFBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDOztJQVE3QyxDQUFDOzs7O0lBRUQsdURBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFUQSxJQUFJLENBQUMsc0JBQXNCO2FBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDaEQsSUFBSSxDQUNKLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FDaEI7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQyxJQUFrQjtZQUM3QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0VBQW1COzs7O0lBQW5CLFVBQW9CLElBQWtCO1FBQ3JDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O2dCQTVDRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLDRLQU9UO29CQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsSUFBSSxFQUFFO3dCQUNMLDhCQUE4QixFQUFFLFVBQVE7cUJBQ3hDO2lCQUNEOzs7O2dCQXRCaUMsaUJBQWlCO2dCQUkxQyx1QkFBdUI7Z0JBRHZCLHNCQUFzQjs7SUFpRC9CLDJDQUFDO0NBQUEsQUE3Q0QsQ0FnQjBELGNBQWMsR0E2QnZFO1NBN0JZLG9DQUFvQzs7O0lBRWhELHVEQUU2Qzs7SUFFN0MsaUVBQWdDOzs7OztJQUVwQixpRUFBcUQ7Ozs7O0lBQzlELHVFQUFpRTs7Ozs7SUFDakUsc0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL21vZGUvbGlzdC12aWV3Lm1vZGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC1tb2RlLXNlbGVjdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Z3VpLXNlbGVjdCAob3B0aW9uQ2hhbmdlZCk9XCJjaGFuZ2VDb250YWluZXJNb2RlKCRldmVudClcIlxuXHRcdFx0XHRcdFtvcHRpb25zXT1cIm9wdGlvbnNcIlxuXHRcdFx0XHRcdFtzZWxlY3RlZF09XCJsaXN0Q29udGFpbmVyTW9kZVwiPlxuXHRcdDwvZ3VpLXNlbGVjdD5cblxuXHRgLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3MuZ3VpLWxpc3QtbW9kZS1zZWxlY3RdJzogYFwidHJ1ZVwiYFxuXHR9XG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q29udGFpbmVyTW9kZVNlbGVjdENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRvcHRpb25zID0gT2JqZWN0LmtleXMoTGlzdFZpZXdNb2RlKVxuXHRcdFx0XHRcdC5tYXAoKGtleTogc3RyaW5nKSA9PiBMaXN0Vmlld01vZGVba2V5XSlcblx0XHRcdFx0XHQuZmlsdGVyKCh2YWwpID0+ICFOdW1iZXIuaXNJbnRlZ2VyKHZhbCkpO1xuXG5cdGxpc3RDb250YWluZXJNb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3TW9kZVJlcG9zaXRvcnk6IExpc3RWaWV3TW9kZVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5saXN0Vmlld01vZGVSZXBvc2l0b3J5XG5cdFx0XHQub24odGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgobW9kZTogTGlzdFZpZXdNb2RlKSA9PiB7XG5cdFx0XHRcdHRoaXMubGlzdENvbnRhaW5lck1vZGUgPSBtb2RlO1xuXHRcdFx0XHR0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Y2hhbmdlQ29udGFpbmVyTW9kZShtb2RlOiBMaXN0Vmlld01vZGUpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RWaWV3TW9kZVJlcG9zaXRvcnkuc2V0TW9kZShtb2RlLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cbn1cbiJdfQ==