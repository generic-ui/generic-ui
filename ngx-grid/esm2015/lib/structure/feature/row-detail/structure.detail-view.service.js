/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventService } from '../../feature-api/formation/formation-event.service';
import { StructureId } from '../../domain/structure.id';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureDetailViewConfigArchive } from './structure.detail-view.config-archive';
import { StructureDetailViewComponent } from './detail-view/structure.detail-view.component';
export class StructureDetailViewService extends Reactive {
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
            if (items.length === 0) {
                return;
            }
            /** @type {?} */
            const item = items[0];
            /** @type {?} */
            const injector = Injector.create({
                parent: this.injector,
                providers: [
                    { provide: 'item', useValue: item },
                    { provide: 'template', useValue: this.config.template }
                ]
            });
            this.drawerService.open(this.elementRef, StructureDetailViewComponent, { injector: injector });
            // this.drawerService.open(structureElement, StructureDetailViewComponent, { injector: this.injector });
            console.log('Open', item);
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
StructureDetailViewService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructureDetailViewService.ctorParameters = () => [
    { type: Injector },
    { type: StructureId },
    { type: StructureDetailViewConfigArchive },
    { type: FormationEventService },
    { type: FabricDrawerService }
];
if (false) {
    /** @type {?} */
    StructureDetailViewService.prototype.enabled;
    /** @type {?} */
    StructureDetailViewService.prototype.config;
    /** @type {?} */
    StructureDetailViewService.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.structureDetailViewConfigArchive;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.formationEventService;
    /**
     * @type {?}
     * @private
     */
    StructureDetailViewService.prototype.drawerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmRldGFpbC12aWV3LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9yb3ctZGV0YWlsL3N0cnVjdHVyZS5kZXRhaWwtdmlldy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTFGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBSTdGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxRQUFROzs7Ozs7OztJQVF2RCxZQUE2QixRQUFrQixFQUMzQixXQUF3QixFQUN4QixnQ0FBa0UsRUFDbEUscUJBQTRDLEVBQzVDLGFBQWtDO1FBQ3JELEtBQUssRUFBRSxDQUFDO1FBTG9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtRQVZ0RCxZQUFPLEdBQVksS0FBSyxDQUFDO0lBWXpCLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLEdBQWU7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFFdEIsSUFBSSxDQUFDLGdDQUFnQzthQUNuQyxPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLE1BQXdCLEVBQUUsRUFBRTtZQUV2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUVyQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZDtpQkFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUNwQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDZjtRQUNGLENBQUMsRUFBQyxDQUFDO1FBRUosSUFBSSxDQUFDLHFCQUFxQjthQUN4QixjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ3RCLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUVoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDbEIsT0FBTzthQUNQO1lBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTzthQUNQOztrQkFFSyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQzs7a0JBRWYsUUFBUSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDckIsU0FBUyxFQUFFO29CQUNWLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO29CQUNuQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2lCQUN2RDthQUNELENBQUM7WUFFRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLDRCQUE0QixFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDL0Ysd0dBQXdHO1lBQ3hHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFTyxPQUFPO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7O1lBckVELFVBQVU7Ozs7WUFic0IsUUFBUTtZQUtoQyxXQUFXO1lBR1gsZ0NBQWdDO1lBSmhDLHFCQUFxQjtZQUZyQixtQkFBbUI7Ozs7SUFjM0IsNkNBQXlCOztJQUV6Qiw0Q0FBeUI7O0lBRXpCLGdEQUF1Qjs7Ozs7SUFFWCw4Q0FBbUM7Ozs7O0lBQzVDLGlEQUF5Qzs7Ozs7SUFDekMsc0VBQW1GOzs7OztJQUNuRiwyREFBNkQ7Ozs7O0lBQzdELG1EQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RyYXdlclNlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcblxuaW1wb3J0IHsgUmVhY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL3JlYWN0aXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZGV0YWlsLXZpZXcuY29uZmlnLWFyY2hpdmUnO1xuaW1wb3J0IHsgRGV0YWlsVmlld0NvbmZpZyB9IGZyb20gJy4vZGV0YWlsLXZpZXcuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZURldGFpbFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2RldGFpbC12aWV3L3N0cnVjdHVyZS5kZXRhaWwtdmlldy5jb21wb25lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZXRhaWxWaWV3U2VydmljZSBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0Y29uZmlnOiBEZXRhaWxWaWV3Q29uZmlnO1xuXG5cdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZURldGFpbFZpZXdDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50U2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkcmF3ZXJTZXJ2aWNlOiBGYWJyaWNEcmF3ZXJTZXJ2aWNlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGluaXQocmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0dGhpcy5lbGVtZW50UmVmID0gcmVmO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVEZXRhaWxWaWV3Q29uZmlnQXJjaGl2ZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGNvbmZpZzogRGV0YWlsVmlld0NvbmZpZykgPT4ge1xuXG5cdFx0XHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG5cdFx0XHRcdGlmIChjb25maWcuZW5hYmxlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdHRoaXMudHVybk9uKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoY29uZmlnLmVuYWJsZWQgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy50dXJuT2ZmKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5mb3JtYXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxhbnk+KSA9PiB7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmVuYWJsZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuXG5cdFx0XHRcdGNvbnN0IGluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcblx0XHRcdFx0XHRwYXJlbnQ6IHRoaXMuaW5qZWN0b3IsXG5cdFx0XHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdFx0XHR7IHByb3ZpZGU6ICdpdGVtJywgdXNlVmFsdWU6IGl0ZW0gfSxcblx0XHRcdFx0XHRcdHsgcHJvdmlkZTogJ3RlbXBsYXRlJywgdXNlVmFsdWU6IHRoaXMuY29uZmlnLnRlbXBsYXRlIH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuZHJhd2VyU2VydmljZS5vcGVuKHRoaXMuZWxlbWVudFJlZiwgU3RydWN0dXJlRGV0YWlsVmlld0NvbXBvbmVudCwgeyBpbmplY3RvcjogaW5qZWN0b3IgfSk7XG5cdFx0XHRcdC8vIHRoaXMuZHJhd2VyU2VydmljZS5vcGVuKHN0cnVjdHVyZUVsZW1lbnQsIFN0cnVjdHVyZURldGFpbFZpZXdDb21wb25lbnQsIHsgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdPcGVuJywgaXRlbSk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgdHVybk9uKCk6IHZvaWQge1xuXHRcdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cdH1cblxuXHRwcml2YXRlIHR1cm5PZmYoKTogdm9pZCB7XG5cdFx0dGhpcy5lbmFibGVkID0gZmFsc2U7XG5cdH1cbn1cbiJdfQ==