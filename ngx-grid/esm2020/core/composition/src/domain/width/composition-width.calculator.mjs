import { ColumnWidthType } from '../column/column-width/column-width-type';
export class CompositionWidthCalculator {
    constructor(source, width, MIN_COLUMN_WIDTH) {
        this.source = source;
        this.width = width;
        this.MIN_COLUMN_WIDTH = MIN_COLUMN_WIDTH;
        this.columns = this.source.map((c) => c.clone());
    }
    calculate() {
        let width = this.width, columns = Array.from(this.columns);
        // adjust min value
        this.adjustMinimalWidth(columns);
        // remove number columns
        const newColumns = [];
        columns.forEach((column, index) => {
            if (column.isTypeNumber()) {
                width -= column.getWidth();
            }
            else {
                newColumns.push(column);
            }
        });
        columns = newColumns;
        // split even auto columns
        if (columns.length !== 0) {
            const evenWidth = width / columns.length;
            columns.forEach((column, index) => {
                column.setWidth(evenWidth);
            });
        }
        // adjust number columns
        // let numberColumns = this.columns.filter((columnWidth: ColumnWidth) => columnWidth.isTypeNumber());
        //
        // // sort by min values
        // numberColumns.sort((columnOne: ColumnWidth, columnTwo: ColumnWidth) => {
        // 	return columnOne.getWidth() - columnTwo.getWidth();
        // });
        //
        // numberColumns.forEach(() => {
        // });
        // this.adjustMinimalWidth(ColumnWidthType.NUMBER);
        //
        // this.adjustPercentageWidth();
        //
        // this.adjustAutoWidth();
        return this.columns;
    }
    adjustMinimalWidth(columns) {
        columns.forEach((column) => {
            if (column.isTypeNumber()) {
                if (column.getWidth() < this.MIN_COLUMN_WIDTH) {
                    column.setWidthAndType(this.MIN_COLUMN_WIDTH);
                }
            }
        });
    }
    adjustPercentageWidth() {
        const percentageColumns = this.columns.filter((columnWidth) => columnWidth.isTypePercentage());
        for (const column of this.columns) {
            if (column.getColumnType() === ColumnWidthType.PERCENTAGE) {
                column.setWidth(this.width * column.getWidth() * 0.01);
            }
        }
    }
    adjustAutoWidth() {
        let leftWidth = this.width;
        const autoColumns = [];
        for (let i = 0; i < this.columns.length; i += 1) {
            const column = this.columns[i];
            if (column.getColumnType() !== ColumnWidthType.AUTO) {
                leftWidth -= column.getWidth();
            }
            else {
                autoColumns.push(column);
            }
        }
        if (autoColumns.length > 0) {
            const splitWidth = leftWidth / autoColumns.length;
            for (const column of autoColumns) {
                column.setWidth(splitWidth);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24td2lkdGguY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9jb21wb3NpdGlvbi9zcmMvZG9tYWluL3dpZHRoL2NvbXBvc2l0aW9uLXdpZHRoLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTNFLE1BQU0sT0FBTywwQkFBMEI7SUFJdEMsWUFBb0IsTUFBMEIsRUFDbkMsS0FBYSxFQUNKLGdCQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFvQjtRQUNuQyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ0oscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFRO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxTQUFTO1FBRVIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFDckIsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBDLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakMsd0JBQXdCO1FBQ3hCLE1BQU0sVUFBVSxHQUF1QixFQUFFLENBQUM7UUFFMUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQW1CLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDdEQsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFLEVBQUU7Z0JBQzFCLEtBQUssSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDM0I7aUJBQU07Z0JBQ04sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QjtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxHQUFHLFVBQVUsQ0FBQztRQUVyQiwwQkFBMEI7UUFDMUIsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUV6QixNQUFNLFNBQVMsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUV6QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBbUIsRUFBRSxLQUFhLEVBQUUsRUFBRTtnQkFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztTQUNIO1FBRUQsd0JBQXdCO1FBQ3hCLHFHQUFxRztRQUNyRyxFQUFFO1FBQ0Ysd0JBQXdCO1FBQ3hCLDJFQUEyRTtRQUMzRSx1REFBdUQ7UUFDdkQsTUFBTTtRQUNOLEVBQUU7UUFDRixnQ0FBZ0M7UUFDaEMsTUFBTTtRQUVOLG1EQUFtRDtRQUNuRCxFQUFFO1FBQ0YsZ0NBQWdDO1FBQ2hDLEVBQUU7UUFDRiwwQkFBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxPQUEyQjtRQUNyRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBbUIsRUFBRSxFQUFFO1lBQ3ZDLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUMxQixJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzlDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzlDO2FBQ0Q7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTyxxQkFBcUI7UUFFNUIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFNUcsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xDLElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLGVBQWUsQ0FBQyxVQUFVLEVBQUU7Z0JBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDdkQ7U0FDRDtJQUNGLENBQUM7SUFFTyxlQUFlO1FBRXRCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBRXZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRWhELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxNQUFNLENBQUMsYUFBYSxFQUFFLEtBQUssZUFBZSxDQUFDLElBQUksRUFBRTtnQkFDcEQsU0FBUyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Q7UUFFRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE1BQU0sVUFBVSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBRWxELEtBQUssTUFBTSxNQUFNLElBQUksV0FBVyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVCO1NBQ0Q7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5XaWR0aCB9IGZyb20gJy4uL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoJztcbmltcG9ydCB7IENvbHVtbldpZHRoVHlwZSB9IGZyb20gJy4uL2NvbHVtbi9jb2x1bW4td2lkdGgvY29sdW1uLXdpZHRoLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25XaWR0aENhbGN1bGF0b3Ige1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc291cmNlOiBBcnJheTxDb2x1bW5XaWR0aD4sXG5cdFx0XHRcdHByaXZhdGUgd2lkdGg6IG51bWJlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBNSU5fQ09MVU1OX1dJRFRIOiBudW1iZXIpIHtcblx0XHR0aGlzLmNvbHVtbnMgPSB0aGlzLnNvdXJjZS5tYXAoKGMpID0+IGMuY2xvbmUoKSk7XG5cdH1cblxuXHRjYWxjdWxhdGUoKTogQXJyYXk8Q29sdW1uV2lkdGg+IHtcblxuXHRcdGxldCB3aWR0aCA9IHRoaXMud2lkdGgsXG5cdFx0XHRjb2x1bW5zID0gQXJyYXkuZnJvbSh0aGlzLmNvbHVtbnMpO1xuXG5cdFx0Ly8gYWRqdXN0IG1pbiB2YWx1ZVxuXHRcdHRoaXMuYWRqdXN0TWluaW1hbFdpZHRoKGNvbHVtbnMpO1xuXG5cdFx0Ly8gcmVtb3ZlIG51bWJlciBjb2x1bW5zXG5cdFx0Y29uc3QgbmV3Q29sdW1uczogQXJyYXk8Q29sdW1uV2lkdGg+ID0gW107XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgsIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uaXNUeXBlTnVtYmVyKCkpIHtcblx0XHRcdFx0d2lkdGggLT0gY29sdW1uLmdldFdpZHRoKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRuZXdDb2x1bW5zLnB1c2goY29sdW1uKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGNvbHVtbnMgPSBuZXdDb2x1bW5zO1xuXG5cdFx0Ly8gc3BsaXQgZXZlbiBhdXRvIGNvbHVtbnNcblx0XHRpZiAoY29sdW1ucy5sZW5ndGggIT09IDApIHtcblxuXHRcdFx0Y29uc3QgZXZlbldpZHRoID0gd2lkdGggLyBjb2x1bW5zLmxlbmd0aDtcblxuXHRcdFx0Y29sdW1ucy5mb3JFYWNoKChjb2x1bW46IENvbHVtbldpZHRoLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdGNvbHVtbi5zZXRXaWR0aChldmVuV2lkdGgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gYWRqdXN0IG51bWJlciBjb2x1bW5zXG5cdFx0Ly8gbGV0IG51bWJlckNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKChjb2x1bW5XaWR0aDogQ29sdW1uV2lkdGgpID0+IGNvbHVtbldpZHRoLmlzVHlwZU51bWJlcigpKTtcblx0XHQvL1xuXHRcdC8vIC8vIHNvcnQgYnkgbWluIHZhbHVlc1xuXHRcdC8vIG51bWJlckNvbHVtbnMuc29ydCgoY29sdW1uT25lOiBDb2x1bW5XaWR0aCwgY29sdW1uVHdvOiBDb2x1bW5XaWR0aCkgPT4ge1xuXHRcdC8vIFx0cmV0dXJuIGNvbHVtbk9uZS5nZXRXaWR0aCgpIC0gY29sdW1uVHdvLmdldFdpZHRoKCk7XG5cdFx0Ly8gfSk7XG5cdFx0Ly9cblx0XHQvLyBudW1iZXJDb2x1bW5zLmZvckVhY2goKCkgPT4ge1xuXHRcdC8vIH0pO1xuXG5cdFx0Ly8gdGhpcy5hZGp1c3RNaW5pbWFsV2lkdGgoQ29sdW1uV2lkdGhUeXBlLk5VTUJFUik7XG5cdFx0Ly9cblx0XHQvLyB0aGlzLmFkanVzdFBlcmNlbnRhZ2VXaWR0aCgpO1xuXHRcdC8vXG5cdFx0Ly8gdGhpcy5hZGp1c3RBdXRvV2lkdGgoKTtcblxuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdE1pbmltYWxXaWR0aChjb2x1bW5zOiBBcnJheTxDb2x1bW5XaWR0aD4pOiB2b2lkIHtcblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uV2lkdGgpID0+IHtcblx0XHRcdGlmIChjb2x1bW4uaXNUeXBlTnVtYmVyKCkpIHtcblx0XHRcdFx0aWYgKGNvbHVtbi5nZXRXaWR0aCgpIDwgdGhpcy5NSU5fQ09MVU1OX1dJRFRIKSB7XG5cdFx0XHRcdFx0Y29sdW1uLnNldFdpZHRoQW5kVHlwZSh0aGlzLk1JTl9DT0xVTU5fV0lEVEgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGFkanVzdFBlcmNlbnRhZ2VXaWR0aCgpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBlcmNlbnRhZ2VDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcigoY29sdW1uV2lkdGg6IENvbHVtbldpZHRoKSA9PiBjb2x1bW5XaWR0aC5pc1R5cGVQZXJjZW50YWdlKCkpO1xuXG5cdFx0Zm9yIChjb25zdCBjb2x1bW4gb2YgdGhpcy5jb2x1bW5zKSB7XG5cdFx0XHRpZiAoY29sdW1uLmdldENvbHVtblR5cGUoKSA9PT0gQ29sdW1uV2lkdGhUeXBlLlBFUkNFTlRBR0UpIHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKHRoaXMud2lkdGggKiBjb2x1bW4uZ2V0V2lkdGgoKSAqIDAuMDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYWRqdXN0QXV0b1dpZHRoKCk6IHZvaWQge1xuXG5cdFx0bGV0IGxlZnRXaWR0aCA9IHRoaXMud2lkdGg7XG5cdFx0Y29uc3QgYXV0b0NvbHVtbnMgPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpXTtcblxuXHRcdFx0aWYgKGNvbHVtbi5nZXRDb2x1bW5UeXBlKCkgIT09IENvbHVtbldpZHRoVHlwZS5BVVRPKSB7XG5cdFx0XHRcdGxlZnRXaWR0aCAtPSBjb2x1bW4uZ2V0V2lkdGgoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGF1dG9Db2x1bW5zLnB1c2goY29sdW1uKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoYXV0b0NvbHVtbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3Qgc3BsaXRXaWR0aCA9IGxlZnRXaWR0aCAvIGF1dG9Db2x1bW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yIChjb25zdCBjb2x1bW4gb2YgYXV0b0NvbHVtbnMpIHtcblx0XHRcdFx0Y29sdW1uLnNldFdpZHRoKHNwbGl0V2lkdGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=