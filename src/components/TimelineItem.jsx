export const TimelineItem = ({ title, company, period, description, skills, isEducation = false }) => {
  return (
    <div className="relative group">
      {/* Timeline dot */}
      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 group-hover:shadow-lg transition-shadow duration-300" style={{borderColor: 'var(--background)', backgroundColor: 'var(--accent)', boxShadow: 'var(--shadow-glow)'}}></div>

      {/* Card content */}
      <div className="p-6 border rounded-xl hover-lift hover:border-[color:var(--accent)] transition-all duration-300" style={{backgroundColor: 'var(--surface)', borderColor: 'var(--border)', boxShadow: 'var(--shadow-soft)'}}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
          <div>
            <h3 className="text-lg font-bold transition-colors" style={{color: 'var(--text-primary)'}}>
              {title}
            </h3>
            <p className={`font-medium text-sm transition-colors duration-300`} style={{color: isEducation ? 'var(--text-secondary)' : 'var(--accent)'}}>
              {company}
            </p>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium whitespace-nowrap transition-colors duration-300" style={isEducation ? {backgroundColor: 'var(--surface-secondary)', color: 'var(--text-secondary)'} : {backgroundColor: 'rgb(from var(--accent) r g b / 0.15)', color: 'var(--accent)'}}>
            {period}
          </span>
        </div>

        {/* Description or bullet points */}
        {typeof description === 'string' ? (
          <p className="text-sm leading-relaxed mb-4 transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
            {description}
          </p>
        ) : (
          <ul className="list-disc list-outside ml-4 space-y-2 text-sm mb-4 transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
            {Array.isArray(description) && description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {/* Skills tags */}
        {skills && skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-2 py-1 text-xs rounded border transition-all duration-300 hover:scale-105 hover:opacity-90 hover:border-[color:var(--accent)]"
                style={{backgroundColor: 'var(--surface-secondary)', color: 'var(--text-secondary)', borderColor: 'var(--border)'}}
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
