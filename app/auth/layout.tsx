interface AuthLayout {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayout> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center p-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      {children}
    </div>
  );
};
export default AuthLayout;
