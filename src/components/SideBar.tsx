interface SideBarProps {
  children: React.ReactNode;
}

export function SideBar({ children }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      {children}
    </nav>
  );
}
