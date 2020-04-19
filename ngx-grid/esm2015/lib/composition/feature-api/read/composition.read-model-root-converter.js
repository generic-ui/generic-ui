/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ColumnDefinitionFactory } from './definition/column-definition.factory';
import { CompositionReadModeRoot } from './composition.read-mode-root';
export class CompositionReadModelRootConverter {
    /**
     * @param {?} columnDefinitionFactory
     */
    constructor(columnDefinitionFactory) {
        this.columnDefinitionFactory = columnDefinitionFactory;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    convert(aggregate) {
        /** @type {?} */
        const ready = aggregate.isReady();
        /** @type {?} */
        const allColumns = aggregate.getColumns();
        /** @type {?} */
        const activeColumns = aggregate.getActiveColumns();
        /** @type {?} */
        const allColumnDefs = this.convertToColumnDef(allColumns);
        /** @type {?} */
        const activeColumnDefs = this.convertActiveColumnsToColumnDef(activeColumns);
        /** @type {?} */
        const width = aggregate.getWidth();
        /** @type {?} */
        const resizeWidth = aggregate.isResizeEnabled();
        /** @type {?} */
        const aggregateId = aggregate.getId();
        return new CompositionReadModeRoot(aggregateId.toReadModelRootId(), ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
    }
    /**
     * @private
     * @param {?} columns
     * @return {?}
     */
    convertToColumnDef(columns) {
        /** @type {?} */
        const columnDefs = [];
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    }
    /**
     * @private
     * @param {?} activeColumns
     * @return {?}
     */
    convertActiveColumnsToColumnDef(activeColumns) {
        /** @type {?} */
        const columnDefs = [];
        activeColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        }));
        return columnDefs;
    }
}
CompositionReadModelRootConverter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionReadModelRootConverter.ctorParameters = () => [
    { type: ColumnDefinitionFactory }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CompositionReadModelRootConverter.prototype.columnDefinitionFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUVqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU92RSxNQUFNLE9BQU8saUNBQWlDOzs7O0lBRTdDLFlBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3BFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFNBQStCOztjQUVoQyxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRTs7Y0FDaEMsVUFBVSxHQUF3QixTQUFTLENBQUMsVUFBVSxFQUFFOztjQUN4RCxhQUFhLEdBQThCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTs7Y0FDdkUsYUFBYSxHQUE0QixJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDOztjQUM1RSxnQkFBZ0IsR0FBNEIsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQzs7Y0FDL0YsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUU7O2NBQzVCLFdBQVcsR0FBRyxTQUFTLENBQUMsZUFBZSxFQUFFOztjQUN6QyxXQUFXLEdBQUcsU0FBUyxDQUFDLEtBQUssRUFBRTtRQUVoQyxPQUFPLElBQUksdUJBQXVCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakksQ0FBQzs7Ozs7O0lBRU8sa0JBQWtCLENBQUMsT0FBNEI7O2NBRWhELFVBQVUsR0FBNEIsRUFBRTtRQUU5QyxPQUFPLENBQUMsT0FBTzs7OztRQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFOztrQkFFbEMsU0FBUyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTdELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTywrQkFBK0IsQ0FBQyxhQUF3Qzs7Y0FFekUsVUFBVSxHQUE0QixFQUFFO1FBRTlDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUEwQixFQUFFLEVBQUU7O2tCQUU5QyxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFN0QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7OztZQTlDRCxVQUFVOzs7O1lBUkYsdUJBQXVCOzs7Ozs7O0lBV25CLG9FQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtbkRlZmluaXRpb25GYWN0b3J5OiBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSkge1xuXHR9XG5cblx0Y29udmVydChhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Qge1xuXG5cdFx0Y29uc3QgcmVhZHkgPSBhZ2dyZWdhdGUuaXNSZWFkeSgpLFxuXHRcdFx0YWxsQ29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5PiA9IGFnZ3JlZ2F0ZS5nZXRDb2x1bW5zKCksXG5cdFx0XHRhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+ID0gYWdncmVnYXRlLmdldEFjdGl2ZUNvbHVtbnMoKSxcblx0XHRcdGFsbENvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gdGhpcy5jb252ZXJ0VG9Db2x1bW5EZWYoYWxsQ29sdW1ucyksXG5cdFx0XHRhY3RpdmVDb2x1bW5EZWZzOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiA9IHRoaXMuY29udmVydEFjdGl2ZUNvbHVtbnNUb0NvbHVtbkRlZihhY3RpdmVDb2x1bW5zKSxcblx0XHRcdHdpZHRoID0gYWdncmVnYXRlLmdldFdpZHRoKCksXG5cdFx0XHRyZXNpemVXaWR0aCA9IGFnZ3JlZ2F0ZS5pc1Jlc2l6ZUVuYWJsZWQoKSxcblx0XHRcdGFnZ3JlZ2F0ZUlkID0gYWdncmVnYXRlLmdldElkKCk7XG5cblx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uUmVhZE1vZGVSb290KGFnZ3JlZ2F0ZUlkLnRvUmVhZE1vZGVsUm9vdElkKCksIHJlYWR5LCBhbGxDb2x1bW5EZWZzLCBhY3RpdmVDb2x1bW5EZWZzLCB3aWR0aCwgcmVzaXplV2lkdGgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VG9Db2x1bW5EZWYoY29sdW1uczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRBY3RpdmVDb2x1bW5zVG9Db2x1bW5EZWYoYWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5Pik6IEFycmF5PENvbHVtbkRlZmluaXRpb24+IHtcblxuXHRcdGNvbnN0IGNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gW107XG5cblx0XHRhY3RpdmVDb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkRlZiA9IHRoaXMuY29sdW1uRGVmaW5pdGlvbkZhY3RvcnkuY3JlYXRlKGNvbHVtbik7XG5cblx0XHRcdGNvbHVtbkRlZnMucHVzaChjb2x1bW5EZWYpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkRlZnM7XG5cdH1cblxufVxuIl19