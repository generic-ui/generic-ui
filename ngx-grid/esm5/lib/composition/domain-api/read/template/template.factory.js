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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBDLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXBHOzs7OztJQU1DLHlCQUF1Qyw0QkFBcUMsRUFDcEQsd0JBQWtEO1FBRG5DLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBUztRQUNwRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBTGxFLGNBQVMsR0FBK0MsSUFBSSxHQUFHLEVBQXlDLENBQUM7UUFFekcsdUJBQWtCLEdBQW9CLElBQUksQ0FBQztRQUlsRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsc0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7O0lBRU8sa0RBQXdCOzs7O0lBQWhDOztZQUVPLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUM7O1lBRTNHLFFBQVEsR0FBYSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8scUNBQVc7Ozs7SUFBbkI7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxlQUFlLEVBQUU7YUFDcEIsT0FBTzs7OztRQUFDLFVBQUMsSUFBeUI7WUFDbEMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUVNLDRDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsRUFBdUI7O1lBRTNDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFFakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7Ozs7Ozs7Ozs7O0lBL0NBLG9DQUFpSDs7Ozs7SUFFakgsNkNBQW1EOzs7OztJQUU3Qix1REFBc0Q7Ozs7O0lBQ3JFLG1EQUFtRTs7Ozs7O0lBSTFFLDREQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vY29yZS9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb2x1bW4vY2VsbC12aWV3JztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGVtcGxhdGVGYWN0b3J5PFQgZXh0ZW5kcyBUZW1wbGF0ZXNDb21wb25lbnQ+IHtcblxuXHRwcml2YXRlIHRlbXBsYXRlczogTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PigpO1xuXG5cdHByaXZhdGUgdGVtcGxhdGVzQ29tcG9uZW50OiBDb21wb25lbnRSZWY8VD4gPSBudWxsO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlc0NvbXBvbmVudERlZmluaXRpb246IFR5cGU8VD4sXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIpIHtcblx0XHR0aGlzLmNyZWF0ZVRlbXBsYXRlc0NvbXBvbmVudCgpO1xuXHR9XG5cblx0YWJzdHJhY3QgZ2VuZXJhdGVNYXBLZXlzKCk6IEFycmF5PERhdGFUeXBlIHwgQ2VsbFZpZXc+O1xuXG5cdGdldFRlbXBsYXRlcygpOiBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4ge1xuXHRcdHJldHVybiB0aGlzLnRlbXBsYXRlcztcblx0fVxuXG5cdGRlc3Ryb3koKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMudGVtcGxhdGVzQ29tcG9uZW50KSB7XG5cdFx0XHR0aGlzLnRlbXBsYXRlc0NvbXBvbmVudC5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLnRlbXBsYXRlc0NvbXBvbmVudCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVUZW1wbGF0ZXNDb21wb25lbnQoKTogdm9pZCB7XG5cblx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy50ZW1wbGF0ZXNDb21wb25lbnREZWZpbml0aW9uKTtcblxuXHRcdGNvbnN0IGluamVjdG9yOiBJbmplY3RvciA9IEluamVjdG9yLmNyZWF0ZSh7IHByb3ZpZGVyczogW10gfSk7XG5cblx0XHR0aGlzLnRlbXBsYXRlc0NvbXBvbmVudCA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yKTtcblxuXHRcdHRoaXMuZ2VuZXJhdGVNYXAoKTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVNYXAoKTogdm9pZCB7XG5cdFx0dGhpcy5nZW5lcmF0ZU1hcEtleXMoKVxuXHRcdFx0LmZvckVhY2goKHR5cGU6IERhdGFUeXBlIHwgQ2VsbFZpZXcpID0+IHtcblx0XHRcdFx0dGhpcy5maW5kQW5kU2V0VGVtcGxhdGUodHlwZSk7XG5cdFx0XHR9KTtcblx0fTtcblxuXHRwcml2YXRlIGZpbmRBbmRTZXRUZW1wbGF0ZShkdDogRGF0YVR5cGUgfCBDZWxsVmlldyk6IHZvaWQge1xuXG5cdFx0Y29uc3QgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlc0NvbXBvbmVudC5pbnN0YW5jZS5nZXRUZW1wbGF0ZShkdCk7XG5cblx0XHR0aGlzLnRlbXBsYXRlcy5zZXQoZHQsIHRlbXBsYXRlKTtcblx0fVxuXG59XG4iXX0=