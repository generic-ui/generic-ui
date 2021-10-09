/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../source/core/api/formation/formation.event-repository';
import { StructureId } from '../../../core/api/structure.id';
import { StructureRowDetailConfigArchive } from './structure.row-detail.config-archive';
import { StructureRowDetailViewComponent } from './view/structure.row-detail-view.component';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './view/structure.row-detail-view.tokens';
import { Reactive } from '@generic-ui/hermes';
export class StructureRowDetailService extends Reactive {
    /**
     * @param {?} injector
     * @param {?} structureId
     * @param {?} structureDetailViewConfigArchive
     * @param {?} formationEventService
     * @param {?} drawerService
     */
    constructor(injector, structureId, structureDetailViewConfigArchive, formationEventService, drawerService) {
        super();
        this.injector = injector;
        this.structureId = structureId;
        this.structureDetailViewConfigArchive = structureDetailViewConfigArchive;
        this.formationEventService = formationEventService;
        this.drawerService = drawerService;
        this.enabled = false;
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    init(ref) {
        this.elementRef = ref;
        this.structureDetailViewConfigArchive
            .on()
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            this.config = config;
            if (config.enabled === true) {
                this.turnOn();
            }
            else if (config.enabled === false) {
                this.turnOff();
            }
        }));
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            if (!this.enabled) {
                return;
            }
            this.drawerService.close();
            if (items.length === 0) {
                return;
            }
            /** @type {?} */
            const item = items[0];
            /** @type {?} */
            const injector = Injector.create({
                parent: this.injector,
                providers: [
                    { provide: structureRowDetailViewItem, useValue: item },
                    { provide: structureRowDetailViewTemplate, useValue: this.config.template }
                ]
            });
            this.drawerService.open(this.elementRef, StructureRowDetailViewComponent, { injector: injector });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    turnOn() {
        this.enabled = true;
    }
    /**
     * @private
     * @return {?}
     */
    turnOff() {
        this.enabled = false;
    }
}
StructureRowDetailService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureRowDetailService.ctorParameters = () => [
    { type: Injector },
    { type: StructureId },
    { type: StructureRowDetailConfigArchive },
    { type: FormationEventRepository },
    { type: FabricDrawerService }
];
if (false) {
    /** @type {?} */
    StructureRowDetailService.prototype.enabled;
    /** @type {?} */
    StructureRowDetailService.prototype.config;
    /** @type {?} */
    StructureRowDetailService.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.structureDetailViewConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.formationEventService;
    /**
     * @type {?}
     * @private
     */
    StructureRowDetailService.prototype.drawerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2dyaWQvZmVhdHVyZS9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU3RCxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV4RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVySCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJOUMsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFFBQVE7Ozs7Ozs7O0lBUXRELFlBQTZCLFFBQWtCLEVBQzNCLFdBQXdCLEVBQ3hCLGdDQUFpRSxFQUNqRSxxQkFBK0MsRUFDL0MsYUFBa0M7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFMb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWlDO1FBQ2pFLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMEI7UUFDL0Msa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBVnRELFlBQU8sR0FBWSxLQUFLLENBQUM7SUFZekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBZTtRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUV0QixJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLEVBQUUsRUFBRTthQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUIsU0FBUzs7OztRQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNkO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDNUIsU0FBUzs7OztRQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBRXhDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixPQUFPO2FBQ1A7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRTNCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU87YUFDUDs7a0JBRUssSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O2tCQUVmLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3JCLFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO29CQUN2RCxFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7aUJBQzNFO2FBQ0QsQ0FBQztZQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsK0JBQStCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuRyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7OztZQXJFRCxVQUFVOzs7O1lBZnNCLFFBQVE7WUFLaEMsV0FBVztZQUVYLCtCQUErQjtZQUgvQix3QkFBd0I7WUFGeEIsbUJBQW1COzs7O0lBZ0IzQiw0Q0FBeUI7O0lBRXpCLDJDQUF3Qjs7SUFFeEIsK0NBQXVCOzs7OztJQUVYLDZDQUFtQzs7Ozs7SUFDNUMsZ0RBQXlDOzs7OztJQUN6QyxxRUFBa0Y7Ozs7O0lBQ2xGLDBEQUFnRTs7Ozs7SUFDaEUsa0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucm93LWRldGFpbC5jb25maWctYXJjaGl2ZSc7XG5pbXBvcnQgeyBSb3dEZXRhaWxDb25maWcgfSBmcm9tICcuL3Jvdy1kZXRhaWwuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0sIHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSB9IGZyb20gJy4vdmlldy9zdHJ1Y3R1cmUucm93LWRldGFpbC12aWV3LnRva2Vucyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uZmlnOiBSb3dEZXRhaWxDb25maWc7XG5cblx0ZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZHJhd2VyU2VydmljZTogRmFicmljRHJhd2VyU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRpbml0KHJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudFJlZiA9IHJlZjtcblxuXHRcdHRoaXMuc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmVcblx0XHRcdC5vbigpXG5cdFx0XHQucGlwZSh0aGlzLmhlcm1lc1Rha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29uZmlnOiBSb3dEZXRhaWxDb25maWcpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuXHRcdFx0XHRpZiAoY29uZmlnLmVuYWJsZWQgPT09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLnR1cm5PbigpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNvbmZpZy5lbmFibGVkID09PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMudHVybk9mZigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8U2VsZWN0ZWRSb3c+KSA9PiB7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmRyYXdlclNlcnZpY2UuY2xvc2UoKTtcblxuXHRcdFx0XHRpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuXG5cdFx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFx0XHR7IHByb3ZpZGU6IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCB1c2VWYWx1ZTogaXRlbSB9LFxuXHRcdFx0XHRcdFx0eyBwcm92aWRlOiBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUsIHVzZVZhbHVlOiB0aGlzLmNvbmZpZy50ZW1wbGF0ZSB9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHR0aGlzLmRyYXdlclNlcnZpY2Uub3Blbih0aGlzLmVsZW1lbnRSZWYsIFN0cnVjdHVyZVJvd0RldGFpbFZpZXdDb21wb25lbnQsIHsgaW5qZWN0b3I6IGluamVjdG9yIH0pO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHR1cm5PbigpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0cHJpdmF0ZSB0dXJuT2ZmKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG59XG4iXX0=