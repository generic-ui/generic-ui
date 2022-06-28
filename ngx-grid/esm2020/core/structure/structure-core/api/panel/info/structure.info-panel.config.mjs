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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLHdCQUF3QjtJQVlwQyxZQUFZLE9BQWlCLEVBQzFCLFVBQW9CLEVBQ3BCLGNBQXdCLEVBQ3hCLGFBQXVCLEVBQ3ZCLFVBQW9CO1FBZE4sWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFjLEdBQVksSUFBSSxDQUFDO1FBRS9CLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFRM0MsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDdkI7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDN0I7UUFFRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNuQztJQUVGLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx1QkFBdUI7UUFDdEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxNQUFlO1FBQzNDLE9BQU8sTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDO0lBQ2hELENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaW5mb0RpYWxvZzogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zTWFuYWdlcjogYm9vbGVhbiA9IHRydWU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFNYW5hZ2VyOiBib29sZWFuID0gdHJ1ZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVNpemU6IGJvb2xlYW4gPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKGVuYWJsZWQ/OiBib29sZWFuLFxuXHRcdFx0XHRpbmZvRGlhbG9nPzogYm9vbGVhbixcblx0XHRcdFx0Y29sdW1uc01hbmFnZXI/OiBib29sZWFuLFxuXHRcdFx0XHRzY2hlbWFNYW5hZ2VyPzogYm9vbGVhbixcblx0XHRcdFx0c291cmNlU2l6ZT86IGJvb2xlYW4pIHtcblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKGVuYWJsZWQpKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKGluZm9EaWFsb2cpKSB7XG5cdFx0XHR0aGlzLmluZm9EaWFsb2cgPSBpbmZvRGlhbG9nO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKGNvbHVtbnNNYW5hZ2VyKSkge1xuXHRcdFx0dGhpcy5jb2x1bW5zTWFuYWdlciA9IGNvbHVtbnNNYW5hZ2VyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKHNvdXJjZVNpemUpKSB7XG5cdFx0XHR0aGlzLnNvdXJjZVNpemUgPSBzb3VyY2VTaXplO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzTm90VW5kZWZpbmVkT3JOdWxsKHNjaGVtYU1hbmFnZXIpKSB7XG5cdFx0XHR0aGlzLnNjaGVtYU1hbmFnZXIgPSBzY2hlbWFNYW5hZ2VyO1xuXHRcdH1cblxuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxuXHRpc0luZm9EaWFsb2dFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmluZm9EaWFsb2c7XG5cdH1cblxuXHRpc0NvbHVtbnNNYW5hZ2VyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5zTWFuYWdlcjtcblx0fVxuXG5cdGlzU291cmNlU2l6ZUVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlU2l6ZTtcblx0fVxuXG5cdGlzU2NoZW1hTWFuYWdlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hTWFuYWdlcjtcblx0fVxuXG5cdHByaXZhdGUgaXNOb3RVbmRlZmluZWRPck51bGwoY29uZmlnOiBib29sZWFuKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZyAhPT0gbnVsbDtcblx0fVxuXG59XG4iXX0=