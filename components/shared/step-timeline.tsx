interface Step {
  step: string;
  title: string;
  description: string;
}

interface StepTimelineProps {
  steps: Step[];
}

export function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="space-y-8">
      {steps.map((item, index) => (
        <div key={item.step} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
              {item.step}
            </div>
            {index < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
            )}
          </div>
          <div className="pb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-slate-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StepTimeline;
