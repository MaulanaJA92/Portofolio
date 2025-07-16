import FloatingDot from './FloatingDot';

const SnowBackgroud = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {Array.from({ length: 150 }).map((_, i) => (
        <FloatingDot key={i} />
      ))}
      
    </div>
  );
};

export default SnowBackgroud;
