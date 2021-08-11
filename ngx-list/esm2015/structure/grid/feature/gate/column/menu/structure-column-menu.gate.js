/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ColumnMenuConfig } from '../../../../core/api/column-menu-config';
import { StructureColumnMenuConfigArchive } from '../../../header/menu/config/structure.column-menu-config.archive';
import { Gate } from '../../../../../../common/cdk/component/gate';
export class StructureColumnMenuGate extends Gate {
    /**
     * @param {?} structureColumnMenuConfigArchive
     */
    constructor(structureColumnMenuConfigArchive) {
        super();
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('columnMenu', changes)) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
    }
}
StructureColumnMenuGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[columnMenu]'
            },] }
];
/** @nocollapse */
StructureColumnMenuGate.ctorParameters = () => [
    { type: StructureColumnMenuConfigArchive }
];
StructureColumnMenuGate.propDecorators = {
    columnMenu: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureColumnMenuGate.prototype.columnMenu;
    /**
     * @type {?}
     * @private
     */
    StructureColumnMenuGate.prototype.structureColumnMenuConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi1tZW51LmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9jb2x1bW4vbWVudS9zdHJ1Y3R1cmUtY29sdW1uLW1lbnUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDcEgsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBTW5FLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxJQUFJOzs7O0lBS2hELFlBQTZCLGdDQUFrRTtRQUM5RixLQUFLLEVBQUUsQ0FBQztRQURvQixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWtDO0lBRS9GLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQTJDO1FBRXRELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbEU7SUFDRixDQUFDOzs7WUFqQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7YUFDckM7Ozs7WUFOUSxnQ0FBZ0M7Ozt5QkFTdkMsS0FBSzs7OztJQUFOLDZDQUM2Qjs7Ozs7SUFFakIsbUVBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW2NvbHVtbk1lbnVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NZW51R2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IENvbHVtbk1lbnVDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZUNvbHVtbk1lbnVHYXRlPikge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdjb2x1bW5NZW51JywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUubmV4dENvbmZpZyh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=