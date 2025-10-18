import { DndContext } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core'
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useState } from 'react'

function SortableItem({ id, label }: { id: string, label: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })
  const style = { transform: CSS.Transform.toString(transform), transition }
  return (
    <li ref={setNodeRef} style={style} {...attributes} {...listeners} className="px-3 py-2 rounded-xl bg-sky-50 border border-sky-100 cursor-grab">
      {label}
    </li>
  )
}

export default function Schedule() {
  const [items, setItems] = useState([
    { id: '1', label: 'Algebra — 09:00' },
    { id: '2', label: 'Biology — 10:30' },
    { id: '3', label: 'History — 12:00' },
    { id: '4', label: 'Physics — 14:00' },
  ])

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (!over || active.id === over.id) return
    const oldIndex = items.findIndex(i => i.id === active.id)
    const newIndex = items.findIndex(i => i.id === over.id)
    setItems(arrayMove(items, oldIndex, newIndex))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-navy-800">Study Schedule</h1>
        <div className="flex gap-2">
          <button className="btn btn-secondary" onClick={() => alert('Connecting to Google Calendar... (placeholder)')}>Sync Calendar</button>
          <button className="btn btn-primary" onClick={() => alert('Auto-scheduling with constraints... (placeholder)')}>AI Auto-Schedule</button>
        </div>
      </div>

      <div className="card">
        <DndContext onDragEnd={onDragEnd}>
          <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
            <ul className="space-y-2">
              {items.map(item => (
                <SortableItem key={item.id} id={item.id} label={item.label} />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}
