"use client";

import { useMemo, useState } from "react";
import { lessons } from "@/lib/mock";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00"]; 

type Cell = { day: string; time: string };

export default function SchedulesPage() {
  const [items, setItems] = useState(lessons);
  const grid = useMemo(() => {
    const map = new Map<string, string>();
    for (const l of items) map.set(`${l.day}-${l.time}`, l.title);
    return map;
  }, [items]);

  const moveTo = (title: string, cell: Cell) => {
    setItems((prev) => {
      const other = prev.filter((p) => p.title !== title);
      return [...other, { id: title, title, day: cell.day, time: cell.time }];
    });
  };

  return (
    <div className="grid gap-6">
      <div className="card p-4">
        <h2 className="text-lg font-semibold">Lesson Planner</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left p-2">Time</th>
                {days.map((d) => (
                  <th key={d} className="text-left p-2">{d}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {times.map((t) => (
                <tr key={t}>
                  <td className="p-2 text-[--color-muted]">{t}</td>
                  {days.map((d) => {
                    const key = `${d}-${t}`;
                    const title = grid.get(key);
                    return (
                      <td key={key} className="p-2 align-top">
                        <div className="min-h-16 card p-2">
                          {title ? (
                            <div className="chip">
                              {title}
                            </div>
                          ) : (
                            <button className="btn btn-ghost w-full justify-start" onClick={() => moveTo("New Lesson", { day: d, time: t })}>
                              + Add lesson
                            </button>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
