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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcmVhZC90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBDLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBT3BHOzs7OztJQU1DLHlCQUF1Qyw0QkFBcUMsRUFDN0Qsd0JBQWtEO1FBRDFCLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBUztRQUM3RCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBTHpELGNBQVMsR0FBK0MsSUFBSSxHQUFHLEVBQXlDLENBQUM7UUFFekcsdUJBQWtCLEdBQW9CLElBQUksQ0FBQztRQUlsRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7O0lBSUQsc0NBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxpQ0FBTzs7O0lBQVA7UUFDQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNGLENBQUM7Ozs7O0lBRU8sa0RBQXdCOzs7O0lBQWhDOztZQUVPLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUM7O1lBRTNHLFFBQVEsR0FBYSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRTdELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8scUNBQVc7Ozs7SUFBbkI7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxlQUFlLEVBQUU7YUFDcEIsT0FBTzs7OztRQUFDLFVBQUMsSUFBeUI7WUFDbEMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7Ozs7OztJQUVNLDRDQUFrQjs7Ozs7SUFBMUIsVUFBMkIsRUFBdUI7O1lBRTNDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFFakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUFqREQsSUFpREM7Ozs7Ozs7Ozs7O0lBL0NBLG9DQUFpSDs7Ozs7SUFFakgsNkNBQW1EOzs7OztJQUU3Qix1REFBc0Q7Ozs7O0lBQ3JFLG1EQUEwRDs7Ozs7O0lBSWpFLDREQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgQ29tcG9uZW50UmVmLCBJbmplY3RvciwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlbXBsYXRlc0NvbXBvbmVudCB9IGZyb20gJy4vdGVtcGxhdGVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuXG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRlbXBsYXRlRmFjdG9yeTxUIGV4dGVuZHMgVGVtcGxhdGVzQ29tcG9uZW50PiB7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZXM6IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4oKTtcblxuXHRwcml2YXRlIHRlbXBsYXRlc0NvbXBvbmVudDogQ29tcG9uZW50UmVmPFQ+ID0gbnVsbDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZXNDb21wb25lbnREZWZpbml0aW9uOiBUeXBlPFQ+LFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyKSB7XG5cdFx0dGhpcy5jcmVhdGVUZW1wbGF0ZXNDb21wb25lbnQoKTtcblx0fVxuXG5cdGFic3RyYWN0IGdlbmVyYXRlTWFwS2V5cygpOiBBcnJheTxEYXRhVHlwZSB8IENlbGxWaWV3PjtcblxuXHRnZXRUZW1wbGF0ZXMoKTogTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+IHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZXM7XG5cdH1cblxuXHRkZXN0cm95KCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLnRlbXBsYXRlc0NvbXBvbmVudCkge1xuXHRcdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQuZGVzdHJveSgpO1xuXHRcdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQgPSBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlVGVtcGxhdGVzQ29tcG9uZW50KCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMudGVtcGxhdGVzQ29tcG9uZW50RGVmaW5pdGlvbik7XG5cblx0XHRjb25zdCBpbmplY3RvcjogSW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoeyBwcm92aWRlcnM6IFtdIH0pO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZXNDb21wb25lbnQgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZShpbmplY3Rvcik7XG5cblx0XHR0aGlzLmdlbmVyYXRlTWFwKCk7XG5cdH1cblxuXHRwcml2YXRlIGdlbmVyYXRlTWFwKCk6IHZvaWQge1xuXHRcdHRoaXMuZ2VuZXJhdGVNYXBLZXlzKClcblx0XHRcdC5mb3JFYWNoKCh0eXBlOiBEYXRhVHlwZSB8IENlbGxWaWV3KSA9PiB7XG5cdFx0XHRcdHRoaXMuZmluZEFuZFNldFRlbXBsYXRlKHR5cGUpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0cHJpdmF0ZSBmaW5kQW5kU2V0VGVtcGxhdGUoZHQ6IERhdGFUeXBlIHwgQ2VsbFZpZXcpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNDb21wb25lbnQuaW5zdGFuY2UuZ2V0VGVtcGxhdGUoZHQpO1xuXG5cdFx0dGhpcy50ZW1wbGF0ZXMuc2V0KGR0LCB0ZW1wbGF0ZSk7XG5cdH1cblxufVxuIl19