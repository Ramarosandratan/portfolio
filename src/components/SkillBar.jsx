export const SkillBar = ({ name, percentage = 0 }) => {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span
          className="text-sm font-medium transition-colors duration-300"
          style={{ color: 'var(--text-primary)' }}
        >
          {name}
        </span>
        <span
          className="text-xs font-medium transition-colors duration-300"
          style={{ color: 'var(--accent)' }}
        >
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-neutral-100 dark:bg-neutral-700 rounded-full h-3 transition-colors duration-300 overflow-hidden">
        <div 
          className="bg-primary dark:bg-primary h-3 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_15px_rgba(25,120,229,0.4)] dark:group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          style={{ 
            width: `${percentage}%`,
            background: 'linear-gradient(90deg, var(--accent), rgb(from var(--accent) r g b / 0.7))'
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
