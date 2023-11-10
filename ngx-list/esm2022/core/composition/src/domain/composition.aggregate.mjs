import { AggregateRoot, KeyMap } from '@generic-ui/hermes';
import { CompositionContainerWidthCalculator } from './width/composition-container-width.calculator';
import { CompositionWidthSetAggregateEvent } from '../core/width/set-width/composition-width-set.aggregate-event';
import { CompositionContainerWidthSetAggregateEvent } from '../core/width/set-container-width/composition-container-width-set.aggregate-event';
import { CompositionResizeWidthSetAggregateEvent } from '../core/width/resize-width/composition-resize-width-set.aggregate-event';
import { CompositionColumnSetEnabledAggregateEvent } from '../core/column/set-enabled/composition.column-set-enabled.aggregate-event';
import { ActiveColumnContainer } from './column/active/active-column.container';
import { ActiveColumnEntityConverter } from './column/active/active-column.entity-converter';
import { CompositionColumnMovedLeftAggregateEvent } from '../core/column/move/left/composition.column-moved-left.aggregate-event';
import { CompositionColumnMovedRightAggregateEvent } from '../core/column/move/right/composition.column-moved-right.aggregate-event';
import { ColumnsSetAggregateEvent } from '../core/column/set-columns/columns-set.aggregate-event';
import { CompositionCreatedAggregateEvent } from '../core/create/composition-created.aggregate-event';
import { emptyGroup } from '../core/group/empty-group';
export class CompositionAggregate extends AggregateRoot {
    allColumns = [];
    baseColumns;
    baseParams;
    /**
     * Value taken from user config [width]
     */
    width;
    containerInDOMWidth;
    resizeWidthEnabled = true;
    columnFactory;
    groupFactory;
    activeColumnContainer;
    activeColumnEntityConverter = new ActiveColumnEntityConverter();
    groups = new KeyMap();
    columnNameToGroupId = new Map();
    constructor(id, columnFactory, groupFactory, columnsParams = [], width, resizeWidth) {
        super(id, 'CompositionAggregate');
        const columnConfigs = columnsParams.map((param) => param.getColumn());
        this.baseParams = columnsParams;
        this.baseColumns = columnConfigs;
        this.columnFactory = columnFactory;
        this.groupFactory = groupFactory;
        this.width = width;
        this.allColumns = this.columnFactory.create(columnsParams);
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer = new ActiveColumnContainer(this.getId(), activeColumns, width, columnConfigs);
        if (resizeWidth !== undefined && resizeWidth !== null) {
            this.resizeWidthEnabled = resizeWidth;
        }
    }
    createEvent() {
        return CompositionCreatedAggregateEvent;
    }
    // REMOVE
    getColumns() {
        return this.allColumns;
    }
    // REMOVE
    getActiveColumns() {
        return this.activeColumnContainer.getColumns();
    }
    // make private
    getWidth() {
        if (this.resizeWidthEnabled) {
            return this.containerInDOMWidth;
        }
        else {
            return this.width;
        }
    }
    // REMOVE
    isResizeEnabled() {
        return this.resizeWidthEnabled;
    }
    // REMOVE
    isReady() {
        return !!this.getWidth() && this.getActiveColumns().length > 0;
    }
    setGroups(configs) {
        for (let i = 0; i < configs.length; i += 1) {
            const config = configs[i];
            if (config.columns !== undefined) {
                const group = this.groupFactory.create(config);
                this.groups.set(group.id, group);
                config.columns.forEach((c, index) => {
                    this.columnNameToGroupId.set(c.header, group.id);
                });
            }
            else {
                this.columnNameToGroupId.set(config.header, emptyGroup.id);
            }
        }
    }
    setColumns(params) {
        this.allColumns = this.columnFactory.create(params);
        const columnConfigs = params.map((param) => param.getColumn());
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, columnConfigs);
        this.addEvent(new ColumnsSetAggregateEvent(this.getId()));
    }
    setContainerWidth(containerWidth) {
        this.setContainerWidthWithEvent(containerWidth);
        this.recalculateColumns();
    }
    setWidth(width) {
        this.setWidthWithEvent(width);
        this.setResizeWidthWithEvent(false);
        this.recalculateColumns();
    }
    setResizeWidth(enabled) {
        this.setResizeWidthWithEvent(enabled);
    }
    changeSort(sortParams) {
        this.addEvent(this.activeColumnContainer.changeSort(sortParams));
    }
    // DELEGATE
    enableColumn(columnId, enabled) {
        let enabledIndex = -1;
        this.allColumns.forEach((column, index) => {
            if (column.getId().getId() === columnId.getId()) {
                const prevState = column.isEnabled();
                column.setEnabled(enabled);
                if (prevState !== enabled) {
                    enabledIndex = index;
                }
            }
        });
        if (enabledIndex > 0) {
            if (enabled) {
                // convert
                const columnToAdd = this.activeColumnEntityConverter.convert(this.allColumns[enabledIndex]);
                this.activeColumnContainer.addColumn(columnToAdd, enabledIndex);
            }
            else {
                this.activeColumnContainer.removeColumn(enabledIndex);
            }
        }
        this.recalculateColumns();
        this.addEvent(new CompositionColumnSetEnabledAggregateEvent(this.getId(), this.getActiveColumns()));
    }
    moveLeft(columnId) {
        const columnIndex = this.findColumnIndex(columnId);
        let nextLeft, nextLeftIndex = -1;
        for (let i = columnIndex - 1; i >= 0; i -= 1) {
            const leftColumn = this.allColumns[i];
            if (leftColumn.isEnabled()) {
                nextLeft = leftColumn;
                nextLeftIndex = i;
                break;
            }
        }
        if (nextLeft && nextLeftIndex >= 0 && columnIndex >= 0) {
            const column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextLeft;
            this.allColumns[nextLeftIndex] = column;
        }
        this.activeColumnContainer.moveLeft(columnId);
        this.addEvent(new CompositionColumnMovedLeftAggregateEvent(this.getId()));
    }
    moveRight(columnId) {
        const columnIndex = this.findColumnIndex(columnId);
        let nextRight, nextRightIndex = -1;
        for (let i = columnIndex + 1; i < this.allColumns.length; i += 1) {
            const rightColumn = this.allColumns[i];
            if (rightColumn.isEnabled()) {
                nextRight = rightColumn;
                nextRightIndex = i;
                break;
            }
        }
        if (nextRight && nextRightIndex >= 0 && columnIndex >= 0) {
            const column = this.allColumns[columnIndex];
            this.allColumns[columnIndex] = nextRight;
            this.allColumns[nextRightIndex] = column;
        }
        this.activeColumnContainer.moveRight(columnId);
        this.addEvent(new CompositionColumnMovedRightAggregateEvent(this.getId()));
    }
    recalculateColumns() {
        const activeColumns = this.activeColumnEntityConverter.convertMany(this.getEnabledColumns());
        this.activeColumnContainer.setColumns(activeColumns, activeColumns.map(c => c.getColumnConfig()));
    }
    // TODO Refactor
    setWidthWithEvent(width) {
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        const minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > width) {
            this.width = minWidth;
        }
        else {
            this.width = width;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionWidthSetAggregateEvent(this.getId()));
    }
    // TODO Refactor
    setContainerWidthWithEvent(containerWidth) {
        const calculator = new CompositionContainerWidthCalculator(this.getMinColumnWidth());
        const minWidth = calculator.calculateMinWidth(this.activeColumnContainer.getColumnWidths());
        if (minWidth > containerWidth) {
            this.containerInDOMWidth = minWidth;
        }
        else {
            this.containerInDOMWidth = containerWidth;
        }
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionContainerWidthSetAggregateEvent(this.getId(), containerWidth));
    }
    setResizeWidthWithEvent(enabled) {
        this.resizeWidthEnabled = enabled;
        this.activeColumnContainer.setWidth(this.getWidth());
        this.addEvent(new CompositionResizeWidthSetAggregateEvent(this.getId()));
    }
    // REMOVE -> move to allColumnsContainer
    getEnabledColumns() {
        return this.allColumns.filter(c => c.isEnabled());
    }
    findColumnIndex(columnId) {
        return this.allColumns.findIndex((column) => column.getId().equals(columnId));
    }
    getMinColumnWidth() {
        return this.activeColumnContainer.getMinColumnWidth();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYWdncmVnYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBc0MsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTy9GLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2xILE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLG1GQUFtRixDQUFDO0FBQy9JLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBRWxJLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ3RJLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRWhGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLHdFQUF3RSxDQUFDO0FBQ2xJLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRWxHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBSXRHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd2RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFBNEI7SUFFN0QsVUFBVSxHQUF3QixFQUFFLENBQUM7SUFFNUIsV0FBVyxDQUFzQjtJQUVqQyxVQUFVLENBQXNCO0lBRWpEOztPQUVH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QUFRLENBQUM7U0FDcEM7YUFBTTtZQUNOLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFjLENBQUM7U0FDMUM7UUFFRCxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSwwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0lBRU8sdUJBQXVCLENBQUMsT0FBZ0I7UUFDL0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSx1Q0FBdUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCx3Q0FBd0M7SUFDaEMsaUJBQWlCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU8sZUFBZSxDQUFDLFFBQWtCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztJQUVPLGlCQUFpQjtRQUN4QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBBZ2dyZWdhdGVFdmVudFR5cGUsIEFnZ3JlZ2F0ZVJvb3QsIEtleU1hcCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBNdWx0aUNvbHVtbkNvbmZpZyB9IGZyb20gJy4uL2FwaS9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi9jb3JlL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbHVtbkVudGl0eUZhY3RvcnkgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4tZW50aXR5LmZhY3RvcnknO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4vY29sdW1uL3NvcnQvY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yIH0gZnJvbSAnLi93aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2NvcmUvd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL3dpZHRoL3Jlc2l6ZS13aWR0aC9jb21wb3NpdGlvbi1yZXNpemUtd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5Db250YWluZXIgfSBmcm9tICcuL2NvbHVtbi9hY3RpdmUvYWN0aXZlLWNvbHVtbi5jb250YWluZXInO1xuaW1wb3J0IHsgQWN0aXZlQ29sdW1uRW50aXR5IH0gZnJvbSAnLi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlciB9IGZyb20gJy4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eS1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uL2NvcmUvY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLmNvbHVtbi1tb3ZlZC1yaWdodC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgQ29sdW1uc1NldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9jb2x1bW4vc2V0LWNvbHVtbnMvY29sdW1ucy1zZXQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9jcmVhdGUvY29tcG9zaXRpb24tY3JlYXRlZC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgR3JvdXBJZCB9IGZyb20gJy4uL2FwaS9ncm91cC9ncm91cC5pZCc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uL2FwaS9ncm91cC9ncm91cCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkdyb3VwRmFjdG9yeSB9IGZyb20gJy4uL2NvcmUvZ3JvdXAvY29tcG9zaXRpb24uZ3JvdXAuZmFjdG9yeSc7XG5pbXBvcnQgeyBlbXB0eUdyb3VwIH0gZnJvbSAnLi4vY29yZS9ncm91cC9lbXB0eS1ncm91cCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uQWdncmVnYXRlIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxDb21wb3NpdGlvbklkPiB7XG5cblx0cHJpdmF0ZSBhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSByZWFkb25seSBiYXNlQ29sdW1uczogQXJyYXk8Q29sdW1uQ29uZmlnPjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGJhc2VQYXJhbXM6IEFycmF5PENvbHVtblBhcmFtcz47XG5cblx0LyoqXG5cdCAqIFZhbHVlIHRha2VuIGZyb20gdXNlciBjb25maWcgW3dpZHRoXVxuXHQgKi9cblx0cHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgY29udGFpbmVySW5ET01XaWR0aDogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmVzaXplV2lkdGhFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZhY3Rvcnk6IENvbHVtbkVudGl0eUZhY3Rvcnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncm91cEZhY3Rvcnk6IENvbXBvc2l0aW9uR3JvdXBGYWN0b3J5O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlQ29sdW1uQ29udGFpbmVyOiBBY3RpdmVDb2x1bW5Db250YWluZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXI6IEFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlciA9IG5ldyBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyb3VwczogS2V5TWFwPEdyb3VwSWQsIEdyb3VwPiA9IG5ldyBLZXlNYXAoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbk5hbWVUb0dyb3VwSWQ6IE1hcDxzdHJpbmcsIEdyb3VwSWQ+ID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb2x1bW5GYWN0b3J5OiBDb2x1bW5FbnRpdHlGYWN0b3J5LFxuXHRcdFx0XHRncm91cEZhY3Rvcnk6IENvbXBvc2l0aW9uR3JvdXBGYWN0b3J5LFxuXHRcdFx0XHRjb2x1bW5zUGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+ID0gW10sXG5cdFx0XHRcdHdpZHRoPzogbnVtYmVyLFxuXHRcdFx0XHRyZXNpemVXaWR0aD86IGJvb2xlYW4pIHtcblx0XHRzdXBlcihpZCwgJ0NvbXBvc2l0aW9uQWdncmVnYXRlJyk7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gY29sdW1uc1BhcmFtcy5tYXAoKHBhcmFtKSA9PiBwYXJhbS5nZXRDb2x1bW4oKSk7XG5cblx0XHR0aGlzLmJhc2VQYXJhbXMgPSBjb2x1bW5zUGFyYW1zO1xuXHRcdHRoaXMuYmFzZUNvbHVtbnMgPSBjb2x1bW5Db25maWdzO1xuXG5cdFx0dGhpcy5jb2x1bW5GYWN0b3J5ID0gY29sdW1uRmFjdG9yeTtcblx0XHR0aGlzLmdyb3VwRmFjdG9yeSA9IGdyb3VwRmFjdG9yeTtcblxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucyA9IHRoaXMuY29sdW1uRmFjdG9yeS5jcmVhdGUoY29sdW1uc1BhcmFtcyk7XG5cblx0XHRjb25zdCBhY3RpdmVDb2x1bW5zID0gdGhpcy5hY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIuY29udmVydE1hbnkodGhpcy5nZXRFbmFibGVkQ29sdW1ucygpKTtcblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyID0gbmV3IEFjdGl2ZUNvbHVtbkNvbnRhaW5lcih0aGlzLmdldElkKCksIGFjdGl2ZUNvbHVtbnMsIHdpZHRoLCBjb2x1bW5Db25maWdzKTtcblxuXHRcdGlmIChyZXNpemVXaWR0aCAhPT0gdW5kZWZpbmVkICYmIHJlc2l6ZVdpZHRoICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCA9IHJlc2l6ZVdpZHRoO1xuXHRcdH1cblxuXHR9XG5cblx0Y3JlYXRlRXZlbnQoKTogQWdncmVnYXRlRXZlbnRUeXBlPEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+PiB7XG5cdFx0cmV0dXJuIENvbXBvc2l0aW9uQ3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50O1xuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGdldENvbHVtbnMoKTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWxsQ29sdW1ucztcblx0fVxuXG5cdC8vIFJFTU9WRVxuXHRnZXRBY3RpdmVDb2x1bW5zKCk6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5zKCk7XG5cdH1cblxuXHQvLyBtYWtlIHByaXZhdGVcblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblxuXHRcdGlmICh0aGlzLnJlc2l6ZVdpZHRoRW5hYmxlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udGFpbmVySW5ET01XaWR0aDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMud2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUkVNT1ZFXG5cdGlzUmVzaXplRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5yZXNpemVXaWR0aEVuYWJsZWQ7XG5cdH1cblxuXHQvLyBSRU1PVkVcblx0aXNSZWFkeSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISF0aGlzLmdldFdpZHRoKCkgJiYgdGhpcy5nZXRBY3RpdmVDb2x1bW5zKCkubGVuZ3RoID4gMDtcblx0fVxuXG5cdHNldEdyb3Vwcyhjb25maWdzOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4pOiB2b2lkIHtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlncy5sZW5ndGg7IGkgKz0gMSkge1xuXG5cdFx0XHRjb25zdCBjb25maWcgPSBjb25maWdzW2ldO1xuXG5cdFx0XHRpZiAoKGNvbmZpZyBhcyBNdWx0aUNvbHVtbkNvbmZpZykuY29sdW1ucyAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdFx0Y29uc3QgZ3JvdXAgPSB0aGlzLmdyb3VwRmFjdG9yeS5jcmVhdGUoY29uZmlnKTtcblxuXHRcdFx0XHR0aGlzLmdyb3Vwcy5zZXQoZ3JvdXAuaWQsIGdyb3VwKTtcblxuXHRcdFx0XHQoY29uZmlnIGFzIE11bHRpQ29sdW1uQ29uZmlnKS5jb2x1bW5zLmZvckVhY2goKGM6IENvbHVtbkNvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRcdFx0dGhpcy5jb2x1bW5OYW1lVG9Hcm91cElkLnNldChjLmhlYWRlciBhcyBzdHJpbmcsIGdyb3VwLmlkKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmNvbHVtbk5hbWVUb0dyb3VwSWQuc2V0KGNvbmZpZy5oZWFkZXIgYXMgc3RyaW5nLCBlbXB0eUdyb3VwLmlkKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzZXRDb2x1bW5zKHBhcmFtczogQXJyYXk8Q29sdW1uUGFyYW1zPik6IHZvaWQge1xuXG5cdFx0dGhpcy5hbGxDb2x1bW5zID0gdGhpcy5jb2x1bW5GYWN0b3J5LmNyZWF0ZShwYXJhbXMpO1xuXG5cdFx0Y29uc3QgY29sdW1uQ29uZmlnczogQXJyYXk8Q29sdW1uQ29uZmlnPiA9IHBhcmFtcy5tYXAoKHBhcmFtOiBDb2x1bW5QYXJhbXMpID0+IHBhcmFtLmdldENvbHVtbigpKTtcblxuXHRcdGNvbnN0IGFjdGl2ZUNvbHVtbnMgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0TWFueSh0aGlzLmdldEVuYWJsZWRDb2x1bW5zKCkpO1xuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0Q29sdW1ucyhhY3RpdmVDb2x1bW5zLCBjb2x1bW5Db25maWdzKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdHNldENvbnRhaW5lcldpZHRoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdHRoaXMuc2V0Q29udGFpbmVyV2lkdGhXaXRoRXZlbnQoY29udGFpbmVyV2lkdGgpO1xuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblx0fVxuXG5cdHNldFdpZHRoKHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnNldFdpZHRoV2l0aEV2ZW50KHdpZHRoKTtcblxuXHRcdHRoaXMuc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZmFsc2UpO1xuXG5cdFx0dGhpcy5yZWNhbGN1bGF0ZUNvbHVtbnMoKTtcblx0fVxuXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLnNldFJlc2l6ZVdpZHRoV2l0aEV2ZW50KGVuYWJsZWQpO1xuXHR9XG5cblx0Y2hhbmdlU29ydChzb3J0UGFyYW1zOiBBcnJheTxDaGFuZ2VTb3J0UGFyYW1zPik6IHZvaWQge1xuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5jaGFuZ2VTb3J0KHNvcnRQYXJhbXMpXG5cdFx0KTtcblx0fVxuXG5cdC8vIERFTEVHQVRFXG5cdGVuYWJsZUNvbHVtbihjb2x1bW5JZDogQ29sdW1uSWQsIGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblxuXHRcdGxldCBlbmFibGVkSW5kZXggPSAtMTtcblxuXHRcdHRoaXMuYWxsQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbkVudGl0eSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0aWYgKGNvbHVtbi5nZXRJZCgpLmdldElkKCkgPT09IGNvbHVtbklkLmdldElkKCkpIHtcblxuXHRcdFx0XHRjb25zdCBwcmV2U3RhdGUgPSBjb2x1bW4uaXNFbmFibGVkKCk7XG5cblx0XHRcdFx0Y29sdW1uLnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cblx0XHRcdFx0aWYgKHByZXZTdGF0ZSAhPT0gZW5hYmxlZCkge1xuXHRcdFx0XHRcdGVuYWJsZWRJbmRleCA9IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRpZiAoZW5hYmxlZEluZGV4ID4gMCkge1xuXG5cdFx0XHRpZiAoZW5hYmxlZCkge1xuXG5cdFx0XHRcdC8vIGNvbnZlcnRcblx0XHRcdFx0Y29uc3QgY29sdW1uVG9BZGQgPSB0aGlzLmFjdGl2ZUNvbHVtbkVudGl0eUNvbnZlcnRlci5jb252ZXJ0KHRoaXMuYWxsQ29sdW1uc1tlbmFibGVkSW5kZXhdKTtcblxuXHRcdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5hZGRDb2x1bW4oY29sdW1uVG9BZGQsIGVuYWJsZWRJbmRleCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5yZW1vdmVDb2x1bW4oZW5hYmxlZEluZGV4KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnJlY2FsY3VsYXRlQ29sdW1ucygpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuZ2V0QWN0aXZlQ29sdW1ucygpKVxuXHRcdCk7XG5cdH1cblxuXHRtb3ZlTGVmdChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbkluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0bGV0IG5leHRMZWZ0LFxuXHRcdFx0bmV4dExlZnRJbmRleCA9IC0xO1xuXG5cdFx0Zm9yIChsZXQgaSA9IGNvbHVtbkluZGV4IC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcblxuXHRcdFx0Y29uc3QgbGVmdENvbHVtbiA9IHRoaXMuYWxsQ29sdW1uc1tpXTtcblxuXHRcdFx0aWYgKGxlZnRDb2x1bW4uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0XHRuZXh0TGVmdCA9IGxlZnRDb2x1bW47XG5cdFx0XHRcdG5leHRMZWZ0SW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmV4dExlZnQgJiYgbmV4dExlZnRJbmRleCA+PSAwICYmIGNvbHVtbkluZGV4ID49IDApIHtcblxuXHRcdFx0Y29uc3QgY29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XTtcblxuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW2NvbHVtbkluZGV4XSA9IG5leHRMZWZ0O1xuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW25leHRMZWZ0SW5kZXhdID0gY29sdW1uO1xuXHRcdH1cblxuXHRcdHRoaXMuYWN0aXZlQ29sdW1uQ29udGFpbmVyLm1vdmVMZWZ0KGNvbHVtbklkKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQoXG5cdFx0XHRuZXcgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpXG5cdFx0KTtcblx0fVxuXG5cdG1vdmVSaWdodChjb2x1bW5JZDogQ29sdW1uSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNvbHVtbkluZGV4ID0gdGhpcy5maW5kQ29sdW1uSW5kZXgoY29sdW1uSWQpO1xuXG5cdFx0bGV0IG5leHRSaWdodCxcblx0XHRcdG5leHRSaWdodEluZGV4ID0gLTE7XG5cblx0XHRmb3IgKGxldCBpID0gY29sdW1uSW5kZXggKyAxOyBpIDwgdGhpcy5hbGxDb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IHJpZ2h0Q29sdW1uID0gdGhpcy5hbGxDb2x1bW5zW2ldO1xuXG5cdFx0XHRpZiAocmlnaHRDb2x1bW4uaXNFbmFibGVkKCkpIHtcblxuXHRcdFx0XHRuZXh0UmlnaHQgPSByaWdodENvbHVtbjtcblx0XHRcdFx0bmV4dFJpZ2h0SW5kZXggPSBpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAobmV4dFJpZ2h0ICYmIG5leHRSaWdodEluZGV4ID49IDAgJiYgY29sdW1uSW5kZXggPj0gMCkge1xuXG5cdFx0XHRjb25zdCBjb2x1bW4gPSB0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdO1xuXG5cdFx0XHR0aGlzLmFsbENvbHVtbnNbY29sdW1uSW5kZXhdID0gbmV4dFJpZ2h0O1xuXHRcdFx0dGhpcy5hbGxDb2x1bW5zW25leHRSaWdodEluZGV4XSA9IGNvbHVtbjtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5tb3ZlUmlnaHQoY29sdW1uSWQpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChcblx0XHRcdG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpXG5cdFx0KTtcblx0fVxuXG5cdHByaXZhdGUgcmVjYWxjdWxhdGVDb2x1bW5zKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWN0aXZlQ29sdW1ucyA9IHRoaXMuYWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyLmNvbnZlcnRNYW55KHRoaXMuZ2V0RW5hYmxlZENvbHVtbnMoKSk7XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRDb2x1bW5zKGFjdGl2ZUNvbHVtbnMsIGFjdGl2ZUNvbHVtbnMubWFwKGMgPT4gYy5nZXRDb2x1bW5Db25maWcoKSkpO1xuXHR9XG5cblx0Ly8gVE9ETyBSZWZhY3RvclxuXHRwcml2YXRlIHNldFdpZHRoV2l0aEV2ZW50KHdpZHRoOiBudW1iZXIpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGNhbGN1bGF0b3IgPSBuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aENhbGN1bGF0b3IodGhpcy5nZXRNaW5Db2x1bW5XaWR0aCgpKTtcblxuXHRcdGNvbnN0IG1pbldpZHRoID0gY2FsY3VsYXRvci5jYWxjdWxhdGVNaW5XaWR0aCh0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRDb2x1bW5XaWR0aHMoKSk7XG5cblx0XHRpZiAobWluV2lkdGggPiB3aWR0aCkge1xuXHRcdFx0dGhpcy53aWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuc2V0V2lkdGgodGhpcy5nZXRXaWR0aCgpKTtcblxuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFRPRE8gUmVmYWN0b3Jcblx0cHJpdmF0ZSBzZXRDb250YWluZXJXaWR0aFdpdGhFdmVudChjb250YWluZXJXaWR0aDogbnVtYmVyKTogdm9pZCB7XG5cblx0XHRjb25zdCBjYWxjdWxhdG9yID0gbmV3IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDYWxjdWxhdG9yKHRoaXMuZ2V0TWluQ29sdW1uV2lkdGgoKSk7XG5cblx0XHRjb25zdCBtaW5XaWR0aCA9IGNhbGN1bGF0b3IuY2FsY3VsYXRlTWluV2lkdGgodGhpcy5hY3RpdmVDb2x1bW5Db250YWluZXIuZ2V0Q29sdW1uV2lkdGhzKCkpO1xuXG5cdFx0aWYgKG1pbldpZHRoID4gY29udGFpbmVyV2lkdGgpIHtcblx0XHRcdHRoaXMuY29udGFpbmVySW5ET01XaWR0aCA9IG1pbldpZHRoO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckluRE9NV2lkdGggPSBjb250YWluZXJXaWR0aDtcblx0XHR9XG5cblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXG5cdFx0dGhpcy5hZGRFdmVudChuZXcgQ29tcG9zaXRpb25Db250YWluZXJXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgY29udGFpbmVyV2lkdGgpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UmVzaXplV2lkdGhXaXRoRXZlbnQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMucmVzaXplV2lkdGhFbmFibGVkID0gZW5hYmxlZDtcblx0XHR0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5zZXRXaWR0aCh0aGlzLmdldFdpZHRoKCkpO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IENvbXBvc2l0aW9uUmVzaXplV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCkpKTtcblx0fVxuXG5cdC8vIFJFTU9WRSAtPiBtb3ZlIHRvIGFsbENvbHVtbnNDb250YWluZXJcblx0cHJpdmF0ZSBnZXRFbmFibGVkQ29sdW1ucygpOiBBcnJheTxDb2x1bW5FbnRpdHk+IHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmZpbHRlcihjID0+IGMuaXNFbmFibGVkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBmaW5kQ29sdW1uSW5kZXgoY29sdW1uSWQ6IENvbHVtbklkKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5hbGxDb2x1bW5zLmZpbmRJbmRleCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IGNvbHVtbi5nZXRJZCgpLmVxdWFscyhjb2x1bW5JZCkpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRNaW5Db2x1bW5XaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLmFjdGl2ZUNvbHVtbkNvbnRhaW5lci5nZXRNaW5Db2x1bW5XaWR0aCgpO1xuXHR9XG59XG4iXX0=