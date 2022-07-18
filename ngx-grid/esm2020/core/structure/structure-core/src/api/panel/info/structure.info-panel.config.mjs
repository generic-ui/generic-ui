export class StructureInfoPanelConfig {
    constructor(enabled, infoDialog, columnsManager, schemaManager, sourceSize) {
        this.enabled = false;
        this.infoDialog = true;
        this.columnsManager = true;
        this.schemaManager = true;
        this.sourceSize = true;
        if (this.isNotUndefinedOrNull(enabled)) {
            this.enabled = enabled;
        }
        if (this.isNotUndefinedOrNull(infoDialog)) {
            this.infoDialog = infoDialog;
        }
        if (this.isNotUndefinedOrNull(columnsManager)) {
            this.columnsManager = columnsManager;
        }
        if (this.isNotUndefinedOrNull(sourceSize)) {
            this.sourceSize = sourceSize;
        }
        if (this.isNotUndefinedOrNull(schemaManager)) {
            this.schemaManager = schemaManager;
        }
    }
    isEnabled() {
        return this.enabled;
    }
    isInfoDialogEnabled() {
        return this.infoDialog;
    }
    isColumnsManagerEnabled() {
        return this.columnsManager;
    }
    isSourceSizeEnabled() {
        return this.sourceSize;
    }
    isSchemaManagerEnabled() {
        return this.schemaManager;
    }
    isNotUndefinedOrNull(config) {
        return config !== undefined && config !== null;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyx3QkFBd0I7SUFZcEMsWUFBWSxPQUFpQixFQUMxQixVQUFvQixFQUNwQixjQUF3QixFQUN4QixhQUF1QixFQUN2QixVQUFvQjtRQWROLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixtQkFBYyxHQUFZLElBQUksQ0FBQztRQUUvQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBUTNDLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztTQUNyQztRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDbkM7SUFFRixDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQXNCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBRU8sb0JBQW9CLENBQUMsTUFBZTtRQUMzQyxPQUFPLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQztJQUNoRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGluZm9EaWFsb2c6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uc01hbmFnZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hTWFuYWdlcjogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VTaXplOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3RvcihlbmFibGVkPzogYm9vbGVhbixcblx0XHRcdFx0aW5mb0RpYWxvZz86IGJvb2xlYW4sXG5cdFx0XHRcdGNvbHVtbnNNYW5hZ2VyPzogYm9vbGVhbixcblx0XHRcdFx0c2NoZW1hTWFuYWdlcj86IGJvb2xlYW4sXG5cdFx0XHRcdHNvdXJjZVNpemU/OiBib29sZWFuKSB7XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChlbmFibGVkKSkge1xuXHRcdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChpbmZvRGlhbG9nKSkge1xuXHRcdFx0dGhpcy5pbmZvRGlhbG9nID0gaW5mb0RpYWxvZztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChjb2x1bW5zTWFuYWdlcikpIHtcblx0XHRcdHRoaXMuY29sdW1uc01hbmFnZXIgPSBjb2x1bW5zTWFuYWdlcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChzb3VyY2VTaXplKSkge1xuXHRcdFx0dGhpcy5zb3VyY2VTaXplID0gc291cmNlU2l6ZTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc05vdFVuZGVmaW5lZE9yTnVsbChzY2hlbWFNYW5hZ2VyKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFNYW5hZ2VyID0gc2NoZW1hTWFuYWdlcjtcblx0XHR9XG5cblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0aXNJbmZvRGlhbG9nRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pbmZvRGlhbG9nO1xuXHR9XG5cblx0aXNDb2x1bW5zTWFuYWdlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uc01hbmFnZXI7XG5cdH1cblxuXHRpc1NvdXJjZVNpemVFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvdXJjZVNpemU7XG5cdH1cblxuXHRpc1NjaGVtYU1hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNjaGVtYU1hbmFnZXI7XG5cdH1cblxuXHRwcml2YXRlIGlzTm90VW5kZWZpbmVkT3JOdWxsKGNvbmZpZzogYm9vbGVhbik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb25maWcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcgIT09IG51bGw7XG5cdH1cblxufVxuIl19