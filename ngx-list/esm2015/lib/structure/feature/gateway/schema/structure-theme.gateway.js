/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { SchemaTheme } from '../../../../../schema/domain/theme/schema-theme';
import { SchemaCommandDispatcher } from '../../../../../schema/domain-api/schema.command-dispatcher';
export class StructureThemeGateway {
    /**
     * @param {?} schemaCommandDispatcher
     */
    constructor(schemaCommandDispatcher) {
        this.schemaCommandDispatcher = schemaCommandDispatcher;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (simpleChanges.theme2 !== undefined && simpleChanges.theme2.currentValue !== undefined) {
            this.schemaCommandDispatcher.setTheme(this.theme2);
        }
    }
}
StructureThemeGateway.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[theme2]'
            },] }
];
/** @nocollapse */
StructureThemeGateway.ctorParameters = () => [
    { type: SchemaCommandDispatcher }
];
StructureThemeGateway.propDecorators = {
    theme2: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureThemeGateway.prototype.theme2;
    /**
     * @type {?}
     * @private
     */
    StructureThemeGateway.prototype.schemaCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXRoZW1lLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9nYXRld2F5L3NjaGVtYS9zdHJ1Y3R1cmUtdGhlbWUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUtyRyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBS2pDLFlBQTZCLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQUcsQ0FBQzs7Ozs7SUFFakYsV0FBVyxDQUFDLGFBQTRCO1FBRXZDLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzFGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0YsQ0FBQzs7O1lBZkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7YUFDakM7Ozs7WUFKUSx1QkFBdUI7OztxQkFPOUIsS0FBSzs7OztJQUFOLHVDQUNvQjs7Ozs7SUFFUix3REFBaUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3RoZW1lMl0nXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVRoZW1lR2F0ZXdheSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0dGhlbWUyOiBTY2hlbWFUaGVtZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUNvbW1hbmREaXNwYXRjaGVyOiBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlcikge31cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy50aGVtZTIgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRoZW1lMi5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRUaGVtZSh0aGlzLnRoZW1lMik7XG5cdFx0fVxuXHR9XG59XG4iXX0=