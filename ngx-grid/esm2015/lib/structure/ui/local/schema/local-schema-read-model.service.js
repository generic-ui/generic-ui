/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaRepository } from '../../../domain/schema/read/schema-repository';
import { Override } from '../../../../../common/cdk/decorators';
import { globalStructureId } from '../../../domain/global-structure-id';
export class LocalSchemaReadModelService extends SchemaReadModelService {
    /**
     * @param {?} structureId
     * @param {?} schemaRepository
     */
    constructor(structureId, schemaRepository) {
        super(schemaRepository);
        this.structureId = structureId;
    }
    /**
     * @return {?}
     */
    onSchema() {
        return super.onSchema(this.structureId);
    }
    /**
     * @return {?}
     */
    onHeight() {
        return super.onHeight(this.structureId);
    }
    /**
     * @return {?}
     */
    onContainerHeight() {
        return super.onContainerHeight(this.structureId);
    }
    /**
     * @return {?}
     */
    onSingleSchema() {
        return super.onSingleSchema(this.structureId);
    }
    /**
     * @return {?}
     */
    onCssClasses() {
        return super.onCssClasses(this.structureId);
    }
    /**
     * @param {?=} structureId
     * @return {?}
     */
    onColumnHeader(structureId = globalStructureId) {
        return super.onColumnHeader(this.structureId);
    }
}
LocalSchemaReadModelService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalSchemaReadModelService.ctorParameters = () => [
    { type: StructureId },
    { type: SchemaRepository }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onSchema", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onHeight", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onContainerHeight", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onSingleSchema", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onCssClasses", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [StructureId]),
    tslib_1.__metadata("design:returntype", Observable)
], LocalSchemaReadModelService.prototype, "onColumnHeader", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalSchemaReadModelService.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9sb2NhbC9zY2hlbWEvbG9jYWwtc2NoZW1hLXJlYWQtbW9kZWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDakYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBTXhFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxzQkFBc0I7Ozs7O0lBRXRFLFlBQW9CLFdBQXdCLEVBQ3pDLGdCQUFrQztRQUNwQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUZMLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBRzVDLENBQUM7Ozs7SUFHRCxRQUFRO1FBQ1AsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBR0QsUUFBUTtRQUNQLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQzs7OztJQUdELGlCQUFpQjtRQUNoQixPQUFPLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUdELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFHRCxZQUFZO1FBQ1gsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUdELGNBQWMsQ0FBQyxjQUEyQixpQkFBaUI7UUFDMUQsT0FBTyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUFwQ0QsVUFBVTs7OztZQVZGLFdBQVc7WUFDWCxnQkFBZ0I7O0FBa0J4QjtJQURDLFFBQVE7Ozs0Q0FDRyxVQUFVOzJEQUVyQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNHLFVBQVU7MkRBRXJCO0FBR0Q7SUFEQyxRQUFROzs7NENBQ1ksVUFBVTtvRUFFOUI7QUFHRDtJQURDLFFBQVE7Ozs0Q0FDUyxVQUFVO2lFQUUzQjtBQUdEO0lBREMsUUFBUTs7OzRDQUNPLFVBQVU7K0RBRXpCO0FBR0Q7SUFEQyxRQUFROzs2Q0FDbUIsV0FBVzs0Q0FBdUIsVUFBVTtpRUFFdkU7Ozs7OztJQWpDVyxrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3NjaGVtYS9zY2hlbWEtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBTY2hlbWFSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS9yZWFkL3NjaGVtYS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEnO1xuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hL3JlYWQvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBnbG9iYWxTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9nbG9iYWwtc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNjaGVtYUNvbHVtbkhlYWRlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlIGV4dGVuZHMgU2NoZW1hUmVhZE1vZGVsU2VydmljZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNjaGVtYVJlcG9zaXRvcnk6IFNjaGVtYVJlcG9zaXRvcnkpIHtcblx0XHRzdXBlcihzY2hlbWFSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNjaGVtYSgpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiBzdXBlci5vblNjaGVtYSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNvbnRhaW5lckhlaWdodCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbnRhaW5lckhlaWdodCh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvblNpbmdsZVNjaGVtYSgpOiBPYnNlcnZhYmxlPFNjaGVtYT4ge1xuXHRcdHJldHVybiBzdXBlci5vblNpbmdsZVNjaGVtYSh0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRvbkNzc0NsYXNzZXMoKTogT2JzZXJ2YWJsZTxTY2hlbWFDc3NDbGFzcz4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNzc0NsYXNzZXModGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0b25Db2x1bW5IZWFkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gZ2xvYmFsU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNvbHVtbkhlYWRlcj4ge1xuXHRcdHJldHVybiBzdXBlci5vbkNvbHVtbkhlYWRlcih0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=