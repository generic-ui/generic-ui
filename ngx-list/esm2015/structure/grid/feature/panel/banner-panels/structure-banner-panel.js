/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
/**
 * @abstract
 */
export class StructureBannerPanel extends SmartComponent {
    /**
     * @protected
     * @param {?} changeDetectorRef
     * @param {?} elementRef
     */
    constructor(changeDetectorRef, elementRef) {
        super(changeDetectorRef, elementRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.hermesSubscribe(this.onBannerPanelConfig(), (/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.bannerPanel = config.template;
            if (typeof this.bannerPanel === 'function') {
                this.bannerPanel = this.bannerPanel();
            }
        }));
    }
}
if (false) {
    /** @type {?} */
    StructureBannerPanel.prototype.bannerPanel;
    /**
     * @abstract
     * @return {?}
     */
    StructureBannerPanel.prototype.onBannerPanelConfig = function () { };
    /**
     * @abstract
     * @return {?}
     */
    StructureBannerPanel.prototype.getSelectorName = function () { };
    /**
     * @abstract
     * @return {?}
     */
    StructureBannerPanel.prototype.getPanelTitle = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWJhbm5lci1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7OztBQUtyRixNQUFNLE9BQWdCLG9CQUFxQixTQUFRLGNBQWM7Ozs7OztJQUloRSxZQUFzQixpQkFBb0MsRUFDbkQsVUFBc0I7UUFDNUIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLGVBQWUsQ0FDbkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFOzs7O1FBQzFCLENBQUMsTUFBa0MsRUFBRSxFQUFFO1lBRXRDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUVuQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RDO1FBQ0YsQ0FBQyxFQUNELENBQUM7SUFDSCxDQUFDO0NBT0Q7OztJQTNCQSwyQ0FBcUM7Ozs7O0lBc0JyQyxxRUFBNEU7Ozs7O0lBRTVFLGlFQUFrQzs7Ozs7SUFFbEMsK0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RydWN0dXJlQmFubmVyUGFuZWwgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0YmFubmVyUGFuZWw6IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdFx0XHQgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuaGVybWVzU3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5vbkJhbm5lclBhbmVsQ29uZmlnKCksXG5cdFx0XHQoY29uZmlnOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZykgPT4ge1xuXG5cdFx0XHRcdHRoaXMuYmFubmVyUGFuZWwgPSBjb25maWcudGVtcGxhdGU7XG5cblx0XHRcdFx0aWYgKHR5cGVvZiB0aGlzLmJhbm5lclBhbmVsID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0dGhpcy5iYW5uZXJQYW5lbCA9IHRoaXMuYmFubmVyUGFuZWwoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRhYnN0cmFjdCBvbkJhbm5lclBhbmVsQ29uZmlnKCk6IEhlcm1lc09ic2VydmFibGU8U3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc+XG5cblx0YWJzdHJhY3QgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZ1xuXG5cdGFic3RyYWN0IGdldFBhbmVsVGl0bGUoKTogc3RyaW5nXG59XG4iXX0=