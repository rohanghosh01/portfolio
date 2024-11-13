interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div
      className={`
      group relative overflow-visible rounded-2xl
      bg-white/10 backdrop-blur-xl
      transition-all duration-300
      hover:shadow-xl hover:shadow-blue-500/20
      ${className}
    `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient">
        <div />
        <div className="h-full w-full rounded-2xl bg-gray-900 p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
