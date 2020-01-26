/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injector } from '@angular/core';
/**
 * @abstract
 * @template T
 */
var /**
 * @abstract
 * @template T
 */
TemplateFactory = /** @class */ (function () {
    function TemplateFactory(templatesComponentDefinition, componentFactoryResolver) {
        this.templatesComponentDefinition = templatesComponentDefinition;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templates = new Map();
        this.templatesComponent = null;
        this.createTemplatesComponent();
    }
    /**
     * @return {?}
     */
    TemplateFactory.prototype.getTemplates = /**
     * @return {?}
     */
    function () {
        return this.templates;
    };
    /**
     * @return {?}
     */
    TemplateFactory.prototype.destroy = /**
     * @return {?}
     */
    function () {
        if (this.templatesComponent) {
            this.templatesComponent.destroy();
            this.templatesComponent = null;
        }
    };
    /**
     * @private
     * @return {?}
     */
    TemplateFactory.prototype.createTemplatesComponent = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.templatesComponentDefinition);
        /** @type {?} */
        var injector = Injector.create({ providers: [] });
        this.templatesComponent = componentFactory.create(injector);
        this.generateMap();
    };
    /**
     * @private
     * @return {?}
     */
    TemplateFactory.prototype.generateMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.generateMapKeys()
            .forEach((/**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            _this.findAndSetTemplate(type);
        }));
    };
    ;
    /**
     * @private
     * @param {?} dt
     * @return {?}
     */
    TemplateFactory.prototype.findAndSetTemplate = /**
     * @private
     * @param {?} dt
     * @return {?}
     */
    function (dt) {
        /** @type {?} */
        var template = this.templatesComponent.instance.getTemplate(dt);
        this.templates.set(dt, template);
    };
    return TemplateFactory;
}());
/**
 * @abstract
 * @template T
 */
export { TemplateFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templates;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templatesComponent;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.templatesComponentDefinition;
    /**
     * @type {?}
     * @private
     */
    TemplateFactory.prototype.componentFactoryResolver;
    /* Skipping unhandled member: ;*/
    /**
     * @abstract
     * @return {?}
     */
    TemplateFactory.prototype.generateMapKeys = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMEMsUUFBUSxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFPcEc7Ozs7O0lBTUMseUJBQXVDLDRCQUFxQyxFQUM3RCx3QkFBa0Q7UUFEMUIsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFTO1FBQzdELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFMekQsY0FBUyxHQUErQyxJQUFJLEdBQUcsRUFBeUMsQ0FBQztRQUV6Ryx1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO1FBSWxELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxzQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxrREFBd0I7Ozs7SUFBaEM7O1lBRU8sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQzs7WUFFM0csUUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFN0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxxQ0FBVzs7OztJQUFuQjtRQUFBLGlCQUtDO1FBSkEsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUNwQixPQUFPOzs7O1FBQUMsVUFBQyxJQUF5QjtZQUNsQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQzs7Ozs7O0lBRU0sNENBQWtCOzs7OztJQUExQixVQUEyQixFQUF1Qjs7WUFFM0MsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUVqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQzs7Ozs7Ozs7Ozs7SUEvQ0Esb0NBQWlIOzs7OztJQUVqSCw2Q0FBbUQ7Ozs7O0lBRTdCLHVEQUFzRDs7Ozs7SUFDckUsbURBQTBEOzs7Ozs7SUFJakUsNERBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZW1wbGF0ZUZhY3Rvcnk8VCBleHRlbmRzIFRlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdHByaXZhdGUgdGVtcGxhdGVzOiBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZXNDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPiA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVzQ29tcG9uZW50RGVmaW5pdGlvbjogVHlwZTxUPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGVzQ29tcG9uZW50KCk7XG5cdH1cblxuXHRhYnN0cmFjdCBnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8RGF0YVR5cGUgfCBDZWxsVmlldz47XG5cblx0Z2V0VGVtcGxhdGVzKCk6IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVzO1xuXHR9XG5cblx0ZGVzdHJveSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZXNDb21wb25lbnQpIHtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVRlbXBsYXRlc0NvbXBvbmVudCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnRlbXBsYXRlc0NvbXBvbmVudERlZmluaXRpb24pO1xuXG5cdFx0Y29uc3QgaW5qZWN0b3I6IEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzOiBbXSB9KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZU1hcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZU1hcCgpOiB2b2lkIHtcblx0XHR0aGlzLmdlbmVyYXRlTWFwS2V5cygpXG5cdFx0XHQuZm9yRWFjaCgodHlwZTogRGF0YVR5cGUgfCBDZWxsVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbmRBbmRTZXRUZW1wbGF0ZSh0eXBlKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgZmluZEFuZFNldFRlbXBsYXRlKGR0OiBEYXRhVHlwZSB8IENlbGxWaWV3KTogdm9pZCB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQ29tcG9uZW50Lmluc3RhbmNlLmdldFRlbXBsYXRlKGR0KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzLnNldChkdCwgdGVtcGxhdGUpO1xuXHR9XG5cbn1cbiJdfQ==