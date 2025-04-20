const StatCard = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-4 w-[200px]">
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center bg-[#f5f5f500] ">
        {icon}
      </div>

      {/* Info */}
      <div>
        <p className="text-[#acacac] text-[14px]">{label}</p>
        <p className="text-[#333333] text-[32px] font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
