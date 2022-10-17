import React from 'react';
import Table from './Wrappers/Table';
import TD from './Wrappers/TD';
import TH from './Wrappers/TH';
import TR from './Wrappers/TR';

function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

type PrimitiveType = string | number | boolean;

function isPrimitive(value: any): value is PrimitiveType {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  );
}

interface MinTableItem {
  id: PrimitiveType;
}

type TableHeaders<T extends MinTableItem> = Record<keyof T, string>;

type CustomRenderers<T extends MinTableItem> = Partial<
  Record<keyof T, (it: T) => React.ReactNode>
>;

interface TableProps<T extends MinTableItem> {
  items: T[];
  headers: TableHeaders<T>;
  customRenderers?: CustomRenderers<T>;
}

export default function GenericTable<T extends MinTableItem>(props: TableProps<T>) {
  function renderRow(item: T) {
    return (
      <TR>
        {objectKeys(item).map((itemProperty) => {
          const customRenderer = props.customRenderers?.[itemProperty];

          if (customRenderer) {
            return <TD>{customRenderer(item)}</TD>;
          }

          return (
            <TD>{isPrimitive(item[itemProperty]) ? item[itemProperty] as PrimitiveType: ''}</TD>
          );
        })}
      </TR>
    );
  }

  return (
    <Table>
      <thead>
        <tr>
          {objectValues(props.headers).map((headerValue) => (
            <TH>{headerValue}</TH>
          ))}
        </tr>
      </thead>
      <tbody>{props.items.map(renderRow)}</tbody>
    </Table>
  );
}
