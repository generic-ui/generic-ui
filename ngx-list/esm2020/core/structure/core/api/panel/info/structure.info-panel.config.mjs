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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sd0JBQXdCO0lBWXBDLFlBQVksT0FBaUIsRUFDMUIsVUFBb0IsRUFDcEIsY0FBd0IsRUFDeEIsYUFBdUIsRUFDdkIsVUFBb0I7UUFkTixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsbUJBQWMsR0FBWSxJQUFJLENBQUM7UUFFL0Isa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQVEzQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FDckM7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBQ25DO0lBRUYsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELHVCQUF1QjtRQUN0QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVELG1CQUFtQjtRQUNsQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDeEIsQ0FBQztJQUVELHNCQUFzQjtRQUNyQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVPLG9CQUFvQixDQUFDLE1BQWU7UUFDM0MsT0FBTyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUM7SUFDaEQsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpbmZvRGlhbG9nOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbnNNYW5hZ2VyOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYU1hbmFnZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlU2l6ZTogYm9vbGVhbiA9IHRydWU7XG5cblx0Y29uc3RydWN0b3IoZW5hYmxlZD86IGJvb2xlYW4sXG5cdFx0XHRcdGluZm9EaWFsb2c/OiBib29sZWFuLFxuXHRcdFx0XHRjb2x1bW5zTWFuYWdlcj86IGJvb2xlYW4sXG5cdFx0XHRcdHNjaGVtYU1hbmFnZXI/OiBib29sZWFuLFxuXHRcdFx0XHRzb3VyY2VTaXplPzogYm9vbGVhbikge1xuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoZW5hYmxlZCkpIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoaW5mb0RpYWxvZykpIHtcblx0XHRcdHRoaXMuaW5mb0RpYWxvZyA9IGluZm9EaWFsb2c7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoY29sdW1uc01hbmFnZXIpKSB7XG5cdFx0XHR0aGlzLmNvbHVtbnNNYW5hZ2VyID0gY29sdW1uc01hbmFnZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoc291cmNlU2l6ZSkpIHtcblx0XHRcdHRoaXMuc291cmNlU2l6ZSA9IHNvdXJjZVNpemU7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNOb3RVbmRlZmluZWRPck51bGwoc2NoZW1hTWFuYWdlcikpIHtcblx0XHRcdHRoaXMuc2NoZW1hTWFuYWdlciA9IHNjaGVtYU1hbmFnZXI7XG5cdFx0fVxuXG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG5cdGlzSW5mb0RpYWxvZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5mb0RpYWxvZztcblx0fVxuXG5cdGlzQ29sdW1uc01hbmFnZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnNNYW5hZ2VyO1xuXHR9XG5cblx0aXNTb3VyY2VTaXplRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2VTaXplO1xuXHR9XG5cblx0aXNTY2hlbWFNYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFNYW5hZ2VyO1xuXHR9XG5cblx0cHJpdmF0ZSBpc05vdFVuZGVmaW5lZE9yTnVsbChjb25maWc6IGJvb2xlYW4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29uZmlnICE9PSB1bmRlZmluZWQgJiYgY29uZmlnICE9PSBudWxsO1xuXHR9XG5cbn1cbiJdfQ==