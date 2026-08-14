"use client";
import React, { useState, useMemo } from "react";
import {
  TableComponent as ITableComponent,
  TableColumn,
} from "@/interface/component.interface";
import {
  LuExternalLink,
  LuCheck,
  LuX,
  LuChevronDown,
  LuSquare,
  LuSquareCheck,
  LuSquarePen,
  LuSearch,
} from "react-icons/lu";

export default function TableComponent({
  name,
  description,
  columns = [],
  rows = [],
}: ITableComponent) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [selectedColumnFilter, setSelectedColumnFilter] =
    useState<string>("ALL");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Filtrado de filas
  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      if (!searchTerm) return true;
      return Object.values(row.values).some((val) =>
        String(val ?? "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
      );
    });
  }, [rows, searchTerm]);

  // Selección de filas
  const isAllSelected =
    filteredRows.length > 0 &&
    filteredRows.every((_, index) => selectedRows.has(index));

  const toggleSelectAll = () => {
    const newSelected = new Set(selectedRows);
    if (isAllSelected) {
      filteredRows.forEach((_, index) => {
        newSelected.delete(index);
      });
    } else {
      filteredRows.forEach((_, index) => {
        newSelected.add(index);
      });
    }
    setSelectedRows(newSelected);
  };

  const toggleSelectRow = (index: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
  };

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
    <section className="w-full py-8 px-4 md:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        {/* Título y Descripción Opcionales */}
        {(name || description) && (
          <div className="flex flex-col gap-1 mb-2">
            {name && (
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                {name}
              </h2>
            )}
            {description && (
              <p className="text-gray-500 text-sm md:text-base">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Tarjeta Principal de la Tabla */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-100/90 overflow-hidden flex flex-col">
          {/* Header Superior con Controles (Barra de Acciones y Filtros) */}
          <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Título de la tabla en el header */}
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                {name || "Resumen de Productos"}
              </h3>
              {selectedRows.size > 0 && (
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-200/60">
                  {selectedRows.size} seleccionados
                </span>
              )}
            </div>

            {/* Acciones de la Derecha: Buscador, Dropdown y Botón */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-between lg:justify-end">
              {/* Buscador opcional */}
              <div className="relative flex-grow sm:flex-grow-0 min-w-[180px]">
                <LuSearch className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-gray-50/50 font-medium text-gray-700 placeholder-gray-400 transition-all"
                />
              </div>

              {/* Selector Filtro (Show Column) */}
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                <span>Show</span>
                <div className="relative">
                  <select
                    value={selectedColumnFilter}
                    onChange={(e) => setSelectedColumnFilter(e.target.value)}
                    className="appearance-none bg-gray-50/80 hover:bg-gray-100 border border-gray-200 text-gray-800 font-bold py-1.5 pl-3 pr-8 rounded-lg text-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all uppercase tracking-wider"
                  >
                    <option value="ALL">ALL COLUMN</option>
                    {columns.map((col) => (
                      <option key={col.id} value={col.id}>
                        {col.label}
                      </option>
                    ))}
                  </select>
                  <LuChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Botón de Acción Principal (DISPATCH SELECTED) */}
              <button
                disabled={selectedRows.size === 0}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all shadow-sm ${
                  selectedRows.size > 0
                    ? "bg-blue-600 hover:bg-blue-700 active:scale-95 cursor-pointer shadow-blue-500/20"
                    : "bg-blue-600/60 cursor-not-allowed"
                }`}
              >
                DISPATCH SELECTED
              </button>
            </div>
          </div>

          {/* Tabla de Datos */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  {/* Checkbox Header */}
                  <th className="py-3.5 pl-5 pr-3 w-10">
                    <button
                      onClick={toggleSelectAll}
                      className="text-blue-600 focus:outline-none flex items-center justify-center"
                    >
                      {isAllSelected ? (
                        <LuSquareCheck className="w-4 h-4 text-blue-600" />
                      ) : (
                        <LuSquare className="w-4 h-4 text-gray-300 hover:text-gray-400" />
                      )}
                    </button>
                  </th>

                  {/* Column Headers */}
                  {columns.map((col) => (
                    <th
                      key={col.id}
                      className={`px-4 py-3.5 font-bold uppercase text-[11px] tracking-wider text-gray-400 whitespace-nowrap ${
                        col.autoWidth ? "w-auto" : ""
                      }`}
                    >
                      {col.label}
                    </th>
                  ))}

                  {/* Columna final de Acciones */}
                  <th className="py-3.5 pr-5 pl-3 w-10 text-right"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredRows.length > 0 ? (
                  filteredRows.map((row, index) => {
                    const isSelected = selectedRows.has(index);

                    return (
                      <tr
                        key={index}
                        onClick={() => toggleSelectRow(index)}
                        className={`group cursor-pointer transition-colors duration-150 ${
                          isSelected
                            ? "bg-blue-50/40 hover:bg-blue-50/60"
                            : "hover:bg-gray-50/70"
                        }`}
                      >
                        {/* Checkbox de fila */}
                        <td className="py-3.5 pl-5 pr-3 whitespace-nowrap">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleSelectRow(index);
                            }}
                            className="text-blue-600 focus:outline-none flex items-center justify-center"
                          >
                            {isSelected ? (
                              <LuSquareCheck className="w-4 h-4 text-blue-600" />
                            ) : (
                              <LuSquare className="w-4 h-4 text-gray-300 group-hover:text-gray-400" />
                            )}
                          </button>
                        </td>

                        {/* Celdas de Datos */}
                        {columns.map((col) => (
                          <td
                            key={col.id}
                            className="px-4 py-3.5 whitespace-nowrap text-gray-600"
                          >
                            {renderCellValue(col, row.values[col.id])}
                          </td>
                        ))}

                        {/* Botón de Editar al final de la fila */}
                        <td className="py-3.5 pr-5 pl-3 whitespace-nowrap text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                            className="text-gray-300 hover:text-gray-600 transition-colors p-1 rounded-md hover:bg-gray-100"
                            title="Editar"
                          >
                            <LuSquarePen className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td
                      colSpan={columns.length + 2}
                      className="px-6 py-12 text-center text-gray-400 italic text-xs"
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
