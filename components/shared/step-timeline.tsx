interface Step {
  number: string;
  title: string;
  text: string;
}

interface StepTimelineProps {
  steps: Step[];
}

export default function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <div className="flex flex-col gap-8">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-sm bg-accent text-accent-foreground flex items-center justify-center font-serif font-bold text-sm">
              {step.number}
            </div>
            {i < steps.length - 1 && <div className="w-px flex-1 bg-accent/20 mt-2" />}
          </div>
          <div className="pt-1 pb-8">
            <h3 className="font-serif text-lg text-primary mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
