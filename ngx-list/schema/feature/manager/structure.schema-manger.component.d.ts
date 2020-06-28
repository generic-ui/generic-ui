import { ChangeDetectorRef } from '@angular/core';
import { Reactive } from '../../../common/cdk/reactive';
import { SchemaWarehouse } from '../../domain-api/schema.warehouse';
import { SchemaCommandDispatcher } from '../../domain-api/schema.command-dispatcher';
import { SchemaReadModelRootId } from '../../domain-api/read/schema.read-model-root-id';
export declare class StructureSchemaMangerComponent extends Reactive {
    private changeDetectorRef;
    private schemaReadModelRootId;
    private schemaCommandService;
    private schemaReadModelService;
    coloring: any[];
    themes: any[];
    selectedRowColoring: string;
    selectedTheme: string;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, schemaReadModelRootId: SchemaReadModelRootId, schemaCommandService: SchemaCommandDispatcher, schemaReadModelService: SchemaWarehouse);
    ngOnInit(): void;
    toggleTheme(theme: string): void;
    toggleRowColoring(schemaRowColoring: string): void;
    toggleVerticalGrid(verticalGrid: boolean): void;
    toggleHorizontalGrid(horizontalGrid: boolean): void;
    private toTheme;
    private toRowColoring;
}
