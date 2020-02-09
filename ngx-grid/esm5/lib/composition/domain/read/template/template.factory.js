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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi9yZWFkL3RlbXBsYXRlL3RlbXBsYXRlLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBMEMsUUFBUSxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFNcEc7Ozs7O0lBTUMseUJBQXVDLDRCQUFxQyxFQUM3RCx3QkFBa0Q7UUFEMUIsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFTO1FBQzdELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFMekQsY0FBUyxHQUErQyxJQUFJLEdBQUcsRUFBeUMsQ0FBQztRQUV6Ryx1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO1FBSWxELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxzQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0YsQ0FBQzs7Ozs7SUFFTyxrREFBd0I7Ozs7SUFBaEM7O1lBRU8sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQzs7WUFFM0csUUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFN0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxxQ0FBVzs7OztJQUFuQjtRQUFBLGlCQUtDO1FBSkEsSUFBSSxDQUFDLGVBQWUsRUFBRTthQUNwQixPQUFPOzs7O1FBQUMsVUFBQyxJQUF5QjtZQUNsQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQzs7Ozs7O0lBRU0sNENBQWtCOzs7OztJQUExQixVQUEyQixFQUF1Qjs7WUFFM0MsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUVqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVGLHNCQUFDO0FBQUQsQ0FBQyxBQWpERCxJQWlEQzs7Ozs7Ozs7Ozs7SUEvQ0Esb0NBQWlIOzs7OztJQUVqSCw2Q0FBbUQ7Ozs7O0lBRTdCLHVEQUFzRDs7Ozs7SUFDckUsbURBQTBEOzs7Ozs7SUFJakUsNERBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGVtcGxhdGVGYWN0b3J5PFQgZXh0ZW5kcyBUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRwcml2YXRlIHRlbXBsYXRlczogTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PigpO1xuXG5cdHByaXZhdGUgdGVtcGxhdGVzQ29tcG9uZW50OiBDb21wb25lbnRSZWY8VD4gPSBudWxsO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlc0NvbXBvbmVudERlZmluaXRpb246IFR5cGU8VD4sXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHR0aGlzLmNyZWF0ZVRlbXBsYXRlc0NvbXBvbmVudCgpO1xuXHR9XG5cblx0YWJzdHJhY3QgZ2VuZXJhdGVNYXBLZXlzKCk6IEFycmF5PERhdGFUeXBlIHwgQ2VsbFZpZXc+O1xuXG5cdGdldFRlbXBsYXRlcygpOiBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlcztcblx0fVxuXG5cdGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudGVtcGxhdGVzQ29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLnRlbXBsYXRlc0NvbXBvbmVudC5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLnRlbXBsYXRlc0NvbXBvbmVudCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVUZW1wbGF0ZXNDb21wb25lbnQoKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy50ZW1wbGF0ZXNDb21wb25lbnREZWZpbml0aW9uKTtcblxuXHRcdGNvbnN0IGluamVjdG9yOiBJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHByb3ZpZGVyczogW10gfSk7XG5cblx0XHR0aGlzLnRlbXBsYXRlc0NvbXBvbmVudCA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdHRoaXMuZ2VuZXJhdGVNYXAoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVNYXAoKTogdm9pZCB7XG5cdFx0dGhpcy5nZW5lcmF0ZU1hcEtleXMoKVxuXHRcdFx0LmZvckVhY2goKHR5cGU6IERhdGFUeXBlIHwgQ2VsbFZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy5maW5kQW5kU2V0VGVtcGxhdGUodHlwZSk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRwcml2YXRlIGZpbmRBbmRTZXRUZW1wbGF0ZShkdDogRGF0YVR5cGUgfCBDZWxsVmlldyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlc0NvbXBvbmVudC5pbnN0YW5jZS5nZXRUZW1wbGF0ZShkdCk7XG5cblx0XHR0aGlzLnRlbXBsYXRlcy5zZXQoZHQsIHRlbXBsYXRlKTtcblx0fVxuXG59XG4iXX0=