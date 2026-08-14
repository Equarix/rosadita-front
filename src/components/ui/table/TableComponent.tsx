"use client";
import {
  TableComponent as ITableComponent,
  TableColumn,
} from "@/interface/component.interface";
import { LuExternalLink, LuCheck, LuX } from "react-icons/lu";

export default function TableComponent({
  name,
  description,
  columns = [],
  rows = [],
}: ITableComponent) {
  const renderCellValue = (column: TableColumn, value: unknown) => {
    if (value === null || value === undefined) {
      return <span className="text-gray-400 italic">-</span>;
    }

    switch (column.type) {
      case "currency": {
        const numVal = Number(value);
        const formatted = isNaN(numVal)
          ? String(value)
          : new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "USD",
            }).format(numVal);
        return (
          <span className="font-mono text-emerald-600 font-medium">
            {formatted}
          </span>
        );
      }
      case "number": {
        const numVal = Number(value);
        return (
          <span className="font-mono">
            {isNaN(numVal) ? String(value) : numVal.toLocaleString("es-ES")}
          </span>
        );
      }
      case "date": {
        try {
          const date = new Date(String(value));
          return (
            <span>
              {isNaN(date.getTime())
                ? String(value)
                : date.toLocaleDateString("es-ES")}
            </span>
          );
        } catch {
          return <span>{String(value)}</span>;
        }
      }
      case "boolean": {
        const isTrue = Boolean(value);
        return isTrue ? (
          <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full text-xs font-semibold">
            <LuCheck className="w-3.5 h-3.5" /> Sí
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full text-xs font-semibold">
            <LuX className="w-3.5 h-3.5" /> No
          </span>
        );
      }
      case "image": {
        const urlStr = String(value);
        return (
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
            <img
              src={urlStr}
              alt={column.label}
              className="w-full h-full object-cover"
            />
          </div>
        );
      }
      case "link": {
        const linkStr = String(value);
        return (
          <a
            href={linkStr}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 hover:underline font-medium"
          >
            <span>Ver enlace</span>
            <LuExternalLink className="w-3.5 h-3.5" />
          </a>
        );
      }
      case "text":
      default:
        return <span>{String(value)}</span>;
    }
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {name && (
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2 text-center">
            {name}
          </h2>
        )}
        {description && (
          <p className="text-gray-600 text-center text-base md:text-lg max-w-3xl mb-8">
            {description}
          </p>
        )}

        <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-sm text-gray-700 border-collapse">
              <thead className="bg-gray-100/80 border-b border-gray-200 text-gray-900 font-semibold uppercase text-xs tracking-wider">
                <tr>
                  {columns.map((col) => (
                    <th
                      key={col.id}
                      className={`px-6 py-4 ${col.autoWidth ? "w-auto" : ""}`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.length > 0 ? (
                  rows.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:bg-purple-50/30 transition-colors"
                    >
                      {columns.map((col) => (
                        <td
                          key={col.id}
                          className="px-6 py-4 whitespace-nowrap"
                        >
                          {renderCellValue(col, row.values[col.id])}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={columns.length || 1}
                      className="px-6 py-8 text-center text-gray-400 italic"
                    >
                      No hay datos disponibles en la tabla
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
