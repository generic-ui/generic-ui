/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../source/domain-api/formation/formation.event-repository';
import { StructureId } from '../../domain/structure.id';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureRowDetailConfigArchive } from './structure.row-detail.config-archive';
import { StructureRowDetailViewComponent } from './view/structure.row-detail-view.component';
import { structureRowDetailViewItem, structureRowDetailViewTemplate } from './view/structure.row-detail-view.tokens';
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
            .onValue()
            .pipe(this.takeUntil())
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
            .pipe(this.takeUntil())
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJvdy1kZXRhaWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZmVhdHVyZS9yb3ctZGV0YWlsL3N0cnVjdHVyZS5yb3ctZGV0YWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXpELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDM0QsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLDhCQUE4QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFLckgsTUFBTSxPQUFPLHlCQUEwQixTQUFRLFFBQVE7Ozs7Ozs7O0lBUXRELFlBQTZCLFFBQWtCLEVBQzNCLFdBQXdCLEVBQ3hCLGdDQUFpRSxFQUNqRSxxQkFBK0MsRUFDL0MsYUFBa0M7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFMb0IsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUMzQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQWlDO1FBQ2pFLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBMEI7UUFDL0Msa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBVnRELFlBQU8sR0FBWSxLQUFLLENBQUM7SUFZekIsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsR0FBZTtRQUNuQixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUV0QixJQUFJLENBQUMsZ0NBQWdDO2FBQ25DLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsTUFBdUIsRUFBRSxFQUFFO1lBRXRDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNkO2lCQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNmO1FBQ0YsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLENBQUMscUJBQXFCO2FBQ3hCLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDdEIsU0FBUzs7OztRQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1lBRXhDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNsQixPQUFPO2FBQ1A7WUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRTNCLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU87YUFDUDs7a0JBRUssSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7O2tCQUVmLFFBQVEsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUNoQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3JCLFNBQVMsRUFBRTtvQkFDVixFQUFFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO29CQUN2RCxFQUFFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7aUJBQzNFO2FBQ0QsQ0FBQztZQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsK0JBQStCLEVBQUUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNuRyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sTUFBTTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sT0FBTztRQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7OztZQXJFRCxVQUFVOzs7O1lBZnNCLFFBQVE7WUFLaEMsV0FBVztZQUdYLCtCQUErQjtZQUovQix3QkFBd0I7WUFGeEIsbUJBQW1COzs7O0lBZ0IzQiw0Q0FBeUI7O0lBRXpCLDJDQUF3Qjs7SUFFeEIsK0NBQXVCOzs7OztJQUVYLDZDQUFtQzs7Ozs7SUFDNUMsZ0RBQXlDOzs7OztJQUN6QyxxRUFBa0Y7Ozs7O0lBQ2xGLDBEQUFnRTs7Ozs7SUFDaEUsa0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvcmVhY3RpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnJvdy1kZXRhaWwuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgUm93RGV0YWlsQ29uZmlnIH0gZnJvbSAnLi9yb3ctZGV0YWlsLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdJdGVtLCBzdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3VGVtcGxhdGUgfSBmcm9tICcuL3ZpZXcvc3RydWN0dXJlLnJvdy1kZXRhaWwtdmlldy50b2tlbnMnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93RGV0YWlsU2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uZmlnOiBSb3dEZXRhaWxDb25maWc7XG5cblx0ZWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yOiBJbmplY3Rvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVJvd0RldGFpbENvbmZpZ0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uRXZlbnRTZXJ2aWNlOiBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZHJhd2VyU2VydmljZTogRmFicmljRHJhd2VyU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRpbml0KHJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuXHRcdHRoaXMuZWxlbWVudFJlZiA9IHJlZjtcblxuXHRcdHRoaXMuc3RydWN0dXJlRGV0YWlsVmlld0NvbmZpZ0FyY2hpdmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChjb25maWc6IFJvd0RldGFpbENvbmZpZykgPT4ge1xuXG5cdFx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG5cdFx0XHRcdGlmIChjb25maWcuZW5hYmxlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMudHVybk9uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY29uZmlnLmVuYWJsZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy50dXJuT2ZmKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5mb3JtYXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxTZWxlY3RlZFJvdz4pID0+IHtcblxuXHRcdFx0XHRpZiAoIXRoaXMuZW5hYmxlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMuZHJhd2VyU2VydmljZS5jbG9zZSgpO1xuXG5cdFx0XHRcdGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBpdGVtID0gaXRlbXNbMF07XG5cblx0XHRcdFx0Y29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe1xuXHRcdFx0XHRcdHBhcmVudDogdGhpcy5pbmplY3Rvcixcblx0XHRcdFx0XHRwcm92aWRlcnM6IFtcblx0XHRcdFx0XHRcdHsgcHJvdmlkZTogc3RydWN0dXJlUm93RGV0YWlsVmlld0l0ZW0sIHVzZVZhbHVlOiBpdGVtIH0sXG5cdFx0XHRcdFx0XHR7IHByb3ZpZGU6IHN0cnVjdHVyZVJvd0RldGFpbFZpZXdUZW1wbGF0ZSwgdXNlVmFsdWU6IHRoaXMuY29uZmlnLnRlbXBsYXRlIH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuZHJhd2VyU2VydmljZS5vcGVuKHRoaXMuZWxlbWVudFJlZiwgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCwgeyBpbmplY3RvcjogaW5qZWN0b3IgfSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgdHVybk9uKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHR1cm5PZmYoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cbn1cbiJdfQ==