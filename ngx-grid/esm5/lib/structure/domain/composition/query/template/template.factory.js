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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vcXVlcnkvdGVtcGxhdGUvdGVtcGxhdGUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUEwQyxRQUFRLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7OztBQU9wRzs7Ozs7SUFNQyx5QkFBdUMsNEJBQXFDLEVBQzdELHdCQUFrRDtRQUQxQixpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQVM7UUFDN0QsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUx6RCxjQUFTLEdBQStDLElBQUksR0FBRyxFQUF5QyxDQUFDO1FBRXpHLHVCQUFrQixHQUFvQixJQUFJLENBQUM7UUFJbEQsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUlELHNDQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsaUNBQU87OztJQUFQO1FBQ0MsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7OztJQUVPLGtEQUF3Qjs7OztJQUFoQzs7WUFFTyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDOztZQUUzRyxRQUFRLEdBQWEsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUU3RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLHFDQUFXOzs7O0lBQW5CO1FBQUEsaUJBS0M7UUFKQSxJQUFJLENBQUMsZUFBZSxFQUFFO2FBQ3BCLE9BQU87Ozs7UUFBQyxVQUFDLElBQXlCO1lBQ2xDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFFTSw0Q0FBa0I7Ozs7O0lBQTFCLFVBQTJCLEVBQXVCOztZQUUzQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1FBRWpFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBakRELElBaURDOzs7Ozs7Ozs7OztJQS9DQSxvQ0FBaUg7Ozs7O0lBRWpILDZDQUFtRDs7Ozs7SUFFN0IsdURBQXNEOzs7OztJQUNyRSxtREFBMEQ7Ozs7OztJQUlqRSw0REFBdUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIENvbXBvbmVudFJlZiwgSW5qZWN0b3IsIFRlbXBsYXRlUmVmLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3RlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vY2VsbC12aWV3JztcblxuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZW1wbGF0ZUZhY3Rvcnk8VCBleHRlbmRzIFRlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdHByaXZhdGUgdGVtcGxhdGVzOiBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZXNDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPiA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVzQ29tcG9uZW50RGVmaW5pdGlvbjogVHlwZTxUPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGVzQ29tcG9uZW50KCk7XG5cdH1cblxuXHRhYnN0cmFjdCBnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8RGF0YVR5cGUgfCBDZWxsVmlldz47XG5cblx0Z2V0VGVtcGxhdGVzKCk6IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVzO1xuXHR9XG5cblx0ZGVzdHJveSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZXNDb21wb25lbnQpIHtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVRlbXBsYXRlc0NvbXBvbmVudCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnRlbXBsYXRlc0NvbXBvbmVudERlZmluaXRpb24pO1xuXG5cdFx0Y29uc3QgaW5qZWN0b3I6IEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzOiBbXSB9KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZU1hcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZU1hcCgpOiB2b2lkIHtcblx0XHR0aGlzLmdlbmVyYXRlTWFwS2V5cygpXG5cdFx0XHQuZm9yRWFjaCgodHlwZTogRGF0YVR5cGUgfCBDZWxsVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbmRBbmRTZXRUZW1wbGF0ZSh0eXBlKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgZmluZEFuZFNldFRlbXBsYXRlKGR0OiBEYXRhVHlwZSB8IENlbGxWaWV3KTogdm9pZCB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQ29tcG9uZW50Lmluc3RhbmNlLmdldFRlbXBsYXRlKGR0KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzLnNldChkdCwgdGVtcGxhdGUpO1xuXHR9XG5cbn1cbiJdfQ==