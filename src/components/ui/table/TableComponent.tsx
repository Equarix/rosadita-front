"use client";
import React from "react";
import {
  TableComponent as ITableComponent,
  TableColumn,
} from "@/interface/component.interface";
import {
  LuExternalLink,
  LuCheck,
  LuX,
} from "react-icons/lu";

export default function TableComponent({
  name,
  description,
  columns = [],
  rows = [],
}: ITableComponent) {
  // Renderizador de celdas según el tipo y contenido
  const renderCellValue = (column: TableColumn, value: unknown) => {
    if (value === null || value === undefined) {
      return <span className="text-gray-400 italic font-medium">-</span>;
    }

    const strVal = String(value);

    // Formateo específico de badge para campos tipo status o valores comunes
    if (
      column.id.toLowerCase().includes("status") ||
      column.id.toLowerCase().includes("estado") ||
      [
        "pending",
        "completed",
        "active",
        "inactive",
        "cancelado",
        "pendiente",
      ].includes(strVal.toLowerCase())
    ) {
      const lower = strVal.toLowerCase();
      let badgeStyle = "bg-gray-100 text-gray-700 border-gray-200";
      if (["completed", "active", "completado", "exitoso"].includes(lower)) {
        badgeStyle = "bg-emerald-50 text-emerald-700 border-emerald-200/60";
      } else if (["pending", "pendiente"].includes(lower)) {
        badgeStyle = "bg-amber-50 text-amber-700 border-amber-200/60";
      } else if (["inactive", "cancelado", "failed"].includes(lower)) {
        badgeStyle = "bg-rose-50 text-rose-700 border-rose-200/60";
      }

      return (
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${badgeStyle}`}
        >
          {strVal}
        </span>
      );
    }

    switch (column.type) {
      case "currency": {
        const numVal = Number(value);
        const formatted = isNaN(numVal)
          ? strVal
          : new Intl.NumberFormat("es-ES", {
              style: "currency",
              currency: "USD",
            }).format(numVal);
        return (
          <span className="font-mono text-emerald-600 font-semibold">
            {formatted}
          </span>
        );
      }
      case "number": {
        const numVal = Number(value);
        return (
          <span className="font-mono text-gray-700 font-medium">
            {isNaN(numVal) ? strVal : numVal.toLocaleString("es-ES")}
          </span>
        );
      }
      case "date": {
        try {
          const date = new Date(strVal);
          return (
            <span className="text-gray-600 font-medium">
              {isNaN(date.getTime())
                ? strVal
                : date.toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
            </span>
          );
        } catch {
          return <span className="text-gray-600">{strVal}</span>;
        }
      }
      case "boolean": {
        const isTrue = Boolean(value);
        return isTrue ? (
          <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-xs font-semibold border border-emerald-200/60">
            <LuCheck className="w-3.5 h-3.5" /> Sí
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full text-xs font-semibold border border-rose-200/60">
            <LuX className="w-3.5 h-3.5" /> No
          </span>
        );
      }
      case "image": {
        return (
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center">
            <img
              src={strVal}
              alt={column.label}
              className="w-full h-full object-cover"
            />
          </div>
        );
      }
      case "link": {
        return (
          <a
            href={strVal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 hover:underline font-semibold text-xs"
          >
            <span>Ver enlace</span>
            <LuExternalLink className="w-3.5 h-3.5" />
          </a>
        );
      }
      case "text":
      default:
        return <span className="text-gray-700 font-medium">{strVal}</span>;
    }
  };

  return (
    <section className="w-full my-6">
      <div className="w-full flex flex-col gap-4">
        {/* Título y Descripción Opcionales */}
        {(name || description) && (
          <div className="flex flex-col gap-1 mb-1">
            {name && (
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                {name}
              </h2>
            )}
            {description && (
              <p className="text-gray-500 text-sm">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Tarjeta Principal de la Tabla */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          {/* Tabla de Datos */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/50">
                  {columns.map((col) => (
                    <th
                      key={col.id}
                      className={`px-5 py-3.5 font-bold uppercase text-[11px] tracking-wider text-gray-500 whitespace-nowrap ${
                        col.autoWidth ? "w-auto" : ""
                      }`}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.length > 0 ? (
                  rows.map((row, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50/60 transition-colors duration-150"
                    >
                      {columns.map((col) => (
                        <td
                          key={col.id}
                          className="px-5 py-3.5 whitespace-nowrap text-gray-600"
                        >
                          {renderCellValue(col, row.values[col.id])}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={columns.length}
                      className="px-6 py-8 text-center text-gray-400 italic text-xs"
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
