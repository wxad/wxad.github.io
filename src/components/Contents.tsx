"use client"

import { useExampleStore } from "@/stores"

const Contents: React.FC = () => {
  const techs = useExampleStore((s) => s.techs)

  return (
    <div className="px-6 pb-8">
      {Object.entries(techs).map(([key, value]) => (
        <div key={key} className="mt-8">
          <div className="mb-3 text-base font-bold">{key}</div>
          <div className="p-5 bg-white rounded-lg">
            <div className="grid grid-cols-2 gap-y-3">
              {Object.entries(value).map(([k, val]) => (
                <div key={k}>
                  <div className="mb-1 text-sm font-medium">{k}</div>
                  <div className="flex flex-wrap gap-1 text-xs text-neutral-600">
                    {val.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center px-2 h-7 bg-neutral-100 rounded-md"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Contents
