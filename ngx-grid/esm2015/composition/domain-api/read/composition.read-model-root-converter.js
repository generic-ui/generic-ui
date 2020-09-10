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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluLWFwaS9yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFakYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPdkUsTUFBTSxPQUFPLGlDQUFpQzs7OztJQUU3QyxZQUFvQix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUNwRSxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxTQUErQjs7Y0FFaEMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O2NBQ2hDLFVBQVUsR0FBd0IsU0FBUyxDQUFDLFVBQVUsRUFBRTs7Y0FDeEQsYUFBYSxHQUE4QixTQUFTLENBQUMsZ0JBQWdCLEVBQUU7O2NBQ3ZFLGFBQWEsR0FBNEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQzs7Y0FDNUUsZ0JBQWdCLEdBQTRCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUM7O2NBQy9GLEtBQUssR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFOztjQUM1QixXQUFXLEdBQUcsU0FBUyxDQUFDLGVBQWUsRUFBRTs7Y0FDekMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUU7UUFFaEMsT0FBTyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7Ozs7OztJQUVPLGtCQUFrQixDQUFDLE9BQTRCOztjQUVoRCxVQUFVLEdBQTRCLEVBQUU7UUFFOUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTs7a0JBRWxDLFNBQVMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUU3RCxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU8sK0JBQStCLENBQUMsYUFBd0M7O2NBRXpFLFVBQVUsR0FBNEIsRUFBRTtRQUU5QyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLENBQUMsTUFBMEIsRUFBRSxFQUFFOztrQkFFOUMsU0FBUyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRTdELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDOzs7WUE5Q0QsVUFBVTs7OztZQVJGLHVCQUF1Qjs7Ozs7OztJQVduQixvRUFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbHVtbkRlZmluaXRpb25GYWN0b3J5IH0gZnJvbSAnLi9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdCc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb2x1bW5EZWZpbml0aW9uRmFjdG9yeTogQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkpIHtcblx0fVxuXG5cdGNvbnZlcnQoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSk6IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IHtcblxuXHRcdGNvbnN0IHJlYWR5ID0gYWdncmVnYXRlLmlzUmVhZHkoKSxcblx0XHRcdGFsbENvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0Q29sdW1ucygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uczogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiA9IGFnZ3JlZ2F0ZS5nZXRBY3RpdmVDb2x1bW5zKCksXG5cdFx0XHRhbGxDb2x1bW5EZWZzOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiA9IHRoaXMuY29udmVydFRvQ29sdW1uRGVmKGFsbENvbHVtbnMpLFxuXHRcdFx0YWN0aXZlQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRBY3RpdmVDb2x1bW5zVG9Db2x1bW5EZWYoYWN0aXZlQ29sdW1ucyksXG5cdFx0XHR3aWR0aCA9IGFnZ3JlZ2F0ZS5nZXRXaWR0aCgpLFxuXHRcdFx0cmVzaXplV2lkdGggPSBhZ2dyZWdhdGUuaXNSZXNpemVFbmFibGVkKCksXG5cdFx0XHRhZ2dyZWdhdGVJZCA9IGFnZ3JlZ2F0ZS5nZXRJZCgpO1xuXG5cdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdChhZ2dyZWdhdGVJZC50b1JlYWRNb2RlbFJvb3RJZCgpLCByZWFkeSwgYWxsQ29sdW1uRGVmcywgYWN0aXZlQ29sdW1uRGVmcywgd2lkdGgsIHJlc2l6ZVdpZHRoKTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydFRvQ29sdW1uRGVmKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cblx0XHRjb25zdCBjb2x1bW5EZWZzOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiA9IFtdO1xuXG5cdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4ge1xuXG5cdFx0XHRjb25zdCBjb2x1bW5EZWYgPSB0aGlzLmNvbHVtbkRlZmluaXRpb25GYWN0b3J5LmNyZWF0ZShjb2x1bW4pO1xuXG5cdFx0XHRjb2x1bW5EZWZzLnB1c2goY29sdW1uRGVmKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWZzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0QWN0aXZlQ29sdW1uc1RvQ29sdW1uRGVmKGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cblx0XHRjb25zdCBjb2x1bW5EZWZzOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiA9IFtdO1xuXG5cdFx0YWN0aXZlQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IEFjdGl2ZUNvbHVtbkVudGl0eSkgPT4ge1xuXG5cdFx0XHRjb25zdCBjb2x1bW5EZWYgPSB0aGlzLmNvbHVtbkRlZmluaXRpb25GYWN0b3J5LmNyZWF0ZShjb2x1bW4pO1xuXG5cdFx0XHRjb2x1bW5EZWZzLnB1c2goY29sdW1uRGVmKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWZzO1xuXHR9XG5cbn1cbiJdfQ==