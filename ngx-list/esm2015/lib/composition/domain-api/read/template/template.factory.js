/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injector } from '@angular/core';
/**
 * @abstract
 * @template T
 */
export class TemplateFactory {
    /**
     * @protected
     * @param {?} templatesComponentDefinition
     * @param {?} componentFactoryResolver
     */
    constructor(templatesComponentDefinition, componentFactoryResolver) {
        this.templatesComponentDefinition = templatesComponentDefinition;
        this.componentFactoryResolver = componentFactoryResolver;
        this.templates = new Map();
        this.templatesComponent = null;
        this.createTemplatesComponent();
    }
    /**
     * @return {?}
     */
    getTemplates() {
        return this.templates;
    }
    /**
     * @return {?}
     */
    destroy() {
        if (this.templatesComponent) {
            this.templatesComponent.destroy();
            this.templatesComponent = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    createTemplatesComponent() {
        /** @type {?} */
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.templatesComponentDefinition);
        /** @type {?} */
        const injector = Injector.create({ providers: [] });
        this.templatesComponent = componentFactory.create(injector);
        this.generateMap();
    }
    /**
     * @private
     * @return {?}
     */
    generateMap() {
        this.generateMapKeys()
            .forEach((/**
         * @param {?} type
         * @return {?}
         */
        (type) => {
            this.findAndSetTemplate(type);
        }));
    }
    ;
    /**
     * @private
     * @param {?} dt
     * @return {?}
     */
    findAndSetTemplate(dt) {
        /** @type {?} */
        const template = this.templatesComponent.instance.getTemplate(dt);
        this.templates.set(dt, template);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvcmVhZC90ZW1wbGF0ZS90ZW1wbGF0ZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQTBDLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTXBHLE1BQU0sT0FBZ0IsZUFBZTs7Ozs7O0lBTXBDLFlBQXVDLDRCQUFxQyxFQUNwRCx3QkFBa0Q7UUFEbkMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFTO1FBQ3BELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFMbEUsY0FBUyxHQUErQyxJQUFJLEdBQUcsRUFBeUMsQ0FBQztRQUV6Ryx1QkFBa0IsR0FBb0IsSUFBSSxDQUFDO1FBSWxELElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFJRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ04sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7OztJQUVPLHdCQUF3Qjs7Y0FFekIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQzs7Y0FFM0csUUFBUSxHQUFhLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7UUFFN0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxXQUFXO1FBQ2xCLElBQUksQ0FBQyxlQUFlLEVBQUU7YUFDcEIsT0FBTzs7OztRQUFDLENBQUMsSUFBeUIsRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFFTSxrQkFBa0IsQ0FBQyxFQUF1Qjs7Y0FFM0MsUUFBUSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztRQUVqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUVEOzs7Ozs7SUEvQ0Esb0NBQWlIOzs7OztJQUVqSCw2Q0FBbUQ7Ozs7O0lBRTdCLHVEQUFzRDs7Ozs7SUFDckUsbURBQW1FOzs7Ozs7SUFJMUUsNERBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBDb21wb25lbnRSZWYsIEluamVjdG9yLCBUZW1wbGF0ZVJlZiwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi90ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZW1wbGF0ZUZhY3Rvcnk8VCBleHRlbmRzIFRlbXBsYXRlc0NvbXBvbmVudD4ge1xuXG5cdHByaXZhdGUgdGVtcGxhdGVzOiBNYXA8RGF0YVR5cGUgfCBDZWxsVmlldywgVGVtcGxhdGVSZWY8YW55Pj4gPSBuZXcgTWFwPERhdGFUeXBlIHwgQ2VsbFZpZXcsIFRlbXBsYXRlUmVmPGFueT4+KCk7XG5cblx0cHJpdmF0ZSB0ZW1wbGF0ZXNDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPiA9IG51bGw7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVzQ29tcG9uZW50RGVmaW5pdGlvbjogVHlwZTxUPixcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcikge1xuXHRcdHRoaXMuY3JlYXRlVGVtcGxhdGVzQ29tcG9uZW50KCk7XG5cdH1cblxuXHRhYnN0cmFjdCBnZW5lcmF0ZU1hcEtleXMoKTogQXJyYXk8RGF0YVR5cGUgfCBDZWxsVmlldz47XG5cblx0Z2V0VGVtcGxhdGVzKCk6IE1hcDxEYXRhVHlwZSB8IENlbGxWaWV3LCBUZW1wbGF0ZVJlZjxhbnk+PiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGVzO1xuXHR9XG5cblx0ZGVzdHJveSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy50ZW1wbGF0ZXNDb21wb25lbnQpIHtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50LmRlc3Ryb3koKTtcblx0XHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVRlbXBsYXRlc0NvbXBvbmVudCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLnRlbXBsYXRlc0NvbXBvbmVudERlZmluaXRpb24pO1xuXG5cdFx0Y29uc3QgaW5qZWN0b3I6IEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzOiBbXSB9KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzQ29tcG9uZW50ID0gY29tcG9uZW50RmFjdG9yeS5jcmVhdGUoaW5qZWN0b3IpO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZU1hcCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZW5lcmF0ZU1hcCgpOiB2b2lkIHtcblx0XHR0aGlzLmdlbmVyYXRlTWFwS2V5cygpXG5cdFx0XHQuZm9yRWFjaCgodHlwZTogRGF0YVR5cGUgfCBDZWxsVmlldykgPT4ge1xuXHRcdFx0XHR0aGlzLmZpbmRBbmRTZXRUZW1wbGF0ZSh0eXBlKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdHByaXZhdGUgZmluZEFuZFNldFRlbXBsYXRlKGR0OiBEYXRhVHlwZSB8IENlbGxWaWV3KTogdm9pZCB7XG5cblx0XHRjb25zdCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGVzQ29tcG9uZW50Lmluc3RhbmNlLmdldFRlbXBsYXRlKGR0KTtcblxuXHRcdHRoaXMudGVtcGxhdGVzLnNldChkdCwgdGVtcGxhdGUpO1xuXHR9XG5cbn1cbiJdfQ==