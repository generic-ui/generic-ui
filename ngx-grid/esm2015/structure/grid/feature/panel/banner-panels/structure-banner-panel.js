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
        this.getBannerPanelConfig()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} title
         * @return {?}
         */
        (title) => {
            this.bannerPanel = title.template;
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
    StructureBannerPanel.prototype.getBannerPanelConfig = function () { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWJhbm5lci1wYW5lbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7OztBQUtyRixNQUFNLE9BQWdCLG9CQUFxQixTQUFRLGNBQWM7Ozs7OztJQUloRSxZQUFzQixpQkFBb0MsRUFDbkQsVUFBc0I7UUFDNUIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLG9CQUFvQixFQUFFO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsS0FBaUMsRUFBRSxFQUFFO1lBRWhELElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUVsQyxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxVQUFVLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RDO1FBQ0YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0NBT0Q7OztJQXpCQSwyQ0FBcUM7Ozs7O0lBb0JyQyxzRUFBdUU7Ozs7O0lBRXZFLGlFQUFrQzs7Ozs7SUFFbEMsK0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUJhbm5lclBhbmVsIGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGJhbm5lclBhbmVsOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRcdFx0ICBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXRCYW5uZXJQYW5lbENvbmZpZygpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgodGl0bGU6IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnKSA9PiB7XG5cblx0XHRcdFx0dGhpcy5iYW5uZXJQYW5lbCA9IHRpdGxlLnRlbXBsYXRlO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy5iYW5uZXJQYW5lbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMuYmFubmVyUGFuZWwgPSB0aGlzLmJhbm5lclBhbmVsKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9XG5cblx0YWJzdHJhY3QgZ2V0QmFubmVyUGFuZWxDb25maWcoKTogT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZz5cblxuXHRhYnN0cmFjdCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nXG5cblx0YWJzdHJhY3QgZ2V0UGFuZWxUaXRsZSgpOiBzdHJpbmdcbn1cbiJdfQ==