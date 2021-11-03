import { hermesFilter, hermesTake } from '@generic-ui/hermes';
import { InitFieldsCommand } from '../../../../field/core/domain/init/init-fields.command';
import { FieldsInitedEvent } from '../../../../field/core/domain/init/fields-inited.event';
import { ColumnFieldId } from '../../../../../composition/core/domain/column/field/column-field.id';
import { ColumnParams } from '../../../../../composition/core/domain/column/set-columns/column.params';
export class StructureColumnInputHandler {
    constructor(structureId, compositionId, commandDispatcher, domainEventBus, columnFieldFactory, columnAutoConfigurator, compositionCommandInvoker) {
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.commandDispatcher = commandDispatcher;
        this.domainEventBus = domainEventBus;
        this.columnFieldFactory = columnFieldFactory;
        this.columnAutoConfigurator = columnAutoConfigurator;
        this.compositionCommandInvoker = compositionCommandInvoker;
    }
    handle(changes) {
        let config = [];
        if (changes.columns !== undefined && changes.columns.currentValue !== undefined) {
            config = changes.columns.currentValue;
            this.columns = config;
        }
        else {
            if (this.columns === undefined && changes.source !== undefined && changes.source !== null) {
                config = this.columnAutoConfigurator.configure(changes.source.currentValue);
                this.columns = config;
            }
            else {
                return;
            }
        }
        this.compositionCommandInvoker.setGroups(config, this.compositionId);
        // prepare model
        const { columns, groups } = this.getConfigs(config);
        const fieldConfigs = this.getFieldConfigs(columns);
        // const fieldConfigs = columns as Array<FieldConfig>;
        const initCommand = new InitFieldsCommand(this.structureId, fieldConfigs);
        this.domainEventBus
            .ofEvents([
            FieldsInitedEvent
        ])
            .pipe(hermesFilter((event) => event.getAggregateId().toString() === this.structureId.toString()), hermesTake(1))
            .subscribe((event) => {
            const fields = event.getFields(), columnFieldIds = this.convertColumnFieldIds(fields), params = this.convertColumns(columns, fields, columnFieldIds);
            this.compositionCommandInvoker.setColumns(params, this.compositionId);
            // this.compositionCommandInvoker.setGroups(this.compositionId);
        });
        this.commandDispatcher.dispatch(initCommand);
    }
    getConfigs(configs) {
        let columnConfigs = [];
        const groupConfigs = [];
        for (let i = 0; i < configs.length; i += 1) {
            const config = configs[i];
            if (config.columns !== undefined) {
                groupConfigs.push(config);
                columnConfigs = columnConfigs.concat(config.columns);
            }
            else {
                columnConfigs.push(config);
            }
        }
        return {
            columns: columnConfigs,
            groups: groupConfigs
        };
    }
    getFieldConfigs(columns) {
        return columns.map((c) => {
            return {
                field: c.field,
                type: c.type,
                matcher: c.matcher,
                summaries: c.summaries,
                sorting: c.sorting
            };
        });
    }
    convertColumnFieldIds(fields) {
        if (!fields) {
            return [];
        }
        return fields.map((field) => new ColumnFieldId(field.getId().getId()));
    }
    convertColumns(columns, fields, columnFieldIds) {
        if (!columns) {
            return [];
        }
        return columns.map((column, index) => {
            const columnFieldId = columnFieldIds[index], field = fields[index];
            const columnField = this.columnFieldFactory.create(columnFieldId, field.getAccessorMethod(), field.getDataType(), field.getSearchAccessorMethod());
            return new ColumnParams(column, columnField);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbHVtbi5pbnB1dC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvY29sdW1uL3N0cnVjdHVyZS1jb2x1bW4uaW5wdXQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWtELFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUczRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFFcEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBU3ZHLE1BQU0sT0FBTywyQkFBMkI7SUFJdkMsWUFBNkIsV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsaUJBQW9DLEVBQ3BDLGNBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxzQkFBOEMsRUFDOUMseUJBQW9EO1FBTjNDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBQ3hFLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBMEM7UUFFaEQsSUFBSSxNQUFNLEdBQW9ELEVBQUUsQ0FBQztRQUVqRSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FB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LENBQUMsQ0FBQztJQUVKLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBEb21haW5FdmVudCwgRG9tYWluRXZlbnRCdXMsIGhlcm1lc0ZpbHRlciwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vaW5pdC9pbml0LWZpZWxkcy5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bW4tZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnLCBNdWx0aUNvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9jb2x1bW4ucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvYXBpL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9maWVsZC9jb2x1bS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlR2F0ZXdheSB9IGZyb20gJy4uL3N0cnVjdHVyZS5nYXRld2F5JztcbmltcG9ydCB7IENvbHVtbkF1dG9Db25maWd1cmF0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb3JlL2FwaS9jb2x1bW4vYXV0by9jb2x1bW4tYXV0by5jb25maWd1cmF0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5JbnB1dEhhbmRsZXIge1xuXG5cdHByaXZhdGUgY29sdW1uczogUmVhZG9ubHlBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkZpZWxkRmFjdG9yeTogQ29sdW1uRmllbGRGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbHVtbkF1dG9Db25maWd1cmF0b3I6IENvbHVtbkF1dG9Db25maWd1cmF0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25Db21tYW5kSW52b2tlcjogQ29tcG9zaXRpb25Db21tYW5kSW52b2tlcikge1xuXHR9XG5cblx0aGFuZGxlKGNoYW5nZXM6IE5nQ2hhbmdlczxTdHJ1Y3R1cmVHYXRld2F5PiB8IGFueSk6IHZvaWQge1xuXG5cdFx0bGV0IGNvbmZpZzogUmVhZG9ubHlBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4gPSBbXTtcblxuXHRcdGlmIChjaGFuZ2VzLmNvbHVtbnMgIT09IHVuZGVmaW5lZCAmJiBjaGFuZ2VzLmNvbHVtbnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbmZpZyA9IGNoYW5nZXMuY29sdW1ucy5jdXJyZW50VmFsdWU7XG5cdFx0XHR0aGlzLmNvbHVtbnMgPSBjb25maWc7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0aWYgKHRoaXMuY29sdW1ucyA9PT0gdW5kZWZpbmVkICYmIGNoYW5nZXMuc291cmNlICE9PSB1bmRlZmluZWQgJiYgY2hhbmdlcy5zb3VyY2UgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uZmlnID0gdGhpcy5jb2x1bW5BdXRvQ29uZmlndXJhdG9yLmNvbmZpZ3VyZShjaGFuZ2VzLnNvdXJjZS5jdXJyZW50VmFsdWUpO1xuXHRcdFx0XHR0aGlzLmNvbHVtbnMgPSBjb25maWc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLnNldEdyb3Vwcyhjb25maWcsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cblx0XHQvLyBwcmVwYXJlIG1vZGVsXG5cdFx0Y29uc3QgeyBjb2x1bW5zLCBncm91cHMgfSA9IHRoaXMuZ2V0Q29uZmlncyhjb25maWcpO1xuXG5cdFx0Y29uc3QgZmllbGRDb25maWdzID0gdGhpcy5nZXRGaWVsZENvbmZpZ3MoY29sdW1ucyk7XG5cblx0XHQvLyBjb25zdCBmaWVsZENvbmZpZ3MgPSBjb2x1bW5zIGFzIEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRcdGNvbnN0IGluaXRDb21tYW5kID0gbmV3IEluaXRGaWVsZHNDb21tYW5kKHRoaXMuc3RydWN0dXJlSWQsIGZpZWxkQ29uZmlncyk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudHMoW1xuXHRcdFx0XHRcdEZpZWxkc0luaXRlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHRoaXMuc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdGhlcm1lc1Rha2UoMSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGV2ZW50OiBGaWVsZHNJbml0ZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZpZWxkcyA9IGV2ZW50LmdldEZpZWxkcygpLFxuXHRcdFx0XHRcdGNvbHVtbkZpZWxkSWRzID0gdGhpcy5jb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzKSxcblx0XHRcdFx0XHRwYXJhbXMgPSB0aGlzLmNvbnZlcnRDb2x1bW5zKGNvbHVtbnMsIGZpZWxkcywgY29sdW1uRmllbGRJZHMpO1xuXG5cdFx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5zZXRDb2x1bW5zKHBhcmFtcywgdGhpcy5jb21wb3NpdGlvbklkKTtcblxuXHRcdFx0XHQvLyB0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuc2V0R3JvdXBzKHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2goaW5pdENvbW1hbmQpO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRDb25maWdzKGNvbmZpZ3M6IFJlYWRvbmx5QXJyYXk8Q29sdW1uQ29uZmlnIHwgTXVsdGlDb2x1bW5Db25maWc+KTogeyBjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBncm91cHM6IEFycmF5PE11bHRpQ29sdW1uQ29uZmlnPiB9IHtcblxuXHRcdGxldCBjb2x1bW5Db25maWdzOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW107XG5cblx0XHRjb25zdCBncm91cENvbmZpZ3M6IEFycmF5PE11bHRpQ29sdW1uQ29uZmlnPiA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWdzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdGNvbnN0IGNvbmZpZyA9IGNvbmZpZ3NbaV07XG5cblx0XHRcdGlmICgoY29uZmlnIGFzIE11bHRpQ29sdW1uQ29uZmlnKS5jb2x1bW5zICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Z3JvdXBDb25maWdzLnB1c2goY29uZmlnKTtcblx0XHRcdFx0Y29sdW1uQ29uZmlncyA9IGNvbHVtbkNvbmZpZ3MuY29uY2F0KChjb25maWcgYXMgTXVsdGlDb2x1bW5Db25maWcpLmNvbHVtbnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29sdW1uQ29uZmlncy5wdXNoKGNvbmZpZyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbHVtbnM6IGNvbHVtbkNvbmZpZ3MsXG5cdFx0XHRncm91cHM6IGdyb3VwQ29uZmlnc1xuXHRcdH07XG5cdH1cblxuXHRwcml2YXRlIGdldEZpZWxkQ29uZmlncyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+KTogQXJyYXk8RmllbGRDb25maWc+IHtcblxuXHRcdHJldHVybiBjb2x1bW5zLm1hcCgoYykgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZmllbGQ6IGMuZmllbGQgYXMgc3RyaW5nLFxuXHRcdFx0XHR0eXBlOiBjLnR5cGUsXG5cdFx0XHRcdG1hdGNoZXI6IGMubWF0Y2hlcixcblx0XHRcdFx0c3VtbWFyaWVzOiBjLnN1bW1hcmllcyxcblx0XHRcdFx0c29ydGluZzogYy5zb3J0aW5nXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1uRmllbGRJZHMoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxDb2x1bW5GaWVsZElkPiB7XG5cblx0XHRpZiAoIWZpZWxkcykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IG5ldyBDb2x1bW5GaWVsZElkKGZpZWxkLmdldElkKCkuZ2V0SWQoKSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0Q29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+LCBmaWVsZHM6IEFycmF5PEZpZWxkPiwgY29sdW1uRmllbGRJZHM6IEFycmF5PENvbHVtbkZpZWxkSWQ+KTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cblx0XHRpZiAoIWNvbHVtbnMpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29sdW1ucy5tYXAoKGNvbHVtbjogQ29sdW1uQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGNvbHVtbkZpZWxkSWQgPSBjb2x1bW5GaWVsZElkc1tpbmRleF0sXG5cdFx0XHRcdGZpZWxkID0gZmllbGRzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgY29sdW1uRmllbGQgPSB0aGlzLmNvbHVtbkZpZWxkRmFjdG9yeS5jcmVhdGUoXG5cdFx0XHRcdGNvbHVtbkZpZWxkSWQsXG5cdFx0XHRcdGZpZWxkLmdldEFjY2Vzc29yTWV0aG9kKCksXG5cdFx0XHRcdGZpZWxkLmdldERhdGFUeXBlKCksXG5cdFx0XHRcdGZpZWxkLmdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKClcblx0XHRcdCk7XG5cblx0XHRcdHJldHVybiBuZXcgQ29sdW1uUGFyYW1zKGNvbHVtbiwgY29sdW1uRmllbGQpO1xuXHRcdH0pO1xuXG5cdH1cblxufVxuIl19