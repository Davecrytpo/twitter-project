interface SocialButtonProps {
  icon: React.ReactNode;
  label: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ icon, label }) => (
  <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-full py-3 px-4 hover:bg-gray-50 transition-colors">
    {icon}
    <span className="font-medium">{label}</span>
  </button>
); 