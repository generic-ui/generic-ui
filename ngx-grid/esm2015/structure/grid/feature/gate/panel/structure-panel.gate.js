/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { StructureTitlePanelConfigArchive } from '../../panel/banner-panels/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../../panel/banner-panels/footer-panel/structure.footer-panel.config-archive';
export class StructurePanelGate extends Gate {
    /**
     * @param {?} structureTitlePanelConfigArchive
     * @param {?} structureFooterPanelConfigArchive
     */
    constructor(structureTitlePanelConfigArchive, structureFooterPanelConfigArchive) {
        super();
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('titlePanel', changes)) {
            this.structureTitlePanelConfigArchive.next(this.titlePanel);
        }
        if (this.isDefined('footerPanel', changes)) {
            this.structureFooterPanelConfigArchive.next(this.footerPanel);
        }
    }
}
StructurePanelGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[titlePanel][footerPanel]'
            },] }
];
/** @nocollapse */
StructurePanelGate.ctorParameters = () => [
    { type: StructureTitlePanelConfigArchive },
    { type: StructureFooterPanelConfigArchive }
];
StructurePanelGate.propDecorators = {
    titlePanel: [{ type: Input }],
    footerPanel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructurePanelGate.prototype.titlePanel;
    /** @type {?} */
    StructurePanelGate.prototype.footerPanel;
    /**
     * @type {?}
     * @private
     */
    StructurePanelGate.prototype.structureTitlePanelConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructurePanelGate.prototype.structureFooterPanelConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhbmVsLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9ncmlkL2ZlYXR1cmUvZ2F0ZS9wYW5lbC9zdHJ1Y3R1cmUtcGFuZWwuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDhFQUE4RSxDQUFDO0FBT2pJLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxJQUFJOzs7OztJQVEzQyxZQUE2QixnQ0FBa0UsRUFDM0UsaUNBQW9FO1FBQ3ZGLEtBQUssRUFBRSxDQUFDO1FBRm9CLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDM0Usc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztJQUV4RixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQztRQUVqRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5RDtJQUNGLENBQUM7OztZQXpCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHdDQUF3QzthQUNsRDs7OztZQVBRLGdDQUFnQztZQUNoQyxpQ0FBaUM7Ozt5QkFTeEMsS0FBSzswQkFHTCxLQUFLOzs7O0lBSE4sd0NBQ3VDOztJQUV2Qyx5Q0FDd0M7Ozs7O0lBRTVCLDhEQUFtRjs7Ozs7SUFDNUYsK0RBQXFGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vLi4vcGFuZWwvYmFubmVyLXBhbmVscy90aXRsZS1wYW5lbC9zdHJ1Y3R1cmUudGl0bGUtcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vLi4vcGFuZWwvYmFubmVyLXBhbmVscy9mb290ZXItcGFuZWwvc3RydWN0dXJlLmZvb3Rlci1wYW5lbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcbmltcG9ydCB7IFN0cnVjdHVyZUJhbm5lclBhbmVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFuZWwvYmFubmVyLXBhbmVscy9zdHJ1Y3R1cmUtYmFubmVyLXBhbmVsLmNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbdGl0bGVQYW5lbF1bZm9vdGVyUGFuZWxdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVQYW5lbEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHR0aXRsZVBhbmVsOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZztcblxuXHRASW5wdXQoKVxuXHRmb290ZXJQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZTogU3RydWN0dXJlVGl0bGVQYW5lbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVBhbmVsR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgndGl0bGVQYW5lbCcsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLm5leHQodGhpcy50aXRsZVBhbmVsKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ2Zvb3RlclBhbmVsJywgY2hhbmdlcykpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlRm9vdGVyUGFuZWxDb25maWdBcmNoaXZlLm5leHQodGhpcy5mb290ZXJQYW5lbCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==